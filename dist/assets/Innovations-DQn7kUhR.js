import{r as s,R as m,j as a}from"./index-DVVFz0lL.js";import{b as f}from"./blur-Df2t6CIm.js";function v(e,o){o===void 0&&(o={});var c=o.insertAt;if(!(typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",c==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var y=`.styles-module_wrapper__1I_qj {
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 60px 0px 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  box-sizing: border-box;
}

.styles-module_content__2jwZj {
  margin: auto;
  padding: 0;
  width: 90%;
  height: 100%;
  max-height: 100%;
  text-align: center;
}

.styles-module_slide__1zrfk {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module_image__2hdkJ {
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.styles-module_close__2I1sI {
  color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.2;
  cursor: pointer;
}

.styles-module_close__2I1sI:hover {
  opacity: 1;
}

.styles-module_navigation__1pqAE {
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.styles-module_navigation__1pqAE:hover {
  opacity: 1;
}

@media (hover: none) {
  .styles-module_navigation__1pqAE:hover {
    opacity: 0.2;
  }
}

.styles-module_prev__KqFRp {
  left: 0;
}

.styles-module_next__1uQwZ {
  right: 0;
}

@media (max-width: 900px) {
  .styles-module_wrapper__1I_qj {
    padding: 0;
  }
}
`,l={wrapper:"styles-module_wrapper__1I_qj",content:"styles-module_content__2jwZj",slide:"styles-module_slide__1zrfk",image:"styles-module_image__2hdkJ",close:"styles-module_close__2I1sI",navigation:"styles-module_navigation__1pqAE",prev:"styles-module_prev__KqFRp",next:"styles-module_next__1uQwZ"};v(y);const x=e=>{var o;const[c,r]=s.useState((o=e.currentIndex)!==null&&o!==void 0?o:0),t=s.useCallback(n=>{let i=(c+n)%e.src.length;i<0&&(i=e.src.length-1),r(i)},[c]),u=s.useCallback(n=>{var i;if(!n.target||!e.closeOnClickOutside)return;const h=n.target.id==="ReactSimpleImageViewer",_=n.target.classList.contains("react-simple-image-viewer__slide");(h||_)&&(n.stopPropagation(),(i=e.onClose)===null||i===void 0||i.call(e))},[e.onClose]),d=s.useCallback(n=>{var i;n.key==="Escape"&&((i=e.onClose)===null||i===void 0||i.call(e)),["ArrowLeft","h"].includes(n.key)&&t(-1),["ArrowRight","l"].includes(n.key)&&t(1)},[e.onClose,t]),g=s.useCallback(n=>{n.wheelDeltaY>0?t(-1):t(1)},[t]);return s.useEffect(()=>(document.addEventListener("keydown",d),e.disableScroll||document.addEventListener("wheel",g),()=>{document.removeEventListener("keydown",d),e.disableScroll||document.removeEventListener("wheel",g)}),[d,g]),m.createElement("div",{id:"ReactSimpleImageViewer",className:`${l.wrapper} react-simple-image-viewer__modal`,onKeyDown:d,onClick:u,style:e.backgroundStyle},m.createElement("span",{className:`${l.close} react-simple-image-viewer__close`,onClick:()=>{var n;return(n=e.onClose)===null||n===void 0?void 0:n.call(e)}},e.closeComponent||"×"),e.src.length>1&&m.createElement("span",{className:`${l.navigation} ${l.prev} react-simple-image-viewer__previous`,onClick:()=>t(-1)},e.leftArrowComponent||"❮"),e.src.length>1&&m.createElement("span",{className:`${l.navigation} ${l.next} react-simple-image-viewer__next`,onClick:()=>t(1)},e.rightArrowComponent||"❯"),m.createElement("div",{className:`${l.content} react-simple-image-viewer__modal-content`,onClick:u},m.createElement("div",{className:`${l.slide} react-simple-image-viewer__slide`},m.createElement("img",{className:l.image,src:e.src[c],alt:""}))))},p=[{name:"Agent Manager",description:"allows agents to efficiently manage their network, track performance, and optimize investments. It helps in growing their business, boosting client engagement, and increasing revenue.",image:"/company-website/images/innovation/agent_management.png"},{name:"Agent Chain",description:"refers to a hierarchical network where agents recruit and manage sub-agents, expanding their reach and potential earnings. This model enables agents to grow their business by leveraging the efforts of their recruited agents, creating a chain of opportunities and commissions.",image:"/company-website/images/innovation/agent_chaining.png"},{name:"Commission Calculator",description:"accurately calculates agent commissions based on sales and performance metrics. It ensures transparency, efficiency, and timely payouts for agents and managers.",image:"/company-website/images/innovation/agent_commission.png"},{name:"Product Manager",description:"allows users to efficiently create, manage, and optimize investment products. It helps track product performance, make data-driven decisions, and improve offerings.",image:"/company-website/images/innovation/product_management.png"},{name:"Branch Manager",description:"enables efficient branch operations, including agent management, performance tracking, sales monitoring, and reporting, ensuring smooth and profitable branch functioning.",image:"/company-website/images/innovation/branch_management.png"},{name:"Customer Manager",description:"helps manage customer data, track investments, monitor portfolio performance, and provide personalized support, ensuring effective investment management and customer satisfaction.",image:"/company-website/images/innovation/customer_management.png"},{name:"Administration",description:"provides centralized control over user roles, permissions, system settings, and data management, ensuring smooth operations, security, and compliance across the platform.",image:"/company-website/images/innovation/administration.png"},{name:"Business",description:"allows management to track company performance, monitor key metrics, analyze sales, and assess growth, providing valuable insights for informed decision-making and strategic planning.",image:"/company-website/images/innovation/business.png"}];function k({onOpenImageView:e}){const[o,c]=s.useState(0),[r,t]=s.useState(!1),u=s.useCallback(n=>{c(n),e(!0),t(!0)},[]),d=()=>{c(0),e(!1),t(!1)},g=s.useMemo(()=>p.map(n=>n.image));return a.jsxs("section",{id:"products",className:"section-padding bg-white",children:[a.jsxs("div",{className:"max-w-7xl mx-auto container-padding",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Products"}),a.jsxs("p",{className:"text-lg text-gray-600",children:[a.jsx("strong",{children:"Devunity NetSol"})," provides innovative solutions for chain networking investment businesses, enabling agents to expand their potential. By streamlining investment processes and enhancing efficiency, agents can grow their network, attract more clients, and boost earnings, leading to sustainable business growth."]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:p.map((n,i)=>a.jsxs("div",{className:"group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border",children:[a.jsx("div",{className:"relative h-48 overflow-hidden cursor-pointer",children:a.jsx(f.LazyLoadImage,{src:n.image,alt:n.name,effect:"blur",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onClick:()=>u(i)})}),a.jsxs("div",{className:"p-6 bg-white",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:n.name}),a.jsxs("p",{className:"text-gray-600 mb-4",children:["The ",n.name," module in ",a.jsx("strong",{children:"Devunity NetSol"})," ",n.description]})]})]},i))})]}),r&&a.jsx(x,{src:g,currentIndex:o,disableScroll:!0,closeOnClickOutside:!1,onClose:d})]})}export{k as default};
