(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{50388:function(e,s,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/orders",function(){return d(24350)}])},63222:function(e,s,d){"use strict";d.d(s,{Z:function(){return Loading_Loading}});var i=d(85893),l=d(25675),r=d.n(l);d(67294);var t={src:"/_next/static/media/loading.5fd12965.gif",height:200,width:200,blurWidth:0,blurHeight:0},Loading_Loading=()=>(0,i.jsx)("div",{className:"flex justify-center items-center",children:(0,i.jsx)("div",{className:"w-[60px]",children:(0,i.jsx)(r(),{src:t,alt:"Spinning Tom Nook Loading Icon",width:100,height:100})})})},47448:function(e,s,d){"use strict";d.d(s,{p:function(){return AccountLayout}});var i=d(85893),l=d(67294),r=d(5789),t=d(55673),a=d(80912),n=d(41664),c=d.n(n),o=d(11163),u=d(58328),h=d.n(u);let AccoutSidebar=()=>{let e=(0,o.useRouter)();return(0,i.jsx)("div",{className:h().AccoutSidebar,style:{paddingRight:"23px"},children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/profile"?h().active:""),children:[(0,i.jsx)("div",{className:h().circle}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{href:"/user/profile",children:"Profile"})})]}),(0,i.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/change-password"?h().active:""),children:[(0,i.jsx)("div",{className:h().circle}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{href:"/user/change-password",children:"Change Password"})})]}),(0,i.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/orders"?h().active:""),children:[(0,i.jsx)("div",{className:h().circle}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{href:"/user/orders",children:"Orders"})})]}),(0,i.jsxs)("div",{className:"".concat(h().item," ").concat((null==e?void 0:e.pathname)==="/user/logout"?h().active:""),children:[(0,i.jsx)("div",{className:h().circle}),(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:"/login",onClick:()=>{(0,a.kS)(()=>{})},children:"Logout"})})]})]})})};var x=d(63222);let AccountLayout=e=>{let s=(0,a.$8)(),d=(0,o.useRouter)(),[n,c]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{(0,a.$8)()?c(!1):(c(!1),d.push("/login"))},[]),(0,i.jsxs)("div",{className:"p-[17px] md:p-[40px]",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"text-[47px] font-bold",children:"My Account"}),(0,i.jsx)("p",{className:"text-[28px] font-[500]",children:null==s?void 0:s.fullName})]}),n?(0,i.jsx)(x.Z,{}):(0,i.jsxs)(t.Z,{style:{borderTop:"1px solid #d4d5d9"},children:[(0,i.jsx)(r.Z,{xs:24,md:6,children:(0,i.jsx)(AccoutSidebar,{})}),(0,i.jsx)(r.Z,{xs:24,md:18,children:(0,i.jsx)("div",{className:"md:p-5",children:e.children})})]})]})}},24350:function(e,s,d){"use strict";d.r(s);var i=d(85893),l=d(67294),r=d(80912),t=d(63222),a=d(86978),n=d(47448),c=d(2307),o=d(53740),u=d(86266),h=d(5121),x=d(25675),v=d.n(x),j=d(83190),p=d.n(j);let{Title:m,Text:_}=o.default;s.default=()=>{let[e,s]=(0,l.useState)([]),[d,o]=(0,l.useState)(!1),getAllOrders=async()=>{var e,d;(0,r.$8)()&&(null===(e=(0,r.$8)())||void 0===e?void 0:e._id)&&(o(!0),await h.Z.get("".concat("https://www.shahparts.com/api","/orders/customer/orders/").concat(null===(d=(0,r.$8)())||void 0===d?void 0:d._id),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{o(!1),200===e.status?s(e.data):(0,a.hW)(e.data.errorMessage)}).catch(e=>{o(!1),console.log(e),(0,a.hW)(null==e?void 0:e.message)}))};return(0,l.useEffect)(()=>(getAllOrders(),()=>{}),[]),(0,i.jsx)(n.p,{sidebar:!0,children:(0,i.jsx)("div",{className:p().orders,children:d?(0,i.jsx)(t.Z,{}):(0,i.jsx)("div",{className:"table-container border orders p-2 mb-10",children:(0,i.jsx)(c.Z,{columns:[{title:"Order ID",dataIndex:"_id",key:"_id"},{title:"Total Price",dataIndex:"totalPrice",key:"totalPrice",render:(e,s)=>(0,i.jsxs)("span",{children:["$",null==s?void 0:s.totalPrice]})},{title:"Status",dataIndex:"status",key:"status",render:(e,s)=>(0,i.jsx)("span",{className:"font-bold ".concat((null==s?void 0:s.status)!=="0"?"text-[#000]":"text-[red]"),children:(null==s?void 0:s.status)==="0"?(0,i.jsx)(u.default,{className:"text-[red]"}):(null==s?void 0:s.status)==="1"?"Just Placed":(null==s?void 0:s.status)==="2"?"Confirmed":(null==s?void 0:s.status)==="3"?"Prepared":(null==s?void 0:s.status)==="4"?"Out for delivery":(null==s?void 0:s.status)==="5"?"Complete":null})},{title:"Updated At",dataIndex:"statusUpdateTime",key:"statusUpdateTime"},{title:"Placed At",dataIndex:"placed",key:"placed"}],loading:d,dataSource:e,expandable:{expandedRowRender:e=>{var s,d,l,r;return(0,i.jsxs)("div",{className:p().orderDetails,children:[(0,i.jsx)("div",{className:p().orderProducts,children:null==e?void 0:null===(s=e.products)||void 0===s?void 0:s.map((e,s)=>(0,i.jsxs)("div",{className:"my-0",children:[(0,i.jsxs)("b",{children:["#",s+1]}),(0,i.jsx)(v(),{src:null==e?void 0:e.Pictures[0],height:64,width:64,alt:"images"}),(0,i.jsx)("span",{children:null==e?void 0:e.Title}),(0,i.jsxs)("span",{children:["Qty: ",null==e?void 0:e.qtyToShop]}),(0,i.jsxs)("span",{children:["$",parseInt((null==e?void 0:e.Price)*(null==e?void 0:e.qtyToShop))]})]},s))}),(0,i.jsxs)("div",{className:"border p-3 max-w-[300px]",children:[(0,i.jsx)(m,{level:6,children:"Order Details:"}),(0,i.jsxs)("div",{className:"flex justify-between gap-8",children:[(0,i.jsx)("b",{children:"Sub Total:"}),(0,i.jsxs)("b",{children:["$",null==e?void 0:e.subTotal]})]}),(0,i.jsxs)("div",{className:"flex justify-between gap-8 my-2",children:[(0,i.jsx)("b",{children:"Shipping Charges:"}),(0,i.jsxs)("b",{children:["$",null==e?void 0:e.shipping]})]}),(0,i.jsxs)("div",{className:"flex justify-between gap-8",children:[(0,i.jsx)("b",{children:"Order Total:"}),(0,i.jsxs)("b",{children:["$",null==e?void 0:e.totalPrice]})]})]}),(0,i.jsxs)("div",{className:"border p-3",children:[(0,i.jsx)(m,{level:6,children:"Billing Address:"}),(0,i.jsxs)(_,{children:[(0,i.jsx)("b",{children:"Name:"})," ",null==e?void 0:null===(d=e.billingAddress)||void 0===d?void 0:d.fullName," ",(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Address1:"})," ",null==e?void 0:null===(l=e.billingAddress)||void 0===l?void 0:l.address,", ",(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Address2:"})," ",null==e?void 0:null===(r=e.billingAddress)||void 0===r?void 0:r.address2,",",(0,i.jsx)("br",{})]})]})]})}},rowKey:e=>e._id})})})})}},58328:function(e){e.exports={AccoutSidebar:"AccountSidebar__AccoutSidebar__FDOZc",item:"AccountSidebar__item__Yalld",circle:"AccountSidebar__circle__VjaEE",active:"AccountSidebar__active__25mb6"}},83190:function(e){e.exports={orders:"orders_orders__c5_t2",headRow:"orders_headRow__LdjS4",orderDetails:"orders_orderDetails__8MEzu",orderProducts:"orders_orderProducts__OkXH4"}}},function(e){e.O(0,[614,858,24,181,807,843,59,244,361,740,774,888,179],function(){return e(e.s=50388)}),_N_E=e.O()}]);