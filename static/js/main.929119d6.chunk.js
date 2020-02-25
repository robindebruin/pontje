(this.webpackJsonppontje=this.webpackJsonppontje||[]).push([[0],{23:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(28),n(29),n(5)),u=n(6),l=n(21),s=n(17),m=n(22),d=(n(30),n(3)),f=function(){function e(t,n){Object(o.a)(this,e),this.name=t,this.url=n}return Object(u.a)(e,[{key:"destinations",get:function(){return this.dest},set:function(e){this.dest=e}},{key:"allDepartureTimes",get:function(){return""}}]),e}(),p=new f("Pont steiger","pont-steiger"),v=new f("Centraal","centraal"),h=new f("NDSM","ndsm");h.destinations=[{port:v,lines:["905_NDM_CS","906_NDSM_CS"]},{port:p,lines:["903_NDSM_PST"]}],p.destinations=[{port:h,lines:["903_PST_NDSM"]}],v.destinations=[{port:h,lines:["906_CS_NDSM","905_CS_NDSM"]}];var E=[h,p,v],b={backgroundColor:"#bdbdbd",color:"white",display:"flex",justifyContent:"center",padding:"0.1em",fontVariantCaps:"all-small-caps"};var y=function(e){var t=e.title;return r.a.createElement("div",{style:b},r.a.createElement("div",null," ",t))};var j=function(e){var t=e.departurePort;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{title:"Vertrek haven"}),r.a.createElement("div",{className:"departure"},E.map((function(e){return r.a.createElement("div",{key:e.name,className:"departure-link ".concat((n=e.name,n===(null===t||void 0===t?void 0:t.name)&&"departure-active"))},r.a.createElement(d.b,{to:"/".concat(e.url)},e.name));var n}))))},g=n(4),O=(n(36),n(9)),T=n(20),k=n(8);n(37);var w=function(e){var t=e.depTimes,n=e.closestTimeIndex,a=void 0===n?0:n;return t?r.a.createElement("div",{className:"ferry-times"},t.slice(a).map((function(e){return r.a.createElement("div",{key:e},e)}))):r.a.createElement(r.a.Fragment,null)},S=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"getTheTime",value:function(){var e=new Date;return e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}},{key:"timeToDateObj",value:function(e){var t=e.split(":"),n=Object(k.a)(t,3),a=n[0],r=n[1],c=n[2],i=new Date;return i.setHours(+a),i.setMinutes(+r),i.setSeconds(+c),i}},{key:"msToHMS",value:function(e){return new Date(e).toISOString().slice(11,19)}},{key:"getDayType",value:function(){var e=(new Date).getDay()-1,t=[];return e<6&&t.push("weekdays"),[].concat(t,[["monday","tuesday","wednesday","thursday","friday","saturday","sunday"][e]])}}]),e}();var D=function(e){var t=e.props;return r.a.createElement("div",t,"Loading..")},N=n(13);function _(e,t,n){var a=function(e,t){return e.find((function(e){return e.name===t}))}(function(e,t){return Object.keys(e).map((function(n){return{name:n,value:e[n].findIndex((function(e){return e>t}))}}))}(t,n),e);return a?a.value:0}n(38);var M=function(e){var t=e.lines;return r.a.createElement("div",{className:"meta-info"},r.a.createElement("div",null,S.getDayType().map((function(e){return e+", "})),t&&t.map((function(e){return"".concat(e,", ")}))))};var P=function(e){var t,n=e.departurePort,c=e.destinationPort,i=Object(a.useState)(),o=Object(k.a)(i,2),u=o[0],l=o[1],s=Object(a.useState)(S.getTheTime()),m=Object(k.a)(s,2),f=m[0],p=m[1];return Object(a.useEffect)((function(){n.destinations.forEach((function(e){Promise.all(e.lines.map((function(e){return t=e,fetch("".concat("/pontje","/ferry-times/").concat(t,".json")).then((function(e){return e.json()}));var t}))).then((function(t){return l((function(n){return Object(T.a)({},n,{},Object(O.a)({},"".concat(e.port.name),function(e,t){return e.reduce((function(e,n){var a=n.schedules.filter((function(e){return t.some((function(t){return e.validFor.includes(t)}))})).map((function(e){return e.times})).map((function(e){return e.map((function(e){return e.departure}))}));return[].concat(Object(N.a)(e),Object(N.a)(a.flat()))}),[])}(t,S.getDayType())))}))})).catch((function(e){return console.error(e)}))}))}),[n]),setInterval((function(){p(S.getTheTime())}),1e3),u?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{title:"Bestemming"}),n.destinations.map((function(e){return r.a.createElement("div",{className:"departure-port",key:e.port.name},r.a.createElement("div",{className:"departure-row-inner-left ".concat((t=e.port.name,t===(null===c||void 0===c?void 0:c.name)&&"departure-active"))},r.a.createElement(d.b,{to:"/".concat(n.url,"/").concat(e.port.url)},e.port.name)),r.a.createElement("div",{className:"departure-row-inner-right"},function(e,t,n){var a=_(e,t,n);if(a&&!(a<0))return S.msToHMS(Math.abs(S.timeToDateObj(t[e][a])-S.timeToDateObj(n)))}(e.port.name,u,f)));var t})),r.a.createElement(w,{depTimes:u[null===c||void 0===c?void 0:c.name],closestTimeIndex:_(null===c||void 0===c?void 0:c.name,u,f)}),r.a.createElement(M,{lines:null===(t=n.destinations.find((function(e){return e.port===c})))||void 0===t?void 0:t.lines})):r.a.createElement("div",{className:"departure-port departure-port__loading "},r.a.createElement(D,null))};var C=Object(g.f)((function(e){var t=e.match.params,n=t.dep,a=t.des,c=E.find((function(e){return n===e.url})),i=E.find((function(e){return a===e.url}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{departurePort:c}),r.a.createElement(P,{departurePort:c,destinationPort:i}))})),x=[{path:"/",exact:!0,component:j},{path:"/:dep/:des",exact:!1,component:C},{path:"/:dep",exact:!1,component:C}],I=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(g.c,null,x.map((function(e){return r.a.createElement(g.a,Object.assign({},e,{key:e.path}))})))}}]),t}(a.Component);var F=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d.a,{basename:"/pontje"},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.929119d6.chunk.js.map