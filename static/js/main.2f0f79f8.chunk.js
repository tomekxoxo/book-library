(this["webpackJsonpbook-library"]=this["webpackJsonpbook-library"]||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=n.n(o),a=n(9),c=n.n(a),l=(n(26),n(2)),u=n(6),d=n(3),s="ADD_BOOK",b="DELETE_BOOK",h="FILTER_BOOKS",f=n(12),j=Object(u.b)((function(e){return{filteredWord:e.filteredWord}}),(function(e){return{onFilterBooks:function(t){e(function(e){return{type:h,word:e}}(t))}}}))((function(e){return Object(r.jsx)("input",{type:"text",placeholder:"Filter by Title",value:e.filteredWord,onChange:function(t){return n=t.target.value,void e.onFilterBooks(n);var n}})}));function p(){var e=Object(l.a)(["\n  background-color: ",";\n  border-radius: 5px;\n  padding: 0.5rem;\n  border: none;\n  margin-top: 0.5rem;\n  cursor: pointer;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: block;\n  width: 100%;\n  max-width: 40rem;\n"]);return p=function(){return e},e}var O=d.a.button(p(),(function(e){return e.color})),v=function(e){return Object(r.jsx)(O,{color:e.color,type:e.type,onClick:e.clickAction,children:e.children})};function x(){var e=Object(l.a)(["\n  display: flex;\n  height: 27vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.5rem;\n  form {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    input {\n      flex-grow: 1;\n      padding: 0.5rem;\n      border: 2px solid black;\n      border-radius: 5px;\n    }\n  }\n  @media screen and (max-width: 320px) {\n    height: 35vh;\n  }\n"]);return x=function(){return e},e}var g=d.a.div(x()),m=function(e){var t=Object(o.useState)(""),n=Object(f.a)(t,2),i=n[0],a=n[1],c=Object(o.useState)(""),l=Object(f.a)(c,2),u=l[0],d=l[1],s=Object(o.useState)(""),b=Object(f.a)(s,2),h=b[0],p=b[1],O=function(t){var n=!1;e.books.forEach((function(e){e.title===t&&(alert("You have this book already"),n=!0)})),!n&&e.addBook(t,u,h)},x=function(){a(""),d(""),p("")};return Object(r.jsxs)(g,{children:[Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{required:!0,type:"text",placeholder:"Title",onChange:function(e){return a(e.target.value)},value:i}),Object(r.jsx)("input",{required:!0,type:"text",placeholder:"Author",onChange:function(e){return d(e.target.value)},value:u}),Object(r.jsx)("input",{required:!0,type:"number",placeholder:"Year of Release",onChange:function(e){return p(e.target.value)},value:h}),Object(r.jsx)(j,{})]}),Object(r.jsx)(v,{type:"submit",color:"#23272b",clickAction:function(){i.length>0&&u.length>0&&h?(O(i),x()):alert("Fill all inputs")},children:"add"})]})};function k(){var e=Object(l.a)(["\n  padding: 2rem 1rem;\n  border: 2px solid #000;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width:45rem;\n  max-height:300px;\n  h1, h2, h3{\n    padding-bottom:1rem;\n  }\n  @media screen and (min-width:768px){\n    max-width:35rem;\n  }\n"]);return k=function(){return e},e}var y=d.a.div(k()),w=function(e){return Object(r.jsxs)(y,{children:[Object(r.jsxs)("h1",{children:["Title: ",e.title]}),Object(r.jsxs)("h2",{children:["Author: ",e.author]}),Object(r.jsxs)("h3",{children:["Year: ",e.releaseYear]}),Object(r.jsx)(v,{color:"#c82333",clickAction:function(){return e.deleteBook(e.title)},children:"delete"})]})};function E(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n  \n  grid-gap: 1rem;\n  height: 73vh;\n  overflow: scroll;\n  overflow-x: hidden;\n  @media screen and (max-width:320px){\n    height: 65vh;\n  }\n"]);return E=function(){return e},e}function S(){var e=Object(l.a)(["\n  padding: 1rem;\n  height: 100vh;\n  background-color: #eee;\n  overflow-y: hidden;\n"]);return S=function(){return e},e}var B=d.a.div(S()),Y=d.a.div(E()),_=Object(u.b)((function(e){return{bookLib:e.books,filteredWord:e.filteredWord}}),(function(e){return{onAddBook:function(t,n,r){e(function(e,t,n){return{type:s,book:{title:e,author:t,releaseYear:n}}}(t,n,r))},onDeleteBook:function(t,n){e(function(e,t){var n=t.filter((function(t){return t.title!==e&&t}));return{type:b,library:n}}(t,n))}}}))((function(e){var t=function(t){e.onDeleteBook(t,e.bookLib)},n=e.bookLib.map((function(n){if(n.title.startsWith(e.filteredWord))return Object(r.jsx)(w,{title:n.title,author:n.author,releaseYear:n.releaseYear,deleteBook:t},n.title)}));return Object(r.jsxs)(B,{children:[Object(r.jsx)(Y,{children:n}),Object(r.jsx)(m,{addBook:e.onAddBook,books:e.bookLib})]})}));var A=function(){return Object(r.jsx)(_,{})},D=n(10),T=n(20),L=n(4),C={books:[{title:"Eloquent JavaScript, Second Edition",author:"Marijn Haverbeke",releaseYear:"2014"},{title:"Learning JavaScript Design Patterns",author:"Addy Osmani",releaseYear:"2012"},{title:"Speaking JavaScript",author:"Axel Rauschmayer",releaseYear:"2014"},{title:"Programming JavaScript Applications",author:"Eric Elliott",releaseYear:"2014"},{title:"Understanding ECMAScript 6",author:"Nicholas C. Zakas",releaseYear:"2016"},{title:"You Don't Know JS",author:"Kyle Simpson",releaseYear:"2015"},{title:"Git Pocket Guide",author:"Richard E. Silverman",releaseYear:"2013"},{title:"Designing Evolvable Web APIs with ASP.NET",author:"Glenn Block, et al.",releaseYear:"2014"}],filteredWord:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(L.a)(Object(L.a)({},e),{},{books:[].concat(Object(T.a)(e.books),[t.book])});case b:return Object(L.a)(Object(L.a)({},e),{},{books:t.library});case h:return Object(L.a)(Object(L.a)({},e),{},{filteredWord:t.word});default:return e}},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))},J=Object(D.b)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(r.jsx)(u.a,{store:J,children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})})}),document.getElementById("root")),F()}},[[34,1,2]]]);
//# sourceMappingURL=main.2f0f79f8.chunk.js.map