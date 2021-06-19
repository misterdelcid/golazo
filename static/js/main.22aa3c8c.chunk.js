(this["webpackJsonpscoreboard-app"]=this["webpackJsonpscoreboard-app"]||[]).push([[0],{13:function(t,e,s){t.exports=s(26)},18:function(t,e,s){},25:function(t,e,s){},26:function(t,e,s){"use strict";s.r(e);var a=s(0),o=s.n(a),i=s(3),n=s.n(i),r=(s(18),s(4)),m=s(5),u=s(6),c=s(7),l=s(1),b=function(t){Object(c.a)(s,t);var e=Object(u.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){var t=this.props.timerTime,e=Math.floor(t/10%60)<10?"0"+Math.floor(t/10%60):Math.floor(t/10%60),s=Math.floor(t/600)<10?"0"+Math.floor(t/600):Math.floor(t/600);return o.a.createElement("div",null,o.a.createElement("div",{className:"team-names"},o.a.createElement("h2",null,"Home"),o.a.createElement("h2",null,"Away")),o.a.createElement("div",{className:"time-pictures"},o.a.createElement("div",{className:"home-picture"}),o.a.createElement("div",{className:"time"},o.a.createElement("p",null,"".concat(s,":").concat(e))),o.a.createElement("div",{className:"away-picture"})))}}]),s}(a.Component),E=Object(l.b)((function(t){return{timerTime:t.timeReducer.time.timerTime}}))(b),h=Object(l.b)((function(t){return{home:{score:t.teamsReducer.teams.home.score},away:{score:t.teamsReducer.teams.away.score}}}))((function(t){var e=t.dispatch,s=t.home,a=t.away;return o.a.createElement("div",{className:"score"},o.a.createElement("div",{className:"score-buttons"},o.a.createElement("button",{className:"top-left-button",onClick:function(){return e({type:"INCREMENT_HOME_SCORE"})}},"+"),o.a.createElement("button",{className:"bottom-left-button",disabled:s.score<1,onClick:function(){return e({type:"DECREMENT_HOME_SCORE"})}},"-")),o.a.createElement("p",null,"".concat(s.score,":").concat(a.score)),o.a.createElement("div",{className:"score-buttons"},o.a.createElement("button",{className:"top-right-button",onClick:function(){return e({type:"INCREMENT_AWAY_SCORE"})}},"+"),o.a.createElement("button",{className:"bottom-right-button",disabled:a.score<1,onClick:function(){return e({type:"DECREMENT_AWAY_SCORE"})}},"-")))})),y=Object(l.b)((function(t){return{home:{substitutions:t.teamsReducer.teams.home.substitutions},away:{substitutions:t.teamsReducer.teams.away.substitutions}}}))((function(t){var e=t.dispatch,s=t.home,a=t.away;return o.a.createElement("div",{className:"subs"},o.a.createElement("div",null,o.a.createElement("p",null,"Subs:"),o.a.createElement("div",{className:"sub-section"},o.a.createElement("div",{className:"sub-buttons"},o.a.createElement("button",{className:"top-left-button",disabled:s.substitutions>2,onClick:function(){return e({type:"INCREMENT_HOME_SUBSTITUTIONS"})}},"+"),o.a.createElement("button",{className:"bottom-left-button",disabled:s.substitutions<1,onClick:function(){return e({type:"DECREMENT_HOME_SUBSTITUTIONS"})}},"-")),o.a.createElement("div",{className:"sub-dots"},Array(s.substitutions).fill(o.a.createElement("div",{className:"dot"}))))),o.a.createElement("div",null,o.a.createElement("p",null,"Subs:"),o.a.createElement("div",{className:"sub-section"},o.a.createElement("div",{className:"sub-buttons"},o.a.createElement("button",{className:"top-left-button",disabled:a.substitutions>2,onClick:function(){return e({type:"INCREMENT_AWAY_SUBSTITUTIONS"})}},"+"),o.a.createElement("button",{className:"bottom-left-button",disabled:a.substitutions<1,onClick:function(){return e({type:"DECREMENT_AWAY_SUBSTITUTIONS"})}},"-")),o.a.createElement("div",{className:"sub-dots"},Array(a.substitutions).fill(o.a.createElement("div",{className:"dot"}))))))})),T=function(t){Object(c.a)(s,t);var e=Object(u.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){var t=this.props,e=t.dispatch,s=t.time,a=s.timerTime,i=s.isRunning,n=s.timerId;return o.a.createElement("div",{className:"time-buttons"},!i&&o.a.createElement("button",{className:"start-button",onClick:function(){var t=setInterval((function(){return e({type:"TICK"})}),100);e({type:"START_TIME",timerId:t})}},a<1?"Start Clock":"Resume"),i&&o.a.createElement("button",{className:"stop-button",onClick:function(){clearInterval(n),e({type:"STOP_TIME"})}},"Stop"),a>1&&!1===i&&o.a.createElement("button",{className:"reset-button",onClick:function(){return e({type:"RESET_TIME"})}},"Reset"))}}]),s}(a.Component),d=Object(l.b)((function(t){var e=t.timeReducer;return{time:{timerTime:e.time.timerTime,isRunning:e.time.isRunning,timerId:e.time.timerId}}}))(T),w=(s(25),function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(E,null),o.a.createElement(h,null),o.a.createElement(y,null),o.a.createElement(d,null),o.a.createElement("div",{className:"app-title"},o.a.createElement("h1",null,"Soccer Scoreboard App"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{teams:{home:{score:0,substitutions:3},away:{score:0,substitutions:3}}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT_HOME_SCORE":return{teams:{home:{score:t.teams.home.score+1,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}};case"DECREMENT_HOME_SCORE":return t.teams.home.score>1?{teams:{home:{score:t.teams.home.score-1,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}}:{teams:{home:{score:0,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}};case"RESET_HOME_SCORE":return{teams:{home:{score:0,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}};case"INCREMENT_AWAY_SCORE":return{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score+1,substitutions:t.teams.away.substitutions}}};case"DECREMENT_AWAY_SCORE":return t.teams.away.score>1?{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score-1,substitutions:t.teams.away.substitutions}}}:{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:0,substitutions:t.teams.away.substitutions}}};case"RESET_AWAY_SCORE":return{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:0,substitutions:t.teams.away.substitutions}}};case"INCREMENT_HOME_SUBSTITUTIONS":return t.teams.home.substitutions<3?{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions+1},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}}:{teams:{home:{score:t.teams.home.score,substitutions:3},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}};case"DECREMENT_HOME_SUBSTITUTIONS":return t.teams.home.substitutions>0?{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions-1},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}}:{teams:{home:{score:t.teams.home.score,substitutions:0},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}};case"RESET_HOME_SUBSTITUTIONS":return{teams:{home:{score:t.teams.home.score,substitutions:3},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions}}};case"INCREMENT_AWAY_SUBSTITUTIONS":return t.teams.away.substitutions<3?{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions+1}}}:{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:3}}};case"DECREMENT_AWAY_SUBSTITUTIONS":return t.teams.away.substitutions>0?{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:t.teams.away.substitutions-1}}}:{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:0}}};case"RESET_AWAY_SUBSTITUTIONS":return{teams:{home:{score:t.teams.home.score,substitutions:t.teams.home.substitutions},away:{score:t.teams.away.score,substitutions:3}}};default:return t}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{time:{timerTime:0,timerStart:0,isRunning:!1}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"START_TIME":return{time:{timerTime:t.time.timerTime,timerStart:Date.now()-t.time.timerTime,isRunning:!0,timerId:e.timerId}};case"STOP_TIME":return{time:{timerTime:t.time.timerTime,timerStart:0,isRunning:!1,timerId:t.time.timerId}};case"RESET_TIME":return{time:{timerTime:0,timerStart:0,isRunning:!1}};case"TICK":return{time:{timerTime:t.time.timerTime+1,timerStart:t.time.timerStart,isRunning:t.time.isRunning,timerId:t.time.timerId}};default:return t}},p=s(2),R=o.a.createElement(l.a,{store:Object(p.c)(Object(p.b)({teamsReducer:N,timeReducer:S}))},o.a.createElement(w,null));n.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.22aa3c8c.chunk.js.map