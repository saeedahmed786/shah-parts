(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9190],{39766:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return s(66641)}])},86571:function(e,t,s){"use strict";var i=s(85893);s(67294);var l=s(94704),r=s(89552),n=s(63780),d=s(42459),a=s(97362);let{Step:c}=l.default;t.Z=e=>{let{loading:t,step:s}=e;return(0,i.jsx)(r.default,{spinning:t,children:(0,i.jsxs)(l.default,{current:s,children:[(0,i.jsx)(c,{title:"Cart",icon:(0,i.jsx)(d.Z,{}),description:"Items added to cart"}),(0,i.jsx)(c,{title:"Checkout and Payment",icon:(0,i.jsx)(n.Z,{}),description:"Address is filled and Payment is done"}),(0,i.jsx)(c,{title:"Order Complete",icon:(0,i.jsx)(a.Z,{}),description:"Order is completed"})]})})}},66641:function(e,t,s){"use strict";s.r(t);var i=s(85893);s(67294);var l=s(30694),r=s.n(l),n=s(25675),d=s.n(n),a=s(5789),c=s(8799),o=s(55673),h=s(47550),x=s(38293),u=s(11163),m=s(45770),p=s(86571);t.default=()=>{let e=(0,u.useRouter)(),{cart:t,removeFromCart:s,saveQtyToDb:l}=(0,m.i)();return(0,i.jsxs)("div",{className:r().cart,children:[(0,i.jsx)("div",{className:"p-[30px]",children:(0,i.jsx)(p.Z,{step:0,loading:!1})}),(0,i.jsx)("h1",{className:"".concat(r().title," mainTitle"),children:"My Cart"}),(0,i.jsxs)(o.Z,{gutter:[23,23],children:[(0,i.jsx)(a.Z,{xs:24,md:17,children:(0,i.jsx)("div",{className:"p-[0px] pt-[17px] md:p-[40px]",children:(null==t?void 0:t.length)>0?null==t?void 0:t.map((e,t)=>(0,i.jsxs)("div",{className:r().item,children:[(0,i.jsx)("div",{className:r().crtimg,children:(0,i.jsx)(d(),{src:null==e?void 0:e.Pictures[0],width:100,height:100,alt:null==e?void 0:e.title})}),(0,i.jsxs)("div",{className:"md:px-4 flex-1",children:[(0,i.jsx)("h2",{children:null==e?void 0:e.Title}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsxs)("div",{className:r().qtyContainer,children:[(0,i.jsx)("h4",{className:"w-fit",children:"Qty"}),(0,i.jsx)("div",{className:"max-w-[130px]",children:(0,i.jsx)(c.Z,{min:1,max:1e5,defaultValue:null==e?void 0:e.qtyToShop,onChange:t=>l(t,e)})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("h6",{className:"w-fit",children:["$",parseInt(null==e?void 0:e.Price)*parseInt(null==e?void 0:e.qtyToShop)]})}),(0,i.jsx)(h.Z,{className:"text-[19px]",onClick:()=>s(null==e?void 0:e._id)})]})]})]},t)):(0,i.jsx)("div",{className:r().emptyCart,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:r().subTitle,children:"Your Cart is Empty!"}),(0,i.jsx)(x.C,{text:"Start Shopping Now",onClick:()=>e.push("/shop")})]})})})}),(0,i.jsx)(a.Z,{xs:24,md:7,className:r().right,children:(0,i.jsxs)("div",{className:"md:p-[40px] mb-10 md:mb-0",children:[(0,i.jsx)("h3",{children:"Order Details:"}),(0,i.jsxs)("div",{className:r().orderDetailItem,children:[(0,i.jsx)("h5",{children:"Product Total"}),(0,i.jsxs)("h5",{className:"text-end",children:["$",null==t?void 0:t.reduce((e,t)=>e+parseInt(null==t?void 0:t.Price)*parseInt(null==t?void 0:t.qtyToShop),0)]})]}),(0,i.jsxs)("div",{className:r().orderDetailItem,children:[(0,i.jsx)("h5",{children:"Order Total"}),(0,i.jsxs)("h5",{className:"text-end",children:["$",null==t?void 0:t.reduce((e,t)=>e+parseInt(null==t?void 0:t.Price)*parseInt(null==t?void 0:t.qtyToShop),0)]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(x.C,{disabled:(null==t?void 0:t.length)===0,text:"SECURE PURCHASE",onClick:()=>e.push("/checkout")})})]})})]})]})}},30694:function(e){e.exports={cart:"cart_cart__Q_pUM",title:"cart_title__r2fRC",item:"cart_item__0aCjo",crtimg:"cart_crtimg__lOM3x",qtyContainer:"cart_qtyContainer__E5WaK",right:"cart_right__kBQgu",promotionCode:"cart_promotionCode___E9Qu",orderDetailItem:"cart_orderDetailItem__CP54v",emptyCart:"cart_emptyCart__tPFLL"}}},function(e){e.O(0,[4055,2055,227,2039,9774,2888,179],function(){return e(e.s=39766)}),_N_E=e.O()}]);