Roulette-final
这是一个多人的hot-potato的游戏，需要1个赞助商和至少2个玩家，玩家们只要在deadline之前接受wager完成买票操作，
就可以得到一个独一无二的票号，最后智能合约将根据赞助商和玩家生成的随机数取余得到获得大奖的票号，
然后公布出来，进行转账。
团队名：NaN
团队成员：吴封涛，李金澎，李卓辰，董瑞超。
运行
REACH_CONNECTOR_MODE=CFX ./reach react
代码
rsh参考了workshop的raffle，其余全部原创。

BUG
On conflux testnet, our dapp is good. But when on Mainnet, there are a long time 
between "Sponsor saw the tickets has been sold!" and "Sponsor saw the x tickets has been revealed", 
so I think here is a problem on reach in conflux Mainnet.