(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,n){},30:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(7),r=n.n(i),s=(n(27),n(22)),o=n(3),l=n.n(o),u=n(5),d=n(4),b=n(21),j=n.n(b),m=n(9),h=(n(29),n.p+"static/media/Marvel-Logo.8518dc47.png"),f=n.p+"static/media/heart.c412cbae.png",p=n.p+"static/media/heartSelected.556c78a5.png",O=(n(30),n(1)),v=function(e){var t=e.handleClose,n=e.show,c=e.children,a=e.modalRef;return n?Object(O.jsx)("div",{className:"modal display-block",children:Object(O.jsxs)("section",{ref:a,className:"modal-main",children:[c,Object(O.jsx)("button",{className:"close-button",type:"button",onClick:t,children:"X"})]})}):null},x=n(19),g=n.n(x),_=Object({NODE_ENV:"production",PUBLIC_URL:"/marvel-comics",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_TIMESTAMP:"1",REACT_APP_PUBLIC_KEY:"9da847fb87e8c1e31bfae1fa51906f01",REACT_APP_MD5:"689a9c62dc362df7e8db6b60f55024ff",REACT_APP_SERVICE_ID:"service_q1ia4y8",REACT_APP_TEMPLATE_ID:"template_0motpnh",REACT_APP_USER_ID:"user_qNF3jXMxjhMJCEKtAaoL7"}),C=_.REACT_APP_TIMESTAMP,E=_.REACT_APP_PUBLIC_KEY,P=_.REACT_APP_MD5,S=g.a.create({baseURL:"https://gateway.marvel.com/v1/public",params:{ts:C,apikey:E,hash:P}}),N=n(20),k=n.n(N),T=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.send("".concat("service_q1ia4y8"),"".concat("template_0motpnh"),{to:"".concat(t),message:"".concat(n)},"".concat("user_qNF3jXMxjhMJCEKtAaoL7"));case 2:return c=e.sent,e.abrupt("return",200===c.status);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e,t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),o=Object(d.a)(r,2),b=o[0],x=o[1],g=Object(c.useState)(0),_=Object(d.a)(g,2),C=_[0],E=_[1],P=Object(c.useState)(""),N=Object(d.a)(P,2),k=N[0],A=N[1],R=Object(c.useState)(0),y=Object(d.a)(R,2),w=y[0],D=y[1],I=Object(c.useState)(""),L=Object(d.a)(I,2),M=L[0],q=L[1],F=Object(c.useState)(!1),K=Object(d.a)(F,2),U=K[0],B=K[1],J=Object(c.useState)(!1),W=Object(d.a)(J,2),H=W[0],X=W[1],V="Imagem n\xe3o encontrada!",Y=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get(t,{params:{titleStartsWith:k}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[k]),z=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),G=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,T(M,ce());case 4:m.b.success("E-mail enviado"),x([]),q(""),B(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Erro ao enviar o e-mail");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Q=Object(c.useCallback)(Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="/comics?offset=".concat(C),e.prev=1,B(!0),!k){e.next=9;break}return e.next=6,Y(t);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,z(t);case 11:e.t0=e.sent;case 12:n=e.t0,c=n.data,i(c.data.results),B(!1),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),i([]);case 21:case"end":return e.stop()}}),e,null,[[1,18]])}))),[C,k,Y,z]),Z=Object(c.useRef)();!function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(c.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))}(Z,(function(){H&&X(!1)})),Object(c.useEffect)((function(){if(0===k.length||k.length>=3){var e=setTimeout((function(){C>=1?E(0):Q()}),500);return function(){clearTimeout(e)}}}),[k]),Object(c.useEffect)((function(){Q()}),[C]);var $=function(e){X(!0),D(e)},ee=function(e){return b.length>0&&b.some((function(t){return t.id===e}))},te=function(e){var t=b,n=null===a||void 0===a?void 0:a.find((function(t){return t.id===e}));n&&t.push({id:n.id,description:n.description,thumbnail:n.thumbnail,title:n.title}),x(Object(s.a)(t))},ne=function(e){var t=b.filter((function(t){return t.id!==e}));x(t)},ce=function(){return b.map((function(e){return"\n        <p>\n          Title: ".concat(e.title,'\n        </p>\n        <img \n          src="').concat(e.thumbnail.path,".").concat(e.thumbnail.extension,'" \n          alt="').concat(e.title,'"\n          style="width: 12rem;"\n        />\n        ').concat(e.description?"<p>\n        Description:\n        ".concat(e.description,"\n        </p>"):"","\n      ")}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"div-logo",children:Object(O.jsx)("img",{className:"logo",alt:V,src:h})}),Object(O.jsxs)("div",{className:"div-send-email-button",children:[Object(O.jsx)("input",{value:M,placeholder:"Digite o seu e-mail",onChange:function(e){q(e.target.value)}}),Object(O.jsx)("button",{disabled:!M||U||!/\S+@\S+\.\S+/.test(M)||!b.length,onClick:G,children:"Enviar e-mail"})]})]}),Object(O.jsx)("div",{className:"filter",children:Object(O.jsx)("input",{placeholder:"Digite ao menos 3 caracteres!",value:k,onChange:function(e){A(e.target.value)}})}),U&&Object(O.jsx)("div",{className:"spinner",children:Object(O.jsx)(j.a,{color:"red",loading:U,css:"\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n",size:150})}),!U&&Object(O.jsx)("div",{className:"container-comics",children:Object(O.jsx)("ul",{role:"tablist",className:"list-comics",children:a.map((function(e,t){return Object(O.jsxs)("li",{className:"container-comic ".concat(ee(e.id)?"hq-selected":""),children:[Object(O.jsx)("img",{className:"comic-image",alt:V,src:"".concat(e.thumbnail.path,"/portrait_incredible.").concat(e.thumbnail.extension)}),Object(O.jsx)("div",{role:"button",tabIndex:0,onKeyPress:function(e){return function(e,t){return e.keyCode,$(t)}(e,t)},onClick:function(){$(t)},className:"description",children:e.title}),Object(O.jsx)("div",{className:"select ".concat(U?"display-none":""),children:Object(O.jsx)("img",{className:"heart",alt:V,onClick:function(){ee(e.id)?ne(e.id):te(e.id)},src:ee(e.id)?p:f})})]},e.id)}))})}),a.length>0&&Object(O.jsxs)("div",{className:"container-pagination",children:[Object(O.jsx)("button",{disabled:0===C||U,className:"hq-button",onClick:function(){E((function(e){return e-20}))},children:"<"}),Object(O.jsx)("div",{className:"pagination",children:Object(O.jsx)("p",{children:C?C/20+1:1})}),Object(O.jsx)("button",{disabled:U,className:"".concat(U," ? '' : hq-button"),onClick:function(){E((function(e){return e+20}))},children:">"})]}),Object(O.jsxs)(v,{modalRef:Z,show:H,handleClose:function(){return X(!1)},children:[Object(O.jsx)("div",{className:"modal-comics"}),Object(O.jsxs)("div",{className:"hq-info",children:[a.length?Object(O.jsx)("img",{alt:V,src:"".concat(a[w].thumbnail.path,"/portrait_incredible.").concat(a[w].thumbnail.extension)}):"",Object(O.jsxs)("div",{className:"hq-info-text",children:[Object(O.jsx)("p",{children:a.length?a[w].title:""}),Object(O.jsx)("p",{children:a.length?a[w].description:""}),Object(O.jsx)("button",{className:"select-hq-button",onClick:function(){var e,t,n;ee(null===(e=a[w])||void 0===e?void 0:e.id)?(ne(null===(t=a[w])||void 0===t?void 0:t.id),X(!1)):(te(null===(n=a[w])||void 0===n?void 0:n.id),X(!1))},children:ee(null===(e=a[w])||void 0===e?void 0:e.id)?"Remover da lista":"Selecionar"})]})]})]}),Object(O.jsx)(m.a,{})]})},R=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(A,{})})};var y=function(){return Object(O.jsx)(R,{})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),w()}},[[59,1,2]]]);
//# sourceMappingURL=main.527a81af.chunk.js.map