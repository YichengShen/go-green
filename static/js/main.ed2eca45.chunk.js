(this["webpackJsonpgo-green"]=this["webpackJsonpgo-green"]||[]).push([[0],{134:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),s=(a(134),a(30)),i=a(12),l=a(18),d=a(17),u=a(199),p=a(22),b=a.n(p),j=a(31),m=a(218),h=a(200),g=a(196),O=a(213),x=a(201),f=a(39),y=a.n(f),v=a(78),C=a(192),I=a(194),k=a(66),w=(a(136),a(149),k.a.initializeApp({apiKey:"AIzaSyB7CZPZy-JTIiSJItjEeePmhjjJtTogYUg",authDomain:"go-green-c7d48.firebaseapp.com",projectId:"go-green-c7d48",storageBucket:"go-green-c7d48.appspot.com",messagingSenderId:"355828304660",appId:"1:355828304660:web:e2092ba865b3d388959001"})),S=w.auth(),F=w.firestore(),P=a(3),L=o.a.createContext(),N=function(){return Object(n.useContext)(L)},R=function(e){var t=e.children,a=Object(n.useState)(),o=Object(i.a)(a,2),r=o[0],c=o[1],s=Object(n.useState)(!0),l=Object(i.a)(s,2),d=l[0],u=l[1];Object(n.useEffect)((function(){return S.onAuthStateChanged((function(e){c(e),u(!1)}))}),[]);var p={currentUser:r,login:function(e,t){return S.signInWithEmailAndPassword(e,t)},signup:function(e,t){return S.createUserWithEmailAndPassword(e,t)},logout:function(){return S.signOut()},resetPassword:function(e){return S.sendPasswordResetEmail(e)}};return Object(P.jsx)(L.Provider,{value:p,children:!d&&t})},T=function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()},B=function(e,t){var a=k.a.auth().currentUser,n={uid:a.uid,firstName:T(e),lastName:T(t)};return F.collection("users").doc(a.uid).set(n),a.updateProfile({displayName:T(e)})},W=a(216),G=a(198),M=a(214),A=Object(C.a)((function(e){return{paper:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,padding:e.spacing(4),marginBottom:e.spacing(6),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),color:e.palette.secondary.light,backgroundColor:e.palette.primary.contrastText},greenBoldText:{color:e.palette.secondary.light,fontWeight:"Bolder"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,0)},cancel:{margin:e.spacing(2,0,2),backgroundColor:"grey"},cssLabel:{color:"".concat(e.palette.secondary.light," !important")},cssInput:{color:"".concat(e.palette.primary.contrastText," !important")},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.secondary.light," !important")}},cssFocused:{color:"".concat(e.palette.secondary.light," !important")},notchedOutline:{borderWidth:"1px",borderColor:"".concat(e.palette.secondary.light," !important")}}})),E=function(){var e=o.a.useRef(),t=o.a.useRef(),a=o.a.useRef(),n=o.a.useRef(),r=o.a.useRef(),c=N().signup,s=o.a.useState(""),p=Object(i.a)(s,2),f=p[0],C=p[1],k=o.a.useState(!1),w=Object(i.a)(k,2),S=w[0],F=w[1],L=A(),R=Object(d.g)(),T=function(){var o=Object(j.a)(b.a.mark((function o(s){return b.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s.preventDefault(),n.current.value===r.current.value){o.next=3;break}return o.abrupt("return",C("Passwords do not match"));case 3:return o.prev=3,C(""),F(!0),o.next=8,c(a.current.value,n.current.value).then((function(a){B(e.current.value,t.current.value)}));case 8:R.push("/"),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(3),C("Failed to create your account."+o.t0.message);case 14:F(!1);case 15:case"end":return o.stop()}}),o,null,[[3,11]])})));return function(e){return o.apply(this,arguments)}}();return Object(P.jsxs)(I.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(g.a,{}),Object(P.jsx)(M.a,{p:2}),Object(P.jsxs)("div",{className:L.paper,children:[Object(P.jsx)(v.a,{className:L.greenBoldText,component:"h1",variant:"h3",children:"GoGreen"}),Object(P.jsx)(m.a,{className:L.avatar,children:Object(P.jsx)(y.a,{})}),Object(P.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign up"}),f&&Object(P.jsxs)(W.a,{severity:"error",children:[Object(P.jsx)(G.a,{children:"Error"}),f]}),Object(P.jsxs)("form",{className:L.form,onSubmit:T,children:[Object(P.jsxs)(u.a,{container:!0,spacing:2,children:[Object(P.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(O.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,inputRef:e,InputLabelProps:{classes:{root:L.cssLabel,focused:L.cssFocused}},InputProps:{classes:{root:L.cssOutlinedInput,input:L.cssInput,focused:L.cssFocused,notchedOutline:L.notchedOutline},inputMode:"numeric"}})}),Object(P.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",inputRef:t,InputLabelProps:{classes:{root:L.cssLabel,focused:L.cssFocused}},InputProps:{classes:{root:L.cssOutlinedInput,input:L.cssInput,focused:L.cssFocused,notchedOutline:L.notchedOutline},inputMode:"numeric"}})}),Object(P.jsx)(u.a,{item:!0,xs:12,children:Object(P.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:a,InputLabelProps:{classes:{root:L.cssLabel,focused:L.cssFocused}},InputProps:{classes:{root:L.cssOutlinedInput,input:L.cssInput,focused:L.cssFocused,notchedOutline:L.notchedOutline},inputMode:"numeric"}})}),Object(P.jsx)(u.a,{item:!0,xs:12,children:Object(P.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:n,InputLabelProps:{classes:{root:L.cssLabel,focused:L.cssFocused}},InputProps:{classes:{root:L.cssOutlinedInput,input:L.cssInput,focused:L.cssFocused,notchedOutline:L.notchedOutline},inputMode:"numeric"}})}),Object(P.jsx)(u.a,{item:!0,xs:12,children:Object(P.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,name:"passwordConfirm",label:"Confirm Password",type:"password",id:"passwordConfirm",autoComplete:"current-password",inputRef:r,InputLabelProps:{classes:{root:L.cssLabel,focused:L.cssFocused}},InputProps:{classes:{root:L.cssOutlinedInput,input:L.cssInput,focused:L.cssFocused,notchedOutline:L.notchedOutline},inputMode:"numeric"}})})]}),Object(P.jsx)(h.a,{disabled:S,type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:L.submit,children:"Sign Up"}),Object(P.jsx)(h.a,{component:l.b,to:"/",fullWidth:!0,variant:"contained",color:"secondary",className:L.cancel,children:"Cancel"}),Object(P.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(x.a,{component:l.b,to:"/login",variant:"body2",color:"secondary",children:"Already have an account? Log in"})})})]})]})]})},U=Object(C.a)((function(e){return{paper:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,padding:e.spacing(4),marginBottom:e.spacing(6),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),color:e.palette.secondary.light,backgroundColor:e.palette.primary.contrastText},greenBoldText:{color:e.palette.secondary.light,fontWeight:"Bolder"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,0)},cancel:{margin:e.spacing(2,0,2),backgroundColor:"grey"},cssLabel:{color:"".concat(e.palette.secondary.light," !important")},cssInput:{color:"".concat(e.palette.primary.contrastText," !important")},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.secondary.light," !important")}},cssFocused:{color:"".concat(e.palette.secondary.light," !important")},notchedOutline:{borderWidth:"1px",borderColor:"".concat(e.palette.secondary.light," !important")}}})),D=function(){var e=o.a.useRef(),t=o.a.useRef(),a=U(),n=N().login,r=o.a.useState(""),c=Object(i.a)(r,2),s=c[0],p=c[1],f=o.a.useState(!1),C=Object(i.a)(f,2),k=C[0],w=C[1],S=Object(d.g)(),F=function(){var a=Object(j.a)(b.a.mark((function a(o){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o.preventDefault(),a.prev=1,p(""),w(!0),a.next=6,n(e.current.value,t.current.value);case 6:S.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),p("Failed to sign in");case 12:w(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(P.jsxs)(I.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(g.a,{}),Object(P.jsx)(M.a,{p:2}),Object(P.jsxs)("div",{className:a.paper,children:[Object(P.jsx)(v.a,{className:a.greenBoldText,component:"h1",variant:"h3",children:"GoGreen"}),Object(P.jsx)(m.a,{className:a.avatar,children:Object(P.jsx)(y.a,{})}),Object(P.jsx)(v.a,{component:"h1",variant:"h5",children:"Log in"}),s&&Object(P.jsxs)(W.a,{severity:"error",children:[Object(P.jsx)(G.a,{children:"Error"}),s]}),Object(P.jsxs)("form",{className:a.form,onSubmit:F,children:[Object(P.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e,InputLabelProps:{classes:{root:a.cssLabel,focused:a.cssFocused}},InputProps:{classes:{root:a.cssOutlinedInput,input:a.cssInput,focused:a.cssFocused,notchedOutline:a.notchedOutline},inputMode:"numeric"}}),Object(P.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t,InputLabelProps:{classes:{root:a.cssLabel,focused:a.cssFocused}},InputProps:{classes:{root:a.cssOutlinedInput,input:a.cssInput,focused:a.cssFocused,notchedOutline:a.notchedOutline},inputMode:"numeric"}}),Object(P.jsx)(h.a,{disabled:k,type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:a.submit,children:"Log In"}),Object(P.jsx)(h.a,{component:l.b,to:"/",fullWidth:!0,variant:"contained",color:"secondary",className:a.cancel,children:"Cancel"}),Object(P.jsxs)(u.a,{container:!0,children:[Object(P.jsx)(u.a,{item:!0,xs:!0,children:Object(P.jsx)(x.a,{component:l.b,to:"/forgot-password",variant:"body2",color:"secondary",children:"Forgot password?"})}),Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(x.a,{component:l.b,to:"/signup",variant:"body2",color:"secondary",children:"Don't have an account? Sign Up"})})]})]})]})]})},$=Object(C.a)((function(e){return{paper:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,padding:e.spacing(4),marginBottom:e.spacing(6),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),color:e.palette.secondary.light,backgroundColor:e.palette.primary.contrastText},greenBoldText:{color:e.palette.secondary.light,fontWeight:"Bolder"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,0)},cancel:{margin:e.spacing(2,0,2),backgroundColor:"grey"},cssLabel:{color:"".concat(e.palette.secondary.light," !important")},cssInput:{color:"".concat(e.palette.primary.contrastText," !important")},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.secondary.light," !important")}},cssFocused:{color:"".concat(e.palette.secondary.light," !important")},notchedOutline:{borderWidth:"1px",borderColor:"".concat(e.palette.secondary.light," !important")}}})),q=function(){var e=o.a.useRef(),t=$(),a=N().resetPassword,n=o.a.useState(""),r=Object(i.a)(n,2),c=r[0],s=r[1],d=o.a.useState(""),p=Object(i.a)(d,2),f=p[0],C=p[1],k=o.a.useState(!1),w=Object(i.a)(k,2),S=w[0],F=w[1],L=function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,C(""),s(""),F(!0),t.next=7,a(e.current.value);case 7:C("Check your inbox for further instructions"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s("Failed to reset password. "+t.t0.message);case 13:F(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(P.jsxs)(I.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(g.a,{}),Object(P.jsx)(M.a,{p:2}),Object(P.jsxs)("div",{className:t.paper,children:[Object(P.jsx)(v.a,{className:t.greenBoldText,component:"h1",variant:"h3",children:"GoGreen"}),Object(P.jsx)(m.a,{className:t.avatar,children:Object(P.jsx)(y.a,{})}),Object(P.jsx)(v.a,{component:"h1",variant:"h5",children:"Reset Password"}),c&&Object(P.jsxs)(W.a,{severity:"error",children:[Object(P.jsx)(G.a,{children:"Error"}),c]}),f&&Object(P.jsxs)(W.a,{severity:"success",children:[Object(P.jsx)(G.a,{children:"Reset Email Sent"}),f]}),Object(P.jsxs)("form",{className:t.form,onSubmit:L,children:[Object(P.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e,InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,input:t.cssInput,focused:t.cssFocused,notchedOutline:t.notchedOutline},inputMode:"numeric"}}),Object(P.jsx)(h.a,{disabled:S,type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,children:"Reset via Email"}),Object(P.jsx)(h.a,{component:l.b,to:"/login",fullWidth:!0,variant:"contained",color:"secondary",className:t.cancel,children:"GO TO LOG IN"}),Object(P.jsx)(u.a,{container:!0,children:Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(x.a,{component:l.b,to:"/signup",variant:"body2",color:"secondary",children:"Don't have an account? Sign Up"})})})]})]})]})},J=a(73),z=a(203),H=a(204),K=a(205),V=a(107),Z=a.n(V),Y=a(108),Q=a.n(Y),X=a(110),_=a.n(X),ee=a(109),te=a.n(ee),ae=a(202),ne=Object(ae.a)({palette:{primary:{light:"#484848",main:"#212121",mainLight:"#303030",dark:"#000000",contrastText:"#fff"},secondary:{light:"#80e27e",main:"#4caf50",dark:"#087f23",contrastText:"#000"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),oe=Object(J.a)({overrides:{MuiBottomNavigation:{root:{position:"fixed",bottom:0,width:"100%",backgroundColor:ne.palette.primary.main}},MuiBottomNavigationAction:{root:{color:ne.palette.primary.contrastText,boxSizing:"border-box","&:hover":{color:ne.palette.secondary.main},"&$selected":{color:ne.palette.secondary.light,"&:hover":{color:ne.palette.secondary.main}}}}}}),re=function(e){return Object(P.jsx)(z.a,{theme:oe,children:Object(P.jsxs)(H.a,{value:e.pageValue,onChange:function(t,a){e.onPageChange(a)},showLabels:!0,children:[Object(P.jsx)(K.a,{component:l.b,to:"/",label:"Home",icon:Object(P.jsx)(Z.a,{})}),Object(P.jsx)(K.a,{component:l.b,to:"/check-in",label:"Check-in",icon:Object(P.jsx)(Q.a,{})}),Object(P.jsx)(K.a,{component:l.b,to:"/badges",label:"Badges",icon:Object(P.jsx)(te.a,{})}),Object(P.jsx)(K.a,{component:l.b,to:"/ranking",label:"Ranking",icon:Object(P.jsx)(_.a,{})})]})})},ce=a(210),se=a(211),ie=a(197),le=a(217),de=a(209),ue=a(207),pe=a(208),be=a(206),je=function(e){return Object(P.jsxs)(le.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(P.jsx)(be.a,{id:"alert-dialog-title",children:"ERROR"}),Object(P.jsx)(ue.a,{children:Object(P.jsx)(pe.a,{id:"alert-dialog-description",children:e.errorMsg})}),Object(P.jsx)(de.a,{children:Object(P.jsx)(h.a,{onClick:e.onClose,autoFocus:!0,children:"OK"})})]})},me=Object(J.a)({overrides:{MuiAppBar:{colorPrimary:{color:ne.palette.secondary.light,backgroundColor:ne.palette.primary.dark}},MuiButton:{root:{position:"absolute",right:10,color:ne.palette.secondary.main,backgroundColor:ne.palette.primary.main,"&:hover":{color:ne.palette.secondary.light,backgroundColor:ne.palette.primary.light}}}}}),he=function(){var e=o.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=N(),c=r.currentUser,s=r.logout,u=Object(d.g)(),p=o.a.useState(!1),m=Object(i.a)(p,2),g=m[0],O=m[1],x=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,s();case 4:u.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out"),O(!0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(z.a,{theme:me,children:Object(P.jsx)(ce.a,{position:"static",children:Object(P.jsxs)(se.a,{children:[Object(P.jsxs)(ie.a,{component:l.b,to:"/",edge:"start",color:"inherit","aria-label":"home",children:[Object(P.jsx)(y.a,{}),Object(P.jsx)(M.a,{mr:1}),Object(P.jsx)(v.a,{variant:"h5",children:"GoGreen"})]}),null===c?Object(P.jsx)(h.a,{component:l.b,to:"/login",children:"LOG IN"}):Object(P.jsxs)(o.a.Fragment,{children:[Object(P.jsx)(h.a,{onClick:x,children:"LOG OUT"}),Object(P.jsx)(je,{open:g,onClose:function(){O(!1)},errorMsg:a})]})]})})})},ge=a(114),Oe=function(){return Object(P.jsx)("div",{style:{backgroundColor:"black",height:"100vh"},children:Object(P.jsx)(ge.a,{height:"90vh",width:"auto",markers:[{id:"marker1",city:"Singapore",color:"red",coordinates:[1.3521,103.8198],value:50},{id:"marker3",city:"San Francisco",color:"orange",coordinates:[37.773972,-122.431297],value:35},{id:"marker4",city:"Beijing",color:"gold",coordinates:[39.9042,116.4074],value:135},{id:"marker5",city:"London",color:"green",coordinates:[51.5074,.1278],value:80},{id:"marker6",city:"Los Angeles",color:"gold",coordinates:[29.7604,-95.3698],value:54}],options:{cameraRotateSpeed:.5,cameraAutoRotateSpeed:.35,focusAnimationDuration:2e3,enableMarkerGlow:"true",globeCloudsOpacity:.5,globeGlowColor:"blue",markerTooltipRenderer:function(e){return"".concat(e.city,": ").concat(e.value)}},initialCoordinates:[42.3355,71.1685],initialCameraDistanceRadiusScale:5})})},xe=a(150),fe=a(212),ye=a(219),ve=a(75),Ce=a(74),Ie=a(77),ke=a.n(Ie),we=Object(C.a)((function(e){return{cssLabel:{color:"".concat(e.palette.secondary.light," !important")},cssInput:{color:"".concat(e.palette.primary.contrastText," !important")},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.secondary.light," !important")}},cssFocused:{color:"".concat(e.palette.secondary.light," !important")},notchedOutline:{borderWidth:"1px",borderColor:"".concat(e.palette.secondary.light," !important")},autocompleteResults:{padding:"2px"}}})),Se=function(e){var t=we(),a=e.city,n=e.onSetCity,r=e.coordinates,c=e.onSetCoordinates,i=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.geocodeByAddress)(t);case 2:return a=e.sent,e.next=5,Object(Ie.getLatLng)(a[0]);case 5:o=e.sent,n(t),c(o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(o.a.Fragment,{children:[Object(P.jsx)(v.a,{color:"secondary",children:"Which city are you currently in?"}),Object(P.jsx)(ke.a,{value:a,onChange:n,onSelect:i,searchOptions:{types:["(cities)"]},children:function(e){var a=e.getInputProps,n=e.suggestions,o=e.getSuggestionItemProps,c=e.loading;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(O.a,Object(s.a)(Object(s.a)({},a({placeholder:"Type then select city"})),{},{error:null===r.lat||null===r.lng,variant:"outlined",margin:"dense",required:!0,id:"city",label:"City",name:"city",autoComplete:"off",autoFocus:!0,InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,input:t.cssInput,focused:t.cssFocused,notchedOutline:t.notchedOutline},inputMode:"numeric"}})),Object(P.jsx)("div",{children:c?Object(P.jsx)("div",{style:{color:"white"},children:"...loading"}):Object(P.jsx)(P.Fragment,{children:n.length?Object(P.jsx)(xe.a,{elevation:0,className:t.autocompleteResults,children:n.map((function(e,t){var a={color:ne.palette.primary.contrastText,backgroundColor:e.active?ne.palette.secondary.main:ne.palette.primary.main};return Object(P.jsx)("div",Object(s.a)(Object(s.a)({},o(e,{style:a})),{},{children:e.description}),t)}))}):null})})]})}})]})},Fe=Object(J.a)({palette:{secondary:{main:ne.palette.secondary.main}},overrides:{MuiToggleButtonGroup:{root:{padding:"2px 5px",borderRadius:"15px",backgroundImage:"linear-gradient(".concat(ve.a[500],", ").concat(Ce.a[300],")")}},MuiToggleButton:{root:{color:"white",backgroundColor:"rgba(0, 0, 0, .5)",fontWeight:"lighter",margin:"3px 0",borderRadius:10,"&:hover":{color:"black",backgroundColor:"rgba(255, 255, 255, .4)"},"&$selected":{color:"black",backgroundColor:"rgba(255, 255, 255, .8)",fontWeight:"bolder","&:hover":{backgroundColor:"rgba(255, 255, 255, .4)"}}}},MuiButton:{root:{backgroundColor:"rgba(255, 255, 255, .2)"}}}}),Pe=Object(C.a)((function(e){return{paper:{backgroundColor:e.palette.primary.mainLight,marginTop:e.spacing(2),marginBottom:e.spacing(10),padding:"30px 0px",display:"flex",flexDirection:"column",alignItems:"center"},greenBold:{color:e.palette.secondary.light,fontWeight:"bolder",marginBottom:"20px"}}})),Le=function(e,t){var a=Pe(),n=e.city,r=e.setCity,c=e.coordinates,s=e.setCoordinates,l=e.onSubmit,d=e.submitError,p=o.a.useState("100"),b=Object(i.a)(p,2),j=b[0],m=b[1];return Object(P.jsx)(z.a,{theme:Fe,children:Object(P.jsxs)(u.a,{container:!0,children:[Object(P.jsx)(u.a,{item:!0,xs:1,sm:2,md:3}),Object(P.jsx)(u.a,{item:!0,xs:10,sm:8,md:6,children:Object(P.jsxs)(xe.a,{className:a.paper,elevation:10,children:[Object(P.jsx)(v.a,{className:a.greenBold,variant:"h5",component:"h1",children:"Today's Check-in"}),Object(P.jsx)(Se,{city:n,onSetCity:r,coordinates:c,onSetCoordinates:s}),Object(P.jsx)(M.a,{mt:2}),Object(P.jsx)(v.a,{color:"secondary",children:"How did you commute today?"}),Object(P.jsx)(v.a,{color:"secondary",children:"Select a level below."}),Object(P.jsxs)(ye.a,{orientation:"vertical",value:j,size:"large",exclusive:!0,onChange:function(e,t){null!==t&&m(t)},children:[Object(P.jsx)(fe.a,{value:"100","aria-label":"All Green",children:"100% Green"}),Object(P.jsx)(fe.a,{value:"75","aria-label":"Mostly Green",children:"75% Green + 25% Gasoline"}),Object(P.jsx)(fe.a,{value:"50","aria-label":"Half",children:"50% Green + 50% Gasoline"}),Object(P.jsx)(fe.a,{value:"25","aria-label":"Mostly Gasoline",children:"25% Green + 75% Gasoline"}),Object(P.jsx)(fe.a,{value:"0","aria-label":"All Gasoline",children:"100% Gasoline"})]}),Object(P.jsx)(M.a,{mt:2}),Object(P.jsx)(h.a,{color:"secondary",onClick:l,children:"Submit"}),d&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(M.a,{mt:2}),Object(P.jsx)(W.a,{severity:"error",style:{width:"80%"},children:"Failed to submit. Invalid city name. Please type in a city name and select from the suggestions below the input field."})]})]})}),Object(P.jsx)(u.a,{item:!0,xs:1,sm:2,md:3})]})})},Ne=function(e){var t=o.a.useState(""),a=Object(i.a)(t,2),n=a[0],r=a[1],c=o.a.useState({lat:null,lng:null}),s=Object(i.a)(c,2),l=s[0],d=s[1],u=o.a.useState(!1),p=Object(i.a)(u,2),b=p[0],j=p[1],m=o.a.useState(!1),h=Object(i.a)(m,2),g=h[0],O=h[1];return Object(P.jsx)(o.a.Fragment,{children:b?Object(P.jsx)(Oe,{}):Object(P.jsx)(Le,{city:n,setCity:r,coordinates:l,setCoordinates:d,onSubmit:function(e){O(!1),null!==l.lat&&null!==l.lng?(console.log(l.lat,l.lng),j(!0)):O(!0)},submitError:g})})},Re=(a(115),function(){var e=o.a.useState(0),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(P.jsx)("div",{style:{backgroundColor:ne.palette.primary.dark,height:"100%",overflow:"auto"},children:Object(P.jsxs)(l.a,{basename:"/go-green",children:[Object(P.jsx)(R,{children:Object(P.jsxs)(d.d,{children:[Object(P.jsx)(d.b,{path:"/signup",component:E}),Object(P.jsx)(d.b,{path:"/login",component:D}),Object(P.jsx)(d.b,{path:"/forgot-password",component:q}),Object(P.jsx)(o.a.Fragment,{children:Object(P.jsxs)(u.a,{container:!0,direction:"column",children:[Object(P.jsx)(u.a,{item:!0,xs:12,children:Object(P.jsx)(he,{})}),Object(P.jsx)(u.a,{item:!0,children:Object(P.jsxs)("main",{children:[Object(P.jsx)(d.b,{path:"/check-in",render:function(e){return Object(P.jsx)(Ne,Object(s.a)({},e))}}),Object(P.jsx)(d.b,{path:"/badges",children:"badges"}),Object(P.jsx)(d.b,{path:"/ranking",children:"ranking"}),Object(P.jsx)(d.b,{exact:!0,path:"/",children:"home"})]})}),Object(P.jsx)(u.a,{item:!0,xs:12,children:Object(P.jsx)(re,{pageValue:a,onPageChange:n})})]})})]})})," "]})})});c.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(z.a,{theme:ne,children:Object(P.jsx)(Re,{})})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.ed2eca45.chunk.js.map