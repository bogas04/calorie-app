_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+Cyc":function(e,r,t){"use strict";var o=t("5D9J"),a=t("OJSm"),i=t("BMxC"),n=t("QdyT"),d=Object(o.a)(i.a)((function(e){var r,t=e._after,o=e._focus,i=e._selected,d=e._focusWithin,l=e._hover,s=e._invalid,c=e._active,u=e._disabled,b=e._grabbed,f=e._pressed,p=e._expanded,O=e._visited,h=e._before,v=e._readOnly,y=e._first,j=e._notFirst,g=e._notLast,_=e._last,x=e._placeholder,m=e._checked,w=e._groupHover,C=e._mixed,q=e._odd,B=e._even;return Object(a.a)(((r={})["&:hover"]=Object(n.b)(l),r["&:focus"]=Object(n.b)(o),r["&:active, &[data-active=true]"]=Object(n.b)(c),r["&:visited"]=Object(n.b)(O),r["&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover"]=Object(n.b)(u),r["&[aria-selected=true]"]=Object(n.b)(i),r["&[aria-invalid=true]"]=Object(n.b)(s),r["&[aria-expanded=true]"]=Object(n.b)(p),r["&[aria-grabbed=true]"]=Object(n.b)(b),r["&[aria-readonly=true], &[readonly]"]=Object(n.b)(v),r["&:first-of-type"]=Object(n.b)(y),r["&:not(:first-of-type)"]=Object(n.b)(j),r["&:not(:last-of-type)"]=Object(n.b)(g),r["&:last-of-type"]=Object(n.b)(_),r["&:nth-of-type(odd)"]=Object(n.b)(q),r["&:nth-of-type(even)"]=Object(n.b)(B),r["&[aria-checked=mixed]"]=Object(n.b)(C),r["&[aria-checked=true]"]=Object(n.b)(m),r["&[aria-pressed=true]"]=Object(n.b)(f),r["[role=group]:hover &"]=Object(n.b)(w),r["&:before"]=Object(n.b)(h),r["&:after"]=Object(n.b)(t),r["&:focus-within"]=Object(n.b)(d),r["&::placeholder"]=x,r))}));d.displayName="PseudoBox",r.a=d},"8OQS":function(e,r){e.exports=function(e,r){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}},FpzS:function(e,r,t){"use strict";var o=t("pVnL"),a=t.n(o),i=t("8OQS"),n=t.n(i),d=t("qKvR"),l=t("q1tI"),s=t("we/t"),c=t("+Cyc"),u=t("lSNA"),b=t.n(u),f=t("CjxU"),p=t("mf32"),O=t("za5s");function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(t,!0).forEach((function(r){b()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y={_readOnly:{bg:"transparent",boxShadow:"none !important",userSelect:"all"}},j={bg:"transparent",px:void 0,height:void 0},g=function(e){switch(e.variant){case"flushed":return function(e){var r=e.theme,t=e.focusBorderColor,o=e.errorBorderColor,a=Object(O.h)(r.colors,t,t),i=Object(O.h)(r.colors,o,o);return v({},y,{borderBottom:"2px",borderColor:"inherit",rounded:0,px:void 0,bg:"transparent",_focus:{zIndex:1,borderColor:a},_invalid:{borderColor:i}})}(e);case"unstyled":return j;case"filled":return function(e){var r=e.theme,t=e.focusBorderColor,o=e.errorBorderColor,a=e.colorMode,i=Object(O.h)(r.colors,t,t),n=Object(O.h)(r.colors,o,o);return v({},y,{border:"2px",borderColor:"transparent",bg:{light:"gray.100",dark:"whiteAlpha.50"}[a],_hover:{bg:{light:"gray.200",dark:"whiteAlpha.100"}[a]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,bg:"transparent",borderColor:i},_invalid:{borderColor:n}})}(e);case"outline":return function(e){var r=e.theme,t=e.colorMode,o=e.focusBorderColor,a=e.errorBorderColor,i=Object(O.h)(r.colors,o,o),n=Object(O.h)(r.colors,a,a);return v({},y,{border:"1px",borderColor:{light:"inherit",dark:"whiteAlpha.50"}[t],bg:{light:"white",dark:"whiteAlpha.100"}[t],_hover:{borderColor:{light:"gray.300",dark:"whiteAlpha.200"}[t]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,borderColor:i,boxShadow:"0 0 0 1px "+i},_invalid:{borderColor:n,boxShadow:"0 0 0 1px "+n}})}(e);default:return{}}},_={display:"flex",alignItems:"center",position:"relative",transition:"all 0.2s",outline:"none",appearance:"none"},x={lg:{fontSize:"lg",px:4,height:12,rounded:"md"},md:{fontSize:"md",px:4,height:10,rounded:"md"},sm:{fontSize:"sm",px:3,height:8,rounded:"sm"}},m=function(e){var r=v({},e,{theme:Object(f.b)(),colorMode:Object(p.a)().colorMode});return v({width:e.isFullWidth?"100%":void 0},_,{},function(e){return x[e.size]}(r),{},g(r))},w=Object(l.forwardRef)((function(e,r){e.size,e.variant;var t=e.as,o=e["aria-label"],i=e["aria-describedby"],l=e.isReadOnly,u=(e.isFullWidth,e.isDisabled,e.isInvalid,e.isRequired,e.focusBorderColor,e.errorBorderColor,n()(e,["size","variant","as","aria-label","aria-describedby","isReadOnly","isFullWidth","isDisabled","isInvalid","isRequired","focusBorderColor","errorBorderColor"])),b=m(e),f=Object(s.b)(e);return Object(d.d)(c.a,a()({ref:r,as:t,readOnly:f.isReadOnly,"aria-readonly":l,disabled:f.isDisabled,"aria-label":o,"aria-invalid":f.isInvalid,required:f.isRequired,"aria-required":f.isRequired,"aria-disabled":f.isDisabled,"aria-describedby":i},b,u))}));w.displayName="Input",w.defaultProps={size:"md",as:"input",variant:"outline",isFullWidth:!0,focusBorderColor:"blue.500",errorBorderColor:"red.500"};r.a=w},b804:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return u}));var o=t("rePB"),a=t("BMxC"),i=t("qWyU"),n=t("sK1y"),d=t("FpzS"),l=t("q1tI"),s=t("Ogvq"),c=l.createElement;function u(){var e=Object(s.g)(),r=e.goal,t=e.dispatch,l=function(e){return function(r){t({type:s.a.SET_GOAL,payload:Object(o.a)({},e,Number(r.currentTarget.value))})}};return c(a.a,{py:"2",px:"4"},c(i.a,{my:"6"},"Your Goal"),s.e.map((function(e){return c(a.a,null,c(n.a,{textTransform:"capitalize"},e)," ",c(d.a,{inputMode:"numeric",value:r[e],onChange:l(e)}))})))}u.pageTitle="Settings"},qWyU:function(e,r,t){"use strict";var o=t("pVnL"),a=t.n(o),i=t("8OQS"),n=t.n(i),d=t("qKvR"),l=t("BMxC"),s=t("q1tI"),c={"2xl":["4xl",null,"5xl"],xl:["3xl",null,"4xl"],lg:["xl",null,"2xl"],md:"xl",sm:"md",xs:"sm"},u=Object(s.forwardRef)((function(e,r){var t=e.size,o=void 0===t?"xl":t,i=n()(e,["size"]);return Object(d.d)(l.a,a()({ref:r,as:"h2",fontSize:c[o],lineHeight:"shorter",fontWeight:"bold",fontFamily:"heading"},i))}));u.displayName="Heading",r.a=u},rrX4:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t("b804")}])},sK1y:function(e,r,t){"use strict";var o=t("pVnL"),a=t.n(o),i=t("q1tI"),n=t.n(i),d=t("BMxC"),l=n.a.forwardRef((function(e,r){return n.a.createElement(d.a,a()({ref:r,as:"p",fontFamily:"body"},e))}));l.displayName="Text",r.a=l},"we/t":function(e,r,t){"use strict";t.d(r,"b",(function(){return c}));var o=t("pVnL"),a=t.n(o),i=t("8OQS"),n=t.n(i),d=t("qKvR"),l=t("q1tI"),s=t("BMxC"),c=function(e){var r=b();return r?Object.keys(r).reduce((function(t,o){return t[o]=e[o],r&&null==e[o]&&(t[o]=r[o]),t}),{}):e},u=Object(l.createContext)(),b=function(){return Object(l.useContext)(u)},f=Object(l.forwardRef)((function(e,r){var t=e.isInvalid,o=e.isRequired,i=e.isDisabled,l=e.isReadOnly,c=n()(e,["isInvalid","isRequired","isDisabled","isReadOnly"]),b={isRequired:o,isDisabled:i,isInvalid:t,isReadOnly:l};return Object(d.d)(u.Provider,{value:b},Object(d.d)(s.a,a()({role:"group",ref:r},c)))}));f.displayName="FormControl",r.a=f}},[["rrX4",0,1,2]]]);