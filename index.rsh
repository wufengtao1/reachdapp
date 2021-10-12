'reach 0.1';
'use strict';

const deadline =  200;//默认
const Common = {
  ...hasRandom,
  showWinner: Fun([UInt], Null),//ticket # won
  showOutcome: Fun([Address], Null),//address won
  informTimeout: Fun([], Null),
};

export const main =
  Reach.App(
    {},
    [Participant('Sponsor',
      { ...Common,
        wager: UInt ,
        showOpen: Fun([], Null),//sales open
        showReturning: Fun([UInt], Null),//tickets sold
        showReturned: Fun([UInt], Null),//tickets revealed
      }),
      ParticipantClass('Player',
      { ...Common,
        shouldBuy: Fun([UInt], Bool),//buy
        buyerWas: Fun([], Null),//bought
        returnerWas: Fun([UInt], Null),//revealed
      }),
    ],
    (Sponsor, Player) => {


      Sponsor.publish();
      commit();

      Sponsor.only(() => {
        const wager = declassify(interact.wager);
        const _sponsort = interact.random();
        //将random哈希化
        const sponsortc = declassify(digest(_sponsort));
      });
      Sponsor.publish(sponsortc,wager);


      //两段时间间隔
      const [ buyTimeout, keepBuying ] =
        makeDeadline(deadline);
      const [ returnTimeout, keepReturning ] =
        makeDeadline(2 * deadline );

      Sponsor.only(() => {
        interact.showOpen(); });
      Player.only(() => {
        const _ticket = interact.random(); });
      //随机数映射
      const randomsM = new Map(Digest);
      const [ howMany ] =
        parallelReduce([ 0 ])
        .invariant(balance() == wager * howMany)
        .while( keepBuying() )
        .case( Player, (() => {
            const when = declassify(interact.shouldBuy(wager));
            //保证一人只买一个票
            assume(implies(when, isNone(randomsM[this])));// x flase or y ture
            const msg = declassify(digest(_ticket));
            return { msg, when };
          }),
          ((_) => wager),
          ((ticketCommit) => {
            const player = this;
            require(isNone(randomsM[player]));
            Player.only(() => { if ( didPublish() ) { interact.buyerWas(); } });
            randomsM[player] = ticketCommit;
            return [ howMany + 1 ];
          })
        )
        .timeRemaining(buyTimeout());
      //把玩家和生成的随机数对应起来
      const randomMatches = (who, r) => {
        const rc = randomsM[who];
        switch ( rc ) {
          case None: return false;
          case Some: return rc == digest(r);
        }
      };

      Sponsor.only(() => { interact.showReturning(howMany); });
      //票号映射
      const ticketsM = new Map(UInt);
      const [ hwinner, howManyReturned ] =
        parallelReduce([ 0, 0 ])
        .invariant(balance() == howMany * wager)
        .while( keepReturning() && howManyReturned < howMany )
        .case( Player, (() => {
            const player = this;
            const ticket = declassify(_ticket);
            const when = isNone(ticketsM[player])
              && randomMatches(player, ticket);
            return { msg: ticket, when };
          }),
          ((ticket) => {
            const player = this;
            Player.only(() => { if ( didPublish() ) { interact.returnerWas(howManyReturned); } });
            require(isNone(ticketsM[player]));
            require(randomMatches(player, ticket));
            ticketsM[player] = howManyReturned;
            delete randomsM[player];
            return [ (hwinner + (ticket % howMany)) % howMany,
                     howManyReturned + 1 ];
          })
        )
        .timeRemaining(returnTimeout());
      commit();

      Sponsor.only(() => { interact.showReturned(howManyReturned); });

      Sponsor.only(() => {
        const sponsort = declassify(_sponsort); });
      Sponsor.publish(sponsort);
      require(sponsortc == digest(sponsort));

      const winningNo = (hwinner + (sponsort % howManyReturned)) % howManyReturned;
      commit();

      each([Sponsor, Player], () => {
        interact.showWinner(winningNo);
      });
      //通过票号返回赢家地址
      const isWinner = (who) => {
        const tn = ticketsM[who];
        switch ( tn ) {
          case None: return false;
          case Some: return tn == winningNo;
        }
      };

      fork()
      .case(Player, (() => ({
          when: isWinner(this),
        })),
        (() => {
          const winner = this;
          require(isWinner(winner));
          each([Sponsor, Player], () => {
            interact.showOutcome(winner);
          });
          transfer(howMany * wager).to(winner);
        }))
        .timeout(relativeTime(deadline), () => closeTo(Sponsor, () => {}));
      commit();
    });