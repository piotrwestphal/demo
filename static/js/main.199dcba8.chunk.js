(this["webpackJsonpsport-data-webapp"]=this["webpackJsonpsport-data-webapp"]||[]).push([[0],{353:function(e,t,a){},493:function(e,t,a){"use strict";a.r(t);var n,c=a(0),i=a.n(c),r=a(17),s=a.n(r),o=(a(353),a(306)),d=a.n(o),u=a(574),l=a(573),b=a(211),m=a(584),p=a(554),j=a(555),k=a(556),O=a(557),f=a(15),v=a.n(f),g=a(27),T=a(19),y=a(151),I=a(142),h=a(36),x=a(269),N=a(18);!function(e){e.ACCESS_USINGS="access-usings",e.BOOKINGS="bookings",e.LOGS="logs",e.TICKETS="tickets",e.TICKET_DETAILS="ticket-details",e.TICKET_INFO="ticket-info"}(n||(n={}));var A,C=a(577),S=a(312),w=a(316),P=a(496),E=a(497),D=a(498),K=a(270),B=a.n(K),F=a(6),L=Object(b.a)((function(e){return Object(m.a)({root:{display:"flex",margin:e.spacing(1),height:e.spacing(8)},button:{fontWeight:"bold",height:e.spacing(6),marginLeft:e.spacing(2)}})})),M=function(e){var t=e.label,a=e.onValue,n=e.disabled,i=e.error,r=L(),s=Object(c.useState)(!1),o=Object(T.a)(s,2),d=o[0],u=o[1],l=Object(c.useState)(""),b=Object(T.a)(l,2),m=b[0],p=b[1],j=function(){m?(u(!1),a(m)):u(!0)};return Object(F.jsxs)(C.a,{className:r.root,children:[Object(F.jsxs)(S.a,{disabled:n,children:[Object(F.jsx)(w.a,{children:t}),Object(F.jsx)(P.a,{error:d||!!i,onInput:function(e){p(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&j()}}),d&&Object(F.jsx)(E.a,{error:!0,children:"Pole jest wymagane"}),!!i&&Object(F.jsx)(E.a,{error:!0,children:i})]}),Object(F.jsx)(D.a,{className:r.button,variant:"contained",color:"primary",disabled:n,onClick:j,children:Object(F.jsx)(B.a,{})})]})},U=function(){var e=Object(N.g)(),t=Object(y.a)(),a=Object(c.useState)(""),i=Object(T.a)(a,2),r=i[0],s=i[1],o=Object(I.a)(),d=Object(T.a)(o,2),u=d[0],l=d[1].loading,b=Object(c.useCallback)((function(e){return u({type:Object(h.n)(h.d),resource:n.TICKETS,payload:{filter:{ticketCode:e}}},{returnPromise:!0})}),[u]),m=Object(c.useCallback)(function(){var a=Object(g.a)(v.a.mark((function a(c){var i,r,o,d;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(""),a.prev=1,a.next=4,b(c);case 4:i=a.sent,r=i.total,o=Object(T.a)(i.data,1),d=o[0],r?1===r?e.push({pathname:"/".concat(n.TICKET_DETAILS,"/").concat(d.bookingId,"/show")}):e.push({pathname:"/".concat(n.TICKET_INFO),search:Object(x.stringify)({filter:JSON.stringify({ticketCode:c})})}):s("Nie ma biletu o takim kodzie"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t(null===a.t0||void 0===a.t0?void 0:a.t0.message,"error");case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}(),[b,e,t]);return Object(F.jsx)(M,{label:"Kod biletu",onValue:m,disabled:l,error:r})},z=Object(b.a)((function(e){return Object(m.a)({header:{textAlign:"center",letterSpacing:e.spacing(.2)}})})),R=function(){var e=z();return Object(F.jsxs)(p.a,{container:!0,spacing:1,children:[Object(F.jsx)(p.a,{item:!0,xs:12,children:Object(F.jsx)(j.a,{children:Object(F.jsx)(k.a,{className:e.header,title:"Witaj w aplikacji administracyjnej Sport Data"})})}),Object(F.jsx)(p.a,{item:!0,sm:6,xs:12,children:Object(F.jsxs)(j.a,{children:[Object(F.jsx)(k.a,{title:"Znajd\u017a u\u017cytkownika po kodzie biletu"}),Object(F.jsx)(O.a,{children:Object(F.jsx)(U,{})})]})})]})},Z=a(29),G=a(156),_=a(558),J=a(170),W=Object(Z.a)(Object(Z.a)({},G.a),{},{palette:{primary:_.a,secondary:J.a},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Arial","sans-serif"].join(","),body1:{fontWeight:300},body2:{fontWeight:300},h5:{fontWeight:200}}}),V=a(7);!function(e){e.K="K",e.M="M",e.Z="Z",e.N="N",e.P="P",e.U="U",e.R="R"}(A||(A={}));var H,Q,X=[{id:1,ticketCode:"A",ticketType:A.K,active:!0,bookingId:52815,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:2,ticketCode:"A",ticketType:A.K,active:!0,bookingId:52816,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:3,ticketCode:"010000011492",ticketType:A.K,active:!0,bookingId:52817,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:4,ticketCode:"411000006572",ticketType:A.K,active:!0,bookingId:52818,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:5,ticketCode:"871000006824",ticketType:A.K,active:!0,bookingId:52819,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:6,ticketCode:"370000011495",ticketType:A.K,active:!0,bookingId:52820,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:7,ticketCode:"450000011501",ticketType:A.K,active:!0,bookingId:52821,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:8,ticketCode:"630000011502",ticketType:A.K,active:!0,bookingId:52822,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:9,ticketCode:"020000011503",ticketType:A.K,active:!0,bookingId:52823,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"},{id:10,ticketCode:"310000011504",ticketType:A.K,active:!0,bookingId:52824,accessUsingsIds:[],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054"}],q={getList:function(e,t){return Promise.resolve({data:X,total:X.length})}},Y=[{id:1,firstname:"Marek",lastname:"Pies",pesel:"47120554776",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",ticketCode:"1234567890",ticketType:A.K},{id:2,firstname:"Janek",lastname:"Kru\u017cganek",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:3,firstname:"Wac\u0142aw",lastname:"Rymski",pesel:"9988711225",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:4,firstname:"Mirka",lastname:"Korze\u0144",pesel:"56483978659",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:5,firstname:"Tis",lastname:"Lomasz",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:6,firstname:"Bogdana",lastname:"Jaruzelska",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:7,firstname:"Jeremi",lastname:"Pomidor",pesel:"12345678900",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:8,firstname:"Roman",lastname:"Zoman",pesel:"13243567890",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:9,firstname:"Bacha",lastname:"Kaszalot",pesel:"98097612678",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K},{id:10,firstname:"Jadwiga",lastname:"Og\xf3rek",pesel:"47120554776",eventName:"POGO\u0143 SZCZECIN 20/21",ticketCode:"1234567890",ticketType:A.K}],$={getList:function(e,t){return Promise.resolve({data:Y,total:Y.length})}};!function(e){e.NORMAL="NORMAL",e.AB="AB",e.INFIX="INFIX",e.SERVICE="SERVICE",e.POINTS="POINTS"}(H||(H={})),function(e){e.ADMIN="ADMIN",e.BAN="BAN",e.STORNO="STORNO",e.MISTAKE="MISTAKE"}(Q||(Q={}));var ee,te,ae=[{id:1,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:Q.STORNO},{id:2,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:Q.STORNO},{id:3,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:4,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:5,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:6,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:7,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:8,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:9,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null},{id:10,firstname:"Andrzej",lastname:"Nawrot",eventName:"Podbeskidzie Bielsko-Bia\u0142a Sparing",pesel:"72052000192",variantName:"Normalny E1x",accessesIds:[10],bookingType:H.NORMAL,activeFrom:null,activeTo:null,tickets:[{id:56424,ticketCode:"060000020917",ticketType:A.K,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"},{id:56425,ticketCode:"DDEAF42C",ticketType:A.M,accessUsings:[],createdAt:"2021-07-15T08:50:27.2054"}],createdAt:"2021-07-15T08:50:27.2054",modifiedAt:"2021-07-15T08:50:27.2054",bookingDisabled:null}],ne={getOne:function(e,t){var a=t.id,n=ae.find((function(e){return"".concat(e.id)===a}));return n?Promise.resolve({data:n}):Promise.reject(new Error)}},ce={updateMany:function(){var e=Object(g.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({data:[1]}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),create:function(){var e=Object(g.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({data:{id:1}}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},ie={update:function(){var e=Object(g.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({data:{id:1}}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},re=[{id:1,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:52815,deviceName:"Device name",text:"MF"},{id:2,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:52816,deviceName:"Device name",text:"MF"},{id:3,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:1111,deviceName:"Device name",text:"MF"},{id:4,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:11112,deviceName:"Device name",text:"MF"},{id:5,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:16612,deviceName:"Device name",text:"MF"},{id:6,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:167782,deviceName:"Device name",text:"MF"},{id:7,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:122782,deviceName:"Device name",text:"MF"},{id:8,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:189782,deviceName:"Device name",text:"MF"},{id:9,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:183332,deviceName:"Device name",text:"MF"},{id:10,date:"2021-07-15T08:50:27.2054",ticketCode:"A",bookingId:656565,deviceName:"Device name",text:"MF"}],se={getList:function(e,t){return Promise.resolve({data:re,total:re.length})}},oe=(ee={},Object(V.a)(ee,n.ACCESS_USINGS,ce),Object(V.a)(ee,n.BOOKINGS,ie),Object(V.a)(ee,n.LOGS,se),Object(V.a)(ee,n.TICKETS,q),Object(V.a)(ee,n.TICKET_INFO,$),Object(V.a)(ee,n.TICKET_DETAILS,ne),ee),de=function(e,t,a){return oe[t][Object(h.n)(e)](t,a)},ue={login:function(){return Promise.resolve()},logout:function(){return Promise.resolve()},checkError:function(){return Promise.resolve()},checkAuth:function(){return Promise.resolve()},getPermissions:function(){return Promise.resolve()},getIdentity:function(){return Promise.resolve({id:"no-auth",fullName:"no-auth"})}},le=a(243),be=function(e){if(!e)return{total:0};var t=e.split(" ")[1].split("-"),a=t[0],n=t[1].split("/"),c=n[0],i=n[1];return{rangeFrom:parseInt(a,10),rangeTo:parseInt(c,10),total:parseInt(i,10)}},me={"Content-Type":"application/json"},pe=function(){return Object(Z.a)(Object(Z.a)({},me),{},{Authorization:"Bearer ".concat(localStorage.getItem("token"))})},je=function(e,t,a){return le.a.fetchJson(e,{method:"POST",body:JSON.stringify(t),headers:new Headers(a)}).then((function(e){return e.json}))},ke=function(e,t){return le.a.fetchJson("".concat(e).concat(t),{method:"GET",headers:new Headers(pe())}).then((function(e){return e.json}))},Oe=function(e,t){return le.a.fetchJson("".concat(e).concat(t),{method:"GET",headers:new Headers(pe())}).then((function(e){var t=e.json,a=e.headers;return Promise.resolve({data:t,range:be(a.get("content-range"))})}))},fe=function(e,t){return ke(e,"/GetByConditions/".concat(t))},ve=function(e,t){return le.a.fetchJson(e,{method:"PATCH",body:JSON.stringify(t),headers:new Headers(pe())}).then((function(e){return e.json}))},ge="".concat("https://ticketapi.sportdata.pl","/api/v1"),Te="".concat(ge,"/ticketManagement/AccessUsings"),ye="".concat(ge,"/Authorization/Authenticate"),Ie="".concat(ge,"/ticketManagement/Bookings"),he="".concat(ge,"/ticketManagement/Customers"),xe="".concat(ge,"/ticketManagement/Events"),Ne="".concat(ge,"/ticketManagement/Logs/GetExtendedLogByConditions"),Ae="".concat(ge,"/ticketManagement/Tickets"),Ce="".concat(ge,"/ticketManagement/Variants"),Se={login:function(e){var t,a,n=e.username,c=e.password;return(t=ye,a={login:n,password:c},je(t,a,me)).then((function(e){var t=e.token;localStorage.setItem("username",n),localStorage.setItem("token",t)}))},logout:function(){return localStorage.removeItem("username"),localStorage.removeItem("token"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("username"),localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()},getIdentity:function(){return Promise.resolve({id:"user",fullName:localStorage.getItem("username")})}},we=function(e){return new Map(e.map((function(e){return[e.id,e]})))},Pe=function(e){return Array.from(new Set(e))},Ee=function(e,t,a,n){var c=we(e),i=we(t),r=we(a);return n.map((function(e){var t=c.get(e.bookingId),a=t.customerId,n=t.eventId;return function(e,t,a){var n=e.firstname,c=e.lastname,i=e.pesel,r=t.name;return{id:a.bookingId,firstname:n,lastname:c,pesel:i,eventName:r,ticketCode:a.ticketCode,ticketType:a.ticketType}}(i.get(a),r.get(n),e)}))},De=a(274),Ke=function(e){var t=Object(De.a)(e),a=t[0];return(t.slice(1)||[]).reduce((function(e,t){return"".concat(e,"||v.Id==").concat(t)}),"v=>v.Id==".concat(a))},Be=function(e,t){var a=Pe(t);return fe(e,Ke(a))},Fe={getList:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c,i,r,s,o,d,u,l,b,m,p,j,k;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filter,c='t=>t.TicketCode=="'.concat(n.ticketCode,'"'),e.next=4,fe(Ae,c);case 4:return i=e.sent,r=i.map((function(e){return e.bookingId})),e.next=8,Be(Ie,r);case 8:return s=e.sent,o=s.map((function(e){return e.customerId})),d=s.map((function(e){return e.eventId})),u=Be(he,o),l=Be(xe,d),e.next=15,Promise.all([u,l]);case 15:return b=e.sent,m=Object(T.a)(b,2),p=m[0],j=m[1],k=Ee(s,p,j,i),e.abrupt("return",Promise.resolve({data:k,total:k.length}));case 21:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Le={getList:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filter,c='t=>t.TicketCode=="'.concat(n.ticketCode,'"'),e.next=4,fe(Ae,c);case 4:return i=e.sent,e.abrupt("return",Promise.resolve({data:i,total:i.length}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Me=function(e,t,a,n,c,i){var r=e.id,s=e.disabled,o=e.type,d=e.activeFrom,u=e.activeTo,l=e.createdAt,b=e.modifiedAt,m=t.firstname,p=t.lastname,j=t.pesel,k=a.name,O=n.name,f=n.accessesIds,v=we(i);return{id:r,firstname:m,lastname:p,eventName:k,pesel:j,variantName:O,accessesIds:f,bookingType:o,activeFrom:d,activeTo:u,tickets:c.map((function(e){return function(e,t){return{id:e.id,ticketCode:e.ticketCode,ticketType:e.ticketType,createdAt:e.createdAt,accessUsings:e.accessUsingsIds.map((function(e){return t.get(e)}))}}(e,v)})),createdAt:l,modifiedAt:b,bookingDisabled:s}},Ue=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(Ae,Ke(t));case 2:if(a=e.sent,!(n=a.flatMap((function(e){return e.accessUsingsIds}))).length){e.next=10;break}return e.next=7,fe(Te,Ke(Pe(n)));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=[];case 11:return c=e.t0,e.abrupt("return",{tickets:a,accessUsings:c});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze={getOne:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c,i,r,s,o,d,u,l,b,m,p,j,k,O,f,g;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.id,e.next=3,ke(Ie,"/".concat(n));case 3:return c=e.sent,i=c.customerId,r=c.eventId,s=c.variantId,o=ke(he,"/".concat(i)),d=ke(xe,"/".concat(r)),u=ke(Ce,"/".concat(s)),l=Ue(c.ticketsIds),e.next=11,Promise.all([o,d,u,l]);case 11:return b=e.sent,m=Object(T.a)(b,4),p=m[0],j=m[1],k=m[2],O=m[3],f=O.tickets,g=O.accessUsings,e.abrupt("return",{data:Me(c,p,j,k,f,g)});case 20:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Re={update:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.data,e.next=3,ve(Ie,n);case 3:return c=e.sent,e.abrupt("return",Promise.resolve({data:c}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()};!function(e){e.IN="IN",e.OUT="OUT",e.INFO="INFO"}(te||(te={}));var Ze,Ge,_e,Je,We={updateMany:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.ids,c=n.map((function(e){return{id:e,active:!1}})).map((function(e){return ve(Te,e)})),e.next=4,Promise.all(c);case 4:return i=e.sent,e.abrupt("return",Promise.resolve({data:i.map((function(e){return e.id}))}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),create:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c,i,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.data,c=n.ticketIds,i=n.accessIds,r=n.verifierDeviceId,s=i.flatMap((function(e){return c.map((function(t){return{date:(new Date).toISOString(),direction:te.IN,active:!0,accessId:e,ticketId:t,verifierDeviceId:r}}))})),e.next=5,je(Te,s,pe());case 5:return e.abrupt("return",Promise.resolve({data:{id:0}}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Ve={ticketCode:function(e){return'l=>l.TicketCode=="'.concat(e,'"')}},He={id:"l=>l.Id",date:"l=>l.Date",deviceName:"l=>l.Device.Name",ticketCode:"l=>l.TicketCode",bookingId:"l=>l.BookingId"},Qe=function(e){return Object.keys(e).length?Object.entries(e).map((function(e){var t=Object(T.a)(e,2),a=t[0],n=t[1];return function(e){return Ve[e]}(a)(n)})).reduce((function(e,t){return"".concat(e,"||").concat(t)})):"l=>true"},Xe={getList:function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c,i,r,s,o,d,u,l,b,m,p,j,k,O;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filter,c=a.sort,i=c.field,r=c.order,s=a.pagination,o=s.page,d=s.perPage,u=Qe(n),(l=[]).push("sortBy=".concat(He[i])),l.push("sortOrder=".concat(r)),l.push("rangeFrom=".concat(o*d-d)),l.push("rangeTo=".concat(o*d)),b=l.reduce((function(e,t){return"".concat(e,"&").concat(t)})),m="/".concat(u,"?").concat(b),e.next=11,Oe(Ne,m);case 11:return p=e.sent,j=p.data,k=p.range.total,O=j.map((function(e){return{id:e.id,date:e.date,deviceName:e.device.name,ticketCode:e.ticketCode,text:Object(T.a)(e.data,1)[0].text,bookingId:e.bookingId}})),e.abrupt("return",Promise.resolve({data:O,total:k}));case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},qe=(Ze={},Object(V.a)(Ze,n.ACCESS_USINGS,We),Object(V.a)(Ze,n.BOOKINGS,Re),Object(V.a)(Ze,n.LOGS,Xe),Object(V.a)(Ze,n.TICKETS,Le),Object(V.a)(Ze,n.TICKET_INFO,Fe),Object(V.a)(Ze,n.TICKET_DETAILS,ze),Ze),Ye=function(e,t,a){return qe[t][Object(h.n)(e)](t,a)},$e=a(560),et=a(575),tt=a(559),at=a(576),nt=a(74),ct=a(561),it=a(3),rt=a(172),st=["source"],ot=function(e){var t=e.source,a=Object(it.a)(e,st),n=Object(rt.b)(),c=Object(Z.a)(Object(Z.a)({},n),{},Object(V.a)({},t,function(e,t){var a=e.substring(0,t),n=e.slice(-t),c=e.length-a.length-n.length;return"".concat(a).concat("*".repeat(c>0?c:0)).concat(n)}(n[t],2)));return Object(F.jsx)(tt.a,Object(Z.a)(Object(Z.a)({},a),{},{record:c,source:t}))},dt=function(){var e=Object($e.a)(),t=e.loading,a=e.filterValues.ticketCode;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(C.a,{m:2,children:Object(F.jsxs)(nt.a,{variant:"h5",paragraph:!0,children:["Wyszukiwanie biletu po kodzie: ",a]})}),Object(F.jsx)(ct.a,{}),Object(F.jsxs)(et.a,{loaded:!t,rowClick:function(e){return"".concat(n.TICKET_DETAILS,"/").concat(e,"/show")},children:[Object(F.jsx)(tt.a,{label:"Imi\u0119",source:"firstname",sortable:!1}),Object(F.jsx)(tt.a,{label:"Nazwisko",source:"lastname",sortable:!1}),Object(F.jsx)(ot,{label:"Pesel",source:"pesel",sortable:!1}),Object(F.jsx)(tt.a,{label:"Bilet",source:"ticketCode",sortable:!1}),Object(F.jsx)(tt.a,{label:"Wydarzenie",source:"eventName",sortable:!1})]})]})},ut=function(e){var t=Object(N.h)().search;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(U,{}),!!t&&Object(F.jsx)(at.a,Object(Z.a)(Object(Z.a)({actions:!1,pagination:!1},e),{},{children:Object(F.jsx)(dt,{})}))]})},lt=a(580),bt=a(579),mt=a(587),pt=a(289),jt=a(571),kt=a(586),Ot=(Ge={},Object(V.a)(Ge,H.NORMAL,"Bilet pojedynczy"),Object(V.a)(Ge,H.AB,"Abonament"),Object(V.a)(Ge,H.INFIX,"Infix"),Object(V.a)(Ge,H.POINTS,"Points"),Object(V.a)(Ge,H.SERVICE,"Karta serwisowa"),Ge),ft=(_e={},Object(V.a)(_e,A.K,"Kod kreskowy"),Object(V.a)(_e,A.M,"Nr mifare"),Object(V.a)(_e,A.Z,"Nr dowodu"),Object(V.a)(_e,A.N,"Nr biletu"),Object(V.a)(_e,A.P,"Pesel"),Object(V.a)(_e,A.U,"Nr unique (125k)"),Object(V.a)(_e,A.R,"Nr rejestracyjny"),_e),vt=function(e){return ft[e]},gt=function(e){return Ot[e]},Tt=a(570),yt=Object(b.a)((function(e){return Object(m.a)({header:{letterSpacing:e.spacing(.2)}})})),It=function(){var e=yt(),t=Object(Tt.a)().record;return Object(F.jsx)(C.a,{m:2,children:Object(F.jsxs)(nt.a,{className:e.header,variant:"h5",paragraph:!0,children:[null===t||void 0===t?void 0:t.firstname," ",null===t||void 0===t?void 0:t.lastname]})})},ht=a(500),xt=Object(b.a)((function(e){return Object(m.a)({ticketBox:{display:"flex",flexDirection:"column",padding:e.spacing(1),marginLeft:e.spacing(1)},ticketField:{padding:e.spacing(0),margin:e.spacing(0),marginBottom:e.spacing(.5)}})})),Nt=function(e){var t=e.label,a=xt(),n=(Object(rt.b)().tickets||[]).map((function(e){var t=e.id,a=e.ticketType,n=e.createdAt;return{id:t,ticketCode:e.ticketCode,ticketType:vt(a),createdAt:n}})).map((function(e){return Object(F.jsxs)(ht.a,{variant:"elevation",className:a.ticketBox,children:[Object(F.jsx)(pt.a,{className:a.ticketField,label:"id",children:Object(F.jsx)(tt.a,{className:a.ticketField,record:e,source:"id"})}),Object(F.jsx)(pt.a,{className:a.ticketField,label:"Kod biletu",children:Object(F.jsx)(tt.a,{className:a.ticketField,record:e,source:"ticketCode"})}),Object(F.jsx)(pt.a,{className:a.ticketField,label:"Typ wej\u015bci\xf3wki",children:Object(F.jsx)(kt.a,{label:e.ticketType,className:a.ticketField})}),Object(F.jsx)(pt.a,{className:a.ticketField,label:"Utworzono",children:Object(F.jsx)(jt.a,{className:a.ticketField,record:e,source:"createdAt",showTime:!0})})]},e.id)}));return Object(F.jsx)(pt.a,{label:t,children:Object(F.jsx)(C.a,{display:"flex",flexWrap:"wrap",flexDirection:"row",children:n})})},At=a(499);!function(e){e.BLOCK="BLOCK",e.UNBLOCK="UNBLOCK",e.DISABLED="DISABLED"}(Je||(Je={}));var Ct=function(e){var t=e.accessesIds,a=e.tickets.map((function(e){return e.id}));return{type:Object(h.n)(h.a),resource:n.ACCESS_USINGS,payload:{data:{ticketIds:a,accessIds:t,verifierDeviceId:1}}}},St=function(e){var t=e.tickets.flatMap((function(e){return e.accessUsings})).filter((function(e){return e.active})).map((function(e){return e.id}));return{type:Object(h.n)(h.i),resource:n.ACCESS_USINGS,payload:{ids:t}}},wt={type:Je.DISABLED,text:"Oznacz dost\u0119p jako wykorzystany (N/A)"},Pt=function(e,t){var a=t.type;switch(a){case Je.BLOCK:return{type:a,text:"Oznacz dost\u0119p jako wykorzystany",mutateQuery:Ct};case Je.UNBLOCK:return{type:a,text:"Zwolnij dost\u0119p",mutateQuery:St};case Je.DISABLED:return wt;default:throw new Error}},Et=Object(b.a)((function(e){return Object(m.a)({button:{color:e.palette.common.white,marginLeft:e.spacing(1)}})})),Dt=function(){var e=Et(),t=Object(y.a)(),a=Object(Tt.a)().loading,n=Object(c.useReducer)(Pt,wt),i=Object(T.a)(n,2),r=i[0],s=r.type,o=r.text,d=r.mutateQuery,u=i[1],l=Object(rt.b)(),b=Object(I.a)(),m=Object(T.a)(b,2),p=m[0],j=m[1].loading,k=Object(At.a)();Object(c.useEffect)((function(){l.tickets.some((function(e){return e.accessUsings.some((function(e){return e.active}))}))?u({type:Je.UNBLOCK}):u({type:Je.BLOCK})}),[l]);var O=function(){var e=Object(g.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=null===d||void 0===d?void 0:d(l),e.next=4,p(a,{returnPromise:!0});case 4:k(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(null===e.t0||void 0===e.t0?void 0:e.t0.message,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(D.a,{disabled:s===Je.DISABLED||a||j,className:e.button,variant:"contained",color:"secondary",onClick:O,children:o})},Kt={type:Je.DISABLED,text:"Zablokuj bilet (N/A)"},Bt=function(e,t){var a=t.type;switch(a){case Je.BLOCK:return{type:a,text:"Zablokuj bilet",mutateParam:Q.ADMIN};case Je.UNBLOCK:return{type:a,text:"Odblokuj bilet",mutateParam:null};case Je.DISABLED:return Kt;default:throw new Error}},Ft=Object(b.a)((function(e){return Object(m.a)({button:{color:e.palette.common.white,marginLeft:e.spacing(1)}})})),Lt=function(){var e=Ft(),t=Object(y.a)(),a=Object(Tt.a)().loading,i=Object(c.useReducer)(Bt,Kt),r=Object(T.a)(i,2),s=r[0],o=s.type,d=s.text,u=s.mutateParam,l=r[1],b=Object(rt.b)(),m=b.id,p=b.bookingDisabled,j=Object(I.a)(),k=Object(T.a)(j,2),O=k[0],f=k[1].loading,x=Object(At.a)();Object(c.useEffect)((function(){null===p?l({type:Je.BLOCK}):p===Q.ADMIN?l({type:Je.UNBLOCK}):l({type:Je.DISABLED})}),[p]);var N=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O({type:Object(h.n)(h.h),resource:n.BOOKINGS,payload:{data:{id:m,disabled:u}}},{returnPromise:!0});case 3:x(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t(null===e.t0||void 0===e.t0?void 0:e.t0.message,"error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(D.a,{disabled:o===Je.DISABLED||a||f,className:e.button,variant:"contained",color:"secondary",onClick:N,children:d})},Mt=function(e){var t=e.mapper,a=e.source,n=t(Object(rt.b)()[a]);return Object(F.jsx)(kt.a,{label:n})},Ut=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(lt.a,Object(Z.a)(Object(Z.a)({},e),{},{children:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(It,{}),Object(F.jsx)(ct.a,{}),Object(F.jsx)(bt.a,{syncWithLocation:!1,children:Object(F.jsxs)(mt.a,{label:"Bilet",children:[Object(F.jsx)(tt.a,{label:"Impreza",source:"eventName"}),Object(F.jsx)(tt.a,{label:"Pesel",source:"pesel"}),Object(F.jsx)(tt.a,{label:"Wariant",source:"variantName"}),Object(F.jsx)(pt.a,{label:"Rodzaj wej\u015bci\xf3wki",children:Object(F.jsx)(Mt,{source:"bookingType",mapper:gt})}),Object(F.jsx)(jt.a,{label:"Aktywny od",source:"activeFrom",emptyText:"N/A",showTime:!0}),Object(F.jsx)(jt.a,{label:"Aktywny do",source:"activeTo",emptyText:"N/A",showTime:!0}),Object(F.jsx)(Nt,{label:"Wej\u015bci\xf3wki:"}),Object(F.jsx)(jt.a,{label:"Utworzono",source:"createdAt",showTime:!0}),Object(F.jsx)(jt.a,{label:"Zmodyfikowano",source:"modifiedAt",showTime:!0})]})}),Object(F.jsx)(ct.a,{}),Object(F.jsxs)(C.a,{p:1,display:"flex",justifyContent:"flex-end",children:[Object(F.jsx)(Dt,{}),Object(F.jsx)(Lt,{})]})]})}))})},zt=a(582),Rt=a(578),Zt=a(308),Gt=function(){return Object(F.jsxs)(et.a,{children:[Object(F.jsx)(jt.a,{label:"Data",source:"date",showTime:!0}),Object(F.jsx)(tt.a,{label:"Urz\u0105dzenie",source:"deviceName"}),Object(F.jsx)(tt.a,{label:"Bilet",source:"ticketCode"}),Object(F.jsx)(tt.a,{label:"Opis",source:"text",sortable:!1}),Object(F.jsx)(tt.a,{label:"Rezerwacja",source:"bookingId"})]})},_t=function(e){return Object(F.jsx)(zt.a,Object(Z.a)(Object(Z.a)({},e),{},{children:Object(F.jsx)(Rt.a,{source:"ticketCode",alwaysOn:!0})}))},Jt=function(e){return Object(F.jsx)(at.a,Object(Z.a)(Object(Z.a)({perPage:20,exporter:!1,pagination:Object(F.jsx)(Zt.a,{rowsPerPageOptions:[20,50,100]}),filters:Object(F.jsx)(_t,{})},e),{},{children:Object(F.jsx)(Gt,{})}))},Wt=function(){var e=function(e){switch(e){case"production":case"development":return{authProvider:Se,dataProvider:Ye};default:return{authProvider:ue,dataProvider:de}}}("production"),t=e.authProvider,a=e.dataProvider;return Object(F.jsxs)(u.a,{theme:W,dashboard:R,authProvider:t,dataProvider:a,children:[Object(F.jsx)(l.a,{options:{label:"Bilety"},icon:d.a,name:n.TICKET_INFO,list:ut}),Object(F.jsx)(l.a,{options:{label:"Wej\u015bci\xf3wka"},name:n.TICKET_DETAILS,show:Ut}),Object(F.jsx)(l.a,{options:{label:"Logi"},name:n.LOGS,list:Jt})]})},Vt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,589)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};s.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(Wt,{})}),document.getElementById("root")),Vt()}},[[493,1,2]]]);
//# sourceMappingURL=main.199dcba8.chunk.js.map