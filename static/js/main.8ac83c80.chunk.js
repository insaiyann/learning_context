(this.webpackJsonplearning_context=this.webpackJsonplearning_context||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(11),s=n.n(r),a=(n(17),n(2)),i=n(5),j=n(6),u=n(9),b=n(8),l=n(0),O=Object(c.createContext)(),d=(c.Component,Object(c.createContext)()),h=(c.Component,n(4)),x=n(12),p=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(x.a)(e),[{title:t.book.title,author:t.book.author,id:Math.floor(1e4*Math.random())}]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.id}));default:return e}},f=Object(c.createContext)(),v=function(e){var t=Object(c.useReducer)(p,[],(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),n=Object(h.a)(t,2),o=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),Object(l.jsx)(f.Provider,{value:{books:o,dispatch:r},children:e.children})},m=function(){var e=Object(c.useContext)(f).books;return Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{children:"The Best BookList"}),Object(l.jsxs)("p",{children:["Currently you have to read ",e.length," books..."]})]})},k=function(){var e=Object(c.useContext)(f).dispatch,t=Object(c.useState)(""),n=Object(h.a)(t,2),o=n[0],r=n[1],s=Object(c.useState)(""),a=Object(h.a)(s,2),i=a[0],j=a[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:o,author:i}}),r(""),j("")},children:[Object(l.jsx)("input",{onChange:function(e){r(e.target.value)},type:"text",value:o,placeholder:"Enter Book name"}),Object(l.jsx)("input",{onChange:function(e){j(e.target.value)},type:"text",value:i,placeholder:"Enter Author name"}),Object(l.jsx)("button",{type:"submit",children:"add new book"})]})},g=function(e){var t=e.book,n=Object(c.useContext)(f).dispatch;return Object(l.jsxs)("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:t.id})},children:[Object(l.jsx)("div",{className:"title",children:t.title}),Object(l.jsx)("div",{className:"author",children:t.author})]},t.id)},C=function(){var e=Object(c.useContext)(f).books;return e.length?Object(l.jsxs)("div",{className:"book-list",children:[Object(l.jsx)("ul",{children:e.map((function(e){return Object(l.jsx)(g,{book:e})}))}),Object(l.jsx)(k,{})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"empty",children:"No books to read,Hello free time"}),Object(l.jsx)(k,{})]})};var y=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(v,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(C,{})]})})};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8ac83c80.chunk.js.map