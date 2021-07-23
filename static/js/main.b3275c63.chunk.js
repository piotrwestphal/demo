(this["webpackJsonpsport-data-webapp"]=this["webpackJsonpsport-data-webapp"]||[]).push([[0],{353:function(e,t,a){},493:function(e,t,a){"use strict";a.r(t);var i,n=a(0),c=a.n(n),r=a(16),o=a.n(r),s=(a(353),a(306)),d=a.n(s),l=a(574),u=a(573),b=a(211),m=a(584),j=a(554),k=a(555),O=a(556),p=a(557),f=a(27),g=a.n(f),T=a(40),v=a(19),I=a(142),A=a(35),h=a(269),N=a(17);!function(e){e.ACCESS_USINGS="access-usings",e.BOOKINGS="bookings",e.LOGS="logs",e.TICKETS="tickets",e.TICKET_DETAILS="ticket-details",e.TICKET_INFO="ticket-info"}(i||(i={}));var x,y=a(577),C=a(312),S=a(316),w=a(496),K=a(497),P=a(498),E=a(270),B=a.n(E),D=a(6),F=Object(b.a)((function(e){return Object(m.a)({root:{display:"flex",margin:e.spacing(1),height:e.spacing(8)},button:{fontWeight:"bold",height:e.spacing(6),marginLeft:e.spacing(2)}})})),L=function(e){var t=e.label,a=e.onValue,i=e.disabled,c=e.error,r=F(),o=Object(n.useState)(!1),s=Object(v.a)(o,2),d=s[0],l=s[1],u=Object(n.useState)(""),b=Object(v.a)(u,2),m=b[0],j=b[1],k=function(){m?(l(!1),a(m)):l(!0)};return Object(D.jsxs)(y.a,{className:r.root,children:[Object(D.jsxs)(C.a,{disabled:i,children:[Object(D.jsx)(S.a,{children:t}),Object(D.jsx)(w.a,{error:d||!!c,onInput:function(e){j(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&k()}}),d&&Object(D.jsx)(K.a,{error:!0,children:"Pole jest wymagane"}),!!c&&Object(D.jsx)(K.a,{error:!0,children:c})]}),Object(D.jsx)(P.a,{className:r.button,variant:"contained",color:"primary",disabled:i,onClick:k,children:Object(D.jsx)(B.a,{})})]})},z=function(){var e=Object(N.g)(),t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],r=a[1],o=Object(I.a)(),s=Object(v.a)(o,2),d=s[0],l=s[1].loading,u=Object(n.useCallback)((function(e){return d({type:Object(A.n)(A.d),resource:i.TICKETS,payload:{filter:{ticketCode:e}}},{returnPromise:!0})}),[d]),b=Object(n.useCallback)(function(){var t=Object(T.a)(g.a.mark((function t(a){var n,c,o,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(""),t.prev=1,t.next=4,u(a);case 4:n=t.sent,c=n.total,o=Object(v.a)(n.data,1),s=o[0],c?1===c?e.push({pathname:"/".concat(i.TICKET_DETAILS,"/").concat(s.bookingId,"/show")}):e.push({pathname:"/".concat(i.TICKET_INFO),search:Object(h.stringify)({filter:JSON.stringify({ticketCode:a})})}):r("Nie ma biletu o takim kodzie"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),[u,e]);return Object(D.jsx)(L,{label:"Kod biletu",onValue:b,disabled:l,error:c})},U=Object(b.a)((function(e){return Object(m.a)({header:{textAlign:"center",letterSpacing:e.spacing(.2)}})})),M=function(){var e=U();return Object(D.jsxs)(j.a,{container:!0,spacing:1,children:[Object(D.jsx)(j.a,{item:!0,xs:12,children:Object(D.jsx)(k.a,{children:Object(D.jsx)(O.a,{className:e.header,title:"Witaj w aplikacji administracyjnej Sport Data"})})}),Object(D.jsx)(j.a,{item:!0,sm:6,xs:12,children:Object(D.jsxs)(k.a,{children:[Object(D.jsx)(O.a,{title:"Znajd\u017a u\u017cytkownika po kodzie biletu"}),Object(D.jsx)(p.a,{children:Object(D.jsx)(z,{})})]})})]})},R=a(26),Z=a(156),G=a(558),_=a(170),J=Object(R.a)(Object(R.a)({},Z.a),{},{palette:{primary:G.a,secondary:_.a},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Arial","sans-serif"].join(","),body1:{fontWeight:300},body2:{fontWeight:300},h5:{fontWeight:200}}}),W=a(7);!function(e){e.K="K",e.M="M",e.Z="Z",e.N="N",e.P="P",e.U="U",e.R="R"}(x||(x={}));var V,H,X=[{id:1,ticketCode:"A",ticketType:x.K,active:!0,bookingId:52815,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:2,ticketCode:"A",ticketType:x.K,active:!0,bookingId:52816,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:3,ticketCode:"010000011492",ticketType:x.K,active:!0,bookingId:52817,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:4,ticketCode:"411000006572",ticketType:x.K,active:!0,bookingId:52818,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:5,ticketCode:"871000006824",ticketType:x.K,active:!0,bookingId:52819,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:6,ticketCode:"370000011495",ticketType:x.K,active:!0,bookingId:52820,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:7,ticketCode:"450000011501",ticketType:x.K,active:!0,bookingId:52821,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:8,ticketCode:"630000011502",ticketType:x.K,active:!0,bookingId:52822,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:9,ticketCode:"020000011503",ticketType:x.K,active:!0,bookingId:52823,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:10,ticketCode:"310000011504",ticketType:x.K,active:!0,bookingId:52824,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],q={getList:function(e,t){return Promise.resolve({data:X,total:X.length})}},Q=[{id:1,firstname:"Marek",lastname:"Pies",pesel:"47120554776",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",ticketCode:"1234567890",ticketType:x.K},{id:2,firstname:"Janek",lastname:"Kru\u017cganek",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:3,firstname:"Wac\u0142aw",lastname:"Rymski",pesel:"9988711225",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:4,firstname:"Mirka",lastname:"Korze\u0144",pesel:"56483978659",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:5,firstname:"Tis",lastname:"Lomasz",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:6,firstname:"Bogdana",lastname:"Jaruzelska",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:7,firstname:"Jeremi",lastname:"Pomidor",pesel:"12345678900",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:8,firstname:"Roman",lastname:"Zoman",pesel:"13243567890",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:9,firstname:"Bacha",lastname:"Kaszalot",pesel:"98097612678",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K},{id:10,firstname:"Jadwiga",lastname:"Og\xf3rek",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:x.K}],Y={getList:function(e,t){return Promise.resolve({data:Q,total:Q.length})}};!function(e){e.NORMAL="NORMAL",e.AB="AB",e.INFIX="INFIX",e.SERVICE="SERVICE",e.POINTS="POINTS"}(V||(V={})),function(e){e.ADMIN="ADMIN",e.BAN="BAN",e.STORNO="STORNO",e.MISTAKE="MISTAKE"}(H||(H={}));var $,ee,te,ae,ie=[{id:1,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:x.K,active:!0,bookingId:55832,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:x.M,active:!0,bookingId:55832,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:H.STORNO},{id:2,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56459,ticketCode:"240000020972",ticketType:x.K,active:!0,bookingId:55852,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56460,ticketCode:"DDEAF42C",ticketType:x.M,active:!0,bookingId:55852,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:H.STORNO},{id:3,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:4,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:5,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:6,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:7,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:8,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:9,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:10,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",bookingType:V.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56479,ticketCode:"370000020991",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[1393],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:56480,ticketCode:"DDEAF42C",ticketType:x.K,active:!0,bookingId:55863,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null}],ne={getOne:function(e,t){var a=t.id,i=ie.find((function(e){return"".concat(e.id)===a}));return i?Promise.resolve({data:i}):Promise.reject(new Error)}},ce=a(243),re=function(e){if(!e)return{total:null};var t=e.split(" ")[1].split("-"),a=t[0],i=t[1].split("/"),n=i[0],c=i[1];return{rangeFrom:parseInt(a,10),rangeTo:parseInt(n,10),total:parseInt(c,10)}},oe={"Content-Type":"application/json"},se=function(){return Object(R.a)(Object(R.a)({},oe),{},{Authorization:"Bearer ".concat(localStorage.getItem("token"))})},de=function(e,t){return ce.a.fetchJson("".concat(e).concat(t),{method:"GET",headers:new Headers(se())}).then((function(e){return e.json}))},le=function(e,t){return ce.a.fetchJson("".concat(e).concat(t),{method:"GET",headers:new Headers(se())}).then((function(e){var t=e.headers,a=e.json;return Promise.resolve({data:a,range:re(t.get("Content-Range"))})}))},ue=function(e,t){return de(e,"/GetByConditions/".concat(t))},be="".concat("https://ticketapi.sportdata.pl","/api/v1"),me="".concat(be,"/Authorization/Authenticate"),je="".concat(be,"/ticketManagement/Bookings"),ke="".concat(be,"/ticketManagement/Customers"),Oe="".concat(be,"/ticketManagement/Events"),pe="".concat(be,"/ticketManagement/Logs/GetExtendedLogByConditions"),fe="".concat(be,"/ticketManagement/Tickets"),ge="".concat(be,"/ticketManagement/Variants"),Te={getList:function(){var e=Object(T.a)(g.a.mark((function e(t,a){var i,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.filter,n='t=>t.TicketCode=="'.concat(i.ticketCode,'"'),e.next=4,ue(fe,n);case 4:return c=e.sent,e.abrupt("return",Promise.resolve({data:c,total:c.length}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},ve={update:function(){var e=Object(T.a)(g.a.mark((function e(t,a){var i,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.data,e.next=3,t=je,c=i,ce.a.fetchJson(t,{method:"PATCH",body:JSON.stringify(c),headers:new Headers(se())}).then((function(e){return e.json}));case 3:return n=e.sent,e.abrupt("return",Promise.resolve({data:n}));case 5:case"end":return e.stop()}var t,c}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Ie={ticketCode:function(e){return'l=>l.TicketCode=="'.concat(e,'"')}},Ae={id:"l=>l.Id",date:"l=>l.Date",deviceName:"l=>l.Device.Name",ticketCode:"l=>l.TicketCode",bookingId:"l=>l.BookingId"},he=function(e){if(Object.keys(e).length){var t=Object(v.a)(Object.entries(e)[0],2),a=t[0],i=t[1];return function(e){return Ie[e]}(a)(i)}return"l=>true"},Ne={getList:function(){var e=Object(T.a)(g.a.mark((function e(t,a){var i,n,c,r,o,s,d,l,u,b,m,j,k,O;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.filter,n=a.sort,c=n.field,r=n.order,o=a.pagination,s=o.page,d=o.perPage,l=he(i),(u=[]).push("sortBy=".concat(Ae[c])),u.push("sortOrder=".concat(r)),u.push("rangeFrom=".concat(s*d-d)),u.push("rangeTo=".concat(s*d)),b=u.reduce((function(e,t){return"".concat(e,"&").concat(t)}),"/".concat(l,"?")),e.next=10,le(pe,b);case 10:return m=e.sent,j=m.data,k=m.range.total,O=j.map((function(e){return{id:e.id,date:e.date,deviceName:e.device.name,ticketCode:e.ticketCode,text:Object(v.a)(e.data,1)[0].text,bookingId:e.bookingId}})),e.abrupt("return",Promise.resolve({data:O,total:k||s*d+d}));case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},xe=($={},Object(W.a)($,i.ACCESS_USINGS,Te),Object(W.a)($,i.BOOKINGS,ve),Object(W.a)($,i.LOGS,Ne),Object(W.a)($,i.TICKETS,q),Object(W.a)($,i.TICKET_INFO,Y),Object(W.a)($,i.TICKET_DETAILS,ne),$),ye=function(e,t,a){return xe[t][Object(A.n)(e)](t,a)},Ce={login:function(){return Promise.resolve()},logout:function(){return Promise.resolve()},checkError:function(){return Promise.resolve()},checkAuth:function(){return Promise.resolve()},getPermissions:function(){return Promise.resolve()},getIdentity:function(){return Promise.resolve({id:"no-auth",fullName:"no-auth"})}},Se={login:function(e){var t,a,i=e.username,n=e.password;return(t=me,a={login:i,password:n},ce.a.fetchJson(t,{method:"POST",body:JSON.stringify(a),headers:new Headers(oe)}).then((function(e){return e.json}))).then((function(e){var t=e.token;localStorage.setItem("username",i),localStorage.setItem("token",t)}))},logout:function(){return localStorage.removeItem("username"),localStorage.removeItem("token"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("username"),localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()},getIdentity:function(){return Promise.resolve({id:"user",fullName:localStorage.getItem("username")})}},we=function(e){return new Map(e.map((function(e){return[e.id,e]})))},Ke=function(e,t,a,i){var n=we(e),c=we(t),r=we(a);return i.map((function(e){var t=n.get(e.bookingId),a=t.customerId,i=t.eventId;return function(e,t,a){var i=e.firstname,n=e.lastname,c=e.pesel,r=t.name;return{id:a.bookingId,firstname:i,lastname:n,pesel:c,eventName:r,ticketCode:a.ticketCode,ticketType:a.ticketType}}(c.get(a),r.get(i),e)}))},Pe=a(274),Ee=function(e){var t=Object(Pe.a)(e),a=t[0];return(t.slice(1)||[]).reduce((function(e,t){return"".concat(e,"||v.Id==").concat(t)}),"v=>v.Id==".concat(a))},Be=function(e,t){var a=function(e){return Array.from(new Set(e))}(t);return ue(e,Ee(a))},De={getList:function(){var e=Object(T.a)(g.a.mark((function e(t,a){var i,n,c,r,o,s,d,l,u,b,m,j,k,O;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.filter,n='t=>t.TicketCode=="'.concat(i.ticketCode,'"'),e.next=4,ue(fe,n);case 4:return c=e.sent,r=c.map((function(e){return e.bookingId})),e.next=8,Be(je,r);case 8:return o=e.sent,s=o.map((function(e){return e.customerId})),d=o.map((function(e){return e.eventId})),l=Be(ke,s),u=Be(Oe,d),e.next=15,Promise.all([l,u]);case 15:return b=e.sent,m=Object(v.a)(b,2),j=m[0],k=m[1],O=Ke(o,j,k,c),e.abrupt("return",Promise.resolve({data:O,total:O.length}));case 21:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Fe={getList:function(){var e=Object(T.a)(g.a.mark((function e(t,a){var i,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.filter,n='t=>t.TicketCode=="'.concat(i.ticketCode,'"'),e.next=4,ue(fe,n);case 4:return c=e.sent,e.abrupt("return",Promise.resolve({data:c,total:c.length}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Le=function(e,t,a,i,n){var c=e.id,r=e.disabled,o=e.type,s=e.activeFrom,d=e.activeTo,l=e.createdAt,u=e.modifiedAt,b=t.firstname,m=t.lastname,j=t.pesel;return{id:c,firstname:b,lastname:m,eventName:a.name,pesel:j,variantName:i.name,bookingType:o,activeFrom:s,activeTo:d,tickets:n,createdAt:l,modifiedAt:u,bookingDisabled:r}},ze={getOne:function(){var e=Object(T.a)(g.a.mark((function e(t,a){var i,n,c,r,o,s,d,l,u,b,m,j,k,O,p;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.id,e.next=3,de(je,"/".concat(i));case 3:return n=e.sent,c=n.customerId,r=n.eventId,o=n.variantId,s=de(ke,"/".concat(c)),d=de(Oe,"/".concat(r)),l=de(ge,"/".concat(o)),u=ue(fe,Ee(n.ticketsIds)),e.next=11,Promise.all([s,d,l,u]);case 11:return b=e.sent,m=Object(v.a)(b,4),j=m[0],k=m[1],O=m[2],p=m[3],e.abrupt("return",{data:Le(n,j,k,O,p)});case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Ue=(ee={},Object(W.a)(ee,i.ACCESS_USINGS,Te),Object(W.a)(ee,i.BOOKINGS,ve),Object(W.a)(ee,i.LOGS,Ne),Object(W.a)(ee,i.TICKETS,Fe),Object(W.a)(ee,i.TICKET_INFO,De),Object(W.a)(ee,i.TICKET_DETAILS,ze),ee),Me=function(e,t,a){return Ue[t][Object(A.n)(e)](t,a)},Re=a(560),Ze=a(575),Ge=a(559),_e=a(576),Je=a(74),We=a(561),Ve=a(3),He=a(172),Xe=["source"],qe=function(e){var t=e.source,a=Object(Ve.a)(e,Xe),i=Object(He.b)(),n=Object(R.a)(Object(R.a)({},i),{},Object(W.a)({},t,function(e,t){var a=e.substring(0,t),i=e.slice(-t),n=e.length-a.length-i.length;return"".concat(a).concat("*".repeat(n>0?n:0)).concat(i)}(i[t],2)));return Object(D.jsx)(Ge.a,Object(R.a)(Object(R.a)({},a),{},{record:n,source:t}))},Qe=function(){var e=Object(Re.a)(),t=e.loading,a=e.filterValues.ticketCode;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(y.a,{m:2,children:Object(D.jsxs)(Je.a,{variant:"h5",paragraph:!0,children:["Wyszukiwanie biletu po kodzie: ",a]})}),Object(D.jsx)(We.a,{}),Object(D.jsxs)(Ze.a,{loaded:!t,rowClick:function(e){return"".concat(i.TICKET_DETAILS,"/").concat(e,"/show")},children:[Object(D.jsx)(Ge.a,{label:"Imi\u0119",source:"firstname",sortable:!1}),Object(D.jsx)(Ge.a,{label:"Nazwisko",source:"lastname",sortable:!1}),Object(D.jsx)(qe,{label:"Pesel",source:"pesel",sortable:!1}),Object(D.jsx)(Ge.a,{label:"Bilet",source:"ticketCode",sortable:!1}),Object(D.jsx)(Ge.a,{label:"Wydarzenie",source:"eventName",sortable:!1})]})]})},Ye=function(e){var t=Object(N.h)().search;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(z,{}),!!t&&Object(D.jsx)(_e.a,Object(R.a)(Object(R.a)({actions:!1,pagination:!1},e),{},{children:Object(D.jsx)(Qe,{})}))]})},$e=a(570),et=a(289),tt=a(571),at=a(580),it=a(579),nt=a(587),ct=a(586),rt=a(500),ot=a(152),st=a(499);!function(e){e.BLOCK="BLOCK",e.UNBLOCK="UNBLOCK",e.DISABLED="DISABLED"}(ae||(ae={}));var dt,lt,ut=Object(b.a)((function(e){return Object(m.a)({button:{color:e.palette.common.white,marginLeft:e.spacing(1)}})})),bt=(te={},Object(W.a)(te,ae.BLOCK,{text:"Zablokuj bilet",params:H.ADMIN}),Object(W.a)(te,ae.UNBLOCK,{text:"Odblokuj bilet",params:null}),Object(W.a)(te,ae.DISABLED,{text:"Zablokuj bilet",disabled:!0}),te),mt=function(){var e=Object($e.a)().loading,t=Object(ot.a)(),a=Object(I.a)(),c=Object(v.a)(a,2),r=c[0],o=c[1].loading,s=Object(He.b)(),d=s.id,l=s.bookingDisabled,u=Object(n.useState)(bt.DISABLED),b=Object(v.a)(u,2),m=b[0],j=b[1],k=ut(),O=Object(st.a)();Object(n.useEffect)((function(){null===l?j(bt.BLOCK):l===H.ADMIN?j(bt.UNBLOCK):j(bt.DISABLED)}),[l]);var p=function(){var e=Object(T.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r({type:Object(A.n)(A.h),resource:i.BOOKINGS,payload:{data:{id:d,disabled:m.params}}},{returnPromise:!0});case 3:O(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t(null===e.t0||void 0===e.t0?void 0:e.t0.message,"error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(P.a,{disabled:!0,className:k.button,variant:"contained",color:"secondary",onClick:function(){O()},children:"Oznacz dost\u0119p jako wykorzystany"}),Object(D.jsx)(P.a,{disabled:e||(null===m||void 0===m?void 0:m.disabled)||o,className:k.button,variant:"contained",color:"secondary",onClick:p,children:m.text})]})},jt=(dt={},Object(W.a)(dt,V.NORMAL,"Bilet pojedynczy"),Object(W.a)(dt,V.AB,"Abonament"),Object(W.a)(dt,V.INFIX,"Infix"),Object(W.a)(dt,V.POINTS,"Points"),Object(W.a)(dt,V.SERVICE,"Karta serwisowa"),dt),kt=(lt={},Object(W.a)(lt,x.K,"Kod kreskowy"),Object(W.a)(lt,x.M,"Nr mifare"),Object(W.a)(lt,x.Z,"Nr dowodu"),Object(W.a)(lt,x.N,"Nr biletu"),Object(W.a)(lt,x.P,"Pesel"),Object(W.a)(lt,x.U,"Nr unique (125k)"),Object(W.a)(lt,x.R,"Nr rejestracyjny"),lt),Ot=function(e){return kt[e]},pt=function(e){return jt[e]},ft=Object(b.a)((function(e){return Object(m.a)({header:{letterSpacing:e.spacing(.2)},ticketBox:{display:"flex",flexDirection:"column",padding:e.spacing(1),marginLeft:e.spacing(1)},ticketField:{padding:e.spacing(0),margin:e.spacing(0),marginBottom:e.spacing(.5)}})})),gt=function(){var e=ft(),t=Object($e.a)().record;return Object(D.jsx)(y.a,{m:2,children:Object(D.jsxs)(Je.a,{className:e.header,variant:"h5",paragraph:!0,children:[null===t||void 0===t?void 0:t.firstname," ",null===t||void 0===t?void 0:t.lastname]})})},Tt=function(e){var t=e.mapper,a=e.source,i=t(Object(He.b)()[a]);return Object(D.jsx)(ct.a,{label:i})},vt=function(e){var t=e.label,a=ft(),i=(Object(He.b)().tickets||[]).map((function(e){var t=e.id,a=e.ticketType,i=e.createdAt;return{id:t,ticketCode:e.ticketCode,ticketType:Ot(a),createdAt:i}})).map((function(e){return Object(D.jsxs)(rt.a,{variant:"elevation",className:a.ticketBox,children:[Object(D.jsx)(et.a,{className:a.ticketField,label:"id",children:Object(D.jsx)(Ge.a,{className:a.ticketField,record:e,source:"id"})}),Object(D.jsx)(et.a,{className:a.ticketField,label:"Kod biletu",children:Object(D.jsx)(Ge.a,{className:a.ticketField,record:e,source:"ticketCode"})}),Object(D.jsx)(et.a,{className:a.ticketField,label:"Typ wej\u015bci\xf3wki",children:Object(D.jsx)(ct.a,{label:e.ticketType,className:a.ticketField})}),Object(D.jsx)(et.a,{className:a.ticketField,label:"Utworzono",children:Object(D.jsx)(tt.a,{className:a.ticketField,record:e,source:"createdAt",showTime:!0})})]},e.id)}));return Object(D.jsx)(et.a,{label:t,children:Object(D.jsx)(y.a,{display:"flex",flexWrap:"wrap",flexDirection:"row",children:i})})},It=function(e){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(at.a,Object(R.a)(Object(R.a)({},e),{},{children:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(gt,{}),Object(D.jsx)(We.a,{}),Object(D.jsx)(it.a,{syncWithLocation:!1,children:Object(D.jsxs)(nt.a,{label:"Bilet",children:[Object(D.jsx)(Ge.a,{label:"Impreza",source:"eventName"}),Object(D.jsx)(Ge.a,{label:"Pesel",source:"pesel"}),Object(D.jsx)(Ge.a,{label:"Wariant",source:"variantName"}),Object(D.jsx)(et.a,{label:"Rodzaj wej\u015bci\xf3wki",children:Object(D.jsx)(Tt,{source:"bookingType",mapper:pt})}),Object(D.jsx)(tt.a,{label:"Aktywny od",source:"activeFrom",emptyText:"N/A",showTime:!0}),Object(D.jsx)(tt.a,{label:"Aktywny do",source:"activeTo",emptyText:"N/A",showTime:!0}),Object(D.jsx)(vt,{label:"Wej\u015bci\xf3wki:"}),Object(D.jsx)(tt.a,{label:"Utworzono",source:"createdAt",showTime:!0}),Object(D.jsx)(tt.a,{label:"Zmodyfikowano",source:"modifiedAt",showTime:!0})]})}),Object(D.jsx)(We.a,{}),Object(D.jsx)(y.a,{p:1,display:"flex",justifyContent:"flex-end",children:Object(D.jsx)(mt,{})})]})}))})},At=a(582),ht=a(578),Nt=a(308),xt=function(){return Object(D.jsxs)(Ze.a,{children:[Object(D.jsx)(tt.a,{label:"Data",source:"date",showTime:!0}),Object(D.jsx)(Ge.a,{label:"Urz\u0105dzenie",source:"deviceName"}),Object(D.jsx)(Ge.a,{label:"Bilet",source:"ticketCode"}),Object(D.jsx)(Ge.a,{label:"Opis",source:"text",sortable:!1}),Object(D.jsx)(Ge.a,{label:"Rezerwacja",source:"bookingId"})]})},yt=function(e){return Object(D.jsx)(At.a,Object(R.a)(Object(R.a)({},e),{},{children:Object(D.jsx)(ht.a,{source:"ticketCode",alwaysOn:!0})}))},Ct=function(e){return Object(D.jsx)(_e.a,Object(R.a)(Object(R.a)({perPage:20,actions:!1,pagination:Object(D.jsx)(Nt.a,{rowsPerPageOptions:[20,50,100]}),filters:Object(D.jsx)(yt,{})},e),{},{children:Object(D.jsx)(xt,{})}))},St=function(){var e=function(e){switch(e){case"production":case"development":return{authProvider:Se,dataProvider:Me};default:return{authProvider:Ce,dataProvider:ye}}}("production"),t=e.authProvider,a=e.dataProvider;return Object(D.jsxs)(l.a,{theme:J,dashboard:M,authProvider:t,dataProvider:a,children:[Object(D.jsx)(u.a,{options:{label:"Bilety"},icon:d.a,name:i.TICKET_INFO,list:Ye}),Object(D.jsx)(u.a,{options:{label:"Wej\u015bci\xf3wka"},name:i.TICKET_DETAILS,show:It}),Object(D.jsx)(u.a,{options:{label:"Logi"},name:i.LOGS,list:Ct})]})},wt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,589)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(St,{})}),document.getElementById("root")),wt()}},[[493,1,2]]]);
//# sourceMappingURL=main.b3275c63.chunk.js.map