(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{D46e:function(e,a,n){e.exports={header:"_3PCSxT0l14",list:"_1yYRIyvlRd",proxy:"_1OcDlvlM5R",proxySelectable:"_3oAxPKtZFv"}},FWZb:function(e,a,n){e.exports={proxy:"NpfXwxWAxo",now:"_2zD7drviYH",error:"_2bylJNYYdN",proxyType:"_1rVl-Kdmss",proxyName:"_3kdi5nima5",proxyLatencyWrap:"_12JM32OJa5"}},L5YO:function(e,a,n){e.exports={body:"pWc1mov26e",group:"_1myfcMimT9",fabgrp:"_1khaX45NQe"}},RbL9:function(e,a,n){e.exports={proxyLatency:"_2V-RqIAl7n"}},wyCT:function(e,a,n){"use strict";n.r(a);n("2B1R"),n("07d7"),n("5s+n");var r=n("o0o1"),t=n.n(r),c=(n("ls82"),n("q1tI")),o=n.n(c),l=n("u4Dv"),s=n("DKqX"),p=(n("sMBO"),n("rePB")),m=n("17x9"),i=n.n(m),u=n("TSYQ"),y=n.n(u),b=n("RbL9"),d=n.n(b),x={good:"#67C23A",normal:"#E6A23C",bad:"#F56C6C",na:"#909399"};function f(e){var a=e.latency,n=a.number,r=a.error,t=Object(c.useMemo)((function(){return function(e,a){return""!==a?x.na:e<200?x.good:e<400?x.normal:x.bad}(n,r)}),[n,r]);return o.a.createElement("span",{className:d.a.proxyLatency,style:{color:t}},""!==r?o.a.createElement("span",null,r):o.a.createElement("span",null,n," ms"))}f.propTypes={latency:i.a.shape({number:i.a.number,error:i.a.string})};var v=n("FWZb"),E=n.n(v),N=n("EQlU"),O=function(e){return{proxies:Object(N.d)(e),delay:Object(N.c)(e)}};function w(e){var a,n=e.now,r=e.name,t=Object(l.c)(O),c=t.proxies,s=t.delay[r],m=c[r];return o.a.createElement("div",{className:y()(E.a.proxy,(a={},Object(p.a)(a,E.a.now,n),Object(p.a)(a,E.a.error,s&&s.error),a))},o.a.createElement("div",{className:E.a.proxyName},r),o.a.createElement("div",{className:E.a.proxyType,style:{opacity:n?.6:.2}},m.type),o.a.createElement("div",{className:E.a.proxyLatencyWrap},s&&s.number?o.a.createElement(f,{latency:s}):null))}w.propTypes={now:i.a.bool,name:i.a.string};var j=w,g=n("D46e"),h=n.n(g),_=function(e){return{proxies:Object(N.d)(e)}};function T(e){var a=e.name,n=Object(l.c)(_).proxies,r=Object(l.b)({switchProxy:N.g}),t=n[a],c=t.all;return o.a.createElement("div",{className:h.a.group},o.a.createElement("div",{className:h.a.header},o.a.createElement("h2",null,o.a.createElement("span",null,a),o.a.createElement("span",null,t.type))),o.a.createElement("div",{className:h.a.list},c.map((function(e){var n="Selector"===t.type,c=y()(h.a.proxy,Object(p.a)({},h.a.proxySelectable,n));return o.a.createElement("div",{className:c,key:e,onClick:function(){n&&r.switchProxy(a,e)}},o.a.createElement(j,{isSelectable:n,name:e,now:e===t.now}))}))))}T.propTypes={name:i.a.string};var L=n("5Wrh"),k=n("L5YO"),C=n.n(k);n.d(a,"default",(function(){return A}));var D=function(e){return{proxies:Object(N.d)(e),groupNames:Object(N.e)(e)}},P={fetchProxies:N.b,requestDelayAll:N.f};function A(){var e=Object(l.b)(P),a=e.fetchProxies,n=e.requestDelayAll;Object(c.useEffect)((function(){t.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.a.awrap(a());case 2:case"end":return e.stop()}}))}),[a,n]);var r=Object(l.c)(D).groupNames;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:"Proxies"}),o.a.createElement("div",{className:C.a.body},o.a.createElement("div",{className:C.a.fabgrp},o.a.createElement(L.a,{label:"Test Latency",onClick:n})),r.map((function(e){return o.a.createElement("div",{className:C.a.group,key:e},o.a.createElement(T,{name:e}))}))))}}}]);