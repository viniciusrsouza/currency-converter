(this["webpackJsonpcurrecy-converter"]=this["webpackJsonpcurrecy-converter"]||[]).push([[0],{45:function(e){e.exports=JSON.parse('{"app_id":"2714977b59354fd9a0bbe18112055ee0"}')},58:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),u=(n(58),n(11)),s=n(24),i=n(12),j=n(98),b=n(104),O=n(105),l=n(106),f=(n(59),n(39)),v=n.n(f),p=n(44),d=n(45),h=Object({NODE_ENV:"production",PUBLIC_URL:"/currency-converter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).EXCHANGE_APP_ID||d.app_id||"",m={get:function(e,t){return Object(p.a)(v.a.mark((function n(){var c,a,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=new URL("".concat("https://openexchangerates.org/api/").concat(e)),a=Object(s.a)(Object(s.a)({},t),{},{app_id:h}),Object.keys(a).forEach((function(e){return c.searchParams.append(e,a[e])})),n.next=5,fetch(c);case 5:return r=n.sent,n.abrupt("return",r.json());case 7:case"end":return n.stop()}}),n)})))()}},x=n(10);var S=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({from:"",to:""}),o=Object(i.a)(r,2),f=o[0],v=o[1],p=Object(c.useState)(0),d=Object(i.a)(p,2),h=d[0],S=d[1],g=Object(c.useState)(0),_=Object(i.a)(g,2),C=_[0],E=_[1],N=Object(c.useCallback)((function(){f.from&&f.to&&m.get("latest.json").then((function(e){var t=e.rates[e.base],n=e.rates[f.from],c=e.rates[f.to];E(t/n*h*c)}))}),[h,f.from,f.to]),k=Object(c.useCallback)((function(e,t){v((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(u.a)({},e,t))}))}),[]),y=Object(c.useCallback)((function(e){isNaN(e.target.value)||S((function(){return""===e.target.value?0:"".concat(parseInt(e.target.value))}))}),[]);return Object(c.useEffect)((function(){m.get("currencies.json").then((function(e){var t=Object.keys(e).map((function(t){return[t,e[t]]}));a(t)}))}),[]),Object(c.useEffect)((function(){N()}),[N]),Object(x.jsxs)(j.a,{className:"App container",children:[Object(x.jsx)("h1",{children:"Currency Converter"}),Object(x.jsxs)("div",{className:"selector-container",children:[Object(x.jsx)(b.a,{variant:"outlined",value:f.from,onChange:function(e){return k("from",e.target.value)},children:n.map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(x.jsx)(O.a,{value:n,children:"[".concat(n,"] ").concat(c)},n)}))}),Object(x.jsx)(l.a,{variant:"outlined",value:h,label:"Amount",onChange:y})]}),Object(x.jsxs)("div",{className:"selector-container",children:[Object(x.jsx)(b.a,{variant:"outlined",value:f.to,onChange:function(e){return k("to",e.target.value)},children:n.map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(x.jsx)(O.a,{value:n,children:"[".concat(n,"] ").concat(c)},n)}))}),Object(x.jsx)(l.a,{variant:"outlined",value:C,label:"Amount",InputProps:{readOnly:!0}})]})]})};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d073f207.chunk.js.map