(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{42678:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/products",function(){return t(3804)}])},63222:function(e,l,t){"use strict";t.d(l,{Z:function(){return Loading_Loading}});var a=t(85893),i=t(25675),n=t.n(i);t(67294);var r={src:"/_next/static/media/loading.5fd12965.gif",height:200,width:200,blurWidth:0,blurHeight:0},Loading_Loading=()=>(0,a.jsx)("div",{className:"flex justify-center items-center",children:(0,a.jsx)("div",{className:"w-[60px]",children:(0,a.jsx)(n(),{src:r,alt:"Spinning Tom Nook Loading Icon",width:100,height:100})})})},80979:function(e,l,t){"use strict";t.d(l,{Z:function(){return Admin_AdminLayout}});var a=t(85893),i=t(80912),n=t(63222),r=t(5789),o=t(55673),d=t(11163),s=t(67294),c=t(41664),u=t.n(c),v=t(5005),h=t(78390),p=t(53598),x=t(606),m=t(73771),g=t.n(m),Admin_AdminSidebar=()=>{let e=(0,d.useRouter)();return(0,a.jsx)("div",{className:g().AdminSidebar,children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:g().linkContainer,children:[(0,a.jsx)("div",{className:g().linkWrapper,children:(0,a.jsx)(u(),{href:"/admin/dashboard",children:(0,a.jsxs)("button",{className:"".concat("/admin/dashboard"===e.pathname?g().activeLink:g().inactiveLink),children:[(0,a.jsx)(v.Z,{}),(0,a.jsx)("span",{children:"Dashboard"})]})})}),(0,a.jsx)("div",{className:g().linkWrapper,children:(0,a.jsx)(u(),{href:"/admin/products",children:(0,a.jsxs)("button",{className:"".concat("/admin/products"===e.pathname?g().activeLink:g().inactiveLink),children:[(0,a.jsx)(x.Z,{}),(0,a.jsx)("span",{children:"Products"})]})})}),(0,a.jsx)("div",{className:g().linkWrapper,children:(0,a.jsx)(u(),{href:"/admin/orders",children:(0,a.jsxs)("button",{className:"".concat("/admin/orders"===e.pathname?g().activeLink:g().inactiveLink),children:[(0,a.jsx)(p.Z,{}),(0,a.jsx)("span",{children:"Orders"})]})})})]}),(0,a.jsx)("div",{className:g().logoutWrapper,children:(0,a.jsxs)("a",{href:"/login",onClick:i.kS,className:g().logoutButton,children:[(0,a.jsx)("span",{className:g().logoutText,children:"Logout"}),(0,a.jsx)(h.Z,{})]})})]})})},Admin_AdminLayout=e=>{let l=(0,d.useRouter)(),[t,c]=(0,s.useState)(!0),[u,v]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{(0,i.$8)()&&1===(0,i.$8)().role||l.push("/login"),c(!1)},[]),t?(0,a.jsx)(n.Z,{}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"xxl:container mx-auto AdminLayout bg-[#F5F8FB] ".concat(u&&"blackMask"),children:e.sidebar?(0,a.jsxs)(o.Z,{className:"block md:flex mt-0",children:[(0,a.jsx)(r.Z,{xs:24,lg:4,className:"hidden lg:block AdminSidebar",children:(0,a.jsx)(Admin_AdminSidebar,{})}),(0,a.jsx)(r.Z,{xs:24,lg:20,className:"md:bg-[#F5F8FB]",children:(0,a.jsx)("div",{className:"md:p-5",children:(0,a.jsx)("div",{className:"mx-2",children:e.children})})})]}):e.children})})}},3804:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return products}});var a=t(85893),i=t(69843),n=t(2307),r=t(67294),o=t(19702),d=t(58452),s=t(42419),c=t(86994),u=t(11163),v=t(5121),h=t(41664),p=t.n(h),x=t(86978),m=t(80979),g=t(25675),j=t.n(g),k=t(38293),N=t(56697),f=t(69855),_=t.n(f),DeleteModal_DeleteModal=e=>{let{deleteBtn:l,deleteFun:t,id:i}=e,[n,o]=(0,r.useState)(!1),handleCancel=()=>{o(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"p-0",onClick:()=>{o(!0)},children:l}),(0,a.jsx)(N.Z,{centered:!0,title:!1,footer:!1,open:n,onCancel:handleCancel,children:(0,a.jsx)("div",{className:_().DeleteModal,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h2",{className:"mt-4 text-[19px]",children:"Are you sure you want to delete?"}),(0,a.jsxs)("div",{className:_().buttons,children:[(0,a.jsx)("button",{onClick:handleCancel,children:"No"}),(0,a.jsx)("button",{onClick:()=>{t(i),handleCancel()},children:"Yes"})]})]})})})]})},y=t(9051),C=t.n(y);let BulkProductsUpload=e=>{let{updateParentData:l}=e,[t,i]=(0,r.useState)(null),[n,o]=(0,r.useState)(!1),[d,s]=(0,r.useState)(!1),transformImages=e=>{let l=Object.keys(e).filter(e=>e.startsWith("Image")),t=l.map(l=>e[l]).filter(e=>e);return{Pictures:t}},handleUpload=async()=>{if(!t)return;o(!0);let e=new FileReader;e.onload=async e=>{let t;o(!1);try{t=JSON.parse(e.target.result)}catch(e){(0,x.hW)("Invalid JSON file");return}let a=t.map(e=>{var l;let t=null==e?void 0:null===(l=e.Categories)||void 0===l?void 0:l.split(" > "),a=(null==t?void 0:t.slice(-2)).map(e=>isNaN(e)||isNaN(parseFloat(e))?e:"All Other Parts");return t&&t.length>0?{...e,Part:a[0],PartAccessorries:a[1],...transformImages(e)}:e});if(s(!0),!(null==a?void 0:a.includes(null)))try{let e=await v.Z.post("".concat("https://www.shahparts.com/api","/products/bulk-upload"),{products:a},{headers:{authorization:"Bearer "+localStorage.getItem("token")}});s(!1),"OK"===e.statusText?((0,x.Ik)(e.data.successMessage),l()):(0,x.hW)(e.data.errorMessage)}catch(e){s(!1),console.log(e),(0,x.hW)(null==e?void 0:e.message)}},e.readAsText(t)};return(0,a.jsxs)("div",{className:C().BulkProductsUpload,children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{children:"Bulk Upload JSON File"})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"file",accept:".json",onChange:e=>{i(e.target.files[0])}})}),(0,a.jsx)("div",{children:(0,a.jsx)(k.C,{text:"Upload",loading:d||n,disabled:d||n,onClick:handleUpload})})]})};var products=()=>{let e=(0,u.useRouter)(),[l,t]=(0,r.useState)(!1),[h,g]=(0,r.useState)([]),[N,f]=(0,r.useState)(1),[_,y]=(0,r.useState)(),C="TOYOTA > Mark X > Transmission & Drivetrain > Propeller Shafts".split(" > ");console.log(null==C?void 0:C.slice(-2));let getAllData=async()=>{t(!0),await v.Z.post("".concat("https://www.shahparts.com/api","/products/get"),{page:N-1,pageSize:"20"}).then(e=>{if(t(!1),200===e.status){var l;g(null===(l=e.data)||void 0===l?void 0:l.products),y(e.data.count)}else(0,x.hW)(e.data.errorMessage)}).catch(e=>{t(!1),console.log(e)})};(0,r.useEffect)(()=>(getAllData(),()=>{}),[N]);let deleteHandler=async e=>{await v.Z.delete("".concat("https://www.shahparts.com/api","/products/delete/").concat(e),{headers:{authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{"OK"===e.statusText?((0,x.Ik)(e.data.successMessage),getAllData()):(0,x.hW)(e.data.errorMessage)}).catch(e=>{console.log(e),(0,x.hW)(null==e?void 0:e.message)})},P=[{title:"#",key:"index",render:(e,l,t)=>(0,a.jsx)("div",{children:(N-1)*20+t+1})},{title:"ID",dataIndex:"_id",key:"_id",sorter:(e,l)=>(null==e?void 0:e._id)>(null==l?void 0:l._id),render:(e,l)=>{let{_id:t}=l;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"text-[#0094DA] text-[12px] font-[500]",children:t})})}},{title:"Title",dataIndex:"Title",key:"Title",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Title)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Title)},render:(e,l)=>{let{Title:t}=l;return(0,a.jsx)("p",{className:"textElipsisTwoLines",children:t})}},{title:"Price",dataIndex:"Price",key:"Price",sorter:(e,l)=>(null==e?void 0:e.Price)-(null==l?void 0:l.Price)},{title:"Description",dataIndex:"Description",key:"Description",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Description)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Description)},render:(e,l)=>{let{Description:t}=l;return(0,a.jsx)("p",{className:"textElipsisTwoLines",children:t})}},{title:"Make",dataIndex:"Make",key:"Make",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Make)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Make)}},{title:"Model",dataIndex:"Model",key:"Model",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Model)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Model)}},{title:"Part",dataIndex:"Part",key:"Part",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Part)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Part)}},{title:"Part Accessorries",dataIndex:"PartAccessorries",key:"PartAccessorries",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.PartAccessorries)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.PartAccessorries)}},{title:"Location",dataIndex:"Location",key:"Location",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Location)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Location)}},{title:"Condition",dataIndex:"Condition",key:"Condition",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Condition)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Condition)}},{title:"Model Code",dataIndex:"ModelCode",key:"ModelCode",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.ModelCode)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.ModelCode)}},{title:"Reg Year/Month",dataIndex:"RegistrationYear",key:"RegistrationYear",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.RegistrationYear)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.RegistrationYear)}},{title:"Mileage",dataIndex:"Mileage",key:"Mileage",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Mileage)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Mileage)}},{title:"Mission Type",dataIndex:"MissionType",key:"MissionType",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.MissionType)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.MissionType)}},{title:"Engine Model",dataIndex:"EngineModel",key:"EngineModel",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.EngineModel)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.EngineModel)}},{title:"Engine Size",dataIndex:"EngineSize",key:"EngineSize",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.EngineSize)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.EngineSize)}},{title:"Fuel",dataIndex:"Fuel",key:"Fuel",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Fuel)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Fuel)}},{title:"Drive",dataIndex:"Drive",key:"Drive",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.Drive)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.Drive)}},{title:"Auto Parts Maker",dataIndex:"PutoPartsMaker",key:"PutoPartsMaker",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.PutoPartsMaker)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.PutoPartsMaker)}},{title:"Genuine Parts No.",dataIndex:"GenuinePartsNo",key:"GenuinePartsNo",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.GenuinePartsNo)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.GenuinePartsNo)}},{title:"Chassis No.",dataIndex:"ChassisNo",key:"ChassisNo",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.ChassisNo)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.ChassisNo)}},{title:"Ref No.",dataIndex:"RefNo",key:"RefNo",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.RefNo)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.RefNo)}},{title:"Gear Type",dataIndex:"GearType",key:"GearType",sorter:(e,l)=>{var t;return null==e?void 0:null===(t=e.GearType)||void 0===t?void 0:t.localeCompare(null==l?void 0:l.GearType)}},{title:"Pictures",dataIndex:"Pictures",key:"Pictures",render:(e,l)=>{let{Pictures:t}=l;return(0,a.jsx)("div",{className:"flex gap-2 flex-wrap items-center w-[130px]",children:(null==t?void 0:t.length)>0&&(null==t?void 0:t.map(e=>(0,a.jsx)(j(),{src:e,width:32,height:32,style:{width:"32px",height:"32px"},alt:"Product"})))})}},{title:"Actions",render:(l,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(p(),{href:"/product/"+t._id,children:(0,a.jsx)(s.default,{})}),(0,a.jsx)(d.default,{onClick:()=>e.push("/admin/update-product/".concat(t._id))}),(0,a.jsx)(DeleteModal_DeleteModal,{id:null==t?void 0:t._id,deleteFun:deleteHandler,deleteBtn:(0,a.jsx)(o.default,{style:{verticalAlign:"middle"}})})]})})}];return console.log("TOYOTA > Soarer > 2001 > UA-UZZ40 > Body Parts > Fenders".split(" > ")[5]),(0,a.jsx)(m.Z,{sidebar:!0,children:(0,a.jsxs)("div",{className:"Pages pt-6",children:[(0,a.jsxs)("div",{className:"md:flex justify-between flex-wrap items-start pb-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-2 justify-start items-center pb-4",children:[(0,a.jsx)("span",{children:"Admin"})," ",(0,a.jsx)(c.default,{})," ",(0,a.jsx)("div",{className:"text-[#0094DA] bg-transparent",children:"Products"})]}),(0,a.jsx)("h1",{className:"text-[33px] font-bold",children:"Products"})]}),(0,a.jsx)("div",{className:"mt-8 md:mt-0",children:(0,a.jsx)(k.C,{type:"primary",onClick:()=>e.push("/admin/create-product"),htmlType:"submit",loading:l,disabled:l,text:"Add Product"})})]}),(0,a.jsx)(BulkProductsUpload,{updateParentData:getAllData}),(0,a.jsxs)("div",{className:"hidden md:block bg-white",children:[(0,a.jsxs)("h3",{className:"p-4 text-[28px]",children:["Total Results: ",_]}),(0,a.jsx)(n.Z,{loading:l,showSorterTooltip:!0,columns:P,pagination:!1,dataSource:h})]}),(0,a.jsx)("div",{className:"flex justify-center my-10",children:(0,a.jsx)(i.default,{current:N,defaultPageSize:20,showSizeChanger:!1,onChange:e=>f(e),total:_})})]})})}},9051:function(e){e.exports={BulkProductsUpload:"BulkProductsUpload_BulkProductsUpload__TL9TA"}},69855:function(e){e.exports={DeleteModal:"DeleteModal_DeleteModal__HE1Sq",buttons:"DeleteModal_buttons__VnPhI"}},73771:function(e){e.exports={AdminSidebar:"AdminSidebar_AdminSidebar__6eFiO",linkContainer:"AdminSidebar_linkContainer__8QIYH",linkWrapper:"AdminSidebar_linkWrapper__4rIoI",activeLink:"AdminSidebar_activeLink__ocl97",inactiveLink:"AdminSidebar_inactiveLink__ZRV86",logoutWrapper:"AdminSidebar_logoutWrapper__loysx",logoutButton:"AdminSidebar_logoutButton__Ih4Gk",logoutText:"AdminSidebar_logoutText__ug7Ml"}}},function(e){e.O(0,[614,858,24,181,807,843,59,244,361,117,697,774,888,179],function(){return e(e.s=42678)}),_N_E=e.O()}]);