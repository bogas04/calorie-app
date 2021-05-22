(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{2230:function(e,t,n){"use strict";var r=n(6265),i=n(5893),o=n(9345),s=n(4096),c=n(4115),a=n(7294),l=n(2163);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=e.nutrition,n=e.border,r=void 0===n||n,a=e.showLegend,u=void 0===a?!r:a;return(0,i.jsx)(o.r,d(d({gridTemplateColumns:"repeat(4, auto)",gridGap:r?4:6},r?{boxShadow:"md",borderRadius:50,p:4,px:u&&r?6:4}:{}),{},{children:l.nutritionKeys.map((function(e,n){var r=t[e];return(0,i.jsxs)(s.k,{direction:"column",textTransform:"capitalize",justify:"center",align:"flex-start",children:[(0,i.jsxs)(c.x,{color:l.nutritionColors[e],fontWeight:"600",fontSize:"xs",children:[Number.isInteger(r)?r:r.toFixed(2),l.nutritionShortUnits[e]]}),u&&(0,i.jsx)(c.x,{fontSize:"xs",children:l.nutritionShortNames[e]})]},n)}))}))}t.Z=(0,a.memo)(h)},9868:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(6265),i=n(5893),o=n(8347),s=n(8017),c=n(336);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.heading,n=e.children,r=(0,o.Z)(e,["heading","children"]);return(0,i.jsxs)(s.xu,l(l({py:["2","6","12"],px:["4","16","32"]},r),{},{children:[t&&"string"===typeof t?(0,i.jsx)(c.X,{my:"6",children:t}):t,n]}))}},5084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(809),i=n.n(r),o=n(2447),s=n(5893),c=n(8347),a=n(6780),l=n(6569),u=n(8017),d=n(336),h=n(8420),x=n(6729),f=n(5267),p=n(4096),j=n(5528),m=n(4115),g=n(6618),y=n(8104),v=n(155),b=n(8300),w=n(7922),O=n(9887),S=n(7294),k=n(3990),C=n(3002),E=n(1279),I=n(9345);function N(e){var t=e.metrics,n=e.onChange;return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r=t.activity.value,i=t.gender.value,o=t.age.value,s=t.weight.value,c=t.height.value;n({activity:r,gender:i,age:o,weight:s,height:c})},children:[(0,s.jsxs)(x.NI,{px:1,as:"fieldset",d:"flex",flexDirection:"column",justifyContent:"space-between",my:"2",children:[(0,s.jsx)(g.l,{as:"legend",children:"Gender"}),(0,s.jsxs)(C.E,{d:"flex",justifyContent:"space-between",name:"gender",defaultValue:t.gender,children:[(0,s.jsx)(E.Y,{name:"gender",value:"female",children:"\ud83d\ude4d\u200d\u2640\ufe0f Female"}),(0,s.jsx)(E.Y,{name:"gender",value:"male",children:"\ud83d\ude4d\u200d\u2642\ufe0f Male"})]})]}),(0,s.jsxs)(x.NI,{my:"2",px:1,children:[(0,s.jsx)(g.l,{children:"Age"}),(0,s.jsx)(O.I,{inputMode:"numeric",defaultValue:t.age||void 0,placeholder:"Age in years",name:"age",isRequired:!0})]}),(0,s.jsxs)(I.r,{my:"2",templateColumns:"repeat(2,1fr)",gap:1,px:1,children:[(0,s.jsxs)(x.NI,{children:[(0,s.jsx)(g.l,{children:"Height"}),(0,s.jsx)(O.I,{defaultValue:t.height||void 0,inputMode:"numeric",placeholder:"Height in centimeters",isRequired:!0,name:"height"})]}),(0,s.jsxs)(x.NI,{children:[(0,s.jsx)(g.l,{children:"Weight"}),(0,s.jsx)(O.I,{inputMode:"numeric",defaultValue:t.weight||void 0,placeholder:"Weight in kilograms",isRequired:!0,name:"weight"})]})]}),(0,s.jsxs)(x.NI,{my:"2",px:1,children:[(0,s.jsx)(g.l,{children:"Activity"}),(0,s.jsxs)(y.Ph,{name:"activity",isRequired:!0,defaultValue:t.activity||void 0,placeholder:"Select your daily activity",children:[(0,s.jsx)("option",{value:"1.2",children:"Little to no exercise"}),(0,s.jsx)("option",{value:"1.375",children:"Light exercise (1-3 days per week)"}),(0,s.jsx)("option",{value:"1.55",children:"Moderate exercise (3-5 days per week)"}),(0,s.jsx)("option",{value:"1.725",children:"Heavy exercise (6-7 days per week)"}),(0,s.jsx)("option",{value:"1.9",children:"Very heavy exercise (twice per day, extra heavy workouts)"})]})]}),(0,s.jsx)(u.xu,{px:1,pt:6,children:(0,s.jsx)(v.z,{type:"submit",children:"Calculate"})})]})}var z=(0,S.memo)(N),T=n(9868),P=n(2230),D=n(2163),R=n(8394),_=n(7641),A=function(e){return 10*Math.floor(e/10)};function L(){var e=(0,D.useStore)(),t=e.dispatch,n=(0,c.Z)(e,["dispatch"]),r=(0,S.useState)(!1),C=r[0],E=r[1],I=(0,S.useState)(!1),N=I[0],L=I[1],Y=(0,S.useState)(),U=Y[0],M=Y[1],V=(0,S.useState)(),Z=V[0],W=V[1],q=(0,S.useState)(!0),X=q[0],Q=q[1],F=n.body,G=n.goal,H=n.logs,B=(0,S.useMemo)((function(){return(0,_.kE)(F)}),[F]),J=B.bmr,K=B.caloricNeeds,$=Object.keys(H).length;(0,S.useEffect)((function(){var e=null!==U&&void 0!==U?U:G.nutrition.calories,n=null!==Z&&void 0!==Z?Z:G.diet;t({type:D.ACTIONS.SET_GOAL,payload:{nutrition:(0,_.Uq)(e,_.E5[n].macros),diet:n}})}),[U,Z]);var ee=function(e,t){var n="You've set a goal within the limits of your maintenance needs. You would continue to have same weight if you maintain your lifestyle.",r="gray.500",i="maintenance",o=50;e<t-o?(n="You've set a goal lower than your maintenance needs. You would lose weight if you continue to stay calorie deficit.",r="red.500",i="deficit"):e>t+o&&(n="You've set a goal higher than your maintenance needs. You would gain weight if you continue to stay calorie surplus.",r="green.500",i="surplus");return{description:n,color:r,text:i}}(G.nutrition.calories||K.calories,K.calories),te=Z||G.diet,ne=0!==K.calories||!!F.height||!!F.weight;return(0,s.jsxs)(T.T,{heading:"Settings",children:[(0,s.jsxs)(u.xu,{mb:"12",as:"section",children:[(0,s.jsxs)(d.X,{size:"lg",mb:"4",d:"flex",justifyContent:"space-between",alignItems:"center",children:["Maintenance Needs",ne&&(0,s.jsx)(h.h,{isRound:!0,variant:"ghost","aria-label":C?"Collapse":"Expand",onClick:function(){return E(!C)},icon:C?(0,s.jsx)(a.g,{}):(0,s.jsx)(l.v,{})})]}),(0,s.jsx)(x.NI,{children:(0,s.jsx)(x.Q6,{children:"These are your daily caloric needs in order to maintain your body weight, based on your body metrics."})}),(0,s.jsx)(f.U,{in:C||!ne,children:(0,s.jsx)(z,{metrics:F,onChange:function(e){return t({type:D.ACTIONS.SET_BODY,payload:e})}})}),ne&&(0,s.jsx)(p.k,{mt:"4",align:"center",justify:["center","flex-start"],children:(0,s.jsx)(P.Z,{nutrition:K,showLegend:!0,border:!1})})]}),ne&&(0,s.jsxs)(u.xu,{mb:"12",as:"section",children:[(0,s.jsxs)(d.X,{size:"lg",my:"4",justifyContent:"space-between",alignItems:"center",d:"flex",children:["Your Goal",(0,s.jsx)(j.Vp,{size:"sm",textTransform:"uppercase",color:ee.color,children:ee.text})]}),(0,s.jsx)(m.x,{fontSize:"sm",children:ee.description}),(0,s.jsxs)(x.NI,{mt:4,mb:4,children:[(0,s.jsxs)(g.l,{fontSize:"md",d:"flex",alignItems:"center",pr:"0",mt:"2",justifyContent:"space-between",children:[(0,s.jsx)(m.x,{fontWeight:"bold",children:"Water"}),(0,s.jsxs)(m.x,{children:[G.water," mL"]})]}),(0,s.jsxs)(x.Q6,{children:["For ",F.gender,"s, recommended water intake (excluding water content of foods) is ",G.water," mL"]})]}),(0,s.jsxs)(x.NI,{my:4,children:[(0,s.jsxs)(p.k,{justify:"space-between",align:"center",children:[(0,s.jsx)(g.l,{fontSize:"md",mt:"2",flex:.4,fontWeight:"bold",children:"Diet"}),(0,s.jsx)(y.Ph,{size:"sm",variant:"flushed",width:"auto",onChange:function(e){return W(e.currentTarget.value)},defaultValue:te,children:Object.keys(_.E5).map((function(e){return(0,s.jsx)(u.xu,{as:"option",value:e,children:_.E5[e].name})}))})]}),(0,s.jsx)(x.Q6,{my:2,children:_.E5[te].description}),(0,s.jsx)(x.Q6,{children:(0,s.jsx)(u.xu,{children:Object.keys(_.E5[te].macros).map((function(e,t,n){return"".concat((r=e,r.charAt(0).toUpperCase()+r.slice(1))," - ").concat(100*_.E5[te].macros[e],"% ").concat(t!==n.length-1?" \xb7 ":"");var r}))})})]}),(0,s.jsx)(x.NI,{my:4,children:(0,s.jsxs)(g.l,{d:"flex",alignItems:"center",pr:"0",mt:"2",justifyContent:"space-between",children:[(0,s.jsx)(m.x,{fontSize:"md",textTransform:"capitalize",fontWeight:"bold",children:"Calories"}),(0,s.jsx)(u.xu,{fontSize:"sm",children:(0,s.jsx)(v.z,{onClick:function(){return Q(!X)},size:"sm",variant:X?"ghost":"solid",colorScheme:X?void 0:"green",children:X?"Edit":"Done"})})]})}),(0,s.jsx)(f.U,{in:!X,children:(0,s.jsx)(u.xu,{py:2,children:(0,s.jsxs)(b.iR,{step:10,defaultValue:G.nutrition.calories||K.calories,value:U,onChange:M,isDisabled:X,min:A(1.05*J),max:A(2*K.calories-J),children:[(0,s.jsx)(b.Uj,{children:(0,s.jsx)(b.Ms,{bg:ee.color})}),(0,s.jsx)(b.gs,{boxSize:6,bg:ee.color,children:(0,s.jsx)(k.VcR,{color:"white",size:"12"})})]})})}),(0,s.jsx)(p.k,{mt:"4",justify:["center","flex-start"],align:"center",children:(0,s.jsx)(P.Z,{nutrition:G.nutrition,showLegend:!0,border:!1})})]}),(0,s.jsxs)(u.xu,{mb:"12",as:"section",children:[(0,s.jsxs)(d.X,{size:"lg",d:"flex",my:"4",justifyContent:"space-between",alignItems:"center",children:["Your Data",(0,s.jsx)(h.h,{isRound:!0,variant:"ghost","aria-label":N?"Collapse":"Expand",onClick:function(){return L(!N)},icon:N?(0,s.jsx)(a.g,{}):(0,s.jsx)(l.v,{})})]}),(0,s.jsx)(x.NI,{children:(0,s.jsx)(x.Q6,{mb:"6",children:"All your data is stored locally on your device."})}),(0,s.jsx)(f.U,{in:N,children:(0,s.jsxs)(p.k,{direction:["column","row"],children:[(0,s.jsxs)(v.z,{my:"2",colorScheme:"blue",mr:[0,"2"],onClick:function(){var e=URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download="my-calow-data.json",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(e)},children:["Export as ",(0,s.jsx)(w.E,{variant:"ghost",children:".json"})]}),(0,s.jsxs)(v.z,{colorScheme:"teal",onClick:function(){var e;return null===(e=document.querySelector("#import-file-input"))||void 0===e?void 0:e.click()},children:["Import from ",(0,s.jsx)(w.E,{variant:"ghost",children:".json"})]}),(0,s.jsx)(O.I,{hidden:!0,id:"import-file-input",type:"file",accept:".json",onChange:function(){var e=(0,o.Z)(i().mark((function e(n){var r,o,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n.target||!n.target.files){e.next=12;break}return e.next=4,(0,R.p)(null===(r=n.target)||void 0===r||null===(o=r.files)||void 0===o?void 0:o[0]);case 4:if(s=e.sent,(c=JSON.parse(s)).goal&&c.body&&c.logs){e.next=8;break}throw new Error("Invalid file");case 8:t({type:D.ACTIONS.SET,payload:{goal:c.goal,logs:c.logs,body:c.body}}),alert("Successfully imported!"),e.next=13;break;case 12:throw new Error("No file selected");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()}),(0,s.jsx)(v.z,{my:"2",ml:[0,"2"],variant:"solid",colorScheme:"red",onClick:function(){window.confirm("Are you sure? You'll lose data of ".concat($," day").concat(1===$?"":"s","."))&&t({type:D.ACTIONS.RESET})},children:"Delete My Data"})]})})]})]})}L.pageTitle="Settings"},8394:function(e,t,n){"use strict";function r(e,t){var n=e.currentTarget.closest("[data-".concat(t,"]"));return n?n.dataset[t]:null}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf-8";return new Promise((function(n,r){var i=new FileReader;i.onload=function(e){var t;n(null===(t=e.target)||void 0===t?void 0:t.result)},i.onerror=function(){r(i.error),i.abort()},i.readAsText(e,t)}))}n.d(t,{x:function(){return r},p:function(){return i}})},9471:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(5084)}])}},function(e){e.O(0,[609,511,602,774,888,179],(function(){return t=9471,e(e.s=t);var t}));var t=e.O();_N_E=t}]);