(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(7),i=c.n(s),a=(c(13),c(0));function j(e){return Object(a.jsx)("header",{children:Object(a.jsx)("nav",{className:"teal lighten-1",children:Object(a.jsxs)("div",{className:"nav-wrapper container",children:[Object(a.jsx)("a",{href:"#",className:"brand-logo",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(a.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"})]})})})}function l(){return Object(a.jsx)("footer",{className:"page-footer teal lighten-1",children:Object(a.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," \u041d\u043e\u0432\u0438\u043a\u043e\u0432\u0430 \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430"]})})}var d=c(8),o=c(2),b=c(3);function h(e){return Object(a.jsxs)("div",{className:"cart-icon",onClick:e.toggleShow,children:[Object(a.jsx)("i",{className:"material-icons",children:"shopping_cart"}),e.length?Object(a.jsx)("span",{children:e.length}):null]})}function O(e){return Object(n.useEffect)((function(){var t=setTimeout(e.hideAlert,2e3);return function(){return clearTimeout(t)}}),[e.text]),Object(a.jsx)("div",{className:"show-alert",children:e.text})}function u(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.quantity}),Object(a.jsx)("td",{children:e.price}),Object(a.jsx)("td",{children:e.price*e.quantity}),Object(a.jsx)("td",{children:Object(a.jsx)("i",{className:"material-icons cart-item-delete",onClick:function(){return e.removeFromCart(e.id)},children:"close"})})]})}function x(e){var t=e.items.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(a.jsxs)("div",{className:"cart-modal",children:[Object(a.jsx)("i",{className:"material-icons cart-modal-close",onClick:e.toggleShow,children:"close"}),Object(a.jsx)("h5",{className:"red-text text-lighten-1",children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430"}),e.items.length?Object(a.jsxs)("table",{className:"striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(a.jsx)("th",{children:"\u0426\u0435\u043d\u0430"}),Object(a.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430"}),Object(a.jsx)("th",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}),Object(a.jsxs)("tbody",{children:[e.items.map((function(t){return Object(a.jsx)(u,Object(o.a)(Object(o.a)({},t),{},{removeFromCart:e.removeFromCart}),t.id)})),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{colSpan:"3",children:"\u0418\u0442\u043e\u0433\u043e"}),Object(a.jsx)("th",{children:t}),Object(a.jsx)("th",{children:"\u0440\u0443\u0431."})]})]})]}):Object(a.jsx)("p",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})]})}function m(){return Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"indeterminate"})})}function f(e){var t=e.id,c=e.name,n=e.price,r=e.images,s=e.appendToCart,i={id:t,name:c,price:n};return Object(a.jsxs)("div",{id:"product-"+t,className:"card",children:[Object(a.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(a.jsx)("img",{className:"activator",src:r.icon,alt:""})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:c}),Object(a.jsxs)("p",{children:["\u0426\u0435\u043d\u0430: ",n," \u0440\u0443\u0431."]})]}),Object(a.jsxs)("div",{className:"card-action",children:[Object(a.jsx)("button",{className:"btn-small",onClick:function(){return s(i,1)},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(a.jsx)("button",{className:"btn-small right",children:"\u0411\u043e\u043b\u044c\u0448\u0435"})]})]})}function p(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),j=Object(b.a)(i,2),l=j[0],d=j[1];return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/items/list?lang=en",{headers:{Authorization:"bc04de82-72586ecb-11b725bb-07653935"}}).then((function(e){return e.json()})).then((function(e){e.items&&s(e.items.slice(0,24)),d(!1)}))}),[]),Object(a.jsx)("div",{className:"items",children:l?Object(a.jsx)(m,{}):r.length?r.map((function(t){return Object(a.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{appendToCart:e.appendToCart}),t.id)})):Object(a.jsx)("p",{children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})})}function v(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),j=i[0],l=i[1],u=Object(n.useState)(null),m=Object(b.a)(u,2),f=m[0],v=m[1],g=function(){return l(!j)};return Object(a.jsxs)("main",{className:"container",children:[Object(a.jsx)(h,{length:c.length,toggleShow:g}),f&&Object(a.jsx)(O,{text:f,hideAlert:function(){return v(null)}}),Object(a.jsx)(p,{appendToCart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=c.findIndex((function(t){return t.id===e.id}));if(n<0){var s=Object(o.a)(Object(o.a)({},e),{},{quantity:t});r([].concat(Object(d.a)(c),[s]))}else{var i=Object(o.a)(Object(o.a)({},c[n]),{},{quantity:c[n].quantity+t}),a=c.slice();a.splice(n,1,i),r(a)}v(e.name+" \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")}}),j?Object(a.jsx)(x,{items:c,toggleShow:g,removeFromCart:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)}}):null]})}function g(){return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(v,{}),Object(a.jsx)(l,{})]})}i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.19ac091c.chunk.js.map