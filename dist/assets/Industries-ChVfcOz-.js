import{r as h,a as J,u as Q,j as r,c as x,B as X}from"./index-DtcEDLan.js";import{s as ee,e as ne,d as ie,u as te,f as se,g as ae,h as re,i as oe,B,C as ce,T,a as le,b as de,c as pe}from"./Container-C1x8Ja9U.js";function me(e,t){var s,n,i;return h.isValidElement(e)&&t.indexOf(e.type.muiName??((i=(n=(s=e.type)==null?void 0:s._payload)==null?void 0:n.value)==null?void 0:i.muiName))!==-1}const ue=(e,t)=>e.filter(s=>t.includes(s)),k=(e,t,s)=>{const n=e.keys[0];Array.isArray(t)?t.forEach((i,a)=>{s((o,u)=>{a<=e.keys.length-1&&(a===0?Object.assign(o,u):o[e.up(e.keys[a])]=u)},i)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:ue(e.keys,Object.keys(t))).forEach(a=>{if(e.keys.includes(a)){const o=t[a];o!==void 0&&s((u,c)=>{n===a?Object.assign(u,c):u[e.up(a)]=c},o)}}):(typeof t=="number"||typeof t=="string")&&s((i,a)=>{Object.assign(i,a)},t)};function b(e){return`--Grid-${e}Spacing`}function w(e){return`--Grid-parent-${e}Spacing`}const E="--Grid-columns",v="--Grid-parent-columns",fe=({theme:e,ownerState:t})=>{const s={};return k(e.breakpoints,t.size,(n,i)=>{let a={};i==="grow"&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),i==="auto"&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof i=="number"&&(a={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / var(${v}) - (var(${v}) - ${i}) * (var(${w("column")}) / var(${v})))`}),n(s,a)}),s},ge=({theme:e,ownerState:t})=>{const s={};return k(e.breakpoints,t.offset,(n,i)=>{let a={};i==="auto"&&(a={marginLeft:"auto"}),typeof i=="number"&&(a={marginLeft:i===0?"0px":`calc(100% * ${i} / var(${v}) + var(${w("column")}) * ${i} / var(${v}))`}),n(s,a)}),s},ye=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={[E]:12};return k(e.breakpoints,t.columns,(n,i)=>{const a=i??12;n(s,{[E]:a,"> *":{[v]:a}})}),s},he=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return k(e.breakpoints,t.rowSpacing,(n,i)=>{var o;const a=typeof i=="string"?i:(o=e.spacing)==null?void 0:o.call(e,i);n(s,{[b("row")]:a,"> *":{[w("row")]:a}})}),s},ve=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return k(e.breakpoints,t.columnSpacing,(n,i)=>{var o;const a=typeof i=="string"?i:(o=e.spacing)==null?void 0:o.call(e,i);n(s,{[b("column")]:a,"> *":{[w("column")]:a}})}),s},xe=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return k(e.breakpoints,t.direction,(n,i)=>{n(s,{flexDirection:i})}),s},ke=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${b("row")}) var(${b("column")})`}}),be=e=>{const t=[];return Object.entries(e).forEach(([s,n])=>{n!==!1&&n!==void 0&&t.push(`grid-${s}-${String(n)}`)}),t},we=(e,t="xs")=>{function s(n){return n===void 0?!1:typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"&&n>0}if(s(e))return[`spacing-${t}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const n=[];return Object.entries(e).forEach(([i,a])=>{s(a)&&n.push(`spacing-${i}-${String(a)}`)}),n}return[]},je=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,s])=>`direction-${t}-${s}`):[`direction-xs-${String(e)}`],Se=J(),Ce=ee("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function Me(e){return te({props:e,name:"MuiGrid",defaultTheme:Se})}function Ge(e={}){const{createStyledComponent:t=Ce,useThemeProps:s=Me,componentName:n="MuiGrid"}=e,i=(c,l)=>{const{container:g,direction:p,spacing:m,wrap:d,size:j}=c,S={root:["root",g&&"container",d!=="wrap"&&`wrap-xs-${String(d)}`,...je(p),...be(j),...g?we(m,l.breakpoints.keys[0]):[]]};return se(S,C=>ae(n,C),{})};function a(c,l,g=()=>!0){const p={};return c===null||(Array.isArray(c)?c.forEach((m,d)=>{m!==null&&g(m)&&l.keys[d]&&(p[l.keys[d]]=m)}):typeof c=="object"?Object.keys(c).forEach(m=>{const d=c[m];d!=null&&g(d)&&(p[m]=d)}):p[l.keys[0]]=c),p}const o=t(ye,ve,he,fe,xe,ke,ge),u=h.forwardRef(function(l,g){const p=Q(),m=s(l),d=ne(m),{className:j,children:S,columns:C=12,container:N=!1,component:P="div",direction:R="row",wrap:I="wrap",size:O={},offset:L={},spacing:M=0,rowSpacing:W=M,columnSpacing:H=M,unstable_level:y=0,..._}=d,q=a(O,p.breakpoints,f=>f!==!1),U=a(L,p.breakpoints),V=l.columns??(y?void 0:C),F=l.spacing??(y?void 0:M),K=l.rowSpacing??l.spacing??(y?void 0:W),Y=l.columnSpacing??l.spacing??(y?void 0:H),A={...d,level:y,columns:V,container:N,direction:R,wrap:I,spacing:F,rowSpacing:K,columnSpacing:Y,size:q,offset:U},Z=i(A,p);return r.jsx(o,{ref:g,as:P,ownerState:A,className:ie(Z.root,j),..._,children:h.Children.map(S,f=>{var D;return h.isValidElement(f)&&me(f,["Grid"])&&N&&f.props.container?h.cloneElement(f,{unstable_level:((D=f.props)==null?void 0:D.unstable_level)??y+1}):f})})});return u.muiName="Grid",u}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=x("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=x("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=x("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=x("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=x("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=x("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]),G=Ge({createStyledComponent:re("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>oe({props:e,name:"MuiGrid2"})}),De=[{title:"Finance & Banking",description:"Devunity offers tailored solutions for the Finance & Banking industry, enhancing operational efficiency, security, and customer experience. By leveraging advanced technologies like AI, blockchain, and data analytics, Devunity supports seamless transactions, fraud detection, risk management, and compliance with regulations. Their innovative software solutions streamline processes, improve decision-making, and enable personalized services, driving growth and competitiveness in the evolving financial landscape.",icon:Te,image:"/company-website/images/industry/finance-banking.avif"},{title:"Healthcare",description:"Devunity delivers innovative solutions for the Healthcare industry, focusing on improving patient care, operational efficiency, and data security. Their expertise in AI, IoT, and data analytics enables real-time health monitoring, predictive diagnostics, and personalized treatments. By streamlining administrative tasks and ensuring regulatory compliance, Devunity enhances workflow automation, reduces costs, and supports better clinical outcomes, helping healthcare providers deliver superior services in a rapidly evolving landscape.",icon:Be,image:"/company-website/images/industry/health-care.avif"},{title:"Retail & E-commerce",description:"Devunity offers cutting-edge solutions for the Retail & E-commerce industry, optimizing customer experiences and driving operational efficiency. By leveraging AI, big data, and automation, they help businesses personalize recommendations, improve inventory management, and streamline supply chains. Their solutions enable seamless omnichannel strategies, secure payment processing, and real-time analytics, enhancing customer engagement and boosting sales while ensuring scalability and competitiveness in a dynamic market.",icon:Ae,image:"/company-website/images/industry/retail-industry.avif"},{title:"Manufacturing",description:"Devunity provides advanced solutions for the Manufacturing industry, focusing on optimizing production processes and improving operational efficiency. By integrating IoT, AI, and data analytics, they enable real-time monitoring, predictive maintenance, and smart automation, reducing downtime and enhancing productivity. Their solutions also help with supply chain management, quality control, and inventory optimization, empowering manufacturers to streamline operations, reduce costs, and stay competitive in a rapidly evolving market.",icon:ze,image:"/company-website/images/industry/manufacturing.jpg"},{title:"Travel & Hospitality",description:"Devunity offers tailored solutions for the Travel & Hospitality industry, enhancing customer experiences and operational efficiency. By leveraging AI, data analytics, and automation, they help businesses personalize services, optimize booking systems, and streamline operations. Their solutions enable seamless customer interactions, dynamic pricing, and improved resource management. Devunity also enhances data security, supports real-time analytics, and drives growth by delivering innovative, scalable solutions for the evolving travel sector.",icon:Ne,image:"/company-website/images/industry/travel-hospitality.avif"},{title:"Professional Services",description:"Devunity offers comprehensive solutions for the Professional Services industry, helping firms streamline operations, enhance client interactions, and drive business growth. Their expertise in AI, automation, and data analytics enables improved project management, resource allocation, and decision-making. Devunity’s solutions facilitate seamless collaboration, optimize billing systems, and ensure compliance with industry regulations. By delivering tailored, scalable technologies, they empower professional service firms to enhance efficiency and provide exceptional client experiences.",icon:$e,image:"/company-website/images/industry/proffesional-service.avif"}];function $({image:e,title:t}){return r.jsx(de,{sx:{padding:"16px"},component:"img",height:"160",width:"160",image:e,alt:t})}function z({icon:e,title:t,description:s}){const n=e;return r.jsxs(pe,{sx:{flexGrow:1},children:[r.jsxs(B,{sx:{display:"flex",alignItems:"center",mb:2},children:[r.jsx(n,{className:"h-6 w-6 text-blue-600 mr-2"}),r.jsx(T,{variant:"h6",component:"h3",children:t})]}),r.jsx("p",{className:"text-gray-600",children:s})]})}function Re(){const e=h.useContext(X)==="sm",t=(n,i)=>e?r.jsx($,{image:n.image,title:n.title}):i%2===0?r.jsx($,{image:n.image,title:n.title}):r.jsx(z,{icon:n.icon,title:n.title,description:n.description}),s=(n,i)=>e?r.jsx(z,{icon:n.icon,title:n.title,description:n.description}):i%2===0?r.jsx(z,{icon:n.icon,title:n.title,description:n.description}):r.jsx($,{image:n.image,title:n.title});return r.jsx(B,{id:"industries",component:"section",sx:{py:{xs:8,md:12},backgroundColor:"background.default"},children:r.jsxs(ce,{maxWidth:"lg",children:[r.jsxs(B,{sx:{textAlign:"center",mb:8},children:[r.jsx(T,{variant:"h3",component:"h2",sx:{fontWeight:"bold",mb:2},children:"Industries We Serve"}),r.jsx(T,{variant:"h6",color:"text.secondary",sx:{maxWidth:"md",mx:"auto"},children:"Tailored solutions for diverse industry needs"})]}),De.map((n,i)=>r.jsx(le,{elevation:0,className:"my-3 hover:shadow-md",sx:{height:"100%",display:"flex",transition:"transform 0.3s ease-in-out","&:hover":{transform:"translateY(-8px)"}},children:r.jsxs(G,{container:!0,className:"w-full",sx:{display:"flex"},children:[r.jsx(G,{size:{xs:12,sm:i%2===0?4:8,md:i%2===0?4:8,lg:i%2===0?4:8,xl:i%2===0?4:8},children:t(n,i)}),r.jsx(G,{size:{xs:12,sm:i%2===0?8:4,md:i%2===0?8:4,lg:i%2===0?8:4,xl:i%2===0?8:4},children:s(n,i)})]})},i))]})})}export{Re as default};