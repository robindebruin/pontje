(this.webpackJsonppontje=this.webpackJsonppontje||[]).push([[0],{38:function(e,t,n){e.exports=n(73)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),o=(n(43),n(44),n(10)),s=n(11),l=n(35),u=n(30),m=n(36),d=n(7),f=function(){function e(t,n,a){Object(o.a)(this,e),this.name=t,this.url=n,this.fullName=a}return Object(s.a)(e,[{key:"destinations",get:function(){return this.dest},set:function(e){this.dest=e}},{key:"allDepartureTimes",get:function(){return""}}]),e}(),p=new f("Pont steiger","pont-steiger","Pontsteiger"),v=new f("Centraal","centraal","Centraal Station"),b=new f("NDSM","ndsm","NDSM"),E=new f("IJplein","ijplein","IJplein"),j=new f("Azartplein","azartplein","Azartplein"),O=new f("Zamenhofstr","zamenhofstr","Zamenhofstraat"),h=new f("Distelweg","distelweg","Distelweg");b.destinations=[{port:v,lines:["905_NDSM_CS","906_NDSM_CS"]},{port:p,lines:["903_NDSM_PST"]}],p.destinations=[{port:b,lines:["903_PST_NDSM"]},{port:h,lines:["900_PST_DSW"]}],v.destinations=[{port:b,lines:["906_CS_NDSM","905_CS_NDSM"]},{port:E,lines:["902_CS_IJN"]}],j.destinations=[{port:O,lines:["915_AZP_ZHS"]}],O.destinations=[{port:j,lines:["915_ZHS_AZP"]}],h.destinations=[{port:p,lines:["900_DSW_PST"]}],E.destinations=[{port:v,lines:["902_IJN_CS"]}];var N=[b,p,v,E,j,O,h],_=(n(45),n(2)),g=n(37),y={backgroundColor:"var(--color-2)",color:"var(--color-3)",padding:"0.1em 0 0 0.5em",fontVariantCaps:"all-small-caps",fontSize:"20px",fontWeight:"bolder"};var S=function(e){var t=e.title,n=Object(g.a)(e,["title"]);return r.a.createElement("div",Object.assign({style:y},n),r.a.createElement("div",null," ",t))};n(46);var w=function(e){var t=e.active,n=void 0!==t&&t,a=e.className,c=e.children,i=n&&"btn__selected";return r.a.createElement("div",{className:"btn ".concat(i," ").concat(a)},c)};n(47);var k=function(e){var t=e.open?"arrow--open":"";return r.a.createElement("a",{className:"arrow ".concat(t)},r.a.createElement("span",{className:"arrow__bar arrow__bar--left "}),r.a.createElement("span",{className:"arrow__bar arrow__bar--right "}))};var D=function(e){var t=e.departurePort,n=Object(a.useState)(!t),c=Object(_.a)(n,2),i=c[0],o=c[1],s=Object(d.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{className:"".concat(i?"top":""),title:"Kies je vertrek locatie"}),r.a.createElement("div",{className:"departure ".concat(i?"expand":"decreased")},N.map((function(e){return r.a.createElement("span",{onClick:function(){return function(e){s.push("/".concat(e))}(e.url)},key:e.name},r.a.createElement(w,{className:"departure-link ",active:(n=e.name,n===(null===t||void 0===t?void 0:t.name))},e.name));var n}))),r.a.createElement("div",{className:"toggle",onClick:function(){return o(!i)}},r.a.createElement("div",{className:"toggle toggle--btn"},r.a.createElement(k,{open:i}))))},T=(n(53),n(13)),C=n(14),M=n(33),P=(n(54),function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"getTheTime",value:function(){var e=new Date,t={h:e.getHours(),m:e.getMinutes(),s:e.getSeconds()},n=t.h,a=t.m,r=t.s,c=a<10?"0"+a:a,i=r<10?"0"+r:r;return"".concat(n<10?"0"+n:n,":").concat(c,":").concat(i)}},{key:"timeToDateObj",value:function(e){var t=e.split(":"),n=Object(_.a)(t,3),a=n[0],r=n[1],c=n[2],i=new Date;return i.setHours(+a),i.setMinutes(+r),i.setSeconds(+c),i}},{key:"msToHMS",value:function(e){return new Date(e).toISOString().slice(11,19)}},{key:"getDayType",value:function(){var e=(new Date).getDay(),t=[];return 0!==e&&6!==e&&t.push("weekdays"),[].concat(t,[["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][e]])}},{key:"stripSeconds",value:function(e){if(e){var t=e.split(":"),n=Object(_.a)(t,2),a=n[0],r=n[1];return"".concat(a,":").concat(r)}}},{key:"stripHours",value:function(e){if(e){var t=e.split(":"),n=Object(_.a)(t,3),a=(n[0],n[1]),r=n[2];return"".concat(a,":").concat(r)}}},{key:"HoursMinutes",value:function(e){if(e){var t=e.split(":"),n=Object(_.a)(t,3),a=n[0],r=n[1];n[2];return"over ".concat("00"!==a?a+" uur en":""," ").concat(r," min")}}}]),e}());var x=function(e){var t=e.destinationPortName,n=void 0===t?"":t,a=e.depTimes,c=e.closestTimeIndex,i=void 0===c?0:c;return a?r.a.createElement("div",{className:"ferry-times"},r.a.createElement("div",{className:"ferry-times ferry-times__title"},n),a.slice(i).map((function(e){return r.a.createElement("div",{className:"ferry-times ferry-times__time",key:e},r.a.createElement("div",null,P.stripSeconds(e)),r.a.createElement("div",{className:"ferry-times__count-down"},function(e){var t=Math.abs(P.timeToDateObj(e)-P.timeToDateObj(P.getTheTime())),n=P.msToHMS(t);return P.HoursMinutes(n)}(e)))}))):r.a.createElement("div",{className:"ferry-times"})};function I(e,t,n){var a=function(e,t){return e.find((function(e){return e.name===t}))}(function(e,t){return Object.keys(e).map((function(n){return{name:n,value:e[n].findIndex((function(e){return e>t}))}}))}(t,n),e);return a?a.value:0}var H={backgroundColor:"var(--color-1)",color:"var(--color-3)",padding:"0 0 0 0.5em",fontVariantCaps:"all-small-caps",fontSize:"20px"};var z=function(e){var t=e.title;return r.a.createElement("div",{style:H},r.a.createElement("div",null," ",t))},A=n(18),J=n.n(A),Z=n(34),W=n.n(Z).a.create({baseURL:"",timeout:1e3});var F=function(){var e=Object(a.useState)(),t=Object(_.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("LOADING"),i=Object(_.a)(c,2),o=i[0],s=i[1];return[n,o,Object(a.useCallback)((function(e){var t;return J.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s("LOADING"),n.next=4,J.a.awrap(W.request(e));case 4:t=n.sent,s("SUCCESS"),r(t.data),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),s("ERROR");case 13:case"end":return n.stop()}}),null,null,[[0,9]])}),[])]};var R=function(e){var t=e.departurePort,n=(e.destinationPort,Object(a.useState)()),c=Object(_.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(P.getTheTime()),l=Object(_.a)(s,2),u=l[0],m=l[1],d=F(),f=Object(_.a)(d,3),p=f[0],v=(f[1],f[2]),b=Object(a.useState)([]),E=Object(_.a)(b,2),j=E[0],O=E[1];return Object(a.useEffect)((function(){O([]),((null===t||void 0===t?void 0:t.destinations.flatMap((function(e){return e.lines})))||[]).forEach((function(e){return v({url:"/ferry-times/".concat(e,".json")})}))}),[t,v]),Object(a.useEffect)((function(){var e;null===t||void 0===t||t.destinations.forEach((function(t){var n=function(e,t){return t.filter((function(t){return t.journey.destination.fullname===e.port.fullName}))}(t,j);e=Object(M.a)({},e,Object(C.a)({},t.port.name,function(e,t){return e.reduce((function(e,n){var a=n.schedules.filter((function(e){return t.some((function(t){return e.validFor.includes(t)}))})).map((function(e){return e.times})).map((function(e){return e.map((function(e){return e.departure}))}));return[].concat(Object(T.a)(e),Object(T.a)(a.flat()))}),[])}(n,P.getDayType())))})),o(e)}),[j,t]),Object(a.useEffect)((function(){p&&O((function(e){return[].concat(Object(T.a)(e),[p])}))}),[p,O]),setInterval((function(){m(P.getTheTime())}),1e3),i?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Bestemming"}),t.destinations.map((function(e){return r.a.createElement("div",{key:e.port.name},r.a.createElement("div",{className:"destination-port"},r.a.createElement("div",{className:"card "},t.name),r.a.createElement("div",{className:"card card--blank"}," > "),r.a.createElement("div",{className:"card"},e.port.name),r.a.createElement("div",{className:"card--end"},r.a.createElement("div",{className:"card card--time"},r.a.createElement("span",{className:"card--time__info"},"gaat over"),r.a.createElement("span",{className:"counter"},P.stripHours(function(e,t,n){var a=I(e,t,n);if(a&&!(a<0))return P.msToHMS(Math.abs(P.timeToDateObj(t[e][a])-P.timeToDateObj(n)))}(e.port.name,i,u))),r.a.createElement("span",{className:"card--time__info"},"min")))),r.a.createElement("div",{className:"line"}))})),r.a.createElement("div",{className:"times-container"},t.destinations.map((function(e){return r.a.createElement(x,{destinationPortName:e.port.name,depTimes:i[e.port.name],closestTimeIndex:I(e.port.name,i,u),key:e.port.fullName})})))):r.a.createElement("div",{className:"destination-port destination-port__loading "})};var B=Object(d.g)((function(e){var t=e.match.params,n=t.dep,a=t.des,c=N.find((function(e){return n===e.url})),i=N.find((function(e){return a===e.url}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{departurePort:c}),r.a.createElement(R,{departurePort:c,destinationPort:i}))})),L=[{path:"/:dep/:des",exact:!1,component:B},{path:"/:dep",exact:!1,component:B},{path:"/",exact:!0,component:B}],G=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.c,null,L.map((function(e){return r.a.createElement(d.a,Object.assign({},e,{key:e.path}))})))}}]),t}(a.Component);var U=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(9);i.a.render(r.a.createElement(V.a,{basename:""},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.6109cadc.chunk.js.map