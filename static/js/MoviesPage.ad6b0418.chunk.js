"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{409:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(439),i=n(87),u=n(689),c=n(184);function a(t){var e=t.title,n=t.id,a=(0,i.lr)(),o=(0,r.Z)(a,2),s=o[0];o[1];return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{to:"/goit-react-hw-05-movies/movies/".concat(n),state:{location:(0,u.TH)().pathname,search:s.get("query")},children:e})})}function o(t){var e=t.movies;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,c.jsx)(a,{title:n,id:e},e)}))})})}},918:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(433),i=n(439),u=n(791),c=n(87),a=n(689),o=n(409),s=n(732),f="MoviesPage_form__vECho",l=n(184);function h(){var t=(0,u.useState)(""),e=(0,i.Z)(t,2),n=e[0],h=e[1],m=(0,u.useState)([]),v=(0,i.Z)(m,2),d=v[0],j=v[1],p=(0,c.lr)(),x=(0,i.Z)(p,2),g=x[0],Z=x[1],k=(0,a.TH)().state||g.get("query");function _(t){if(t){Z("query=".concat(t)),j([]);try{s.Z.fetchMoviesWithQuery(t).then((function(t){t.data.results.map((function(t){var e=t.id,n=t.title;return j((function(t){return[].concat((0,r.Z)(t),[{id:e,title:n}])}))}))}))}catch(e){}}}(0,u.useEffect)((function(){k&&g.set("query",k),k&&_(k)}),[]),(0,u.useEffect)((function(){j([])}),[k]);return(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault()},children:[(0,l.jsx)("input",{onChange:function(t){h(t.target.value)},value:n}),(0,l.jsx)("button",{onClick:function(){return _(n)},children:"Search"})]}),0!==d.length&&(0,l.jsx)(o.Z,{movies:d})]})}}}]);
//# sourceMappingURL=MoviesPage.ad6b0418.chunk.js.map