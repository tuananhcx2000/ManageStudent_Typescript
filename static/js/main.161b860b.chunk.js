(this["webpackJsonpredux-saga"]=this["webpackJsonpredux-saga"]||[]).push([[0],{351:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);var a=n(443),c=n(98),r=n(0),i=n.n(r),o=n(19),s=n.n(o),l=n(73),u=n(90),d=n(175),j=n.n(d).a.create({baseURL:"http://js-post-api.herokuapp.com/api",headers:{"Content-type":"application/json"}});j.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),j.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var b=j,h={getAll:function(){return b.get("/cities",{params:{_page:1,_limit:10}})}},O=n(4),m=n(38),x=n(27);function p(e){return Boolean(localStorage.getItem("access_token"))?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.b,Object(m.a)({},e))}):Object(O.jsx)(x.a,{to:"/login"})}var f=n(412),g=n(444),v=n(25),y=n(414),S=n(417),k=n(195),C=n(419),w=n(450),F=n(416),_=n(77),A=n(181),N=n.n(A),L=n(180),I=n.n(L),B=function(){return Object(l.d)()},D=l.e,M=n(46),P={isLoggedin:!1,logging:!1,currentUser:void 0},z=Object(M.c)({name:"auth",initialState:P,reducers:{login:function(e,t){e.logging=!0},loginSuccess:function(e,t){e.isLoggedin=!0,e.logging=!1,e.currentUser=t.payload},loginFail:function(e,t){e.logging=!1},logout:function(e){e.isLoggedin=!1,e.currentUser=void 0}}}),E=z.actions,R=E.login,T=E.loginSuccess,W=(E.loginFail,E.logout),H=function(e){return e.auth},U=z.reducer,G=n(76),q=Object(f.a)((function(e){return Object(w.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},positionMenu:{}})}));function V(){var e=q(),t=B(),n=i.a.useState(!0),a=Object(v.a)(n,2),c=a[0],r=(a[1],i.a.useState(null)),o=Object(v.a)(r,2),s=o[0],l=o[1],u=Boolean(s),d=function(){l(null)};return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(y.a,{position:"static",children:Object(O.jsxs)(F.a,{children:[Object(O.jsx)(S.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(I.a,{})}),Object(O.jsx)(_.a,{variant:"h6",className:e.title,children:"Admin Manager"}),c&&Object(O.jsxs)("div",{children:[Object(O.jsx)(S.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit",children:Object(O.jsx)(N.a,{})}),Object(O.jsxs)(k.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:d,classes:{paper:e.positionMenu},children:[Object(O.jsx)(C.a,{onClick:d,children:"Profile"}),Object(O.jsx)(C.a,{onClick:function(){G.a.auth().signOut(),t(W()),d()},children:"Log out"})]})]})]})})})}var K=n(418),J=n(367),Y=n(420),Q=n(422),$=n(421),X=n(423),Z=n(48),ee=Object(f.a)((function(e){return Object(w.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},link:{color:"inherit",textDecoration:"none"},activeLink:{display:"block",backgroundColor:"rgba(34,56,23,0.3)"}})}));function te(){var e=ee(),t=Object(x.i)().url;return console.log(t),Object(O.jsx)("div",{className:e.root,children:Object(O.jsxs)(K.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(O.jsx)(Z.b,{to:"".concat(t,"/dashboard"),className:e.link,activeClassName:e.activeLink,children:Object(O.jsxs)(J.a,{button:!0,children:[Object(O.jsx)(Y.a,{children:Object(O.jsx)($.a,{})}),Object(O.jsx)(Q.a,{primary:"DashBoard"})]})}),Object(O.jsx)(Z.b,{to:"".concat(t,"/student"),className:e.link,activeClassName:e.activeLink,children:Object(O.jsxs)(J.a,{button:!0,children:[Object(O.jsx)(Y.a,{children:Object(O.jsx)(X.a,{})}),Object(O.jsx)(Q.a,{primary:"Student"})]})})]})})}var ne=n(117),ae=n(432),ce=n(424),re=n(425),ie=n.p+"static/media/loading-32.c4bec487.gif",oe=Object(f.a)((function(e){return{root:{position:"fixed",top:0,left:0,right:0,bottom:0},card:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.8)",minHeight:"100vh"},image:{width:"100px"}}})),se=function(e){var t=oe();return Object(O.jsx)(g.a,{className:t.root,id:"box_container",children:Object(O.jsx)(ce.a,{className:t.card,id:"card_container",children:Object(O.jsx)(re.a,{id:"card_content",children:Object(O.jsx)("img",{src:"".concat(ie),alt:"NO MATCH",className:t.image})})})})},le=Object(f.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"rgba(0, 0, 209, 0.2)",borderRadius:4,padding:e.spacing(1,2)},caption:{fontSize:20}}})),ue=function(e){var t=e.label,n=e.value,a=e.icon,c=le();return Object(O.jsxs)(g.a,{className:c.root,children:[a,Object(O.jsxs)(g.a,{textAlign:"right",children:[Object(O.jsx)(_.a,{variant:"h6",children:t}),Object(O.jsx)(_.a,{variant:"caption",className:c.caption,children:n})]})]})},de=Object(M.c)({name:"dashboard",initialState:{loading:!1,statistics:{maleCount:0,femaleCount:0,hightMarkCount:0,lowMarkCount:0},highestStudent:[],lowestStudent:[],rankingByCityList:[]},reducers:{actionFetchData:function(e){e.loading=!0},actionFetchDataSuccess:function(e){e.loading=!1},actionFetchDataFail:function(e){e.loading=!1},actionSetStatistics:function(e,t){e.statistics=t.payload},actionSetHighestStudent:function(e,t){e.highestStudent=t.payload},actionSeLowestStudentt:function(e,t){e.lowestStudent=t.payload},actionSetRankingByCityList:function(e,t){e.rankingByCityList=t.payload}}}),je=de.actions,be=je.actionFetchData,he=(je.actionFetchDataSuccess,je.actionFetchDataFail),Oe=je.actionSetStatistics,me=je.actionSetHighestStudent,xe=je.actionSeLowestStudentt,pe=je.actionSetRankingByCityList,fe=function(e){return e.dashboard.loading},ge=function(e){return e.dashboard.statistics},ve=function(e){return e.dashboard.highestStudent},ye=function(e){return e.dashboard.lowestStudent},Se=function(e){return e.dashboard.rankingByCityList},ke=de.reducer,Ce=n(182),we=n.n(Ce),Fe=n(183),_e=n.n(Fe),Ae=n(184),Ne=n.n(Ae),Le=n(185),Ie=n.n(Le),Be=n(427),De=n(431),Me=n(430),Pe=n(426),ze=n(428),Ee=n(429),Re=n(200),Te=Object(f.a)({table:{}});function We(e){var t=e.studentList,n=Te();return Object(O.jsx)(Pe.a,{component:Re.a,children:Object(O.jsxs)(Be.a,{className:n.table,"aria-label":"simple table",children:[Object(O.jsx)(ze.a,{children:Object(O.jsxs)(Ee.a,{children:[Object(O.jsx)(Me.a,{children:"# "}),Object(O.jsx)(Me.a,{align:"right",children:"Name"}),Object(O.jsx)(Me.a,{align:"right",children:"Mark\xa0(g)"})]})}),Object(O.jsx)(De.a,{children:t.map((function(e,t){return Object(O.jsxs)(Ee.a,{children:[Object(O.jsx)(Me.a,{component:"th",scope:"row",children:t+1}),Object(O.jsx)(Me.a,{align:"right",children:e.name}),Object(O.jsx)(Me.a,{align:"right",children:e.mark})]},e.id)}))})]})})}var He=Object(f.a)((function(e){return{roots:{padding:e.spacing(1,2)}}}));function Ue(e){var t=e.title,n=e.children,a=He();return Object(O.jsxs)(Re.a,{variant:"outlined",className:a.roots,children:[Object(O.jsx)(_.a,{variant:"h6",children:t}),Object(O.jsx)(g.a,{mt:1,children:n})]})}function Ge(e,t){var n=t.find((function(t){return e===t.code}));return(null===n||void 0===n?void 0:n.name)||"Kh\xf4ng x\xe1c \u0111\u1ecbnh"}var qe=Object(M.c)({name:"city",initialState:{loading:!1,list:[]},reducers:{actionFetchDataCity:function(e){e.loading=!0},actionFetchDataCitySuccess:function(e,t){e.loading=!1,e.list=t.payload.data},actionFetchDataCityFail:function(e){e.loading=!1}}}),Ve=qe.actions,Ke=Ve.actionFetchDataCity,Je=Ve.actionFetchDataCitySuccess,Ye=Ve.actionFetchDataCityFail,Qe=function(e){return e.city.list},$e=qe.reducer;function Xe(e){Object(ne.a)(e);var t=B(),n=D(ge),a=n.maleCount,c=n.femaleCount,i=n.hightMarkCount,o=n.lowMarkCount,s=D(fe),l=D(ve),u=D(ye),d=D(Se),j=D(Qe);return Object(r.useEffect)((function(){t(be()),t(Ke())}),[t]),Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)(se,{}),Object(O.jsx)(g.a,{overflow:"hidden",children:Object(O.jsxs)(ae.a,{container:!0,spacing:1,children:[Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,children:Object(O.jsx)(ue,{value:a,label:"Male Count",icon:Object(O.jsx)(we.a,{fontSize:"large"})})}),Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,children:Object(O.jsx)(ue,{value:c,label:"Female Count",icon:Object(O.jsx)(_e.a,{fontSize:"large"})})}),Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,children:Object(O.jsx)(ue,{value:i,label:"Mark Up",icon:Object(O.jsx)(Ne.a,{fontSize:"large"})})}),Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,children:Object(O.jsx)(ue,{value:o,label:" Mark Down",icon:Object(O.jsx)(Ie.a,{fontSize:"large"})})})]})}),Object(O.jsxs)(g.a,{mt:3,overflow:"hidden",children:[Object(O.jsx)(_.a,{variant:"h5",children:"Top 5 Ranking"}),Object(O.jsxs)(ae.a,{container:!0,spacing:2,children:[Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:4,children:Object(O.jsx)(Ue,{title:"Top 5 Highest",children:Object(O.jsx)(We,{studentList:l})})}),Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:4,children:Object(O.jsxs)(Ue,{title:"Top 5 Lowest",children:[" ",Object(O.jsx)(We,{studentList:u})]})})]})]}),Object(O.jsxs)(g.a,{mt:3,overflow:"hidden",children:[Object(O.jsx)(_.a,{variant:"h5",children:"Top 5 Student in City"}),Object(O.jsx)(ae.a,{container:!0,spacing:2,children:d.map((function(e){return Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,lg:6,children:Object(O.jsxs)(Ue,{title:Ge(e.cityId,j),children:[" ",Object(O.jsx)(We,{studentList:e.ListStudent})]})},e.cityId)}))})]})]})}var Ze=n(10),et=n.n(Ze),tt=n(32),nt=n(189),at=n.n(nt),ct=n(435),rt=n(436),it=n(198),ot=n(433),st=n(41),lt=function(e){var t=e.name,n=e.control,a=e.label,c=Object(it.a)(e,["name","control","label"]),r=Object(st.d)({name:t,control:n}),i=r.field,o=i.value,s=i.onBlur,l=i.onChange,u=i.ref,d=r.fieldState,j=d.invalid,b=d.error;return Object(O.jsx)(g.a,{mt:2,children:Object(O.jsx)(ot.a,{size:"small",fullWidth:!0,value:o,onChange:l,onBlur:s,label:a,variant:"outlined",error:j,inputRef:u,inputProps:c,helperText:null===b||void 0===b?void 0:b.message})})},ut=n(370),dt=n(372),jt=n(451),bt=n(434),ht=n(447),Ot=n(373);function mt(e){var t=e.name,n=e.control,a=e.label,c=e.options,r=Object(st.d)({name:t,control:n}),i=r.field,o=i.value,s=i.onChange,l=i.onBlur,u=r.fieldState,d=(u.invalid,u.error);return Object(O.jsx)(g.a,{mt:2,children:Object(O.jsxs)(ut.a,{component:"fieldset",onBlur:l,children:[Object(O.jsx)(dt.a,{component:"legend",children:a}),Object(O.jsx)(jt.a,{"aria-label":"gender",value:o,onChange:s,children:c.map((function(e){return Object(O.jsx)(bt.a,{value:e.value,label:e.label,control:Object(O.jsx)(ht.a,{})})}))}),Object(O.jsx)(Ot.a,{children:d})]})})}var xt=n(371),pt=n(375),ft=Object(f.a)((function(e){return Object(w.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})}));function gt(e){var t=e.name,n=e.control,a=e.label,c=e.options,r=ft(),i=Object(st.d)({name:t,control:n}),o=i.field,s=o.value,l=o.onChange,u=o.onBlur,d=i.fieldState;d.invalid,d.error;return Object(O.jsxs)(ut.a,{className:r.formControl,fullWidth:!0,children:[Object(O.jsx)(xt.a,{htmlFor:"".concat(t,"-select"),children:a}),Object(O.jsxs)(pt.a,{native:!0,value:s,onChange:l,onBlur:u,id:"".concat(t,"-select"),children:[Object(O.jsx)("option",{"aria-label":"None",value:""}),c.map((function(e){return Object(O.jsx)("option",{value:e.value,children:e.label})}))]})]})}var vt=n(93),yt=n(197),St=n(448),kt=vt.b().shape({name:vt.c().required("Please enter your name").test("two-words","Please enter 2 word",(function(e){return!e||e.split(" ").filter((function(e){return Boolean(e)})).length>=2})),age:vt.a().positive("Please enter positive number").min(18,"Min is 18").max(60,"Max is 60").required("Please enter your age").typeError("Please enter number"),mark:vt.a().positive("Please enter positive number").min(0,"Min is 0").max(10,"Max is 10").required("Please enter your mark").typeError("Please enter number"),gender:vt.c().oneOf(["male","female"],"Please select either male or female").required("Please select your gender")});function Ct(e){var t=e.initialValues,n=e.onbubmit,a=e.error,c=D(Qe).map((function(e){return{value:e.code,label:e.name}})),r=Object(st.e)({defaultValues:t,resolver:Object(yt.a)(kt)}),i=r.control,o=r.handleSubmit,s=r.formState.isSubmitting;return Object(O.jsx)(g.a,{width:"40%",margin:"auto",children:Object(O.jsxs)("form",{onSubmit:o(n),children:[Object(O.jsx)(lt,{name:"name",control:i,label:"Name"}),Object(O.jsx)(lt,{name:"age",control:i,label:"Age"}),Object(O.jsx)(lt,{name:"mark",control:i,label:"Mark"}),Object(O.jsx)(mt,{name:"gender",control:i,label:"Gender",options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]}),Object(O.jsx)(gt,{name:"city",control:i,label:"City",options:c}),a&&Object(O.jsx)(St.a,{severity:"error",children:"Error connect to server "}),Object(O.jsx)(g.a,{mt:2,children:Object(O.jsxs)(ct.a,{variant:"outlined",type:"submit",children:[s&&Object(O.jsx)(rt.a,{size:"small"}),"Save"]})})]})})}var wt={getAll:function(e){return b.get("/students",{params:e})},getbyId:function(e){var t="/students/"+e;return b.get(t)},addStudent:function(e){return b.post("/students",e)},updateStudent:function(e){var t="/students/".concat(e.id);return b.patch(t,e)},removeStudent:function(e){var t="/students/"+e;return b.delete(t)}};function Ft(e){Object(ne.a)(e);var t=Object(x.h)().studentId,n=Object(r.useState)(""),a=Object(v.a)(n,2),c=a[0],i=a[1],o=Object(x.g)(),s=Object(r.useState)(),l=Object(v.a)(s,2),d=l[0],j=l[1],b=Boolean(t),h=Object(m.a)({name:"",age:0,mark:0,gender:"male",city:""},d),p=function(){var e=Object(tt.a)(et.a.mark((function e(t){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("submit",t),e.prev=1,!b){e.next=9;break}return i(""),e.next=6,wt.updateStudent(t);case 6:o.push("/admin/student"),e.next=13;break;case 9:return i(""),e.next=12,wt.addStudent(t);case 12:o.push("/admin/student");case 13:u.b.success("Success!"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),i(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b&&Object(tt.a)(et.a.mark((function e(){var n;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,wt.getbyId(t.slice(1));case 3:n=e.sent,j(n),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[t]),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(Z.a,{to:"/admin/student",style:{textDecoration:"none"},children:Object(O.jsxs)(_.a,{variant:"caption",style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(at.a,{})," Back to list student"]})}),Object(O.jsx)(_.a,{variant:"h5",children:b?"Update Student":"Add Student"}),(!b||Boolean(d))&&Object(O.jsx)(g.a,{mt:3,children:Object(O.jsx)(Ct,{initialValues:h,onbubmit:p,error:c})})]})}var _t=n(442),At=n(191),Nt=n.n(At),Lt=n(445),It=n(449),Bt=n(440),Dt=n(438),Mt=n(439),Pt=n(437),zt=Object(M.c)({name:"student",initialState:{loading:!1,list:[],filter:{_page:1,_limit:10},pagination:{_page:1,_limit:10,_totalRows:10}},reducers:{actionFetchListStudent:function(e,t){e.loading=!0},actionFetchListStudentSuccess:function(e,t){e.loading=!1,e.list=t.payload.data,e.pagination=t.payload.pagination},actionFetchListStudentFail:function(e){e.loading=!1},actionSetFilter:function(e,t){e.filter=t.payload},actionSetFilterDebounce:function(e,t){},actionSetFilterDebounceSuccess:function(e,t){e.filter=Object(m.a)(Object(m.a)({},e.filter),{},{name_like:t.payload,_page:1})}}}),Et=zt.actions,Rt=Et.actionFetchListStudent,Tt=Et.actionFetchListStudentSuccess,Wt=Et.actionFetchListStudentFail,Ht=Et.actionSetFilter,Ut=Et.actionSetFilterDebounce,Gt=Et.actionSetFilterDebounceSuccess,qt=function(e){return e.student.loading},Vt=function(e){return e.student.list},Kt=function(e){return e.student.filter},Jt=function(e){return e.student.pagination},Yt=zt.reducer;function Qt(e){var t=e.open,n=e.filter,a=e.currentStudent,c=e.handleClose,r=B(),i=function(){var e=Object(tt.a)(et.a.mark((function e(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,wt.removeStudent(a.id||"");case 3:u.b.success("Remove successfuly!"),c(),r(Rt(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{children:Object(O.jsxs)(It.a,{open:t,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(Pt.a,{id:"alert-dialog-title",children:"Please Confirm"}),Object(O.jsx)(Dt.a,{children:Object(O.jsxs)(Mt.a,{id:"alert-dialog-description",children:["Are you sure remove '",a.name,"' from list student?"]})}),Object(O.jsxs)(Bt.a,{children:[Object(O.jsx)(ct.a,{onClick:i,color:"secondary",autoFocus:!0,children:"Agree"}),Object(O.jsx)(ct.a,{onClick:c,color:"primary",children:"Cancle"})]})]})})}var $t=n(368),Xt=n(441),Zt=n(190),en=n.n(Zt);function tn(e){e.filter;var t=e.onSearchChange;return Object(O.jsxs)(ut.a,{fullWidth:!0,size:"small",children:[Object(O.jsx)(xt.a,{htmlFor:"standard-adornment-amount",children:"Enter To Search"}),Object(O.jsx)($t.a,{id:"standard-adornment-amount",onChange:function(e){return null===t||void 0===t?void 0:t(e)},endAdornment:Object(O.jsx)(Xt.a,{position:"end",children:Object(O.jsx)(en.a,{})})})]})}var nn=Object(f.a)((function(e){return Object(w.a)({formControl:{margin:e.spacing(1),minWidth:120}})}));function an(e){var t=e.filter,n=e.onCityChange,a=e.listCity,c=nn();return Object(O.jsxs)(ut.a,{variant:"outlined",className:c.formControl,size:"small",fullWidth:!0,children:[Object(O.jsx)(xt.a,{htmlFor:"outlined-age-native-simple",children:"City"}),Object(O.jsxs)(pt.a,{native:!0,onChange:n,label:"City",value:t.city||"",inputProps:{name:"age",id:"outlined-age-native-simple"},children:[Object(O.jsx)("option",{value:""}),a.map((function(e){return Object(O.jsx)("option",{value:e.code,children:e.name},e.code)}))]})]})}var cn=Object(f.a)((function(e){return Object(w.a)({formControl:{margin:e.spacing(1),minWidth:120}})}));function rn(e){var t=e.filter,n=e.onSortChange,a=cn();return Object(O.jsxs)(ut.a,{variant:"outlined",className:a.formControl,size:"small",fullWidth:!0,children:[Object(O.jsx)(xt.a,{htmlFor:"outlined-age-native-simple",children:"Sort"}),Object(O.jsxs)(pt.a,{native:!0,onChange:n,label:"Sort",value:"".concat(t._sort,".").concat(t._order)||"",inputProps:{name:"age",id:"outlined-age-native-simple"},children:[Object(O.jsx)("option",{value:""}),Object(O.jsx)("option",{value:"name.asc",children:"Name ASC"}),Object(O.jsx)("option",{value:"name.desc",children:"Name DESC"}),Object(O.jsx)("option",{value:"mark.asc",children:"Mark ASC"}),Object(O.jsx)("option",{value:"mark.desc",children:"Mark DESC"})]})]})}n(351);var on=Object(f.a)({table:{},action:{display:"flex"},columId:{maxWidth:"270px",height:"20px",lineHeight:"20px",overflow:"hidden"}});function sn(e){var t=e.studentList,n=e.handleClickOpen,a=e.handleEdit,c=on(),r=D(Qe);return Object(O.jsx)(Pe.a,{component:Re.a,children:Object(O.jsxs)(Be.a,{className:c.table,"aria-label":"simple table",children:[Object(O.jsx)(ze.a,{children:Object(O.jsxs)(Ee.a,{children:[Object(O.jsx)(Me.a,{align:"left",children:"#ID"}),Object(O.jsx)(Me.a,{children:"Name"}),Object(O.jsx)(Me.a,{children:"Gender"}),Object(O.jsx)(Me.a,{children:"Mark"}),Object(O.jsx)(Me.a,{children:"City"}),Object(O.jsx)(Me.a,{align:"right",children:"Action"})]})}),Object(O.jsx)(De.a,{children:t.map((function(e,t){return Object(O.jsxs)(Ee.a,{children:[Object(O.jsx)(Me.a,{component:"th",align:"left",children:Object(O.jsx)(g.a,{className:c.columId,id:"columId",children:e.id})}),Object(O.jsx)(Me.a,{children:e.name}),Object(O.jsx)(Me.a,{children:null===e||void 0===e?void 0:e.gender.toUpperCase()}),Object(O.jsx)(Me.a,{children:Object(O.jsx)(g.a,{color:(i=e.mark,i>=8?"green":i>=5?"orange":"red"),fontWeight:"bold",children:e.mark})}),Object(O.jsx)(Me.a,{children:Ge(e.city,r)}),Object(O.jsxs)(Me.a,{align:"right",className:c.action,children:[Object(O.jsx)(ct.a,{color:"secondary",size:"small",variant:"outlined",onClick:function(){return n(e)},children:"Remove"}),Object(O.jsx)(ct.a,{color:"primary",size:"small",variant:"outlined",onClick:function(){return a(e)},children:"Edit"})]})]},e.id);var i}))})]})})}var ln=Object(f.a)((function(e){return{roots:{padding:e.spacing(1,2)}}}));function un(e){var t=e.title,n=e.children,a=ln();return Object(O.jsxs)(Re.a,{variant:"outlined",className:a.roots,children:[Object(O.jsx)(_.a,{variant:"h6",children:t}),Object(O.jsx)(g.a,{mt:1,children:n})]})}var dn=Object(f.a)((function(e){return{root:{},pagination:{display:"flex",justifyContent:"center"},gridFilter:{alignItems:"center"}}}));function jn(){var e=dn(),t=B(),n=Object(x.g)(),a=D(qt),c=D(Kt),o=D(Vt),s=D(Jt),l=D(Qe),u=i.a.useState(1),d=Object(v.a)(u,2),j=d[0],b=d[1],h=Object(r.useState)({name:"",age:0,mark:0,gender:"male",city:"hn"}),p=Object(v.a)(h,2),f=p[0],y=p[1],S=i.a.useState(!1),k=Object(v.a)(S,2),C=k[0],w=k[1];Object(r.useEffect)((function(){t(Rt(c))}),[t,c]);var F=Object(x.i)().url;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(g.a,{children:[a&&Object(O.jsx)(se,{}),Object(O.jsxs)(g.a,{id:"title-list",display:"flex",justifyContent:"space-between",overflow:"hidden",children:[Object(O.jsx)(_.a,{variant:"h5",children:"Student List"}),Object(O.jsx)(Z.a,{to:"".concat(F,"/add"),style:{textDecoration:"none"},children:Object(O.jsxs)(_t.a,{color:"primary","aria-label":"add",variant:"extended",size:"small",children:[Object(O.jsx)(Nt.a,{})," Add Student"]})})]}),Object(O.jsx)(g.a,{children:Object(O.jsxs)(ae.a,{container:!0,spacing:2,className:e.gridFilter,children:[Object(O.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(tn,{filter:c,onSearchChange:function(e){t(Ut(e.target.value))}})}),Object(O.jsx)(ae.a,{item:!0,xs:12,md:3,children:Object(O.jsx)(an,{onCityChange:function(e){var n=Object(m.a)(Object(m.a)({},c),{},{_page:1,city:e.target.value||void 0});t(Ht(n))},filter:c,listCity:l})}),Object(O.jsx)(ae.a,{item:!0,xs:12,md:2,children:Object(O.jsx)(rn,{filter:c,onSortChange:function(e){var n=e.target.value.split("."),a=Object(v.a)(n,2),r=a[0],i=a[1],o=Object(m.a)(Object(m.a)({},c),{},{_sort:r||void 0,_order:i||void 0});t(Ht(o))}})}),Object(O.jsx)(ae.a,{item:!0,xs:4,md:1,children:Object(O.jsx)(ct.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){t(Ht({_page:1,_limit:10,_sort:void 0,_order:void 0,city:void 0,name_like:void 0}))},children:"Clear"})})]})}),Object(O.jsx)(g.a,{mt:2,children:Object(O.jsx)(un,{title:"",children:Object(O.jsx)(sn,{studentList:o,handleClickOpen:function(e){y(e),w(!0)},handleEdit:function(e){n.push("".concat(F,"/edit:").concat(e.id))}})})}),Object(O.jsx)(Lt.a,{count:Math.ceil(s._totalRows/s._limit),color:"primary",size:"large",variant:"outlined",className:e.pagination,shape:"rounded",page:j,onChange:function(e,n){b(n),t(Ht(Object(m.a)(Object(m.a)({},c),{},{_page:n})))}})]}),Object(O.jsx)(Qt,{filter:c,open:C,currentStudent:f,handleClose:function(){w(!1)}})]})}function bn(){var e=Object(x.i)().url,t=B();return Object(r.useEffect)((function(){t(Ke())}),[t]),Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{path:"".concat(e,"/add"),children:Object(O.jsx)(Ft,{})}),Object(O.jsx)(x.b,{path:"".concat(e,"/edit:studentId"),children:Object(O.jsx)(Ft,{})}),Object(O.jsx)(x.b,{path:"".concat(e),children:Object(O.jsx)(jn,{})}),Object(O.jsx)(x.b,{path:"*",children:"Not Found"})]})}var hn=Object(f.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"25% 1fr",gridTemplateRows:"auto 1fr",gridTemplateAreas:'"header header" "sidebar main"',minHeight:"100vh"},box1:{gridArea:"header"},box2:{gridArea:"sidebar",border:"1px solid ".concat(e.palette.primary.dark),overflow:"hidden"},box3:{gridArea:"main",padding:e.spacing(1)}}}));function On(e){var t=Object(x.i)().url,n=hn();return Object(O.jsxs)(g.a,{className:n.root,children:[Object(O.jsx)(g.a,{className:n.box1,children:Object(O.jsx)(V,{})}),Object(O.jsx)(g.a,{className:n.box2,children:Object(O.jsx)(te,{})}),Object(O.jsx)(g.a,{className:n.box3,children:Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{path:"".concat(t,"/dashboard"),component:Xe}),Object(O.jsx)(x.b,{path:"".concat(t,"/student"),component:bn}),Object(O.jsx)(x.b,{path:"".concat(t),children:Object(O.jsx)(x.a,{to:"".concat(t,"/dashboard")})})]})})]})}var mn=n(192),xn=Object(f.a)((function(e){return{root:{},box:{width:e.spacing(50),textAlign:"center",padding:"30px"}}})),pn=function(e){var t=xn(),n=B(),a=(D(H).logging,Object(x.g)());Boolean(localStorage.getItem("access_token"))&&a.push("/admin");G.a.apps.length||G.a.initializeApp({apiKey:"AIzaSyD5zTIY2xw9KA2_BBrWB5vLFE4xQSRF9rk",authDomain:"test-393e4.firebaseapp.com",projectId:"test-393e4",storageBucket:"test-393e4.appspot.com",messagingSenderId:"33265717266",appId:"1:33265717266:web:f7cd942483592fc3f448cb",measurementId:"G-9Y43FFNL6P"});var c={signInFlow:"popup",signInSuccessUrl:"/admin",signInOptions:[G.a.auth.GoogleAuthProvider.PROVIDER_ID]};return Object(r.useEffect)((function(){var e=G.a.auth().onAuthStateChanged((function(e){e&&(n(R({username:null===e||void 0===e?void 0:e.displayName,password:"ok"})),console.log(e))}));return function(){return e()}}),[]),Object(O.jsx)(g.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:Object(O.jsxs)(Re.a,{elevation:3,className:t.box,children:[Object(O.jsx)(_.a,{variant:"h5",component:"h1",children:"Student Login"}),Object(O.jsx)(g.a,{mt:2,children:Object(O.jsx)(mn.StyledFirebaseAuth,{uiConfig:c,firebaseAuth:G.a.auth()})})]})})};n(362);var fn=function(){return Object(r.useEffect)((function(){h.getAll().then((function(e){})).catch((function(e){console.log(e)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{path:"/login",component:pn}),Object(O.jsx)(p,{path:"/admin",component:On}),Object(O.jsx)(x.b,{path:"*",children:Object(O.jsx)(x.a,{to:"/login"})})]})})},gn=n(51);function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var yn=Object(M.b)("counter/fetchCount",function(){var e=Object(tt.a)(et.a.mark((function e(t){var n;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vn(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Sn=Object(M.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload},incrementSaga:function(e,t){e.status="loading"},incrementSagaSuccess:function(e,t){e.status="idle",e.value+=t.payload}},extraReducers:function(e){e.addCase(yn.pending,(function(e){e.status="loading"})).addCase(yn.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),kn=Sn.actions,Cn=(kn.increment,kn.decrement,kn.incrementByAmount,kn.incrementSaga,kn.incrementSagaSuccess,Sn.reducer),wn=n(196),Fn=n(37),_n=n(15),An=et.a.mark(Bn),Nn=et.a.mark(Dn),Ln=et.a.mark(Mn),In=et.a.mark(Pn);function Bn(e){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_n.d)(1e3);case 2:return localStorage.setItem("access_token","Ok"),e.next=5,Object(_n.f)(T({id:"2",name:"tuananh"}));case 5:return e.next=7,Object(_n.f)(Object(Fn.d)("/admin/dashboard"));case 7:case"end":return e.stop()}}),An)}function Dn(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_n.d)(1e3);case 2:return localStorage.removeItem("access_token"),e.next=5,Object(_n.f)(Object(Fn.d)("/admin"));case 5:case"end":return e.stop()}}),Nn)}function Mn(){var e;return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Boolean(localStorage.getItem("access_token"))){t.next=8;break}return t.next=5,Object(_n.g)(R.type);case 5:return e=t.sent,t.next=8,Object(_n.e)(Bn,e.payload);case 8:return t.next=10,Object(_n.g)(W.type);case 10:return t.next=12,Object(_n.b)(Dn);case 12:t.next=0;break;case 14:case"end":return t.stop()}}),Ln)}function Pn(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_n.e)(Mn);case 2:case"end":return e.stop()}}),In)}var zn=et.a.mark(Rn),En=et.a.mark(Tn);function Rn(){var e;return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_n.b)(h.getAll);case 3:return e=t.sent,t.next=6,Object(_n.f)(Je(e));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("day la loi",t.t0),t.next=13,Object(_n.f)(Ye);case 13:case"end":return t.stop()}}),zn,null,[[0,8]])}function Tn(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_n.h)(Ke.type,Rn);case 2:case"end":return e.stop()}}),En)}var Wn=et.a.mark(Kn),Hn=et.a.mark(Jn),Un=et.a.mark(Yn),Gn=et.a.mark(Qn),qn=et.a.mark($n),Vn=et.a.mark(Xn);function Kn(){var e,t,n,a,c,r,i;return et.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(_n.a)([Object(_n.b)(wt.getAll,{_page:1,_limit:1,gender:"male"}),Object(_n.b)(wt.getAll,{_page:1,_limit:1,gender:"female"}),Object(_n.b)(wt.getAll,{_page:1,_limit:1,mark_gte:8}),Object(_n.b)(wt.getAll,{_page:1,_limit:1,mark_lte:5})]);case 2:return e=o.sent,t=e.map((function(e){return e.pagination._totalRows})),n=Object(v.a)(t,4),a=n[0],c=n[1],r=n[2],i=n[3],o.next=7,Object(_n.f)(Oe({maleCount:a,femaleCount:c,hightMarkCount:r,lowMarkCount:i}));case 7:case"end":return o.stop()}}),Wn)}function Jn(){var e,t;return et.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_n.b)(wt.getAll,{_page:1,_limit:5,_sort:"mark",_order:"desc"});case 2:return e=n.sent,t=e.data,n.next=6,Object(_n.f)(me(t));case 6:case"end":return n.stop()}}),Hn)}function Yn(){var e,t;return et.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_n.b)(wt.getAll,{_page:1,_limit:5,_sort:"mark",_order:"asc"});case 2:return e=n.sent,t=e.data,n.next=6,Object(_n.f)(xe(t));case 6:case"end":return n.stop()}}),Un)}function Qn(){var e,t,n,a,c;return et.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(_n.b)(h.getAll);case 2:return e=r.sent,t=e.data,r.next=6,Object(_n.b)(wt.getAll,{_page:1,_limit:1e3});case 6:return n=r.sent,a=n.data,c=[],t.forEach((function(e){var t=a.filter((function(t){return t.city===e.code}));t=t.slice(0,5).sort((function(e,t){return t.mark-e.mark}));var n={cityId:e.code,ListStudent:t};c.push(n)})),r.next=12,Object(_n.f)(pe(c));case 12:case"end":return r.stop()}}),Gn)}function $n(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_n.a)([Object(_n.b)(Kn),Object(_n.b)(Jn),Object(_n.b)(Yn),Object(_n.b)(Qn)]);case 3:return e.next=5,Object(_n.f)(he());case 5:e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(_n.f)(he());case 11:console.log(e.t0);case 12:case"end":return e.stop()}}),qn,null,[[0,7]])}function Xn(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Ok"),e.next=3,Object(_n.h)(be.type,$n);case 3:case"end":return e.stop()}}),Vn)}var Zn=et.a.mark(na),ea=et.a.mark(aa),ta=et.a.mark(ca);function na(e){var t;return et.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(_n.b)(wt.getAll,e.payload);case 3:return t=n.sent,n.next=6,Object(_n.f)(Tt(t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log("loi cua ban la",n.t0),n.next=13,Object(_n.f)(Wt());case 13:case"end":return n.stop()}}),Zn,null,[[0,8]])}function aa(e){return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Debounce data",e.payload),t.next=3,Object(_n.f)(Gt(e.payload));case 3:case"end":return t.stop()}}),ea)}function ca(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_n.h)(Rt.type,na);case 2:return e.next=4,Object(_n.c)(1e3,Ut.type,aa);case 4:case"end":return e.stop()}}),ta)}var ra=et.a.mark(ia);function ia(){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_n.a)([Pn(),Xn(),ca(),Tn()]);case 2:case"end":return e.stop()}}),ra)}var oa=n(174),sa=n(42),la=Object(wn.a)(),ua=Object(sa.a)(),da=Object(gn.b)({router:Object(c.b)(ua),counter:Cn,auth:U,dashboard:ke,student:Yt,city:$e}),ja=Object(M.a)({reducer:da,middleware:function(e){return e({thunk:!0,immutableCheck:!0,serializableCheck:!0}).concat(la,Object(oa.a)(ua))},devTools:!0});la.run(ia);n(363),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(364);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsxs)(l.a,{store:ja,children:[Object(O.jsxs)(c.a,{history:ua,children:[Object(O.jsx)(a.a,{}),Object(O.jsx)(fn,{})]}),Object(O.jsx)(u.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[365,1,2]]]);
//# sourceMappingURL=main.161b860b.chunk.js.map