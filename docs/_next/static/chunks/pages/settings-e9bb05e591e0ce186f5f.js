_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{b804:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ze}));var n=r("Ff2n"),o=r("q1tI"),a=r.n(o),i=r("BMxC"),c=r("qWyU"),l=r("OQ2h"),u=r("r5ed"),d=r("MKZ1"),s=r("Weur"),b=r("pVnL"),p=r.n(b),f=r("8OQS"),m=r.n(f),h=r("qKvR"),v=r("lSNA"),y=r.n(v),g=r("8hg0"),O=r("CjxU"),j=r("mf32");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var k=function(e){var t=e.variant,r=e.colorMode;switch(t){case"solid":return function(e){var t=e.theme.colors,r=e.color,n=t[r]&&t[r][500],o=Object(g.a)(n,.6);return{light:{bg:Object(g.c)(r,500),color:"white"},dark:{bg:o,color:"whiteAlpha.800"}}}(e)[r];case"subtle":return function(e){var t=e.theme.colors,r=e.color,n=t[r]&&t[r][200],o=Object(g.b)(n)[300];return{light:{bg:Object(g.c)(r,100),color:Object(g.c)(r,800)},dark:{bg:o,color:Object(g.c)(r,200)}}}(e)[r];case"outline":return function(e){var t=e.theme.colors,r=e.color,n=t[r]&&t[r][200],o=Object(g.a)(n,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(t[r]&&t[r][500]),color:Object(g.c)(r,500)},dark:{boxShadow:"inset 0 0 0px 1px "+o,color:o}}}(e)[r];default:return{}}},x=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{theme:Object(O.b)(),colorMode:Object(j.a)().colorMode});return k(t)},C=r("w0db"),S=r("+Cyc"),D=r("D7Da"),P={sm:{minH:6,minW:6,fontSize:"sm",px:2},md:{minH:"1.75rem",minW:"1.75rem",fontSize:"sm",px:2},lg:{minH:8,minW:8,px:3}},z=function(e){var t=e.variant,r=void 0===t?"subtle":t,n=e.size,o=void 0===n?"lg":n,a=e.variantColor,i=void 0===a?"gray":a,c=m()(e,["variant","size","variantColor"]);Object(D.g)("Tag",i);var l=x({color:i,variant:r}),u=P[o];return Object(h.d)(S.a,p()({display:"inline-flex",alignItems:"center",minH:6,maxW:"100%",rounded:"md",fontWeight:"medium"},u,l,c))},E=r("jgTY"),R=r("eJLp");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={position:"absolute",top:"50%",transform:"translateY(-50%)"},T=function(e){var t=e.thumbSize,r=e.trackPercent;e.theme;return A({},M,{zIndex:1,size:t,rounded:"full",bg:"#fff",boxShadow:"sm",left:"calc("+r+"% - "+t+" / 2)",border:"1px",borderColor:"transparent",transition:"transform 0.2s",_focus:{boxShadow:"outline"},_disabled:{backgroundColor:"gray.300"},_active:{transform:"translateY(-50%) scale(1.15)"}})},I=function(e){var t=e.trackHeight,r=e.trackPercent,n=e.color,o=e.colorMode;return A({},M,{height:t,bg:"light"===o?n+".500":n+".200",width:r+"%",rounded:"sm"})},L={light:{bg:"gray.200",_disabled:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_disabled:{bg:"whiteAlpha.300"}}},N=function(e){var t=e.trackHeight,r=(e.theme,e.colorMode);return A({height:t,borderRadius:"sm",width:"100%"},M,{},L[r])},H={width:"full",display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"}},F={lg:{thumb:"16px",trackHeight:"4px"},md:{thumb:"14px",trackHeight:"4px"},sm:{thumb:"10px",trackHeight:"2px"}},B=function(e){var t=Object(O.b)(),r=Object(j.a)().colorMode,n=e.trackPercent,o=e.size,a=e.color,i=F[o],c={trackHeight:i.trackHeight,thumbSize:i.thumb,theme:t,trackPercent:n,color:a,colorMode:r};return{rootStyle:H,trackStyle:N(c),filledTrackStyle:I(c),thumbStyle:T(c)}};function V(e,t){return function(e,t){var r=t.toString().split(".")[1],n=r?r.length:0;return Number(e.toFixed(n))}(Math.round(e/t)*t,t)}function W(e,t,r){return e>r?r:e<t?t:e}var Y=Object(o.forwardRef)((function(e,t){var r=J(),n=r.thumbRef,o=r.isDisabled,a=r.onFocus,i=r.onThumbKeyDown,c=r.min,l=r.max,u=r.valueText,d=r.orientation,s=r.trackPercent,b=r.size,f=r.color,m=r.value,v=r.ariaLabelledBy,y=B({trackPercent:s,orientation:d,size:b,color:f}).thumbStyle,g=Object(D.f)(n,t);return Object(h.d)(S.a,p()({"data-slider-thumb":"",d:"flex",alignItems:"center",outline:"none",justifyContent:"center",onFocus:a,ref:g,role:"slider",tabIndex:o?void 0:0,"aria-disabled":o,"aria-valuemin":c,"aria-valuetext":u,"aria-orientation":d,"aria-valuenow":m,"aria-valuemax":l,"aria-labelledby":v,onKeyDown:i},y,e))}));Y.displayName="SliderThumb";var q=function(e){var t=J(),r=t.trackRef,n=t.isDisabled,o=m()(t,["trackRef","isDisabled"]),a=B(o).trackStyle;return Object(h.d)(i.a,p()({"data-slider-track":"","aria-disabled":n,ref:r},a,e))},K=function(e){var t=J(),r=t.isDisabled,n=m()(t,["isDisabled"]),o=B(n).filledTrackStyle;return Object(h.d)(S.a,p()({"aria-disabled":r,"data-slider-filled-track":""},o,e))},U=Object(o.createContext)(),J=function(){return Object(o.useContext)(U)},X=Object(o.forwardRef)((function(e,t){var r=e.value,n=e.defaultValue,a=e.onChange,c=e.onKeyDown,l=e.onFocus,u=e.onBlur,d=e.onMouseDown,s=e.isDisabled,b=e.max,f=void 0===b?100:b,v=e.min,y=void 0===v?0:v,g=e.step,O=void 0===g?1:g,j=e["aria-labelledby"],w=(e["aria-label"],e["aria-valuetext"]),k=e.orientation,x=void 0===k?"horizontal":k,C=e.getAriaValueText,S=e.size,D=void 0===S?"md":S,P=e.color,z=void 0===P?"blue":P,E=e.name,R=e.id,_=e.children,A=m()(e,["value","defaultValue","onChange","onKeyDown","onFocus","onBlur","onMouseDown","isDisabled","max","min","step","aria-labelledby","aria-label","aria-valuetext","orientation","getAriaValueText","size","color","name","id","children"]),M=Object(o.useRef)(null!=r).current,T=Object(o.useState)(n||0),I=T[0],L=T[1],N=W(M?r:I,y,f),H=function(e,t,r){return 100*(e-t)/(r-t)}(N,y,f),F=B({trackPercent:H,orientation:x,size:D,color:z}).rootStyle,Y=Object(o.useRef)(),q=Object(o.useRef)(),K=function(e){if(Y.current){var t=Y.current.getBoundingClientRect(),r=t.left,n=t.width,o=function(e,t,r){return(r-t)*e+t}(((e.touches?e.touches[0]:e).clientX-r)/n,y,f);return O&&(o=V(o,O)),o=W(o,y,f)}},J=Object(o.useCallback)((function(e){M||L(e),a&&a(e)}),[M,a]),X=function e(){document.body.removeEventListener("mousemove",G),document.body.removeEventListener("touchmove",G),document.body.removeEventListener("mouseup",e),document.body.removeEventListener("touchend",e)},G=function(e){var t=K(e);J(t)},Q=function(e){if(!s){d&&d(e),e.preventDefault();var t=K(e);t!==N&&J(t),document.body.addEventListener("mousemove",G),document.body.addEventListener("touchmove",G),document.body.addEventListener("mouseup",X),document.body.addEventListener("touchend",X),q.current&&q.current.focus()}},Z=C?C(N):w,$={trackRef:Y,thumbRef:q,onThumbKeyDown:function(e){var t,r=!1,n=(f-y)/10;switch(e.key){case"ArrowLeft":case"ArrowDown":t=N-O,r=!0;break;case"ArrowRight":case"ArrowUp":t=N+O,r=!0;break;case"PageDown":t=N-n,r=!0;break;case"PageUp":t=N+n,r=!0;break;case"Home":t=y,r=!0;break;case"End":t=f,r=!0;break;default:return}r&&(e.preventDefault(),e.stopPropagation()),O&&(t=V(t,O)),t=W(t,y,f),J(t),c&&c(e)},onFocus:l,trackPercent:H,ariaLabelledBy:j,orientation:x,isDisabled:s,size:D,color:z,min:y,max:f,valueText:Z,value:N};return Object(h.d)(U.Provider,{value:$},Object(h.d)(i.a,p()({role:"presentation",tabIndex:"-1",onMouseDown:Q,onTouchStart:Q,onMouseLeave:X,onTouchEnd:X,onBlur:function(e){X(),u&&u(e)},py:3,"aria-disabled":s,ref:t,css:{touchAction:"none"}},F,A),_,Object(h.d)("input",{type:"hidden",value:N,name:E,id:R})))}));X.displayName="Slider";var G=X,Q=r("we/t"),Z=r("iUFP"),$=Object(o.forwardRef)((function(e,t){var r=e.onChange,n=e.name,a=e.variantColor,c=e.size,l=e.defaultValue,u=e.isInline,d=e.value,s=e.spacing,b=void 0===s?2:s,f=e.children,v=m()(e,["onChange","name","variantColor","size","defaultValue","isInline","value","spacing","children"]),y=Object(o.useRef)(null!=d).current,g=Object(o.useState)(l||null),O=g[0],j=g[1],w=y?d:O,k=Object(o.useRef)(),x=function(e){y||j(e.target.value),r&&r(e,e.target.value)},C="radio-"+Object(Z.a)(),S=n||C,P=Object(D.a)(f),z=P.map((function(e,t){var r=P.length===t+1,n=u?{mr:b}:{mb:b};return Object(h.d)(i.a,p()({key:t,display:u?"inline-block":"block"},!r&&n),Object(o.cloneElement)(e,{size:e.props.size||c,variantColor:e.props.variantColor||a,name:S,onChange:x,isChecked:e.props.value===w}))}));return Object(o.useImperativeHandle)(t,(function(){return{focus:function(){var e=k.current.querySelector("input:not(:disabled):checked");e||(e=k.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]),Object(h.d)(i.a,p()({ref:k,role:"radiogroup"},v),z)}));$.displayName="RadioGroup";var ee=$,te=r("5D9J"),re=r("OJSm"),ne=r("QdyT");function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ae=Object(te.a)(i.a)((function(e){var t,r=e.type,n=void 0===r?"checkbox":r,o=e._hover,a=e._invalid,i=e._disabled,c=e._focus,l=e._checked,u=e._child,d=void 0===u?{opacity:0}:u,s=e._checkedAndChild,b=void 0===s?{opacity:1}:s,p=e._checkedAndDisabled,f=e._checkedAndFocus,m=e._checkedAndHover,h="input[type="+n+"]:checked:disabled + &, input[type="+n+"][aria-checked=mixed]:disabled + &",v="input[type="+n+"]:checked:hover:not(:disabled) + &, input[type="+n+"][aria-checked=mixed]:hover:not(:disabled) + &",g="input[type="+n+"]:checked:focus + &, input[type="+n+"][aria-checked=mixed]:focus + &",O="input[type="+n+"]:disabled + &",j="input[type="+n+"]:focus + &",w="input[type="+n+"]:hover:not(:disabled):not(:checked) + &",k="input[type="+n+"]:checked + &, input[type="+n+"][aria-checked=mixed] + &",x="input[type="+n+"][aria-invalid=true] + &";return Object(re.a)(((t={})[j]=Object(ne.b)(c),t[w]=Object(ne.b)(o),t[O]=Object(ne.b)(i),t[x]=Object(ne.b)(a),t[h]=Object(ne.b)(p),t[g]=Object(ne.b)(f),t[v]=Object(ne.b)(m),t["& > *"]=Object(ne.b)(d),t[k]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(r,!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(ne.b)(l),{"& > *":Object(ne.b)(b)}),t))}));ae.displayName="ControlBox",ae.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"};var ie=ae,ce=r("+Z5E");function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ue={userSelect:"none",border:"2px",rounded:"md",borderColor:"inherit",transition:"background-color 120ms, box-shadow 250ms"},de=function(e){var t={lg:5,md:4,sm:"radio"===e.type?3:"auto"};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(r,!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},ue,{},e.size&&{rounded:"sm"},{},function(e){var t=e.color,r="dark"===e.colorMode,n=r?200:500;return{color:"white",_checked:{bg:Object(g.c)(t,n),borderColor:Object(g.c)(t,n),color:r?"gray.900":void 0},_checkedAndDisabled:{borderColor:r?"transparent":"gray.200",bg:r?"whiteAlpha.300":"gray.200",color:r?"whiteAlpha.500":"gray.500"},_disabled:{bg:r?"whiteAlpha.100":"gray.100",borderColor:r?"transparent":"gray.100"},_focus:{boxShadow:"outline"},_invalid:{borderColor:r?"red.300":"red.500"}}}(e),{size:t[e.size]})},se=Object(o.forwardRef)((function(e,t){var r=e.id,n=e.name,o=e.value,a=e["aria-label"],c=e["aria-labelledby"],l=e.variantColor,u=void 0===l?"blue":l,d=e.defaultIsChecked,s=e.isChecked,b=e.isFullWidth,f=e.size,v=void 0===f?"md":f,y=e.isDisabled,g=e.isInvalid,O=e.onChange,w=e.onBlur,k=e.onFocus,x=e.children,C=m()(e,["id","name","value","aria-label","aria-labelledby","variantColor","defaultIsChecked","isChecked","isFullWidth","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"]);Object(D.g)("Radio",u);var S=Object(j.a)().colorMode,P=de({color:u,size:v,colorMode:S,type:"radio"});return Object(h.d)(i.a,p()({as:"label",display:"inline-flex",verticalAlign:"top",htmlFor:r,alignItems:"center",width:b?"full":void 0,cursor:y?"not-allowed":"pointer"},C),Object(h.d)(ce.a,{as:"input",type:"radio","aria-label":a,"aria-labelledby":c,id:r,ref:t,name:n,value:o,"aria-invalid":g,defaultChecked:d,onChange:O,onBlur:w,onFocus:k,checked:s,disabled:y}),Object(h.d)(ie,p()({},P,{type:"radio",rounded:"full"}),Object(h.d)(i.a,{bg:"currentColor",as:"span",rounded:"full",size:"50%"})),x&&Object(h.d)(i.a,{ml:2,fontSize:v,userSelect:"none",opacity:y?.32:1},x))}));se.displayName="Radio";var be=se,pe=r("FpzS"),fe=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginBottom","marginLeft","marginRight","marginY","marginX","flex","flexBasis","width","minWidth","maxWidth","maxW","minW","w","zIndex","top","right","bottom","left","position","pos"],me=function(e){var t={},r={};for(var n in e)fe.includes(n)?t[n]=e[n]:r[n]=e[n];return[t,r]},he=function(e){var t=e.icon,r=m()(e,["icon"]);return"string"===typeof t?Object(h.d)(C.a,p()({focusable:"false",name:t,color:"currentColor"},r)):Object(h.d)(i.a,p()({as:t,"data-custom-icon":!0,focusable:"false",color:"currentColor"},r))},ve=Object(o.forwardRef)((function(e,t){return Object(h.d)(i.a,p()({ref:t,position:"absolute",display:"inline-flex",width:"1.5rem",height:"100%",alignItems:"center",justifyContent:"center",right:"0.5rem",top:"50%",pointerEvents:"none",zIndex:2,transform:"translateY(-50%)"},e))})),ye=Object(o.forwardRef)((function(e,t){var r=e.placeholder,n=e.children,o=m()(e,["placeholder","children"]);return Object(h.d)(pe.a,p()({as:"select",appearance:"none",ref:t,pr:"2rem",pb:"px",lineHeight:"normal"},o),r&&Object(h.d)("option",{value:""},r),n)})),ge=Object(o.forwardRef)((function(e,t){var r=e.rootProps,n=e.icon,o=e.iconSize,a=void 0===o?5:o,c=e.iconColor,l=m()(e,["rootProps","icon","iconSize","iconColor"]),u="dark"===Object(j.a)().colorMode?"whiteAlpha.800":"inherit",d=l.isReadOnly||l.isDisabled?.5:null,s=me(l),b=s[0],f=s[1];return Object(h.d)(i.a,p()({position:"relative",width:"100%"},b,r),Object(h.d)(ye,p()({ref:t,color:u},f)),Object(h.d)(ve,{opacity:d,color:c||f.color||u},Object(h.d)(he,{focusable:"false","aria-hidden":"true",icon:n||"chevron-down",size:a})))}));ge.displayName="Select";var Oe=ge,je=a.a.createElement;function we(e){var t=e.metrics,r=e.onChange;return je("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.activity.value,o=t.gender.value,a=t.age.value,i=t.weight.value,c=t.height.value;r({activity:n,gender:o,age:a,weight:i,height:c})}},je(Q.a,{d:"flex",flexDirection:"column",justifyContent:"space-between",my:"2"},je(E.a,null,"Gender"),je(ee,{d:"flex",justifyContent:"space-between",name:"gender",defaultValue:t.gender},je(be,{value:"female"},"\ud83d\ude4d\u200d\u2640\ufe0f Female"),je(be,{mr:"2",value:"male"},"\ud83d\ude4d\u200d\u2642\ufe0f Male"))),je(Q.a,{my:"2"},je(E.a,null,"Age"),je(pe.a,{inputMode:"numeric",defaultValue:t.age||void 0,placeholder:"Age in years",name:"age",isRequired:!0})),je(s.a,{justify:"space-between",align:"center",my:"2"},je(Q.a,{mr:"1"},je(E.a,null,"Height"),je(pe.a,{defaultValue:t.height||void 0,inputMode:"numeric",placeholder:"Height in centimeters",isRequired:!0,name:"height"})),je(Q.a,{ml:"1"},je(E.a,null,"Weight"),je(pe.a,{inputMode:"numeric",defaultValue:t.weight||void 0,placeholder:"Weight in kilograms",isRequired:!0,name:"weight"}))),je(Q.a,{my:"2"},je(E.a,null,"Activity"),je(Oe,{name:"activity",isRequired:!0,defaultValue:t.activity||void 0,placeholder:"Select your daily activity"},je("option",{value:"1.2"},"Little to no exercise"),je("option",{value:"1.375"},"Light exercise (1-3 days per week)"),je("option",{value:"1.55"},"Moderate exercise (3-5 days per week)"),je("option",{value:"1.725"},"Heavy exercise (6-7 days per week)"),je("option",{value:"1.9"},"Very heavy exercise (twice per day, extra heavy workouts)"))),je(R.a,{mt:"6",type:"submit"},"Calculate"))}var ke=Object(o.memo)(we),xe=r("eXEx"),Ce=r("Slr/"),Se=r("BhN1"),De=r("KmJB"),Pe=a.a.createElement;function ze(){var e=Object(Se.useStore)(),t=e.dispatch,r=Object(n.a)(e,["dispatch"]),a=Object(o.useState)(!1),b=a[0],p=a[1],f=Object(o.useState)(!1),m=f[0],h=f[1],v=Object(o.useState)(),y=v[0],g=v[1],O=Object(o.useState)(!0),j=O[0],w=O[1],k=r.body,x=r.goal,C=r.logs,S=Object(o.useMemo)((function(){return Object(De.a)(k)}),[k]),D=S.bmr,P=S.caloricNeeds,_=Object.keys(C).length;Object(o.useEffect)((function(){y&&t({type:Se.ACTIONS.SET_GOAL_FROM_CALORIES,payload:y})}),[y]);var A=function(e,t){var r="You've set a goal within the limits of your maintenance needs. You would continue to have same weight if you maintain your lifestyle.",n="gray.500",o="maintenance",a=50;e<t-a?(r="You've set a goal lower than your maintenance needs. You would lose weight if you continue to stay calorie deficit.",n="red.500",o="deficit"):e>t+a&&(r="You've set a goal higher than your maintenance needs. You would gain weight if you continue to stay calorie surplus.",n="green.500",o="surplus");return{description:r,color:n,text:o}}(x.calories||P.calories,P.calories),M=0!==P.calories||!!k.height||!!k.weight;return Pe(xe.a,{heading:"Settings"},Pe(i.a,{mb:"6",as:"section"},Pe(c.a,{size:"lg",d:"flex",justifyContent:"space-between",alignItems:"center"},"Maintenance Needs",M&&Pe(l.a,{isRound:!0,variant:"ghost","aria-label":b?"Collapse":"Expand",onClick:function(){return p(!b)},icon:b?"chevron-up":"chevron-down"})),Pe(u.a,null,"These are your daily caloric needs in order to maintain your body weight, based on your body metrics."),Pe(d.a,{isOpen:b||!M},Pe(ke,{metrics:k,onChange:function(e){return t({type:Se.ACTIONS.SET_BODY,payload:e})}})),M&&Pe(s.a,{mt:"4",align:"center",justify:["center","flex-start"]},Pe(Ce.a,{nutrition:P,showLegend:!0}))),M&&Pe(i.a,{mb:"6",as:"section"},Pe(c.a,{size:"lg",my:"2",justifyContent:"space-between",alignItems:"center",d:"flex"},"Your Goal",Pe(z,{size:"sm",textTransform:"uppercase",color:A.color},A.text)),Pe(u.a,null,A.description),Pe(E.a,{fontSize:"sm",textTransform:"capitalize",d:"flex",alignItems:"center",pr:"0",mt:"2",justifyContent:"space-between"},"Calories ",x.calories||P.calories,"kCal",Pe(R.a,{onClick:function(){return w(!j)},size:"xs",variant:j?"ghost":"solid",variantColor:j?void 0:"green"},j?"Edit":"Done")),Pe(d.a,{isOpen:!j},Pe(G,{step:10,defaultValue:x.calories||P.calories,value:y,onChange:g,isDisabled:j,min:D,max:2*P.calories-D},Pe(q,null),Pe(K,{bg:A.color}),Pe(Y,null))),Pe(s.a,{mt:"4",justify:["center","flex-start"],align:"center"},Pe(Ce.a,{nutrition:x,showLegend:!0}))),Pe(i.a,{as:"section"},Pe(c.a,{size:"lg",d:"flex",justifyContent:"space-between",alignItems:"center"},"Your Data",Pe(l.a,{isRound:!0,variant:"ghost","aria-label":m?"Collapse":"Expand",onClick:function(){return h(!m)},icon:m?"chevron-up":"chevron-down"})),Pe(u.a,{mb:"6"},"All your data is stored locally on your device."),Pe(d.a,{isOpen:m},Pe(s.a,{direction:["column","row"]},Pe(R.a,{my:"2",variantColor:"blue",mr:[0,"2"],onClick:function(){var e=URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download="my-calow-data.json",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(e)}},"Export My Data"),Pe(R.a,{my:"2",ml:[0,"2"],variant:"solid",variantColor:"red",onClick:function(){window.confirm("Are you sure? You'll lose data of ".concat(_," day").concat(1===_?"":"s","."))&&t({type:Se.ACTIONS.RESET})}},"Delete My Data")))))}ze.pageTitle="Settings"},r5ed:function(e,t,r){"use strict";var n=r("pVnL"),o=r.n(n),a=r("qKvR"),i=r("q1tI"),c=r("we/t"),l=r("mf32"),u=r("sK1y"),d=Object(i.forwardRef)((function(e,t){var r=Object(l.a)().colorMode,n=Object(c.b)(e);return Object(a.d)(u.a,o()({mt:2,ref:t,id:n.id?n.id+"-help-text":null,color:{light:"gray.500",dark:"whiteAlpha.600"}[r],lineHeight:"normal",fontSize:"sm"},e))}));d.displayName="FormHelperText",t.a=d},rrX4:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return r("b804")}])}},[["rrX4",1,2,0,3,5,6,7]]]);