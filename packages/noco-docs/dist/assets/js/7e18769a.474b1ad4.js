"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4177],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>w});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(i),v=a,w=d["".concat(c,".").concat(v)]||d[v]||m[v]||o;return i?n.createElement(w,l(l({ref:t},p),{},{components:i})):n.createElement(w,l({ref:t},p))}));function w(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=v;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}v.displayName="MDXCreateElement"},18329:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const o={title:"Actions on view",description:"Learn how to delete, rename, duplicate a a view in NocoDB.",tags:["Views","Rename","Duplicate","Delete","Grid view","Form view","Kanban view","Gallery view"],keywords:["NocoDB view","delete view","rename view","duplicate view"]},l=void 0,r={unversionedId:"views/actions-on-view",id:"views/actions-on-view",title:"Actions on view",description:"Learn how to delete, rename, duplicate a a view in NocoDB.",source:"@site/docs/090.views/090.actions-on-view.md",sourceDirName:"090.views",slug:"/views/actions-on-view",permalink:"/views/actions-on-view",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/090.views/090.actions-on-view.md",tags:[{label:"Views",permalink:"/tags/views"},{label:"Rename",permalink:"/tags/rename"},{label:"Duplicate",permalink:"/tags/duplicate"},{label:"Delete",permalink:"/tags/delete"},{label:"Grid view",permalink:"/tags/grid-view"},{label:"Form view",permalink:"/tags/form-view"},{label:"Kanban view",permalink:"/tags/kanban-view"},{label:"Gallery view",permalink:"/tags/gallery-view"}],version:"current",sidebarPosition:90,frontMatter:{title:"Actions on view",description:"Learn how to delete, rename, duplicate a a view in NocoDB.",tags:["Views","Rename","Duplicate","Delete","Grid view","Form view","Kanban view","Gallery view"],keywords:["NocoDB view","delete view","rename view","duplicate view"]},sidebar:"tutorialSidebar",previous:{title:"Kanban",permalink:"/views/view-types/kanban"},next:{title:"Data sources overview",permalink:"/data-sources/data-source-overview"}},c={},s=[{value:"View context menu",id:"view-context-menu",level:2},{value:"Rename view",id:"rename-view",level:2},{value:"Change view icon",id:"change-view-icon",level:2},{value:"Duplicate view",id:"duplicate-view",level:2},{value:"Delete view",id:"delete-view",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"view-context-menu"},"View context menu"),(0,a.kt)("p",null,"The view context menu provides a set of tools to interact with the view. The view context menu can be accessed by clicking on the ellipsis symbol (",(0,a.kt)("inlineCode",{parentName:"p"},"..."),") located next to view in the left sidebar."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(8810).Z,width:"1322",height:"721"})),(0,a.kt)("h2",{id:"rename-view"},"Rename view"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the ellipsis symbol (",(0,a.kt)("inlineCode",{parentName:"li"},"..."),") next to view name located in the left sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Rename")," option from the view context menu."),(0,a.kt)("li",{parentName:"ol"},"Enter the desired new view name into the provided field."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter")," key to finalize the renaming process.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(8810).Z,width:"1322",height:"721"})),(0,a.kt)("h2",{id:"change-view-icon"},"Change view icon"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the existing view icon to the left of the view name in the left sidebar."),(0,a.kt)("li",{parentName:"ol"},"Select the desired icon from the list of available options.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(32762).Z,width:"2870",height:"1792"})),(0,a.kt)("h2",{id:"duplicate-view"},"Duplicate view"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the ellipsis symbol (",(0,a.kt)("inlineCode",{parentName:"li"},"..."),") next to view name located in the left sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Duplicate")," option from the view context menu."),(0,a.kt)("li",{parentName:"ol"},"Enter the desired new view name into the provided field."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Duplicate View")," button in the confirmation dialog.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(8810).Z,width:"1322",height:"721"}),"\n",(0,a.kt)("img",{alt:"image",src:i(65452).Z,width:"1321",height:"718"})),(0,a.kt)("h2",{id:"delete-view"},"Delete view"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This action cannot be undone."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the ellipsis symbol (",(0,a.kt)("inlineCode",{parentName:"li"},"..."),") next to view name located in the left sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Delete")," option from the view context menu."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Delete View")," button in the confirmation dialog.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(8810).Z,width:"1322",height:"721"}),"\n",(0,a.kt)("img",{alt:"image",src:i(20646).Z,width:"1321",height:"717"})))}m.isMDXComponent=!0},20646:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/delete-view-confirmation-1afddd0d2975dde5d235b6ee04893b59.png"},65452:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/duplicate-confirmation-319dac1b1b6351e9c1da8019160cd854.png"},32762:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-change-icon-0aab6b0e9dc655406e8cfd2cee76454c.png"},8810:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/view-context-menu-2aaa116e512e31804a1c471b0af66371.png"}}]);