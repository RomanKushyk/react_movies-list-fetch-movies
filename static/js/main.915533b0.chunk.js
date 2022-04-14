(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),i=(c(14),c(15),c(1)),a=(c(16),c(17),c(0)),r=Object(i.memo)((function(e){var t=e.movie;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("figure",{className:"image is-4by3",children:Object(a.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)("div",{className:"media",children:[Object(a.jsx)("div",{className:"media-left",children:Object(a.jsx)("figure",{className:"image is-48x48",children:Object(a.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(a.jsx)("div",{className:"media-content",children:Object(a.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(a.jsxs)("div",{className:"content",children:[t.Plot,Object(a.jsx)("br",{})]})]})]})})),o=c(3),l=Object(i.createContext)({query:"",setQuery:function(){},foundMovie:null,setFoundMovie:function(){},storedMovies:[],setStoredMovies:function(){},searchError:!1,setSearchError:function(){}}),j=function(e){var t=e.children,c=Object(i.useState)(""),s=Object(o.a)(c,2),n=s[0],r=s[1],j=Object(i.useState)(null),d=Object(o.a)(j,2),u=d[0],b=d[1],m=Object(i.useState)([]),v=Object(o.a)(m,2),O=v[0],h=v[1],x=Object(i.useState)(!1),f=Object(o.a)(x,2),p={query:n,setQuery:r,foundMovie:u,setFoundMovie:b,storedMovies:O,setStoredMovies:h,searchError:f[0],setSearchError:f[1]};return Object(a.jsx)(l.Provider,{value:p,children:t})},d=Object(i.memo)((function(){var e=Object(i.useContext)(l).storedMovies;return Object(a.jsx)("div",{className:"movies",children:e.map((function(e){return Object(a.jsx)(r,{movie:e},e.imdbID)}))})})),u=c(9),b=c(8),m=c(6),v=c.n(m),O=(c(20),function(e){return t="&t=".concat(e),fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=3dfb3239").concat(t),c).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}));var t,c});var h=Object(i.memo)((function(){var e=Object(i.useContext)(l),t=e.query,c=e.setQuery,s=e.foundMovie,n=e.setFoundMovie,o=e.searchError,j=e.setSearchError,d=e.setStoredMovies,m=e.storedMovies,h=Object(i.useCallback)((function(){c("")}),[]),x=Object(i.useCallback)((function(e){var t=e.target.value;c(t),j(!1)}),[]),f=Object(i.useCallback)(Object(b.a)(v.a.mark((function e(){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=15;break}return j(!1),n(null),e.prev=3,e.next=6,O(t);case 6:"False"===(null===(c=e.sent)||void 0===c?void 0:c.Response)?j(!0):n(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),j(!0);case 13:e.next=16;break;case 15:j(!0);case 16:case"end":return e.stop()}}),e,null,[[3,10]])}))),[t]),p=Object(i.useCallback)((function(e){var t;e.preventDefault(),h(),s&&(t=s,-1===m.findIndex((function(e){return e.imdbID===t.imdbID})))&&(d((function(e){return[].concat(Object(u.a)(e),[s])})),n(null))}),[s,m]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{className:"find-movie",onSubmit:p,children:[Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(o&&"is-danger"),value:t,onChange:x})}),o&&Object(a.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(a.jsxs)("div",{className:"field is-grouped",children:[Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("button",{type:"button",className:"button is-light",onClick:f,children:"Find a movie"})}),Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"title",children:"Preview"}),!!s&&Object(a.jsx)(r,{movie:s})]})]})})),x=function(){return Object(a.jsx)(j,{children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)("div",{className:"page-content",children:Object(a.jsx)(d,{})}),Object(a.jsx)("div",{className:"sidebar",children:Object(a.jsx)(h,{})})]})})};n.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.915533b0.chunk.js.map