(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{29:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i.n(c),n=i(14),a=i.n(n),r=i(9),o=i(2),j=i(1);var m=function(){const{id:e}=Object(o.f)();return Object(c.useEffect)((()=>{(async()=>{const t=await(await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e))).json();console.log(t)})()}),[]),Object(j.jsx)("h1",{children:"Detail"})},_=i(8),l=i.n(_);var v=function(e){let{id:t,coverImg:i,title:c,year:s,summary:n,genres:a}=e;return Object(j.jsxs)("div",{className:l.a.movie,children:[Object(j.jsx)("img",{src:i,alt:c,className:l.a.movie__img}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:l.a.movie__title,children:Object(j.jsx)(r.b,{to:"/movie/".concat(t),children:c})}),Object(j.jsx)("h3",{className:l.a.movie__year,children:s}),Object(j.jsx)("p",{children:n.length>235?"".concat(n.slice(0,235),"..."):n}),Object(j.jsx)("ul",{className:l.a.movie__genres,children:a.map((e=>Object(j.jsx)("li",{children:e},e)))})]})]})};var d=function(){const[e,t]=Object(c.useState)(!0),[i,s]=Object(c.useState)([]);return Object(c.useEffect)((()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();s(e.data.movies),t(!1)})()}),[]),Object(j.jsx)("div",{children:e?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)("div",{children:i.map((e=>Object(j.jsx)(v,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)))})})};var b=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/abot-us",children:Object(j.jsx)("h1",{children:"Hello"})}),Object(j.jsx)(o.a,{path:"/movie/:id",children:Object(j.jsx)(m,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(d,{})})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))},8:function(e,t,i){e.exports={movie:"Movie_movie__1FRHD",movie__img:"Movie_movie__img__3GQpC",movie__title:"Movie_movie__title__3vXtp",movie__year:"Movie_movie__year__3W4Mz",movie__genres:"Movie_movie__genres__2oYJB"}}},[[29,1,2]]]);
//# sourceMappingURL=main.aa6bd853.chunk.js.map