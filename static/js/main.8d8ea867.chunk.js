(this.webpackJsonpreact_api=this.webpackJsonpreact_api||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(5),a=n.n(r),s=(n(11),n(4)),i=n.n(s),o=n(6),j=n(2),l=(n(13),n(0)),u=function(e){var t=e.artist,n=e.song,c=e.changeHandler1,r=e.changeHandler2,a=e.getter,s=e.loading,i=e.lyrics,o=e.enter;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",className:"UserReq",placeholder:"artist",value:t,onChange:c}),Object(l.jsx)("input",{type:"text",className:"UserReq",placeholder:"song",value:n,onChange:r,onKeyDown:o}),Object(l.jsx)("button",{onClick:a,children:"get lyrics"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),s?Object(l.jsx)("p",{children:"loading..."}):Object(l.jsx)("pre",{children:i})]})};var b=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(j.a)(a,2),b=s[0],h=s[1],d=Object(c.useState)("Lyrics to be found"),g=Object(j.a)(d,2),O=g[0],p=g[1],x=Object(c.useState)(!1),f=Object(j.a)(x,2),v=f[0],y=f[1],k=Object(c.useState)({error:!1,message:""}),w=Object(j.a)(k,2),m=w[0],C=w[1],S=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,fetch("https://api.lyrics.ovh/v1/".concat(n,"/").concat(b));case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("Not Working");case 7:return e.next=9,t.json();case 9:c=e.sent,p(c.lyrics),y(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),C({error:!0,message:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),F=function(){window.location.reload()};return m.error?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:m.message}),Object(l.jsx)("button",{onClick:F,children:"Refresh"})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Lyric Finder"}),Object(l.jsx)("p",{children:"new line for testing"}),Object(l.jsx)("p",{children:"another test line"}),Object(l.jsx)(u,{artist:n,song:b,changeHandler1:function(e){r(e.target.value)},changeHandler2:function(e){h(e.target.value)},getter:S,loading:v,lyrics:O,enter:function(e){13==e.keyCode&&S()}}),Object(l.jsx)("button",{onClick:F,children:"Refresh"})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};a.a.render(Object(l.jsx)(b,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.8d8ea867.chunk.js.map