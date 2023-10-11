"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3463],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),f=i,c=m["".concat(d,".").concat(f)]||m[f]||u[f]||n;return a?r.createElement(c,l(l({ref:t},p),{},{components:a})):r.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},47611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={title:"Duration",description:"This article explains how to create & work with a Duration field.",tags:["Fields","Field types","Date & Time"],keywords:["Fields","Field types","Date & Time","Create duration field"]},l=void 0,o={unversionedId:"fields/field-types/date-time-based/duration",id:"fields/field-types/date-time-based/duration",title:"Duration",description:"This article explains how to create & work with a Duration field.",source:"@site/docs/070.fields/040.field-types/070.date-time-based/040.duration.md",sourceDirName:"070.fields/040.field-types/070.date-time-based",slug:"/fields/field-types/date-time-based/duration",permalink:"/fields/field-types/date-time-based/duration",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/070.date-time-based/040.duration.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Date & Time",permalink:"/tags/date-time"}],version:"current",sidebarPosition:40,frontMatter:{title:"Duration",description:"This article explains how to create & work with a Duration field.",tags:["Fields","Field types","Date & Time"],keywords:["Fields","Field types","Date & Time","Create duration field"]},sidebar:"tutorialSidebar",previous:{title:"Time",permalink:"/fields/field-types/date-time-based/time"},next:{title:"Multi-field editor",permalink:"/fields/multi-fields-editor"}},d={},s=[{value:"Create a duration field",id:"create-a-duration-field",level:2},{value:"Supported duration formats",id:"supported-duration-formats",level:3},{value:"Related fields",id:"related-fields",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," field type is used to store duration of time in seconds or minutes. Different formats are supported by NocoDB, as detailed in the table below."),(0,i.kt)("h2",{id:"create-a-duration-field"},"Create a duration field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,i.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,i.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,i.kt)("li",{parentName:"ol"},"Select the field type as ",(0,i.kt)("inlineCode",{parentName:"li"},"Duration")," from the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"Duration Format")),(0,i.kt)("li",{parentName:"ol"},"Configure default value (Optional)"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(76817).Z,width:"2878",height:"1304"})),(0,i.kt)("h3",{id:"supported-duration-formats"},"Supported duration formats"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HH:mm"),(0,i.kt)("td",{parentName:"tr",align:null},"14:20")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,i.kt)("td",{parentName:"tr",align:null},"12:45:30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HH:mm:ss.s"),(0,i.kt)("td",{parentName:"tr",align:null},"12:45:30.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HH:mm.ss.ss"),(0,i.kt)("td",{parentName:"tr",align:null},"12:45.30.50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HH:mm.ss.sss"),(0,i.kt)("td",{parentName:"tr",align:null},"12:45.30.500")))),(0,i.kt)("h2",{id:"related-fields"},"Related fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/date-time"},"DateTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/date"},"Date")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/time"},"Time"))))}u.isMDXComponent=!0},76817:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/duration-240ca3f3201ea99e948bebd59e41dce8.png"}}]);