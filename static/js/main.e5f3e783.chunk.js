(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{41:function(n,e,t){},66:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,l=t(0),s=t(31),b=t.n(s),u=(t(41),t(2)),d=t(8),j=t(13),m=t(9),h=t(1),p=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"BUSINESS",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"ENTERTAINMENT",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"HEALTH",text:"\uac74\uac15"},{name:"SCIENCE",text:"\uacfc\ud559"},{name:"SPORTS",text:"\uc2a4\ud3ec\uce20"},{name:"TECHNOLOGY",text:"\uae30\uc220"}],x=m.b.div(r||(r=Object(d.a)(["\n  display: flex;\n  padding: 1rem;\n  width: 768px;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]))),f=Object(m.b)(j.b)(a||(a=Object(d.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #495057;\n  }\n\n  ","\n\n  & + & {\n    margin-left: 1rem;\n  }\n"])),(function(n){return n.active&&Object(m.a)(c||(c=Object(d.a)(["\n      font-weight: 600;\n      border-bottom: 2px solid #22b8cf;\n      color: #22b8cf;\n      &:hover {\n        color: #3bc9db;\n      }\n    "])))})),g=function(n){n.onSelect,n.category;return Object(h.jsx)(x,{children:p.map((function(n){return Object(h.jsx)(f,{activeClassName:"active",exact:"all"===n.name,to:"all"===n.name?"/":"/".concat(n.name),children:n.text},n.name)}))})},O=t(11),v=t(35),w=t.n(v),y=m.b.div(i||(i=Object(d.a)(["\n  display: flex;\n\n  .thumbnail {\n    margin-right: 1rem;\n    img {\n      display: block;\n      width: 160px;\n      height: 100px;\n      object-fit: cover;\n    }\n  }\n\n  .content {\n    h2 {\n      margin: 0;\n      a {\n        color: black;\n      }\n    }\n    p {\n      margin: 0;\n      line-height: 1.5;\n      margin-top: 0.5rem;\n      white-space: normal;\n    }\n  }\n\n  & + & {\n    margin-top: 3rem;\n  }\n"]))),S=function(n){var e=n.article,t=e.title,r=e.description,a=e.url,c=e.urlToImage;return Object(h.jsxs)(y,{children:[c&&Object(h.jsx)("div",{className:"thumbnail",children:Object(h.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:c,alt:"thumbnail"})})}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:t})}),Object(h.jsx)("p",{children:r})]})]})},E=t(20),k=t.n(E),N=t(36);var T=m.b.div(o||(o=Object(d.a)(["\n  box-sizing: border-box;\n  padding-bottom: 3rem;\n  width: 768px;\n  margin: 0 auto;\n  margin-top: 2rem;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]))),C=function(n){var e=n.category,t=function(n,e){var t=Object(l.useState)(!1),r=Object(O.a)(t,2),a=r[0],c=r[1],i=Object(l.useState)(null),o=Object(O.a)(i,2),s=o[0],b=o[1],u=Object(l.useState)(null),d=Object(O.a)(u,2),j=d[0],m=d[1];return Object(l.useEffect)((function(){!function(){var e=Object(N.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,n();case 4:t=e.sent,b(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(e.t0);case 11:c(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()()}),e),[a,s,j]}((function(){var n="all"===e?"":"&category=".concat(e);return w.a.get("https://newsapi.org/v2/top-headlines?country=kr".concat(n,"&apiKey=0b7eedcd07534aeda96963244e38aee4"))}),[e]),r=Object(O.a)(t,3),a=r[0],c=r[1],i=r[2];if(a)return Object(h.jsx)(T,{children:"\ub300\uae30 \uc911..."});if(!c)return null;if(i)return Object(h.jsx)(T,{children:"\uc5d0\ub7ec \ubc1c\uc0dd!"});var o=c.data.articles;return Object(h.jsx)(T,{children:o.map((function(n){return Object(h.jsx)(S,{article:n},n.url)}))})},I=function(n){var e=n.match.params.category||"all";return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsx)(C,{category:e})]})},F=function(){return Object(h.jsx)(u.a,{path:"/:category?",component:I})},L=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};b.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.e5f3e783.chunk.js.map