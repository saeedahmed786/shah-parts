(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3852],{5789:function(e,s,a){"use strict";s.Z=void 0;var r=a(38614);s.Z=r.Col},55673:function(e,s,a){"use strict";s.Z=void 0;var r=a(38614);s.Z=r.Row},8462:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/change-password",function(){return a(57938)}])},63222:function(e,s,a){"use strict";a.d(s,{Z:function(){return Loading_Loading}});var r=a(85893),c=a(25675),i=a.n(c);a(67294);var n={src:"/_next/static/media/loading.5fd12965.gif",height:200,width:200,blurWidth:0,blurHeight:0},Loading_Loading=()=>(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)("div",{className:"w-[60px]",children:(0,r.jsx)(i(),{src:n,alt:"Spinning Tom Nook Loading Icon",width:100,height:100})})})},47448:function(e,s,a){"use strict";a.d(s,{p:function(){return AccountLayout}});var r=a(85893),c=a(67294),i=a(5789),n=a(55673),d=a(80912),t=a(41664),o=a.n(t),l=a(11163),u=a(58328),h=a.n(u);let AccoutSidebar=()=>{let e=(0,l.useRouter)();return(0,r.jsx)("div",{className:h().AccoutSidebar,style:{paddingRight:"23px"},children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/profile"?h().active:""),children:[(0,r.jsx)("div",{className:h().circle}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{href:"/user/profile",children:"Profile"})})]}),(0,r.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/change-password"?h().active:""),children:[(0,r.jsx)("div",{className:h().circle}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{href:"/user/change-password",children:"Change Password"})})]}),(0,r.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/orders"?h().active:""),children:[(0,r.jsx)("div",{className:h().circle}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{href:"/user/orders",children:"Orders"})})]}),(0,r.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/logout"?h().active:""),children:[(0,r.jsx)("div",{className:h().circle}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/login",onClick:()=>{(0,d.kS)(()=>{})},children:"Logout"})})]})]})})};var m=a(63222);let AccountLayout=e=>{let s=(0,d.$8)(),a=(0,l.useRouter)(),[t,o]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{(0,d.$8)()?o(!1):(o(!1),a.push("/login"))},[]),(0,r.jsxs)("div",{className:"p-[17px] md:p-[40px]",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-[47px] font-bold",children:"My Account"}),(0,r.jsx)("p",{className:"text-[28px] font-[500]",children:null==s?void 0:s.fullName})]}),t?(0,r.jsx)(m.Z,{}):(0,r.jsxs)(n.Z,{style:{borderTop:"1px solid #d4d5d9"},children:[(0,r.jsx)(i.Z,{xs:24,md:6,children:(0,r.jsx)(AccoutSidebar,{})}),(0,r.jsx)(i.Z,{xs:24,md:18,children:(0,r.jsx)("div",{className:"md:p-5",children:e.children})})]})]})}},57938:function(e,s,a){"use strict";a.r(s);var r=a(85893),c=a(47448),i=a(97538),n=a(51024),d=a(5121),t=a(60274),o=a.n(t),l=a(67294),u=a(38293),h=a(86978);s.default=()=>{let[e]=i.Z.useForm(),[s,a]=(0,l.useState)(!1),onFinish=async e=>{a(!0),await d.Z.put("".concat("http://localhost:8000/api","/users/change-password"),e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{a(!1),200===e.status?(0,h.Ik)(e.data.successMessage):(0,h.hW)(e.data.errorMessage)}).catch(e=>{a(!1),console.log(e),(0,h.hW)(null==e?void 0:e.message)})};return(0,r.jsx)(c.p,{sidebar:!0,children:(0,r.jsx)("div",{className:o().changePassword,children:(0,r.jsxs)(i.Z,{layout:"vertical",form:e,name:"nest-messages",className:o().form,requiredMark:!1,onFinish:onFinish,style:{maxWidth:600},children:[(0,r.jsx)(i.Z.Item,{name:"oldPassword",label:"Old Password",rules:[{required:!0,message:"Please input your old password!"}],hasFeedback:!0,children:(0,r.jsx)(n.default.Password,{placeholder:"Enter Old password"})}),(0,r.jsx)(i.Z.Item,{name:"newPassword",label:"New Password",rules:[{required:!0,message:"Please input your new password!"}],hasFeedback:!0,children:(0,r.jsx)(n.default.Password,{placeholder:"Enter New password"})}),(0,r.jsx)(i.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:s}=e;return{validator:(e,a)=>a&&s("newPassword")!==a?Promise.reject(Error("The new password that you entered do not match!")):Promise.resolve()}}],children:(0,r.jsx)(n.default.Password,{placeholder:"Confirm password"})}),(0,r.jsx)(i.Z.Item,{children:(0,r.jsx)(u.C,{type:"submit",text:"Submit",loading:s,disabled:s})})]})})})}},58328:function(e){e.exports={AccoutSidebar:"AccountSidebar__AccoutSidebar__FDOZc",item:"AccountSidebar__item__Yalld",circle:"AccountSidebar__circle__VjaEE",active:"AccountSidebar__active__25mb6"}},60274:function(e){e.exports={changePassword:"changePassword_changePassword__4buRK"}}},function(e){e.O(0,[8614,9858,1024,4055,7538,9774,2888,179],function(){return e(e.s=8462)}),_N_E=e.O()}]);