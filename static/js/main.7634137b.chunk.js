(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c.n(s),n=c(13),r=c.n(n),j=c(8),a=c(2),o=c(1);var d=function(){const{id:e}=Object(a.f)();return Object(s.useEffect)((()=>{(async()=>{const t=await(await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e))).json();console.log(t)})()}),[]),Object(o.jsx)("h1",{children:"Detail"})};var b=function(e){let{id:t,coverImg:c,title:s,summary:i,genres:n}=e;return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:c,alt:s}),Object(o.jsx)("h2",{children:Object(o.jsx)(j.b,{to:"/movie/".concat(t),children:s})}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("ul",{children:n.map((e=>Object(o.jsx)("li",{children:e},e)))})]})};var l=function(){const[e,t]=Object(s.useState)(!0),[c,i]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();i(e.data.movies),t(!1)})()}),[]),Object(o.jsx)("div",{children:e?Object(o.jsx)("h1",{children:"Loading..."}):Object(o.jsx)("div",{children:c.map((e=>Object(o.jsx)(b,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)))})})};var h=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/abot-us",children:Object(o.jsx)("h1",{children:"Hello"})}),Object(o.jsx)(a.a,{path:"/movie/:id",children:Object(o.jsx)(d,{})}),Object(o.jsx)(a.a,{path:"/",children:Object(o.jsx)(l,{})})]})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7634137b.chunk.js.map