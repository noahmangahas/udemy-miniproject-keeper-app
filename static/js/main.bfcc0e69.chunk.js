(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c),o=n(26),u=n(8);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))},m=(new Date).getFullYear();var f=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",m))},E=n(19),p=n.n(E);var s=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{type:"button",onClick:function(){return e.noteDelete(e.id)}},l.a.createElement(p.a,null)))},b=n(14),v=n(25),d=n.n(v),h=n(53);var k=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),c=n[0],r=n[1];function o(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},{[n]:a})}))}var i=Object(a.useState)(!1),m=Object(u.a)(i,2),f=m[0],E=m[1];return l.a.createElement(h.a,{onClickAway:function(){(""!==c.title||""!==c.content)&&e.handleClick(c),r({title:"",content:""}),E(!1)}},l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},f&&l.a.createElement("input",{onChange:o,name:"title",placeholder:"Title",style:{fontWeight:"bold"},value:c.title}),l.a.createElement("textarea",{onChange:o,name:"content",placeholder:"Take a note...",rows:f?"3":"1",value:c.content,onFocus:function(){E(!0)}}),f&&l.a.createElement("button",{type:"button",onClick:function(){E(!1)}},l.a.createElement(d.a,null)))))};var j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];function r(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(k,{handleClick:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(s,{key:t,id:t,title:e.title,content:e.content,noteDelete:r})})),l.a.createElement(f,null))};r.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.bfcc0e69.chunk.js.map