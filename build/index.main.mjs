// Automatically generated with Reach 0.1.6
/* eslint-disable */
export const _version = '0.1.6';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      6: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Player(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Address;
  
  const map0 = {};
  const map0_ctc = ctc2;
  
  const map1 = {};
  const map1_ctc = ctc4;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v338, time: v337, didSend: v20, from: v336 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc3],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v345, v346], secs: v348, time: v347, didSend: v33, from: v344 } = txn2;
  ;
  const v350 = stdlib.addressEq(v336, v344);
  stdlib.assert(v350, {
    at: './index.rsh:41:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  const v352 = stdlib.add(v337, stdlib.checkedBigNumberify('./index.rsh:4:19:decimal', stdlib.UInt_max, 300));
  const v354 = stdlib.add(v337, stdlib.checkedBigNumberify('./index.rsh:48:24:application', stdlib.UInt_max, 600));
  const v359 = stdlib.protect(ctc3, await interact.random(), {
    at: './index.rsh:53:40:application',
    fs: ['at ./index.rsh:52:18:application call to [unknown function] (defined at: ./index.rsh:52:22:function exp)'],
    msg: 'random',
    who: 'Player'
    });
  
  let v360 = stdlib.checkedBigNumberify('./index.rsh:57:26:decimal', stdlib.UInt_max, 0);
  let v361 = v347;
  let v362 = v337;
  let v368 = stdlib.checkedBigNumberify('./index.rsh:29:23:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while ((() => {
    const v373 = stdlib.gt(v352, v362);
    
    return v373;})()) {
    const v376 = ctc.selfAddress('Player', true, stdlib.checkedBigNumberify('./index.rsh:57:23:application', stdlib.UInt_max, 75));
    const v378 = stdlib.protect(ctc5, await interact.shouldBuy(v346), {
      at: './index.rsh:61:55:application',
      fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:60:28:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: 'shouldBuy',
      who: 'Player'
      });
    const v379 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v376), null);
    let v380;
    switch (v379[0]) {
      case 'None': {
        const v381 = v379[1];
        v380 = true;
        
        break;
        }
      case 'Some': {
        const v382 = v379[1];
        v380 = false;
        
        break;
        }
      }
    const v384 = v378 ? v380 : true;
    stdlib.assert(v384, {
      at: './index.rsh:63:19:application',
      fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:60:28:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: null,
      who: 'Player'
      });
    const v385 = stdlib.digest(ctc6, [v359]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v336, v345, v346, v352, v354, v360, v361, v368, v385],
      evt_cnt: 1,
      funcNum: 11,
      lct: v361,
      onlyIf: v378,
      out_tys: [ctc1],
      pay: [v346, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [v388], secs: v390, time: v389, didSend: v101, from: v387 } = txn3;
        
        const v392 = stdlib.add(v368, v346);
        sim_r.txns.push({
          amt: v346,
          kind: 'to',
          tok: undefined
          });
        const v393 = stdlib.protect(map0_ctc, stdlib.simMapRef(sim_r, 0, v387), null);
        let v394;
        switch (v393[0]) {
          case 'None': {
            const v395 = v393[1];
            v394 = true;
            
            break;
            }
          case 'Some': {
            const v396 = v393[1];
            v394 = false;
            
            break;
            }
          }
        stdlib.assert(v394, {
          at: './index.rsh:70:20:application',
          fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:68:27:function exp)'],
          msg: null,
          who: 'Player'
          });
        
        stdlib.simMapSet(sim_r, 0, v387, v388);
        const v400 = stdlib.add(v360, stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 1));
        const cv360 = v400;
        const cv361 = v389;
        const cv362 = v361;
        const cv368 = v392;
        
        (() => {
          const v360 = cv360;
          const v361 = cv361;
          const v362 = cv362;
          const v368 = cv368;
          
          if ((() => {
            const v373 = stdlib.gt(v352, v362);
            
            return v373;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v410 = stdlib.checkedBigNumberify('./index.rsh:90:29:decimal', stdlib.UInt_max, 0);
            const v411 = stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, 0);
            const v412 = v361;
            const v413 = v362;
            const v419 = v368;
            
            if ((() => {
              const v424 = stdlib.gt(v354, v413);
              const v425 = stdlib.lt(v410, v360);
              const v426 = v424 ? v425 : false;
              
              return v426;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }}})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v352],
      tys: [ctc7, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v345, v346, v352, v354, v360, v361, v368],
        evt_cnt: 0,
        funcNum: 12,
        lct: v361,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v404, time: v403, didSend: v127, from: v402 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv360 = v360;
          const cv361 = v403;
          const cv362 = v361;
          const cv368 = v368;
          
          (() => {
            const v360 = cv360;
            const v361 = cv361;
            const v362 = cv362;
            const v368 = cv368;
            
            if ((() => {
              const v373 = stdlib.gt(v352, v362);
              
              return v373;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v410 = stdlib.checkedBigNumberify('./index.rsh:90:29:decimal', stdlib.UInt_max, 0);
              const v411 = stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, 0);
              const v412 = v361;
              const v413 = v362;
              const v419 = v368;
              
              if ((() => {
                const v424 = stdlib.gt(v354, v413);
                const v425 = stdlib.lt(v410, v360);
                const v426 = v424 ? v425 : false;
                
                return v426;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc7, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v404, time: v403, didSend: v127, from: v402 } = txn4;
      ;
      const cv360 = v360;
      const cv361 = v403;
      const cv362 = v361;
      const cv368 = v368;
      
      v360 = cv360;
      v361 = cv361;
      v362 = cv362;
      v368 = cv368;
      
      continue;
      }
    else {
      const {data: [v388], secs: v390, time: v389, didSend: v101, from: v387 } = txn3;
      const v392 = stdlib.add(v368, v346);
      ;
      const v393 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v387), null);
      let v394;
      switch (v393[0]) {
        case 'None': {
          const v395 = v393[1];
          v394 = true;
          
          break;
          }
        case 'Some': {
          const v396 = v393[1];
          v394 = false;
          
          break;
          }
        }
      stdlib.assert(v394, {
        at: './index.rsh:70:20:application',
        fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:68:27:function exp)'],
        msg: null,
        who: 'Player'
        });
      if (v101) {
        stdlib.protect(ctc0, await interact.buyerWas(), {
          at: './index.rsh:71:72:application',
          fs: ['at ./index.rsh:71:24:application call to [unknown function] (defined at: ./index.rsh:71:28:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:68:27:function exp)'],
          msg: 'buyerWas',
          who: 'Player'
          });
        }
      else {
        }
      
      map0[v387] = v388;
      const v400 = stdlib.add(v360, stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 1));
      const cv360 = v400;
      const cv361 = v389;
      const cv362 = v361;
      const cv368 = v392;
      
      v360 = cv360;
      v361 = cv361;
      v362 = cv362;
      v368 = cv368;
      
      continue;}
    
    }
  let v410 = stdlib.checkedBigNumberify('./index.rsh:90:29:decimal', stdlib.UInt_max, 0);
  let v411 = stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, 0);
  let v412 = v361;
  let v413 = v362;
  let v419 = v368;
  
  while ((() => {
    const v424 = stdlib.gt(v354, v413);
    const v425 = stdlib.lt(v410, v360);
    const v426 = v424 ? v425 : false;
    
    return v426;})()) {
    const v429 = ctc.selfAddress('Player', true, stdlib.checkedBigNumberify('./index.rsh:90:23:application', stdlib.UInt_max, 164));
    const v431 = stdlib.protect(map1_ctc, stdlib.mapRef(map1, v429), null);
    let v432;
    switch (v431[0]) {
      case 'None': {
        const v433 = v431[1];
        v432 = true;
        
        break;
        }
      case 'Some': {
        const v434 = v431[1];
        v432 = false;
        
        break;
        }
      }
    let v435;
    const v436 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v429), null);
    switch (v436[0]) {
      case 'None': {
        const v437 = v436[1];
        v435 = false;
        
        break;
        }
      case 'Some': {
        const v438 = v436[1];
        const v439 = stdlib.digest(ctc6, [v359]);
        const v440 = stdlib.digestEq(v438, v439);
        v435 = v440;
        
        break;
        }
      }
    const v441 = v432 ? v435 : false;
    
    const txn3 = await (ctc.sendrecv({
      args: [v336, v345, v346, v354, v360, v410, v411, v412, v419, v359],
      evt_cnt: 1,
      funcNum: 9,
      lct: v412,
      onlyIf: v441,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:93:14:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [v444], secs: v446, time: v445, didSend: v190, from: v443 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:93:14:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        
        const v451 = stdlib.protect(map1_ctc, stdlib.simMapRef(sim_r, 1, v443), null);
        let v452;
        switch (v451[0]) {
          case 'None': {
            const v453 = v451[1];
            v452 = true;
            
            break;
            }
          case 'Some': {
            const v454 = v451[1];
            v452 = false;
            
            break;
            }
          }
        stdlib.assert(v452, {
          at: './index.rsh:103:20:application',
          fs: ['at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
          msg: null,
          who: 'Player'
          });
        let v455;
        const v456 = stdlib.protect(map0_ctc, stdlib.simMapRef(sim_r, 0, v443), null);
        switch (v456[0]) {
          case 'None': {
            const v457 = v456[1];
            v455 = false;
            
            break;
            }
          case 'Some': {
            const v458 = v456[1];
            const v459 = stdlib.digest(ctc6, [v444]);
            const v460 = stdlib.digestEq(v458, v459);
            v455 = v460;
            
            break;
            }
          }
        stdlib.assert(v455, {
          at: './index.rsh:104:20:application',
          fs: ['at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
          msg: null,
          who: 'Player'
          });
        stdlib.simMapSet(sim_r, 1, v443, v410);
        stdlib.simMapSet(sim_r, 0, v443, undefined);
        const v461 = stdlib.mod(v444, v360);
        const v462 = stdlib.add(v411, v461);
        const v463 = stdlib.mod(v462, v360);
        const v464 = stdlib.add(v410, stdlib.checkedBigNumberify('./index.rsh:108:40:decimal', stdlib.UInt_max, 1));
        const cv410 = v464;
        const cv411 = v463;
        const cv412 = v445;
        const cv413 = v412;
        const cv419 = v419;
        
        (() => {
          const v410 = cv410;
          const v411 = cv411;
          const v412 = cv412;
          const v413 = cv413;
          const v419 = cv419;
          
          if ((() => {
            const v424 = stdlib.gt(v354, v413);
            const v425 = stdlib.lt(v410, v360);
            const v426 = v424 ? v425 : false;
            
            return v426;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v354],
      tys: [ctc7, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v345, v346, v354, v360, v410, v411, v412, v419],
        evt_cnt: 0,
        funcNum: 10,
        lct: v412,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v468, time: v467, didSend: v225, from: v466 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv410 = v410;
          const cv411 = v411;
          const cv412 = v467;
          const cv413 = v412;
          const cv419 = v419;
          
          (() => {
            const v410 = cv410;
            const v411 = cv411;
            const v412 = cv412;
            const v413 = cv413;
            const v419 = cv419;
            
            if ((() => {
              const v424 = stdlib.gt(v354, v413);
              const v425 = stdlib.lt(v410, v360);
              const v426 = v424 ? v425 : false;
              
              return v426;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc7, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v468, time: v467, didSend: v225, from: v466 } = txn4;
      ;
      const cv410 = v410;
      const cv411 = v411;
      const cv412 = v467;
      const cv413 = v412;
      const cv419 = v419;
      
      v410 = cv410;
      v411 = cv411;
      v412 = cv412;
      v413 = cv413;
      v419 = cv419;
      
      continue;
      }
    else {
      const {data: [v444], secs: v446, time: v445, didSend: v190, from: v443 } = txn3;
      ;
      if (v190) {
        stdlib.protect(ctc0, await interact.returnerWas(v410), {
          at: './index.rsh:102:75:application',
          fs: ['at ./index.rsh:102:24:application call to [unknown function] (defined at: ./index.rsh:102:28:function exp)', 'at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
          msg: 'returnerWas',
          who: 'Player'
          });
        }
      else {
        }
      
      const v451 = stdlib.protect(map1_ctc, stdlib.mapRef(map1, v443), null);
      let v452;
      switch (v451[0]) {
        case 'None': {
          const v453 = v451[1];
          v452 = true;
          
          break;
          }
        case 'Some': {
          const v454 = v451[1];
          v452 = false;
          
          break;
          }
        }
      stdlib.assert(v452, {
        at: './index.rsh:103:20:application',
        fs: ['at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
        msg: null,
        who: 'Player'
        });
      let v455;
      const v456 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v443), null);
      switch (v456[0]) {
        case 'None': {
          const v457 = v456[1];
          v455 = false;
          
          break;
          }
        case 'Some': {
          const v458 = v456[1];
          const v459 = stdlib.digest(ctc6, [v444]);
          const v460 = stdlib.digestEq(v458, v459);
          v455 = v460;
          
          break;
          }
        }
      stdlib.assert(v455, {
        at: './index.rsh:104:20:application',
        fs: ['at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
        msg: null,
        who: 'Player'
        });
      map1[v443] = v410;
      map0[v443] = undefined;
      const v461 = stdlib.mod(v444, v360);
      const v462 = stdlib.add(v411, v461);
      const v463 = stdlib.mod(v462, v360);
      const v464 = stdlib.add(v410, stdlib.checkedBigNumberify('./index.rsh:108:40:decimal', stdlib.UInt_max, 1));
      const cv410 = v464;
      const cv411 = v463;
      const cv412 = v445;
      const cv413 = v412;
      const cv419 = v419;
      
      v410 = cv410;
      v411 = cv411;
      v412 = cv412;
      v413 = cv413;
      v419 = cv419;
      
      continue;}
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 6,
    out_tys: [ctc3],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v477], secs: v479, time: v478, didSend: v239, from: v476 } = txn3;
  ;
  const v481 = stdlib.addressEq(v336, v476);
  stdlib.assert(v481, {
    at: './index.rsh:118:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  const v482 = stdlib.digest(ctc6, [v477]);
  const v483 = stdlib.digestEq(v345, v482);
  stdlib.assert(v483, {
    at: './index.rsh:119:14:application',
    fs: [],
    msg: null,
    who: 'Player'
    });
  const v484 = stdlib.mod(v477, v410);
  const v485 = stdlib.add(v411, v484);
  const v486 = stdlib.mod(v485, v410);
  const v488 = stdlib.add(v478, stdlib.checkedBigNumberify('./index.rsh:4:19:decimal', stdlib.UInt_max, 300));
  stdlib.protect(ctc0, await interact.showWinner(v486), {
    at: './index.rsh:125:28:application',
    fs: ['at ./index.rsh:124:11:application call to [unknown function] (defined at: ./index.rsh:124:34:function exp)'],
    msg: 'showWinner',
    who: 'Player'
    });
  
  const v494 = ctc.selfAddress('Player', true, stdlib.checkedBigNumberify('./index.rsh:136:11:application', stdlib.UInt_max, 261));
  let v496;
  const v497 = stdlib.protect(map1_ctc, stdlib.mapRef(map1, v494), null);
  switch (v497[0]) {
    case 'None': {
      const v498 = v497[1];
      v496 = false;
      
      break;
      }
    case 'Some': {
      const v499 = v497[1];
      const v500 = stdlib.eq(v499, v486);
      v496 = v500;
      
      break;
      }
    }
  
  const txn4 = await (ctc.sendrecv({
    args: [v336, v346, v360, v419, v486, v488, null],
    evt_cnt: 1,
    funcNum: 7,
    lct: v478,
    onlyIf: v496,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v503], secs: v505, time: v504, didSend: v278, from: v502 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:137:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      let v507;
      const v508 = stdlib.protect(map1_ctc, stdlib.simMapRef(sim_r, 1, v502), null);
      switch (v508[0]) {
        case 'None': {
          const v509 = v508[1];
          v507 = false;
          
          break;
          }
        case 'Some': {
          const v510 = v508[1];
          const v511 = stdlib.eq(v510, v486);
          v507 = v511;
          
          break;
          }
        }
      stdlib.assert(v507, {
        at: './index.rsh:142:18:application',
        fs: [],
        msg: null,
        who: 'Player'
        });
      
      const v516 = stdlib.mul(v360, v346);
      sim_r.txns.push({
        amt: v516,
        kind: 'from',
        to: v502,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: ['time', v488],
    tys: [ctc7, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v525, time: v524, didSend: v306, from: v523 } = txn5;
    ;
    const v527 = stdlib.addressEq(v336, v523);
    stdlib.assert(v527, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Player'
      });
    ;
    return;
    
    }
  else {
    const {data: [v503], secs: v505, time: v504, didSend: v278, from: v502 } = txn4;
    ;
    let v507;
    const v508 = stdlib.protect(map1_ctc, stdlib.mapRef(map1, v502), null);
    switch (v508[0]) {
      case 'None': {
        const v509 = v508[1];
        v507 = false;
        
        break;
        }
      case 'Some': {
        const v510 = v508[1];
        const v511 = stdlib.eq(v510, v486);
        v507 = v511;
        
        break;
        }
      }
    stdlib.assert(v507, {
      at: './index.rsh:142:18:application',
      fs: [],
      msg: null,
      who: 'Player'
      });
    stdlib.protect(ctc0, await interact.showOutcome(v502), {
      at: './index.rsh:144:33:application',
      fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:38:function exp)'],
      msg: 'showOutcome',
      who: 'Player'
      });
    
    const v516 = stdlib.mul(v360, v346);
    ;
    return;
    }
  
  
  
  
  
  
  
  };
export async function Sponsor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sponsor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sponsor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Address;
  
  const map0 = {};
  const map0_ctc = ctc2;
  
  const map1 = {};
  const map1_ctc = ctc4;
  
  
  const v335 = stdlib.protect(ctc3, interact.wager, 'for Sponsor\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v338, time: v337, didSend: v20, from: v336 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v338, time: v337, didSend: v20, from: v336 } = txn1;
  ;
  const v342 = stdlib.protect(ctc3, await interact.random(), {
    at: './index.rsh:37:42:application',
    fs: ['at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:23:function exp)'],
    msg: 'random',
    who: 'Sponsor'
    });
  const v343 = stdlib.digest(ctc5, [v342]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v336, v337, v343, v335],
    evt_cnt: 2,
    funcNum: 1,
    lct: v337,
    onlyIf: true,
    out_tys: [ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v345, v346], secs: v348, time: v347, didSend: v33, from: v344 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v350 = stdlib.addressEq(v336, v344);
      stdlib.assert(v350, {
        at: './index.rsh:41:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v352 = stdlib.add(v337, stdlib.checkedBigNumberify('./index.rsh:4:19:decimal', stdlib.UInt_max, 300));
      const v354 = stdlib.add(v337, stdlib.checkedBigNumberify('./index.rsh:48:24:application', stdlib.UInt_max, 600));
      
      const v360 = stdlib.checkedBigNumberify('./index.rsh:57:26:decimal', stdlib.UInt_max, 0);
      const v361 = v347;
      const v362 = v337;
      const v368 = stdlib.checkedBigNumberify('./index.rsh:29:23:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if ((() => {
        const v373 = stdlib.gt(v352, v362);
        
        return v373;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v410 = stdlib.checkedBigNumberify('./index.rsh:90:29:decimal', stdlib.UInt_max, 0);
        const v411 = stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, 0);
        const v412 = v361;
        const v413 = v362;
        const v419 = v368;
        
        if ((() => {
          const v424 = stdlib.gt(v354, v413);
          const v425 = stdlib.lt(v410, v360);
          const v426 = v424 ? v425 : false;
          
          return v426;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc6, ctc3, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v345, v346], secs: v348, time: v347, didSend: v33, from: v344 } = txn2;
  ;
  const v350 = stdlib.addressEq(v336, v344);
  stdlib.assert(v350, {
    at: './index.rsh:41:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Sponsor'
    });
  const v352 = stdlib.add(v337, stdlib.checkedBigNumberify('./index.rsh:4:19:decimal', stdlib.UInt_max, 300));
  const v354 = stdlib.add(v337, stdlib.checkedBigNumberify('./index.rsh:48:24:application', stdlib.UInt_max, 600));
  stdlib.protect(ctc0, await interact.showOpen(), {
    at: './index.rsh:51:26:application',
    fs: ['at ./index.rsh:50:19:application call to [unknown function] (defined at: ./index.rsh:50:23:function exp)'],
    msg: 'showOpen',
    who: 'Sponsor'
    });
  
  let v360 = stdlib.checkedBigNumberify('./index.rsh:57:26:decimal', stdlib.UInt_max, 0);
  let v361 = v347;
  let v362 = v337;
  let v368 = stdlib.checkedBigNumberify('./index.rsh:29:23:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while ((() => {
    const v373 = stdlib.gt(v352, v362);
    
    return v373;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc1],
      timeoutAt: ['time', v352],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v345, v346, v352, v354, v360, v361, v368],
        evt_cnt: 0,
        funcNum: 12,
        lct: v361,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v404, time: v403, didSend: v127, from: v402 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv360 = v360;
          const cv361 = v403;
          const cv362 = v361;
          const cv368 = v368;
          
          (() => {
            const v360 = cv360;
            const v361 = cv361;
            const v362 = cv362;
            const v368 = cv368;
            
            if ((() => {
              const v373 = stdlib.gt(v352, v362);
              
              return v373;})()) {
              sim_r.isHalt = false;
              }
            else {
              
              const v410 = stdlib.checkedBigNumberify('./index.rsh:90:29:decimal', stdlib.UInt_max, 0);
              const v411 = stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, 0);
              const v412 = v361;
              const v413 = v362;
              const v419 = v368;
              
              if ((() => {
                const v424 = stdlib.gt(v354, v413);
                const v425 = stdlib.lt(v410, v360);
                const v426 = v424 ? v425 : false;
                
                return v426;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc6, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v404, time: v403, didSend: v127, from: v402 } = txn4;
      ;
      const cv360 = v360;
      const cv361 = v403;
      const cv362 = v361;
      const cv368 = v368;
      
      v360 = cv360;
      v361 = cv361;
      v362 = cv362;
      v368 = cv368;
      
      continue;
      }
    else {
      const {data: [v388], secs: v390, time: v389, didSend: v101, from: v387 } = txn3;
      const v392 = stdlib.add(v368, v346);
      ;
      const v393 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v387), null);
      let v394;
      switch (v393[0]) {
        case 'None': {
          const v395 = v393[1];
          v394 = true;
          
          break;
          }
        case 'Some': {
          const v396 = v393[1];
          v394 = false;
          
          break;
          }
        }
      stdlib.assert(v394, {
        at: './index.rsh:70:20:application',
        fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:68:27:function exp)'],
        msg: null,
        who: 'Sponsor'
        });
      map0[v387] = v388;
      const v400 = stdlib.add(v360, stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 1));
      const cv360 = v400;
      const cv361 = v389;
      const cv362 = v361;
      const cv368 = v392;
      
      v360 = cv360;
      v361 = cv361;
      v362 = cv362;
      v368 = cv368;
      
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.showReturning(v360), {
    at: './index.rsh:86:50:application',
    fs: ['at ./index.rsh:86:19:application call to [unknown function] (defined at: ./index.rsh:86:23:function exp)'],
    msg: 'showReturning',
    who: 'Sponsor'
    });
  
  let v410 = stdlib.checkedBigNumberify('./index.rsh:90:29:decimal', stdlib.UInt_max, 0);
  let v411 = stdlib.checkedBigNumberify('./index.rsh:90:26:decimal', stdlib.UInt_max, 0);
  let v412 = v361;
  let v413 = v362;
  let v419 = v368;
  
  while ((() => {
    const v424 = stdlib.gt(v354, v413);
    const v425 = stdlib.lt(v410, v360);
    const v426 = v424 ? v425 : false;
    
    return v426;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 9,
      out_tys: [ctc3],
      timeoutAt: ['time', v354],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v345, v346, v354, v360, v410, v411, v412, v419],
        evt_cnt: 0,
        funcNum: 10,
        lct: v412,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v468, time: v467, didSend: v225, from: v466 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv410 = v410;
          const cv411 = v411;
          const cv412 = v467;
          const cv413 = v412;
          const cv419 = v419;
          
          (() => {
            const v410 = cv410;
            const v411 = cv411;
            const v412 = cv412;
            const v413 = cv413;
            const v419 = cv419;
            
            if ((() => {
              const v424 = stdlib.gt(v354, v413);
              const v425 = stdlib.lt(v410, v360);
              const v426 = v424 ? v425 : false;
              
              return v426;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc6, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v468, time: v467, didSend: v225, from: v466 } = txn4;
      ;
      const cv410 = v410;
      const cv411 = v411;
      const cv412 = v467;
      const cv413 = v412;
      const cv419 = v419;
      
      v410 = cv410;
      v411 = cv411;
      v412 = cv412;
      v413 = cv413;
      v419 = cv419;
      
      continue;
      }
    else {
      const {data: [v444], secs: v446, time: v445, didSend: v190, from: v443 } = txn3;
      ;
      const v451 = stdlib.protect(map1_ctc, stdlib.mapRef(map1, v443), null);
      let v452;
      switch (v451[0]) {
        case 'None': {
          const v453 = v451[1];
          v452 = true;
          
          break;
          }
        case 'Some': {
          const v454 = v451[1];
          v452 = false;
          
          break;
          }
        }
      stdlib.assert(v452, {
        at: './index.rsh:103:20:application',
        fs: ['at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
        msg: null,
        who: 'Sponsor'
        });
      let v455;
      const v456 = stdlib.protect(map0_ctc, stdlib.mapRef(map0, v443), null);
      switch (v456[0]) {
        case 'None': {
          const v457 = v456[1];
          v455 = false;
          
          break;
          }
        case 'Some': {
          const v458 = v456[1];
          const v459 = stdlib.digest(ctc5, [v444]);
          const v460 = stdlib.digestEq(v458, v459);
          v455 = v460;
          
          break;
          }
        }
      stdlib.assert(v455, {
        at: './index.rsh:104:20:application',
        fs: ['at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
        msg: null,
        who: 'Sponsor'
        });
      map1[v443] = v410;
      map0[v443] = undefined;
      const v461 = stdlib.mod(v444, v360);
      const v462 = stdlib.add(v411, v461);
      const v463 = stdlib.mod(v462, v360);
      const v464 = stdlib.add(v410, stdlib.checkedBigNumberify('./index.rsh:108:40:decimal', stdlib.UInt_max, 1));
      const cv410 = v464;
      const cv411 = v463;
      const cv412 = v445;
      const cv413 = v412;
      const cv419 = v419;
      
      v410 = cv410;
      v411 = cv411;
      v412 = cv412;
      v413 = cv413;
      v419 = cv419;
      
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.showReturned(v410), {
    at: './index.rsh:114:49:application',
    fs: ['at ./index.rsh:114:19:application call to [unknown function] (defined at: ./index.rsh:114:23:function exp)'],
    msg: 'showReturned',
    who: 'Sponsor'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v336, v345, v346, v360, v410, v411, v419, v342],
    evt_cnt: 1,
    funcNum: 6,
    lct: v412,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v477], secs: v479, time: v478, didSend: v239, from: v476 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v481 = stdlib.addressEq(v336, v476);
      stdlib.assert(v481, {
        at: './index.rsh:118:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sponsor'
        });
      const v482 = stdlib.digest(ctc5, [v477]);
      const v483 = stdlib.digestEq(v345, v482);
      stdlib.assert(v483, {
        at: './index.rsh:119:14:application',
        fs: [],
        msg: null,
        who: 'Sponsor'
        });
      const v484 = stdlib.mod(v477, v410);
      const v485 = stdlib.add(v411, v484);
      const v486 = stdlib.mod(v485, v410);
      const v488 = stdlib.add(v478, stdlib.checkedBigNumberify('./index.rsh:4:19:decimal', stdlib.UInt_max, 300));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc6, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v477], secs: v479, time: v478, didSend: v239, from: v476 } = txn3;
  ;
  const v481 = stdlib.addressEq(v336, v476);
  stdlib.assert(v481, {
    at: './index.rsh:118:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Sponsor'
    });
  const v482 = stdlib.digest(ctc5, [v477]);
  const v483 = stdlib.digestEq(v345, v482);
  stdlib.assert(v483, {
    at: './index.rsh:119:14:application',
    fs: [],
    msg: null,
    who: 'Sponsor'
    });
  const v484 = stdlib.mod(v477, v410);
  const v485 = stdlib.add(v411, v484);
  const v486 = stdlib.mod(v485, v410);
  const v488 = stdlib.add(v478, stdlib.checkedBigNumberify('./index.rsh:4:19:decimal', stdlib.UInt_max, 300));
  stdlib.protect(ctc0, await interact.showWinner(v486), {
    at: './index.rsh:125:28:application',
    fs: ['at ./index.rsh:124:11:application call to [unknown function] (defined at: ./index.rsh:124:34:function exp)'],
    msg: 'showWinner',
    who: 'Sponsor'
    });
  
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 7,
    out_tys: [ctc0],
    timeoutAt: ['time', v488],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v336, v346, v360, v419, v486, v488],
      evt_cnt: 0,
      funcNum: 8,
      lct: v478,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v525, time: v524, didSend: v306, from: v523 } = txn5;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v527 = stdlib.addressEq(v336, v523);
        stdlib.assert(v527, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Sponsor'
          });
        sim_r.txns.push({
          amt: v419,
          kind: 'from',
          to: v336,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc6, ctc3, ctc3, ctc3, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v525, time: v524, didSend: v306, from: v523 } = txn5;
    ;
    const v527 = stdlib.addressEq(v336, v523);
    stdlib.assert(v527, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Sponsor'
      });
    ;
    return;
    
    }
  else {
    const {data: [v503], secs: v505, time: v504, didSend: v278, from: v502 } = txn4;
    ;
    let v507;
    const v508 = stdlib.protect(map1_ctc, stdlib.mapRef(map1, v502), null);
    switch (v508[0]) {
      case 'None': {
        const v509 = v508[1];
        v507 = false;
        
        break;
        }
      case 'Some': {
        const v510 = v508[1];
        const v511 = stdlib.eq(v510, v486);
        v507 = v511;
        
        break;
        }
      }
    stdlib.assert(v507, {
      at: './index.rsh:142:18:application',
      fs: [],
      msg: null,
      who: 'Sponsor'
      });
    stdlib.protect(ctc0, await interact.showOutcome(v502), {
      at: './index.rsh:144:33:application',
      fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:38:function exp)'],
      msg: 'showOutcome',
      who: 'Sponsor'
      });
    
    const v516 = stdlib.mul(v360, v346);
    ;
    return;
    }
  
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn OnCompletion
int OptIn
==
bz normal
txn Sender
int 42
bzero
dig 1
int 1
bzero
dig 2
substring 0 42
app_local_put
pop
pop
b checkSize
normal:
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 255
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:32:15:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./index.rsh:32:15:dot"
// "[]"
txn Sender
global Round
itob
concat
int 1
bzero
dig 1
substring 0 40
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
substring 0 32
store 253
dup
substring 32 40
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:41:15:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:41:15:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 253
concat
load 252
itob
concat
load 254
int 300
+
itob
concat
load 254
int 600
+
itob
concat
int 8
bzero
global Round
itob
concat
load 254
itob
concat
int 8
bzero
concat
b loop2
l2:
l3:
l4:
l5:
l6:
// Handler 6
dup
int 6
==
bz l7
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 248
pop
// "CheckPay"
// "./index.rsh:118:15:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:118:15:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "./index.rsh:119:14:application"
// "[]"
load 254
load 248
itob
sha256
==
assert
load 250
load 248
load 251
%
+
load 251
%
store 247
global Round
int 300
+
store 246
load 255
load 253
itob
concat
load 252
itob
concat
load 249
itob
concat
load 247
itob
concat
load 246
itob
concat
int 1
bzero
dig 1
substring 0 72
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l7:
// Handler 7
dup
int 7
==
bz l8
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
dup
store 249
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:136:11:dot"
// "[]"
txn Sender
dup
int 1
bzero
app_local_get
swap
pop
substring 33 42
dup
store 247
int 0
getbyte
int 0
==
bz l10
int 0
store 248
l10:
load 247
int 0
getbyte
int 1
==
bz l11
load 247
substring 1 9
btoi
dup
store 246
load 251
==
store 248
l11:
l9:
// Nothing
// "./index.rsh:142:18:application"
// "[]"
load 248
assert
load 253
load 254
*
dup
bz l12
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
txn Sender
dig 1
gtxns Receiver
==
assert
l12:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l13:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l8:
// Handler 8
dup
int 8
==
bz l14
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:148:55:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:148:55:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l15
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l15:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l16:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l14:
// Handler 9
dup
int 9
==
bz l17
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
dup
substring 112 120
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 246
pop
global Round
load 252
<
assert
// "CheckPay"
// "./index.rsh:90:23:dot"
// "[]"
txn Sender
dup
int 1
bzero
app_local_get
swap
pop
substring 33 42
dup
store 245
int 0
getbyte
int 0
==
bz l19
int 1
store 244
l19:
load 245
int 0
getbyte
int 1
==
bz l20
int 0
store 244
l20:
l18:
// Nothing
// "./index.rsh:103:20:application"
// "[at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)]"
load 244
assert
txn Sender
dup
int 1
bzero
app_local_get
swap
pop
substring 0 33
dup
store 242
int 0
getbyte
int 0
==
bz l22
int 0
store 243
l22:
load 242
int 0
getbyte
int 1
==
bz l23
load 242
substring 1 33
dup
store 241
load 246
itob
sha256
==
store 243
l23:
l21:
// Nothing
// "./index.rsh:104:20:application"
// "[at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)]"
load 243
assert
txn Sender
dup
dup
int 1
bzero
app_local_get
swap
pop
byte base64(AQ==)
load 250
itob
concat
store 241
dup
substring 0 33
load 241
concat
swap
substring 42 42
concat
dig 1
int 1
bzero
dig 2
substring 0 42
app_local_put
pop
pop
txn Sender
dup
dup
int 1
bzero
app_local_get
swap
pop
int 33
bzero
store 241
dup
substring 0 0
load 241
concat
swap
substring 33 42
concat
dig 1
int 1
bzero
dig 2
substring 0 42
app_local_put
pop
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
int 1
+
itob
load 249
load 246
load 251
%
+
load 251
%
itob
concat
global Round
itob
concat
load 248
itob
concat
load 247
itob
concat
b loop4
l17:
// Handler 10
dup
int 10
==
bz l24
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
dup
substring 112 120
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "./index.rsh:90:23:dot"
// "[at ./index.rsh:90:23:application call to [unknown function] (defined at: ./index.rsh:111:23:function exp)]"
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
load 249
itob
concat
global Round
itob
concat
load 248
itob
concat
load 247
itob
concat
b loop4
l24:
// Handler 11
dup
int 11
==
bz l25
pop
// check step
int 11
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 247
pop
global Round
load 252
<
assert
// "CheckPay"
// "./index.rsh:57:23:dot"
// "[]"
load 253
dup
bz l26
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l26:
pop
txn Sender
dup
int 1
bzero
app_local_get
swap
pop
substring 0 33
dup
store 246
int 0
getbyte
int 0
==
bz l28
int 1
store 245
l28:
load 246
int 0
getbyte
int 1
==
bz l29
int 0
store 245
l29:
l27:
// Nothing
// "./index.rsh:70:20:application"
// "[at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:68:27:function exp)]"
load 245
assert
txn Sender
dup
dup
int 1
bzero
app_local_get
swap
pop
byte base64(AQ==)
load 247
concat
store 244
dup
substring 0 0
load 244
concat
swap
substring 33 42
concat
dig 1
int 1
bzero
dig 2
substring 0 42
app_local_put
pop
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
int 1
+
itob
global Round
itob
concat
load 249
itob
concat
load 248
load 253
+
itob
concat
b loop2
l25:
// Handler 12
dup
int 12
==
bz l30
pop
// check step
int 11
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "./index.rsh:57:23:dot"
// "[at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:76:23:function exp)]"
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
global Round
itob
concat
load 249
itob
concat
load 248
itob
concat
b loop2
l30:
int 0
assert
loop2:
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
dup
substring 24 32
btoi
store 252
pop
dup
substring 0 32
store 251
dup
substring 32 64
store 250
dup
substring 64 72
btoi
store 249
dup
substring 72 80
btoi
store 248
dup
substring 80 88
btoi
store 247
pop
load 248
load 253
>
bz l31
load 251
load 250
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
load 255
itob
concat
load 254
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 11
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l31:
load 251
load 250
concat
load 249
itob
concat
load 247
itob
concat
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
byte base64()
loop3:
pop
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 16
bzero
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
loop4:
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
dup
substring 24 32
btoi
store 252
dup
substring 32 40
btoi
store 251
pop
dup
substring 0 32
store 250
dup
substring 32 64
store 249
dup
substring 64 72
btoi
store 248
dup
substring 72 80
btoi
store 247
dup
substring 80 88
btoi
store 246
pop
load 247
load 252
>
load 255
load 246
<
&&
bz l32
load 250
load 249
concat
load 248
itob
concat
load 247
itob
concat
load 246
itob
concat
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 120
app_global_put
pop
int 10
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l32:
load 250
load 249
concat
load 248
itob
concat
load 246
itob
concat
load 255
itob
concat
load 254
itob
concat
load 251
itob
concat
byte base64()
loop5:
pop
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
pop
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
substring 0 104
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 1,
  mapDataSize: 42,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v477",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v503",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v444",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v477",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v503",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v444",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200244a3803806200244a8339810160408190526200002691620001a7565b6000805560408051825181526020808401511515908201527fcd3784b2810428b9f2b2dd7f396bb870a5f4b96dbfb942b22303c2c03fab95e2910160405180910390a16200007734156007620000d7565b604080518082018252338082524360208084018281526001600081905592909255845180820193909352905182850152835180830385018152606090920190935280519192620000ce926002929091019062000101565b5050506200024f565b81620000fd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010f9062000212565b90600052602060002090601f0160209004810192826200013357600085556200017e565b82601f106200014e57805160ff19168380011785556200017e565b828001600101855582156200017e579182015b828111156200017e57825182559160200191906001019062000161565b506200018c92915062000190565b5090565b5b808211156200018c576000815560010162000191565b600060408284031215620001ba57600080fd5b604080519081016001600160401b0381118282101715620001eb57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020657600080fd5b60208201529392505050565b600181811c908216806200022757607f821691505b602082108114156200024957634e487b7160e01b600052602260045260246000fd5b50919050565b6121eb806200025f6000396000f3fe6080604052600436106100955760003560e01c80635807518b116100595780635807518b14610102578063677d4e32146101155780638323075714610128578063ab53f2c61461014b578063b1adad0e1461016e57600080fd5b80630a51bf87146100a15780632d800bb5146100b6578063306ab814146100c95780634d4caf5a146100dc5780635497b06f146100ef57600080fd5b3661009c57005b600080fd5b6100b46100af366004611d39565b610181565b005b6100b46100c4366004611d39565b6103e8565b6100b46100d7366004611d39565b610722565b6100b46100ea366004611d39565b6108d3565b6100b46100fd366004611d5c565b610ba2565b6100b4610110366004611d39565b610d6a565b6100b4610123366004611d39565b610f72565b34801561013457600080fd5b506001546040519081526020015b60405180910390f35b34801561015757600080fd5b50610160611113565b604051610142929190611d6e565b6100b461017c366004611d39565b6111b0565b610191600b600054146027611329565b6101ab813515806101a457506001548235145b6028611329565b6000808055600280546101bd90611dcb565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990611dcb565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b505050505080602001905181019061024e9190611e4f565b9050610258611a2d565b610269826060015143106029611329565b6040805184358152602080860135908201527f47ebefb90799abdd5a713b2400b5532c4a54d5d426b97b33dabccf8a5d10bbd0910160405180910390a16102b7826040015134146025611329565b6102c033611352565b8152600081515160018111156102d8576102d8611ef4565b14156102ea576001602082015261030e565b6001815151600181111561030057610300611ef4565b141561030e57600060208201525b61031d81602001516026611329565b336000908152600360209081526040909120805460ff1916600190811782559185013591015561034b611a5f565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608084015182519091015260808084015182519091015260a083015161039d90600190611f20565b602080830180519290925281514391015260c0840151905160409081019190915283015160e08401516103d09190611f20565b6020820151606001526103e281611426565b50505050565b6103f8600a60005414601e611329565b6104128135158061040b57506001548235145b601f611329565b60008080556002805461042490611dcb565b80601f016020809104026020016040519081016040528092919081815260200182805461045090611dcb565b801561049d5780601f106104725761010080835404028352916020019161049d565b820191906000526020600020905b81548152906001019060200180831161048057829003601f168201915b50505050508060200190518101906104b59190611f38565b90506104bf611ada565b6104d0826060015143106020611329565b6040805184358152602080860135908201527fc5acb149be38f34aa4f4d263449f6fd0e4d411d048a4e999ed66b65878d50c5d910160405180910390a16105193415601b611329565b610522336115fc565b81526000815151600181111561053a5761053a611ef4565b141561054c5760016020820152610570565b6001815151600181111561056257610562611ef4565b141561057057600060208201525b61057f8160200151601c611329565b61058833611352565b606082018190525160009060018111156105a4576105a4611ef4565b14156105b6576000604082015261060e565b600160608201515160018111156105cf576105cf611ef4565b141561060e5760608101516040908101516080830190815281516020868101358183015283518083038201815291840184528151910120905114908201525b61061d8160400151601d611329565b336000908152600460209081526040808320805460ff19166001908117825560a08701519181019190915560039092528220805461ffff191681550155610662611b45565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608084015182519091015260808084015182519091015260a08301516106b490600190611f20565b602080830151919091526080840151906106d2908290870135611fba565b8460c001516106e19190611f20565b6106eb9190611fba565b602080830180519091019190915280514360409091015260e08401518151606001526101008401519051608001526103e281611689565b610732600a600054146022611329565b61074c8135158061074557506001548235145b6023611329565b60008080556002805461075e90611dcb565b80601f016020809104026020016040519081016040528092919081815260200182805461078a90611dcb565b80156107d75780601f106107ac576101008083540402835291602001916107d7565b820191906000526020600020905b8154815290600101906020018083116107ba57829003601f168201915b50505050508060200190518101906107ef9190611f38565b905061080381606001514310156024611329565b7fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc9826040516108329190611fec565b60405180910390a161084634156021611329565b61084e611b45565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060808501518451820152608080860151855182015260a086015184860180519190915260c087015181519095019490945283514393019290925260e0850151835190910152610100840151915101526108ce81611689565b505050565b6108e3600660005414600f611329565b6108fd813515806108f657506001548235145b6010611329565b60008080556002805461090f90611dcb565b80601f016020809104026020016040519081016040528092919081815260200182805461093b90611dcb565b80156109885780601f1061095d57610100808354040283529160200191610988565b820191906000526020600020905b81548152906001019060200180831161096b57829003601f168201915b50505050508060200190518101906109a0919061200d565b90506109bf604051806040016040528060008152602001600081525090565b6040805184358152602080860135908201527f08ed894918f0d78511d519b6d4e9941541ebd278410838325bfa2de5123f339d910160405180910390a1610a083415600c611329565b8151610a20906001600160a01b03163314600d611329565b6040805160208581013590820152610a5991016040516020818303038152906040528051906020012060001c836020015114600e611329565b6080820151610a6c816020860135611fba565b8360a00151610a7b9190611f20565b610a859190611fba565b8152610a9361012c43611f20565b816020018181525050610ade6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b031681526040808401516020808401919091526060808601518385015260c086015190840152835160808401528381015160a08401526007600055436001559051610b779183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b60405160208183030381529060405260029080519060200190610b9b929190611bc2565b5050505050565b610bb2600160005414600a611329565b610bcc81351580610bc557506001548235145b600b611329565b600080805560028054610bde90611dcb565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0a90611dcb565b8015610c575780601f10610c2c57610100808354040283529160200191610c57565b820191906000526020600020905b815481529060010190602001808311610c3a57829003601f168201915b5050505050806020019051810190610c6f91906120a4565b604080518435815260208086013590820152848201358183015290519192507f18d9d011c21071a56acd9db124fcbf0270b148b24e2db4e72df06ed1bd5c6190919081900360600190a1610cc534156008611329565b8051610cdd906001600160a01b031633146009611329565b610ce5611a5f565b815181516001600160a01b0390911690528051602080850135918101919091528151604080860135910152820151610d209061012c90611f20565b8151606001526020820151610d389061025890611f20565b81516080015260208082018051600090819052815143908401529184015181516040015251606001526108ce81611426565b610d7a6007600054146013611329565b610d9481351580610d8d57506001548235145b6014611329565b600080805560028054610da690611dcb565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd290611dcb565b8015610e1f5780601f10610df457610100808354040283529160200191610e1f565b820191906000526020600020905b815481529060010190602001808311610e0257829003601f168201915b5050505050806020019051810190610e379190612109565b9050610e41611c46565b610e528260a0015143106015611329565b7f79eac81e32b6ce24aea4fe7d5b3a668af48b7628a83c1959d37d9ebf01a3632a83604051610e819190611fec565b60405180910390a1610e9534156011611329565b610e9e336115fc565b60208201819052516000906001811115610eba57610eba611ef4565b1415610ec95760008152610f02565b60016020820151516001811115610ee257610ee2611ef4565b1415610f0257602081015160409081015190820181905260808301511481525b8051610f0f906012611329565b336001600160a01b03166108fc83602001518460400151610f309190612196565b6040518115909202916000818181858888f19350505050158015610f58573d6000803e3d6000fd5b5060008080556001819055610f6f90600290611c76565b33ff5b610f82600b60005414602b611329565b610f9c81351580610f9557506001548235145b602c611329565b600080805560028054610fae90611dcb565b80601f0160208091040260200160405190810160405280929190818152602001828054610fda90611dcb565b80156110275780601f10610ffc57610100808354040283529160200191611027565b820191906000526020600020905b81548152906001019060200180831161100a57829003601f168201915b505050505080602001905181019061103f9190611e4f565b90506110538160600151431015602d611329565b7f12dc974105ba7a7eeddfc66530e819e233c43be512bccd30dcfa88d88b4e3a14826040516110829190611fec565b60405180910390a16110963415602a611329565b61109e611a5f565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606080850151845182015260808086015185519091015260a085015183850180519190915280514394019390935260c085015183519092019190915260e0840151915101526108ce81611426565b60006060600054600280805461112890611dcb565b80601f016020809104026020016040519081016040528092919081815260200182805461115490611dcb565b80156111a15780601f10611176576101008083540402835291602001916111a1565b820191906000526020600020905b81548152906001019060200180831161118457829003601f168201915b50505050509050915091509091565b6111c06007600054146018611329565b6111da813515806111d357506001548235145b6019611329565b6000808055600280546111ec90611dcb565b80601f016020809104026020016040519081016040528092919081815260200182805461121890611dcb565b80156112655780601f1061123a57610100808354040283529160200191611265565b820191906000526020600020905b81548152906001019060200180831161124857829003601f168201915b505050505080602001905181019061127d9190612109565b90506112918160a00151431015601a611329565b7f958f78ebab349905eb0abbf2926ea4aab4a0f19ea393268c746af21c24b40222826040516112c09190611fec565b60405180910390a16112d434156016611329565b80516112ec906001600160a01b031633146017611329565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f58573d6000803e3d6000fd5b8161134e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526003602052604090205460ff16600181111561139e5761139e611ef4565b1415611415576001600160a01b038216600090815260036020526040908190208151606081019092528054829060ff1660018111156113df576113df611ef4565b60018111156113f0576113f0611ef4565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008152600160208201525b919050565b60208101516040015181516060015111156115795761148c60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101518185015284516080908101519085015282850180515160a0860152805184015160c086015251015160e0840152600b60005543600155516115559183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e091820151918101919091526101000190565b604051602081830303815290604052600290805190602001906108ce929190611bc2565b611581611cb0565b81515181516001600160a01b039091169052815160209081015182518201528251604090810151835182015283516080908101518451606090810191909152838601805151865190930192909252815190930151845160a00152805190910151835160c00152510151815160e0015261134e816118ad565b50565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561164857611648611ef4565b1415611415576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156113df576113df611ef4565b806020015160600151816000015160600151116116a75760006116b5565b805160800151602082015151105b156117f15761171260405180610120016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101519084015283516080908101518185015282850180515160a0860152805184015160c0860152805183015160e0860152510151610100840152600a60005543600155516115559183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6118486040518060400160405280611a526040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81515181516001600160a01b03909116905281516020908101518251820152825160409081015183519091015282516080908101518351606001528184018051518451830152805190920151835160a0015290510151815160c0015261134e8161193d565b6118b5611b45565b81515181516001600160a01b039091169052815160209081015182518201528251604090810151835182015283516060908101518451820152845160809081015185518201528385018051600090819052815190950194909452855160a00151845190930192909252845160c00151835190910152835160e001519151015261134e81611689565b6119866040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b03168082528251602090810151818401908152845160409081015181860190815286516060908101518188019081528851608090810151818a019081528a5160a090810151818c019081528c5160c090810151818e0190815260066000554360015589519b8c019c909c529851978a019790975294519388019390935290519086015251908401525190820152905160e082015261010001611555565b6040805160a08101825260009181018281526060820183905260808201929092529081905b8152600060209091015290565b6040518060400160405280611aa56040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152602001611ad56040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152819081526000602082018190526040820152606001611b386040805160608101909152806000815260006020820181905260409091015290565b8152602001600081525090565b6040518060400160405280611b8b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152602001611ad56040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b828054611bce90611dcb565b90600052602060002090601f016020900481019282611bf05760008555611c36565b82601f10611c0957805160ff1916838001178555611c36565b82800160010185558215611c36579182015b82811115611c36578251825591602001919060010190611c1b565b50611c42929150611d0c565b5090565b60408051606080820183526000808352835191820184528082526020828101829052938201529091820190611b38565b508054611c8290611dcb565b6000825580601f10611c92575050565b601f0160209004906000526020600020908101906115f99190611d0c565b6040518060400160405280611a5260405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115611c425760008155600101611d0d565b600060408284031215611d3357600080fd5b50919050565b600060408284031215611d4b57600080fd5b611d558383611d21565b9392505050565b600060608284031215611d3357600080fd5b82815260006020604081840152835180604085015260005b81811015611da257858101830151858201606001528201611d86565b81811115611db4576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611ddf57607f821691505b60208210811415611d3357634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611e3257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461142157600080fd5b6000610100808385031215611e6357600080fd5b6040519081019067ffffffffffffffff82118183101715611e9457634e487b7160e01b600052604160045260246000fd5b81604052611ea184611e38565b81526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611f3357611f33611f0a565b500190565b60006101208284031215611f4b57600080fd5b611f53611e00565b611f5c83611e38565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600082611fd757634e487b7160e01b600052601260045260246000fd5b500690565b8035801515811461142157600080fd5b813581526040810161200060208401611fdc565b1515602083015292915050565b600060e0828403121561201f57600080fd5b60405160e0810181811067ffffffffffffffff8211171561205057634e487b7160e01b600052604160045260246000fd5b60405261205c83611e38565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6000604082840312156120b657600080fd5b6040516040810181811067ffffffffffffffff821117156120e757634e487b7160e01b600052604160045260246000fd5b6040526120f383611e38565b8152602083015160208201528091505092915050565b600060c0828403121561211b57600080fd5b60405160c0810181811067ffffffffffffffff8211171561214c57634e487b7160e01b600052604160045260246000fd5b60405261215883611e38565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60008160001904831182151516156121b0576121b0611f0a565b50029056fea26469706673582212208598617095eef15f3a4067b4f8f3883047f52e13f206182c7cb23d0b4caec6ea64736f6c63430008090033`,
  BytecodeLen: 9290,
  Which: `oD`,
  version: 4,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Player": Player,
  "Sponsor": Sponsor
  };
export const _APIs = {
  };
