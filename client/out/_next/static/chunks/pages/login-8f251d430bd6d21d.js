(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{36429:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(37644)}])},37644:function(e,a,s){"use strict";s.r(a);var t=s(85893),o=s(67294),r=s(97538),l=s(51024),i=s(31059),n=s(11345),d=s.n(n),c=s(41664),u=s.n(c),m=s(5121),h=s(11163),g=s(80912),p=s(86978),v=s(38293);a.default=()=>{let[e]=r.Z.useForm(),a=(0,h.useRouter)(),[s,n]=(0,o.useState)(!1),[c,w]=(0,o.useState)(!1),saveCredentials=(e,a)=>{localStorage.setItem("email",e),localStorage.setItem("password",a)},addToCartFromLS=async e=>{var a=localStorage.getItem("products")&&JSON.parse(localStorage.getItem("products"))||[];(null==a?void 0:a.length)>0&&await m.Z.post("".concat("https://www.shahparts.com/api","/cart/ls-add-to-cart"),{products:a,userId:e}).then(e=>{200===e.status?((0,p.Ik)(e.data.successMessage),getCartProducts()):(0,p.hW)(e.data.errorMessage)}).catch(e=>{console.log(e),(0,p.hW)(null==e?void 0:e.message)})},onFinish=async t=>{w(!0),await m.Z.post("".concat("https://www.shahparts.com/api","/users/login"),{email:t.email,password:t.password}).then(t=>{if(w(!1),200===t.status){var o,r,l,i;(0,g.Ks)(null===(o=t.data)||void 0===o?void 0:o.user,null===(r=t.data)||void 0===r?void 0:r.token);let n=localStorage.getItem("redirectUrl");s?saveCredentials(e.getFieldValue("email"),e.getFieldValue("password")):(localStorage.removeItem("email"),localStorage.removeItem("password")),n?a.push(n):a.push("/"),setTimeout(()=>{document.location.reload()},1e3),addToCartFromLS(null===(i=t.data)||void 0===i?void 0:null===(l=i.user)||void 0===l?void 0:l._id),(0,p.Ik)(t.data.successMessage)}else(0,p.hW)(t.data.errorMessage)}).catch(e=>{w(!1),console.log(e),(0,p.hW)(null==e?void 0:e.message)})};return(0,o.useEffect)(()=>(localStorage.getItem("email")&&e.setFieldsValue({email:localStorage.getItem("email"),password:localStorage.getItem("password")}),()=>{}),[]),(0,t.jsx)("div",{className:d().auth,children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:d().container,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:"Log in to your account"}),(0,t.jsxs)(r.Z,{layout:"vertical",form:e,name:"nest-messages",className:d().form,onFinish:onFinish,children:[(0,t.jsx)(r.Z.Item,{name:"email",label:"Username or email address",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(r.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,t.jsx)(l.default.Password,{})}),(0,t.jsx)(r.Z.Item,{children:(0,t.jsx)(v.C,{type:"submit",text:"Login",loading:c,disabled:c})}),(0,t.jsx)(r.Z.Item,{children:(0,t.jsxs)("div",{className:"flex justify-between items-center mt-[-28px]",children:[(0,t.jsx)("div",{children:(0,t.jsx)(i.default,{onChange:e=>n(e.target.checked),children:"Remember me"})}),(0,t.jsx)("div",{children:(0,t.jsx)(u(),{href:"/forgot-password",children:"Forgot Password?"})})]})})]}),(0,t.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,t.jsx)("div",{children:"Don’t have an account?"}),(0,t.jsx)(u(),{href:"/signup",children:"Signup"})]})]})})})})}},11345:function(e){e.exports={auth:"auth_auth__0Kn3K",container:"auth_container__Ngwue",form:"auth_form__otHTA"}}},function(e){e.O(0,[614,858,24,181,538,59,774,888,179],function(){return e(e.s=36429)}),_N_E=e.O()}]);