(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{98588:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return a(63193)}])},63193:function(e,s,a){"use strict";a.r(s);var r=a(85893),n=a(67294),i=a(97538),t=a(51024),l=a(11345),o=a.n(l),d=a(41664),u=a.n(d),c=a(5121),h=a(11163),m=a(86978),p=a(38293);s.default=()=>{let[e]=i.Z.useForm(),s=(0,h.useRouter)(),[a,l]=(0,n.useState)(!1),onFinish=async e=>{l(!0),await c.Z.post("".concat("http://143.198.176.153/api","/users/signup"),{email:e.email,password:e.password,confirm:e.confirm}).then(e=>{l(!1),200===e.status?((0,m.Ik)(e.data.successMessage),s.push("/login")):(0,m.hW)(e.data.errorMessage)}).catch(e=>{l(!1),console.log(e),(0,m.hW)(null==e?void 0:e.message)})};return(0,r.jsx)("div",{className:o().auth,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:o().container,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Create an account"}),(0,r.jsxs)(i.Z,{layout:"vertical",form:e,name:"nest-messages",className:o().form,requiredMark:!1,onFinish:onFinish,initialValues:{email:s.query.email},children:[(0,r.jsx)(i.Z.Item,{name:"email",label:"Email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,r.jsx)(t.default,{value:"qjwdhjqs",placeholder:"Enter email"})}),(0,r.jsx)(i.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,r.jsx)(t.default.Password,{placeholder:"Enter password"})}),(0,r.jsx)(i.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:s}=e;return{validator:(e,a)=>a&&s("password")!==a?Promise.reject(Error("The new password that you entered do not match!")):Promise.resolve()}}],children:(0,r.jsx)(t.default.Password,{placeholder:"Confirm password"})}),(0,r.jsx)(i.Z.Item,{children:(0,r.jsx)(p.C,{type:"submit",text:"Signup",loading:a,disabled:a})})]}),(0,r.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,r.jsx)("div",{children:"Already have an account?"}),(0,r.jsx)(u(),{href:"/login",children:"Login"})]})]})})})})}},11345:function(e){e.exports={auth:"auth_auth__0Kn3K",container:"auth_container__Ngwue",form:"auth_form__otHTA"}}},function(e){e.O(0,[614,858,24,181,538,774,888,179],function(){return e(e.s=98588)}),_N_E=e.O()}]);