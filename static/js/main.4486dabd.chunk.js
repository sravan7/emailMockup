(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/arrow_back-24px.3bd6d7e4.svg"},50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},57:function(e,a,t){},61:function(e,a,t){e.exports=t.p+"static/media/inbox-24px.fb020c42.svg"},62:function(e,a,t){e.exports=t.p+"static/media/mail-24px.b25e5056.svg"},63:function(e,a,t){e.exports=t.p+"static/media/sync-24px.3485b63f.svg"},64:function(e,a,t){e.exports=t.p+"static/media/remove_red_eye-24px.e5b7cb1c.svg"},65:function(e,a,t){e.exports=t.p+"static/media/warning-24px.62d335b7.svg"},66:function(e,a,t){e.exports=t.p+"static/media/delete-24px.2fc9a828.svg"},67:function(e,a,t){"use strict";t.r(a);var n,l=t(0),o=t.n(l),c=t(10),r=t.n(c),s=(t(55),t(6)),i=(t(56),t(57),t(12)),m={"sravan@email.com":{email:"sravan@email.com",password:"1234",fullName:"sravan"},"prem@email.com":{email:"prem@email.com",password:"1234",fullName:"prem"},"bala@email.com":{email:"bala@email.com",password:"1234",fullName:"bala"},"vishnu@email.com":{email:"vishnu@email.com",password:"1234",fullName:"vishnu"},"naidu@email.com":{email:"naidu@email.com",password:"1234",fullName:"naidu"},"sai@email.com":{email:"sai@email.com",password:"1234",fullName:"sai"}},u=(8*Math.random()).toString(16).replace(".",""),d=(8*Math.random()).toString(16).replace(".",""),p=(n={},Object(i.a)(n,u,{mid:u,date:(new Date).toGMTString(),subject:"hello",body:"hi sravan from bala",fullName:"sravan",fromMail:"bala@email.com",to:["sravan@email.com","bala@email.com"],cc:[],unread:["sravan@email.com","bala@email.com"]}),Object(i.a)(n,d,{mid:d,date:(new Date).toGMTString(),subject:"hi",body:"hi sravan, bala from sravan",fullName:"sravan",fromMail:"sravan@email.com",to:["sravan@email.com"],cc:[],unread:["sravan@email.com","bala@email.com"]}),n),v=[{mid:u,toMail:"sravan@email.com"},{mid:d,toMail:"sravan@email.com"},{mid:d,toMail:"bala@email.com"}],b=t(43),f=t(95),g=t(99),E=Object(b.a)({palette:{primary:{main:"#00b494"},secondary:{main:"#4caf50"}}});var N=function(e){var a=Object.assign({},e);return console.log(a),Object(l.useEffect)((function(){}),[]),o.a.createElement("div",{className:"loginControls"},o.a.createElement(f.a,{theme:E},o.a.createElement(g.a,a)))},h=t(42),y=t(98);var j=function(e){return console.log(Object(h.a)({},e)),o.a.createElement("div",{className:"loginControls"},o.a.createElement(y.a,e,e.type))},w=function(e){return JSON.parse(window.localStorage.getItem(e))},x=function(e,a){return window.localStorage.setItem(e,JSON.stringify(a)),!0},O=function(e){var a=function(e,a){var t=w("users");if(Object.keys(t).includes(e)){var n=t[e];return n.password===a&&n}return!1}(e.email,e.password);return a?{isError:!1,value:a}:{isError:!0,value:"no user exists"}},S=function(e,a){var t=w("messages");console.log(t,e,a);w("toMails");var n,l=[];if("inbox"==e)for(var o=0,c=Object.values(t);o<c.length;o++){var r=c[o];console.log(r),(r.to.includes(a)||r.cc.includes(a))&&l.push(r)}if("sent"==e)for(var s=0,i=Object.values(t);s<i.length;s++){var m=i[s];console.log(m.fromMail,a),m.fromMail===a&&l.push(m)}return console.log(l),n=l,console.log(n.sort((function(e,a){return new Date(a.date)-new Date(e.date)}))),l=n.sort((function(e,a){return new Date(a.date)-new Date(e.date)}))},k=Object(b.a)({palette:{primary:{main:"#00b494"},secondary:{main:"#4caf50"}}});var C=function(e){var a,t=Object(l.useState)({isError:!1,value:""}),n=Object(s.a)(t,2),c=n[0],r=n[1];window.localStorage.getItem("users")||(window.localStorage.getItem("users")||window.localStorage.setItem("users",JSON.stringify(m)),window.localStorage.getItem("mesages")||window.localStorage.setItem("messages",JSON.stringify(p)),window.localStorage.getItem("toMails")||window.localStorage.setItem("toMails",JSON.stringify(v)));var u=["email","password"];return o.a.createElement("div",{className:"App-login"},o.a.createElement("form",{action:"none",onSubmit:function(a){a.preventDefault();var t={};u.map((function(e){var a=document.getElementById("login-"+e);t[e]=a.value})),console.log(t);var n=O(t);1==n.isError?r(n):e.handleLogin(n)}},o.a.createElement(f.a,{theme:k},o.a.createElement("div",{className:"login-header"},"Sign In"),u.map((function(e){return o.a.createElement(N,{id:"login-"+e,key:e,required:!0,type:e,name:e,autoFocus:"email"==e,label:e,color:"primary",variant:"outlined",fullWidth:!0})})),o.a.createElement(j,(a={id:"custom-button",variant:"outlined",color:"secondary",size:"medium"},Object(i.a)(a,"variant","contained"),Object(i.a)(a,"fullWidth",!0),Object(i.a)(a,"type","submit"),Object(i.a)(a,"value","Sign In"),Object(i.a)(a,"className","custom-button"),a)),c.isError?o.a.createElement("div",{className:"login-error"}," ",c.value," "):null)))};var M=function(e){return o.a.createElement("div",{className:"app-bar"},o.a.createElement("div",{className:"menu-icon",onClick:function(){document.querySelector(".app-bar").classList.toggle("app-bar-shrink"),document.querySelector(".extras-side-menu").classList.toggle("side-menu-push"),document.querySelector(".app-content").classList.toggle("app-content-shrink")}},"  "),o.a.createElement("div",{className:"app-search"},o.a.createElement("input",{id:"menuIcon",type:"text",name:"text",placeholder:"Search"})),o.a.createElement("div",{className:"inbox-count"}," ",o.a.createElement("span",{className:"inbox-count-num"}," ",e.unreadCount," ")),o.a.createElement("div",{className:"notification"},o.a.createElement("span",{className:"inbox-count-num"}," ",12," ")," "),o.a.createElement("div",{className:"app-logout",onClick:e.handleLogout}," "))};var I=function(e){return console.log(e),o.a.createElement("div",{className:"menu"},o.a.createElement("div",{className:"menu-content"},o.a.createElement("button",{className:"mail-compose-button",onClick:e.handleCompose}," Compose Mail"),o.a.createElement("div",{className:"menu-folders"},"Folders",o.a.createElement("div",{className:"inbox"===e.mailboxType?"menu-inbox active":"menu-inbox",onClick:function(){e.handleMailboxType("inbox")}},o.a.createElement("span",{className:"inbox-text"},o.a.createElement("img",{src:t(61)})," Inbox "),o.a.createElement("span",{className:"menu-inbox-count"},e.inboxCount)),o.a.createElement("div",{className:"sent"===e.mailboxType?"menu-inbox active":"menu-inbox",onClick:function(){e.handleMailboxType("sent")}},o.a.createElement("span",{className:"inbox-text"}," ",o.a.createElement("img",{src:t(62)})," Outbox"),o.a.createElement("span",{className:"menu-inbox-count"},e.outboxCount))),o.a.createElement("div",{className:"menu-categories"},"Catergories"),o.a.createElement("div",{className:"menu-labels"},"Labels")))};var D=function(){return o.a.createElement("div",{className:"extras-side-menu"}," ")},L=t(100),T=Object(b.a)({palette:{primary:{main:"#00b494"},secondary:{main:"#4caf50"}}});var P=function(e){var a=e.content,t=Object(l.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1];return o.a.createElement("li",{className:"mail-item",id:e.content.unread.includes(e.user)&&"inbox"===e.type?"unreadMail":"",key:a.mid},o.a.createElement(f.a,{theme:T},"  ",o.a.createElement(L.a,{type:"checkbox",className:"mail-item-checkbox",name:"delete",checked:c,onChange:function(e){e.stopPropagation&&e.stopPropagation(),console.log(e.target.checked),r(!c)},size:"small",value:a.mid,color:"primary"})," "),o.a.createElement("div",{className:"mail-item-group",onClick:function(a){e.handleReadPopup(e.content)}},o.a.createElement("div",{className:"mail-item-fname"}," ",a.fullName," "),o.a.createElement("div",{className:"mail-item-subject"}," ",a.subject," "),o.a.createElement("div",{className:"mail-item-date"}," ",new Date(a.date).toLocaleString()," ")))};var J=function(e){var a=Object(l.useState)("inbox"),n=Object(s.a)(a,2),c=n[0],r=n[1],i=Object(l.useState)(S(c,e.user)),m=Object(s.a)(i,2),u=m[0],d=m[1],p=function(){e.updateUnreadCount(u.filter((function(a){return a.unread.includes(e.user)})).length)};p(),c!==e.type&&(d(S(e.type,e.user)),p(),r(e.type));var v=function(a){a&&a.unread.includes(e.user)&&(!function(e,a){var t=w("messages"),n=t[e].unread;n=n.filter((function(e){return e!==a})),t[e].unread=n,x("messages",t)}(a.mid,e.user),console.log("soudnot"),d(S(e.type,e.user)),p()),e.handleReadPopup(a)};return o.a.createElement("div",{className:"app-section"},o.a.createElement("div",{className:"mail-header"},o.a.createElement("div",{className:"mail-header-helper"},o.a.createElement("div",{className:"read-count"},e.type,"(",u.length,")"),o.a.createElement("div",{className:"inbox-search"},o.a.createElement("input",{className:"search-field"}),o.a.createElement("button",{className:"search-button"},"Search"))),o.a.createElement("div",{className:"mail-header-tools"},o.a.createElement("div",{className:"mail-header-tool-section mail-header-tool"},o.a.createElement("img",{src:t(63),className:"mail-header-tool-refresh"}),o.a.createElement("img",{src:t(64),className:"mail-header-tool-eye"}),o.a.createElement("img",{src:t(65),className:"mail-header-tool-warning"}),o.a.createElement("img",{src:t(66),className:"mail-header-tool-delete",onClick:function(){!function(e){var a=w("messages"),t=!0,n=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){delete a[o.value]}}catch(r){n=!0,l=r}finally{try{t||null==c.return||c.return()}finally{if(n)throw l}}x("messages",a)}(Array.from(document.getElementsByName("delete")).filter((function(e){return e.checked})).map((function(e){return e.value}))),d(S(e.type,e.user)),p()}})),o.a.createElement("div",{className:"mail-header-tool-nav mail-header-tool"},o.a.createElement("img",{src:t(37),className:"mail-header-tool-back"}),o.a.createElement("img",{src:t(37),className:"mail-header-tool-fwd"})))),o.a.createElement("ul",{className:"mail-list"},u?u.map((function(a){return o.a.createElement(P,{key:a.mid,user:e.user,type:e.type,content:a,handleReadPopup:v})})):o.a.createElement("div",null,"ohoo this space is empty ")))},R=t(13);var q=function(e){var a=Object(l.useState)(),t=Object(s.a)(a,2),n=t[0];return t[1],o.a.createElement("div",{className:"popup-to-wrapper"},o.a.createElement("div",{className:"role-section"},e.type,":"),o.a.createElement("div",{className:"popup-to"},e.mails.map((function(a,t){return o.a.createElement("span",{key:a,className:"to-accepted"},o.a.createElement("span",{className:"mail-text"},a),o.a.createElement("img",{src:"/close-24px.svg",className:"removeIt",onClick:function(){e.handleRemove(e.type,a)}}))})),o.a.createElement("input",{id:"to",className:"textarea-to",onKeyUp:function(a){if(13===a.keyCode||188===a.keyCode){console.log(a.target.value,a.target.value);var t=a.target.value.replace(/\s|,/gi,"");/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)&&e.handleAccept(e.type,t),a.target.value=""}else console.log(a.target.value)},value:n})))};var A=function(e){var a=Object(l.useState)([]),t=Object(s.a)(a,2),n=t[0],c=t[1],r=Object(l.useState)([]),i=Object(s.a)(r,2),m=i[0],u=i[1],d=Object(l.useState)(),p=Object(s.a)(d,2),v=p[0],b=(p[1],Object(l.useState)()),f=Object(s.a)(b,2),g=f[0],E=(f[1],function(a){a&&(a.preventDefault(),a.stopPropagation()),e.handleClose()}),N=function(e,a){console.log(e,a),"to"===e&&c(n.filter((function(e){return e!==a}))),"cc"===e&&u(m.filter((function(e){return e!==a})))},h=function(e,a){"to"===e&&(console.log(a),c([].concat(Object(R.a)(n),[a]))),"cc"===e&&u([].concat(Object(R.a)(m),[a]))};return o.a.createElement("div",{className:"app-overlay",onClick:E},o.a.createElement("div",{className:"overlay-content"},o.a.createElement("div",{className:"popup-box",onClick:function(e){e.stopPropagation()}},"inbox"===e.type?o.a.createElement("div",{className:"popup-from"},"From",o.a.createElement("div",{className:"from",contentEditable:!0})):null,o.a.createElement(q,{type:"to",handleRemove:N,handleAccept:h,mails:n}),o.a.createElement(q,{type:"cc",handleRemove:N,handleAccept:h,mails:m}),o.a.createElement("div",{className:"popup-to-wrapper"},o.a.createElement("div",{className:"role-section"},"sub:"),o.a.createElement("div",{className:"popup-to"},o.a.createElement("input",{id:"popup-subject",className:"textarea-to",value:v}))),o.a.createElement("div",{className:"popup-body",id:"body-wrapper"},o.a.createElement("textarea",{id:"popup-body",className:"textarea-to",value:g,defaultValue:""}," ")),o.a.createElement("div",{className:"popup-handle"},o.a.createElement("button",{className:"close",onClick:E},"Close"),o.a.createElement("button",{className:"send",onClick:function(){if(n.length){var a=document.querySelector("#popup-body").value,t=document.querySelector("#popup-subject").value,l={mid:(8*Math.random()).toString(16).replace(".",""),date:(new Date).toGMTString(),subject:t,body:a,fullName:e.fullName,fromMail:e.user,to:n,cc:m,unread:[].concat(Object(R.a)(n),Object(R.a)(m))};console.log(l),function(e){var a=w("messages");return a[e.mid]=e,console.log(a),x("messages",a),!0}(l)&&E()}}},"Send")))))};var U=function(e){var a=Object(l.useState)(),t=Object(s.a)(a,2);return t[0],t[1],o.a.createElement("div",{className:"popup-to-wrapper"},o.a.createElement("div",{className:"role-section"},e.type,":"),o.a.createElement("div",{className:"popup-from"},e.mails.map((function(e,a){return o.a.createElement("span",{key:e,className:"to-accepted"},o.a.createElement("span",{className:"mail-text"},e))}))))};var B=function(e){console.log(e);var a=Object(l.useState)(e.mailData.to),t=Object(s.a)(a,2),n=t[0],c=(t[1],Object(l.useState)(e.mailData.cc)),r=Object(s.a)(c,2),i=r[0],m=(r[1],Object(l.useState)(e.mailData.subject)),u=Object(s.a)(m,2),d=u[0],p=(u[1],Object(l.useState)(e.mailData.body)),v=Object(s.a)(p,2),b=v[0],f=(v[1],Object(l.useState)([e.mailData.fromMail])),g=Object(s.a)(f,2),E=g[0],N=(g[1],function(a){a&&(a.preventDefault(),a.stopPropagation()),e.handleClose()});return o.a.createElement("div",{className:"app-overlay",onClick:N},o.a.createElement("div",{className:"overlay-content"},o.a.createElement("div",{className:"popup-box",onClick:function(e){e.stopPropagation()}},o.a.createElement(U,{type:"from",mails:E}),o.a.createElement(U,{type:"to",mails:n}),o.a.createElement(U,{type:"cc",mails:i}),o.a.createElement("div",{className:"popup-to-wrapper"},o.a.createElement("div",{className:"role-section"},"sub:"),o.a.createElement("div",{className:"popup-from"},o.a.createElement("input",{disabled:!0,id:"popup-subject",className:"textarea-to",value:d}))),o.a.createElement("div",{className:"popup-body",id:"body-wrapper"},o.a.createElement("textarea",{disabled:!0,id:"popup-body",className:"textarea-to",value:b}," ")),o.a.createElement("div",{className:"popup-from-handle"},o.a.createElement("button",{className:"close",onClick:N},"Close")))))};var W=function(e){var a=Object(l.useState)(!1),t=Object(s.a)(a,2),n=t[0],c=t[1],r=Object(l.useState)(!1),i=Object(s.a)(r,2),m=i[0],u=i[1],d=Object(l.useState)({}),p=Object(s.a)(d,2),v=p[0],b=p[1],f=Object(l.useState)("inbox"),g=Object(s.a)(f,2),E=g[0],N=g[1],h=Object(l.useState)(0),y=Object(s.a)(h,2),j=y[0],w=y[1],x=function(e){console.log(e),e&&b(e),console.log(v),u(!m)},O=function(){c(!n)};return o.a.createElement("div",{className:"dashboard"},o.a.createElement(D,null),o.a.createElement(M,{handleLogout:e.handleLogout,unreadCount:j}),o.a.createElement("div",{className:"app-content"},o.a.createElement(I,{handleCompose:O,mailboxType:E,handleMailboxType:function(e){e!==E&&N(e)},inboxCount:0,outboxCount:0}),o.a.createElement(J,{updateUnreadCount:function(e){w(e)},handleReadPopup:x,type:E,user:e.userData.email})),n?o.a.createElement(A,{type:"compose",handleClose:O,fullName:e.userData.fullName,user:e.userData.email}):null,m?o.a.createElement(B,{type:E,handleClose:x,mailData:v}):null)};var F=function(){var e={isLogin:!1,value:""};window.localStorage.getItem("accessToken")&&(e={isLogin:!0,value:JSON.parse(window.localStorage.getItem("currentUser"))});var a=Object(l.useState)(e),t=Object(s.a)(a,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"App"},n.isLogin?o.a.createElement(W,{handleLogout:function(){window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("currentUser"),c({isLogin:!1,value:""})},userData:n.value}):o.a.createElement(C,{handleLogin:function(e){window.localStorage.setItem("accessToken",e.value.email),window.localStorage.setItem("currentUser",JSON.stringify(e.value)),console.log(e),c({isLogin:!0,value:e.value})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.4486dabd.chunk.js.map