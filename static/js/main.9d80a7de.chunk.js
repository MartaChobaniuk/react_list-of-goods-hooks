(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),i=n.n(s),l=n(6),a=n(8),o=n(1),r=n(4),u=n.n(r);n(13),n(14);!function(t){t.Alphabetically="alphabetically",t.Length="length",t.Reset=""}(c||(c={}));var b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var j=function(){var t=Object(o.useState)(""),e=Object(l.a)(t,2),n=e[0],s=e[1],i=Object(o.useState)(!1),r=Object(l.a)(i,2),j=r[0],d=r[1],g=function(t,e,n){var s=Object(a.a)(t);return e&&s.sort((function(t,n){switch(e){case c.Alphabetically:return t.localeCompare(n);case c.Length:return t.length-n.length;default:return 0}})),n?s.reverse():s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()({"is-light":n!==c.Alphabetically},"button is-info"),onClick:function(){s(c.Alphabetically)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()({"is-light":n!==c.Length},"button is-success"),onClick:function(){s(c.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()({"is-light":!j},"button is-warning"),onClick:function(){d((function(t){return!t}))},children:"Reverse"}),(j||""!==n)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.Reset),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9d80a7de.chunk.js.map