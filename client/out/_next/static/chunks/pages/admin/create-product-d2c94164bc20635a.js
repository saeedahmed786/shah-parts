(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{2758:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/create-product",function(){return s(90342)}])},13310:function(e,a,s){"use strict";var l=s(85893),r=s(67294),t=s(82803),n=s.n(t),i=s(11187),o=s(28465),d=s(47550),c=s(35855),h=s(25675),m=s.n(h),u=s(63222);let{Dragger:x}=o.default;a.Z=e=>{let{updateFiles:a,value:s,noMultiple:t}=e,[o,h]=(0,r.useState)([]),[g,j]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(null==s?void 0:s.length)>0&&h(s)},[s]);let handleDelete=e=>{let s=o.filter((a,s)=>s!==e);h(s),a(s)};return(0,l.jsxs)("div",{children:[(0,l.jsx)(x,{maxCount:t?1:10,name:"file",multiple:!0,action:"".concat("https://www.shahparts.com/api","/files/upload"),onChange:async e=>{var s,l;j(!0);let{status:r}=e.file;await (null===(s=e.fileList)||void 0===s?void 0:s.map(e=>{var a;return null==e?void 0:null===(a=e.response)||void 0===a?void 0:a.url}));let n=null===(l=e.fileList)||void 0===l?void 0:l.map(e=>{var a;return null==e?void 0:null===(a=e.response)||void 0===a?void 0:a.url});"uploading"!==r&&j(!1),"done"===r?(t?(a([n[0]]),h([n[0]])):(null==o?void 0:o.length)>0?(a([...o,n[(null==n?void 0:n.length)-1]]),h([...o,n[(null==n?void 0:n.length)-1]])):(a([n[0]]),h([n[0]])),i.ZP.success("".concat(e.file.name," file uploaded successfully."))):"error"===r&&i.ZP.error("".concat(e.file.name," file upload failed."))},onDrop(e){console.log("Dropped files",e.dataTransfer.files)},className:n().dragger,showUploadList:!1,previewFile:!1,children:(0,l.jsxs)("div",{className:"flex justify-center gap-3",children:[(0,l.jsx)(c.Z,{}),(0,l.jsxs)("div",{className:"text-[14px] font-[600] flex items-center justify-center w-auto gap-1",children:[(0,l.jsx)("div",{className:"text-[#1796E3]",children:"Click to upload pictures"}),(0,l.jsx)("div",{children:"or drag and drop"})]})]})}),(0,l.jsxs)("div",{className:"flex gap-4 flex-wrap items-center mt-4",children:[(null==o?void 0:o.length)>0&&(null==o?void 0:o.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-end",children:(0,l.jsx)(d.Z,{onClick:()=>handleDelete(a)})}),(0,l.jsx)(m(),{src:e,alt:"File",className:n().image,width:64,height:64})]},a))),g&&(0,l.jsx)("div",{className:"flex justify-center items-center h-[64px] w-[64px] border",children:(0,l.jsx)(u.Z,{})})]})]})}},63222:function(e,a,s){"use strict";s.d(a,{Z:function(){return Loading_Loading}});var l=s(85893),r=s(25675),t=s.n(r);s(67294);var n={src:"/_next/static/media/loading.5fd12965.gif",height:200,width:200,blurWidth:0,blurHeight:0},Loading_Loading=()=>(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)("div",{className:"w-[60px]",children:(0,l.jsx)(t(),{src:n,alt:"Spinning Tom Nook Loading Icon",width:100,height:100})})})},80979:function(e,a,s){"use strict";s.d(a,{Z:function(){return Admin_AdminLayout}});var l=s(85893),r=s(80912),t=s(63222),n=s(5789),i=s(55673),o=s(11163),d=s(67294),c=s(41664),h=s.n(c),m=s(5005),u=s(78390),x=s(53598),g=s(606),j=s(73771),p=s.n(j),Admin_AdminSidebar=()=>{let e=(0,o.useRouter)();return(0,l.jsx)("div",{className:p().AdminSidebar,children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:p().linkContainer,children:[(0,l.jsx)("div",{className:p().linkWrapper,children:(0,l.jsx)(h(),{href:"/admin/dashboard",children:(0,l.jsxs)("button",{className:"".concat("/admin/dashboard"===e.pathname?p().activeLink:p().inactiveLink),children:[(0,l.jsx)(m.Z,{}),(0,l.jsx)("span",{children:"Dashboard"})]})})}),(0,l.jsx)("div",{className:p().linkWrapper,children:(0,l.jsx)(h(),{href:"/admin/products",children:(0,l.jsxs)("button",{className:"".concat("/admin/products"===e.pathname?p().activeLink:p().inactiveLink),children:[(0,l.jsx)(g.Z,{}),(0,l.jsx)("span",{children:"Products"})]})})}),(0,l.jsx)("div",{className:p().linkWrapper,children:(0,l.jsx)(h(),{href:"/admin/orders",children:(0,l.jsxs)("button",{className:"".concat("/admin/orders"===e.pathname?p().activeLink:p().inactiveLink),children:[(0,l.jsx)(x.Z,{}),(0,l.jsx)("span",{children:"Orders"})]})})})]}),(0,l.jsx)("div",{className:p().logoutWrapper,children:(0,l.jsxs)("a",{href:"/login",onClick:r.kS,className:p().logoutButton,children:[(0,l.jsx)("span",{className:p().logoutText,children:"Logout"}),(0,l.jsx)(u.Z,{})]})})]})})},Admin_AdminLayout=e=>{let a=(0,o.useRouter)(),[s,c]=(0,d.useState)(!0),[h,m]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{(0,r.$8)()&&1===(0,r.$8)().role||a.push("/login"),c(!1)},[]),s?(0,l.jsx)(t.Z,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"xxl:container mx-auto AdminLayout bg-[#F5F8FB] ".concat(h&&"blackMask"),children:e.sidebar?(0,l.jsxs)(i.Z,{className:"block md:flex mt-0",children:[(0,l.jsx)(n.Z,{xs:24,lg:4,className:"hidden lg:block AdminSidebar",children:(0,l.jsx)(Admin_AdminSidebar,{})}),(0,l.jsx)(n.Z,{xs:24,lg:20,className:"md:bg-[#F5F8FB]",children:(0,l.jsx)("div",{className:"md:p-5",children:(0,l.jsx)("div",{className:"mx-2",children:e.children})})})]}):e.children})})}},90342:function(e,a,s){"use strict";s.r(a);var l=s(85893),r=s(51024),t=s(64749),n=s(67294),i=s(86994),o=s(5121),d=s(86978),c=s(41664),h=s.n(c),m=s(13310),u=s(11163),x=s(80979),g=s(38293);a.default=()=>{let e=(0,u.useRouter)(),[a,s]=(0,n.useState)(!1),[c,j]=(0,n.useState)({Title:"",Price:"",Pictures:"",Description:"",Featured:"",Make:"",Model:"",Part:"",PartAccessorries:"",Location:"",Condition:"",ModelCode:"",RegistrationYear:"",Mileage:"",MissionType:"",EngineModel:"",EngineSize:"",Fuel:"",Drive:"",AutoPartsMaker:"",GenuinePartsNo:"",ChassisNo:"",RefNo:"",GearType:""}),handleChange=(e,a)=>{j({...c,[e]:a})};return console.log(c),(0,l.jsx)(x.Z,{sidebar:!0,children:(0,l.jsxs)("div",{className:"Pages pt-6 md:max-w-[60vw]",children:[(0,l.jsx)("div",{className:"flex justify-between items-center",children:(0,l.jsxs)("div",{className:"flex gap-2 justify-center items-center py-4",children:[(0,l.jsx)("span",{children:"Admin"})," ",(0,l.jsx)(i.default,{})," ",(0,l.jsx)("button",{className:"text-[#0094DA]",children:"Create product"})]})}),(0,l.jsxs)("form",{onSubmit:a=>{a.preventDefault(),s(!0),o.Z.post("".concat("https://www.shahparts.com/api","/products/create"),c,{headers:{authorization:"Bearer "+localStorage.getItem("token")}}).then(a=>{200===a.status?(s(!1),(0,d.Ik)(a.data.successMessage),e.push("/admin/products")):(0,d.hW)(a.data.errorMessage)}).catch(e=>{s(!1),console.log(e),(0,d.hW)(null==e?void 0:e.message)})},children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h1",{className:"text-[33px] font-bold",children:"Create Products"})}),(0,l.jsx)("div",{children:(0,l.jsx)(h(),{href:"/admin/products",type:"button",className:"btn-close","aria-label":"Close"})})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Title"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{required:!0,type:"text",className:"form-control mb-2",placeholder:"Enter Your Product Title",onChange:e=>handleChange("Title",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Price"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{required:!0,type:"Number",className:"form-control mb-2",placeholder:"Enter Product's Price",onChange:e=>handleChange("Price",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Description"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Description",onChange:e=>handleChange("Description",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Make"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Make",onChange:e=>handleChange("Make",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Model"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Model",onChange:e=>handleChange("Model",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Part"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Part",onChange:e=>handleChange("Part",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Part Accessories"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Part Accessories",onChange:e=>handleChange("PartAccessorries",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Location"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Location",onChange:e=>handleChange("Location",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Condition"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Condition",onChange:e=>handleChange("Condition",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Model Code"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Model Code",onChange:e=>handleChange("ModelCode",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Registration Year/Month"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Registration Year/Month",onChange:e=>handleChange("RegistrationYear",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Mileage"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Mileage",onChange:e=>handleChange("Mileage",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Mission Type"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Mission Type",onChange:e=>handleChange("Missiontype",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Engine Model"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Engine Model",onChange:e=>handleChange("EngineModel",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Engine Size"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Engine Size",onChange:e=>handleChange("EngineSize",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Fuel"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Fuel",onChange:e=>handleChange("Fuel",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Drive"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Drive",onChange:e=>handleChange("Drive",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Autoparts Maker"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Autoparts Maker",onChange:e=>handleChange("AutoPartsMaker",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Genuine Parts No"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Genuine Parts No",onChange:e=>handleChange("GenuinePartsNo",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Chassis No"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Chassis No",onChange:e=>handleChange("ChassisNo",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Reference No"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Reference No",onChange:e=>handleChange("RefNo",e.target.value)})]}),(0,l.jsxs)("div",{className:"form-group mt-4",children:[(0,l.jsx)("label",{children:"Gear Type"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(r.default,{type:"text",className:"form-control mb-2",placeholder:"Enter Product's Gear Type",onChange:e=>handleChange("GearType",e.target.value)})]}),(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("label",{children:"Featured"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(t.default,{className:"w-full",placeholder:"Featured",onChange:e=>handleChange("Featured",e),options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]})]}),(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("label",{children:"Pictures"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(m.Z,{updateFiles:e=>handleChange("Pictures",e)})]}),(0,l.jsx)("div",{className:"mt-5",children:(0,l.jsx)(g.C,{type:"primary",htmlType:"submit",loading:a,disabled:a,text:"Submit"})})]})]})})}},82803:function(e){e.exports={dragger:"Dragger_dragger__u1SrF"}},73771:function(e){e.exports={AdminSidebar:"AdminSidebar_AdminSidebar__6eFiO",linkContainer:"AdminSidebar_linkContainer__8QIYH",linkWrapper:"AdminSidebar_linkWrapper__4rIoI",activeLink:"AdminSidebar_activeLink__ocl97",inactiveLink:"AdminSidebar_inactiveLink__ZRV86",logoutWrapper:"AdminSidebar_logoutWrapper__loysx",logoutButton:"AdminSidebar_logoutButton__Ih4Gk",logoutText:"AdminSidebar_logoutText__ug7Ml"}}},function(e){e.O(0,[614,858,24,181,55,117,109,774,888,179],function(){return e(e.s=2758)}),_N_E=e.O()}]);