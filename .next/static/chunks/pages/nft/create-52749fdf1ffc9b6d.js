(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{5561:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft/create",function(){return s(2064)}])},2064:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return E}});var r=s(5893),n=s(7294),i=s(1012),l=s(2351),a=s(4203),o=s(1363),d=s(4103),c=s(6723),m=s(3784);let u=(0,n.createContext)(null);function p(){let e=(0,n.useContext)(u);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,p),e}return e}let h=(0,l.yV)((function(e,t){let{passive:s=!1,...r}=e,n=p(),i=`headlessui-label-${(0,a.M)()}`,o=(0,m.T)(t);(0,c.e)((()=>n.register(i)),[i,n.register]);let d={ref:o,...n.props,id:i};return s&&("onClick"in d&&delete d.onClick,"onClick"in r&&delete r.onClick),(0,l.sY)({ourProps:d,theirProps:r,slot:n.slot||{},defaultTag:"label",name:n.name||"Label"})})),x=(0,n.createContext)(null);function f(){let e=(0,n.useContext)(x);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return e}function g(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let s=(0,n.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let s=t.slice(),r=s.indexOf(e);return-1!==r&&s.splice(r,1),s})))),[]),r=(0,n.useMemo)((()=>({register:s,slot:e.slot,name:e.name,props:e.props})),[s,e.slot,e.name,e.props]);return n.createElement(x.Provider,{value:r},e.children)}),[t])]}let b=(0,l.yV)((function(e,t){let s=f(),r=`headlessui-description-${(0,a.M)()}`,n=(0,m.T)(t);(0,c.e)((()=>s.register(r)),[r,s.register]);let i=e,o={ref:n,...s.props,id:r};return(0,l.sY)({ourProps:o,theirProps:i,slot:s.slot||{},defaultTag:"p",name:s.name||"Description"})}));var v=s(4157);let y=(0,l.yV)((function(e,t){return(0,l.sY)({ourProps:{ref:t,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",display:"none"}},theirProps:e,slot:{},defaultTag:"div",name:"VisuallyHidden"})}));let j=(0,n.createContext)(null);j.displayName="GroupContext";let N=n.Fragment;let w=(0,l.yV)((function(e,t){let{checked:s,onChange:r,name:i,value:c,...u}=e,p=`headlessui-switch-${(0,a.M)()}`,h=(0,n.useContext)(j),x=(0,n.useRef)(null),f=(0,m.T)(x,t,null===h?null:h.setSwitch),g=(0,n.useCallback)((()=>r(!s)),[r,s]),b=(0,n.useCallback)((e=>{if((0,d.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),g()}),[g]),N=(0,n.useCallback)((e=>{e.key===o.R.Space?(e.preventDefault(),g()):e.key===o.R.Enter&&function(e){var t;let s=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(s)for(let r of s.elements)if("INPUT"===r.tagName&&"submit"===r.type||"BUTTON"===r.tagName&&"submit"===r.type||"INPUT"===r.nodeName&&"image"===r.type)return void r.click()}(e.currentTarget)}),[g]),w=(0,n.useCallback)((e=>e.preventDefault()),[]),k=(0,n.useMemo)((()=>({checked:s})),[s]),C={id:p,ref:f,role:"switch",type:(0,v.f)(e,x),tabIndex:0,"aria-checked":s,"aria-labelledby":null==h?void 0:h.labelledby,"aria-describedby":null==h?void 0:h.describedby,onClick:b,onKeyUp:N,onKeyPress:w};return n.createElement(n.Fragment,null,null!=i&&s&&n.createElement(y,{...(0,l.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:s,name:i,value:c})}),(0,l.sY)({ourProps:C,theirProps:u,slot:k,defaultTag:"button",name:"Switch"}))})),k=Object.assign(w,{Group:function(e){let[t,s]=(0,n.useState)(null),[r,i]=function(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let s=(0,n.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let s=t.slice(),r=s.indexOf(e);return-1!==r&&s.splice(r,1),s})))),[]),r=(0,n.useMemo)((()=>({register:s,slot:e.slot,name:e.name,props:e.props})),[s,e.slot,e.name,e.props]);return n.createElement(u.Provider,{value:r},e.children)}),[t])]}(),[a,o]=g(),d=(0,n.useMemo)((()=>({switch:t,setSwitch:s,labelledby:r,describedby:a})),[t,s,r,a]),c=e;return n.createElement(o,{name:"Switch.Description"},n.createElement(i,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},n.createElement(j.Provider,{value:d},(0,l.sY)({ourProps:{},theirProps:c,defaultTag:N,name:"Switch.Group"}))))},Label:h,Description:b});var C=s(1664),T=s.n(C),P=["health","attack","speed"],E=function(){var e=(0,n.useState)(""),t=e[0],s=e[1],l=(0,n.useState)(!1),a=l[0],o=l[1];return(0,r.jsx)(i.IE,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"py-4",children:!t&&(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"mr-2 font-bold underline",children:"Do you have meta data already?"}),(0,r.jsxs)(k,{checked:a,onChange:function(){return o(!a)},className:"".concat(a?"bg-indigo-900":"bg-indigo-700","\n                  relative inline-flex flex-shrink-0 h-[28px] w-[64px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"),children:[(0,r.jsx)("span",{className:"sr-only",children:"Use setting"}),(0,r.jsx)("span",{"aria-hidden":"true",className:"".concat(a?"translate-x-9":"translate-x-0","\n                    pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200")})]})]})}),t||a?(0,r.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,r.jsx)("div",{className:"md:col-span-1",children:(0,r.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,r.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"List NFT"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"This information will be displayed publicly so be careful what you share."})]})}),(0,r.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[a&&(0,r.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"uri",className:"block text-sm font-medium text-gray-700",children:"URI Link"}),(0,r.jsx)("div",{className:"mt-1 flex rounded-md shadow-sm",children:(0,r.jsx)("input",{onChange:function(e){return s(e.target.value)},type:"text",name:"uri",id:"uri",className:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300",placeholder:"http://link.com/data.json"})})]})}),t&&(0,r.jsxs)("div",{className:"mb-4 p-4",children:[(0,r.jsx)("div",{className:"font-bold",children:"Your metadata: "}),(0,r.jsx)("div",{children:(0,r.jsx)(T(),{href:t,children:(0,r.jsx)("a",{className:"underline text-indigo-600",children:t})})})]}),(0,r.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700",children:"Price (ETH)"}),(0,r.jsx)("div",{className:"mt-1 flex rounded-md shadow-sm",children:(0,r.jsx)("input",{type:"number",name:"price",id:"price",className:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300",placeholder:"0.8"})})]})}),(0,r.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,r.jsx)("button",{type:"button",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"List"})})]})})})]}):(0,r.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,r.jsx)("div",{className:"md:col-span-1",children:(0,r.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,r.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Create NFT Metadata"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"This information will be displayed publicly so be careful what you share."})]})}),(0,r.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[(0,r.jsxs)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),(0,r.jsx)("div",{className:"mt-1 flex rounded-md shadow-sm",children:(0,r.jsx)("input",{type:"text",name:"name",id:"name",className:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300",placeholder:"My Nice NFT"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,r.jsx)("div",{className:"mt-1",children:(0,r.jsx)("textarea",{id:"description",name:"description",rows:3,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",placeholder:"Some nft description...",defaultValue:""})}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Brief description of NFT"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Cover photo"}),(0,r.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:(0,r.jsxs)("div",{className:"space-y-1 text-center",children:[(0,r.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,r.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,r.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[(0,r.jsx)("span",{children:"Upload a file"}),(0,r.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only"})]}),(0,r.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,r.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]}),(0,r.jsx)("div",{className:"grid grid-cols-6 gap-6",children:P.map((function(e){return(0,r.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-2",children:[(0,r.jsx)("label",{htmlFor:e,className:"block text-sm font-medium text-gray-700",children:e}),(0,r.jsx)("input",{type:"text",name:e,id:e,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]},e)}))}),(0,r.jsx)("p",{className:"text-sm !mt-2 text-gray-500",children:"Choose value from 0 to 100"})]}),(0,r.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,r.jsx)("button",{type:"button",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})})]})})})]})]})})}}},function(e){e.O(0,[369,12,774,888,179],(function(){return t=5561,e(e.s=t);var t}));var t=e.O();_N_E=t}]);