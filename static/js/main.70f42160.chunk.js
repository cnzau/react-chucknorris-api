(this["webpackJsonpreact-chucknorris-api"]=this["webpackJsonpreact-chucknorris-api"]||[]).push([[0],{35:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(28),s=c.n(a),i=c(11),o=(c(35),c(2)),j=c.p+"static/media/chuck.e03202fc.png",u=c(9),b=c.n(u),h=c(10),d=c(13),O=c(15),f=c(14),l=c.n(f),p=c(1),x=function(e){var t=e.category;return Object(p.jsx)(i.b,{to:"random?category=".concat(t),className:"category-item",children:t})};var m=function(){var e=Object(n.useState)({categories:[]}),t=Object(O.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){a()}),[]);var a=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.chucknorris.io/jokes/categories");case 2:t=e.sent,r(Object(h.a)(Object(h.a)({},c),{},{categories:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Categories"}),Object(p.jsx)("div",{className:"categories",children:c.categories.map((function(e){return Object(p.jsx)(x,{category:e},e)}))})]})};var v=function(e){e.match;var t=Object(o.f)().key,c=Object(o.f)().search,r=new URLSearchParams(c).get("category"),a=Object(n.useState)({joke:""}),s=Object(O.a)(a,2),i=s[0],j=s[1];Object(n.useEffect)((function(){u()}),[r,t]);var u=function(){var e=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.chucknorris.io/jokes/random",e.next=3,l.a.get(r?t+"?category=".concat(r):t);case 3:c=e.sent,j(Object(h.a)(Object(h.a)({},i),{},{joke:c.data.value}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h2",{children:[r?r.charAt(0).toUpperCase()+r.slice(1):"Random"," ","Joke"]}),Object(p.jsx)("blockquote",{children:Object(p.jsx)("p",{className:"joke-value",children:i.joke})})]})};c(61);var g=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Chuck Norris Jokes"}),Object(p.jsxs)("div",{className:"main",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("img",{src:j,alt:""}),Object(p.jsx)(m,{})]}),Object(p.jsx)(o.c,{children:["/","/random","/random/"].map((function(e){return Object(p.jsx)(o.a,{exact:!0,path:e,render:function(e){return Object(p.jsx)(v,{},e.location.key)}},e)}))})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(i.a,{basename:"/",children:Object(p.jsx)(g,{})})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.70f42160.chunk.js.map