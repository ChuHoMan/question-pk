(()=>{"use strict";var e={842:function(e,t,n){var l=n("967");let a=e=>e===window,i=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),o=e=>{let t=(0,l.SU)(e);if(a(t)){let e=t.innerWidth;return i(e,t.innerHeight)}return(null==t?void 0:t.getBoundingClientRect)?t.getBoundingClientRect():i(0,0)},u={class:"signature"},r=(0,l.aZ)({name:"Signature",__name:"Signature",props:{lineWidth:{default:3},type:{default:"png"},penColor:{default:"#000"},backgroundColor:{}},emits:["start","signing","clear","end","submit"],setup(e,t){let n,{expose:a,emit:i}=t,r=e=>e.stopPropagation();function s(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&r(e)}let c=(0,l.iH)(),v=(0,l.iH)(),d=0,f=0,g=(0,l.Fl)(()=>c.value?c.value.getContext("2d"):null),p=t=>{if(!g.value)return!1;g.value.beginPath(),g.value.lineWidth=e.lineWidth,g.value.strokeStyle=e.penColor,n=o(c),i("start",t)},h=e=>{if(!g.value)return!1;s(e);let t=e.touches[0],l=t.clientX-((null==n?void 0:n.left)||0),a=t.clientY-((null==n?void 0:n.top)||0);g.value.lineCap="round",g.value.lineJoin="round",g.value.lineTo(l,a),g.value.stroke(),i("signing",e)},w=e=>{s(e),i("end",e)},m=t=>{t&&e.backgroundColor&&(t.fillStyle=e.backgroundColor,t.fillRect(0,0,d,f))},_=t=>{let n=document.createElement("canvas");return n.width=t.width,n.height=t.height,e.backgroundColor&&m(n.getContext("2d")),t.toDataURL()===n.toDataURL()};return a({submit:()=>{var t,n;let l=c.value;if(!!l)i("submit",{image:_(l)?"":(null===(t=(n={jpg:()=>l.toDataURL("image/jpeg",.8),jpeg:()=>l.toDataURL("image/jpeg",.8)})[e.type])||void 0===t?void 0:t.call(n))||l.toDataURL(`image/${e.type}`),canvas:l})},clear:()=>{g.value&&(g.value.clearRect(0,0,d,f),g.value.closePath(),m(g.value)),i("clear")}}),(0,l.bv)(()=>{if(c.value){var e,t,n;let l=c.value,a=window.devicePixelRatio;d=l.width=((null===(e=v.value)||void 0===e?void 0:e.offsetWidth)||0)*a,f=l.height=((null===(t=v.value)||void 0===t?void 0:t.offsetHeight)||0)*a,null===(n=g.value)||void 0===n||n.scale(a,a),m(g.value)}}),(e,t)=>((0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",{ref_key:"wrapRef",ref:v,class:"signature__content"},[(0,l._)("canvas",{ref_key:"canvasRef",ref:c,onTouchstart:p,onTouchmove:h,onTouchend:w},null,544)],512),t[0]||(t[0]=(0,l._)("div",{class:"signature__bg"},[(0,l._)("span",{class:"text"},"手写板")],-1))]))}}),s=e=>{let t=[];for(let n=0;n<e;n++){let e;let l=Math.floor(21*Math.random()),a=Math.floor(21*Math.random()),i=`${l}a${a}`;if(l>a)e=">";else if(l<a)e="<";else{n--;continue}t.push({question:i,answer:e})}return t},c={class:"question-card"},v=(0,l.aZ)({name:"Question",__name:"Question",props:(0,l.Vf)({questions:{}},{active:{},activeModifiers:{}}),emits:["update:active"],setup(e){let t=(0,l.tT)(e,"active");return(e,n)=>((0,l.wg)(),(0,l.iD)("ul",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.questions,(n,a)=>((0,l.wg)(),(0,l.iD)("li",{key:n.question,class:(0,l.C_)(["question",a===t.value?"question-current":""])},[(0,l._)("span",null,(0,l.zw)(n.question.split("a")[0]),1),(0,l.WI)(e.$slots,"user-answer",{index:a,answer:n.answer}),(0,l._)("span",null,(0,l.zw)(n.question.split("a")[1]),1)],2))),128))]))}});var d=n("440");let f=(0,d.default)(v,[["__scopeId","data-v-3dae088e"]]),g={width:"374",height:"300",viewBox:"0 0 374 300",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p=(0,l.aZ)({name:"Error",__name:"Error",setup:e=>(e,t)=>((0,l.wg)(),(0,l.iD)("svg",g,t[0]||(t[0]=[(0,l._)("path",{class:"path1",d:"M6.99999 135C6.99999 142.933 5.52253 150.93 5.22222 158.889C4.78217 170.55 4.87326 182.278 5.05555 193.944C5.36045 213.458 12.6247 227.25 26.8889 241C74.6327 287.022 142.38 302.012 206.889 292.556C239.374 287.794 266.956 274.241 292.667 254.278C318.762 234.015 345.502 208.216 358.778 177.333C376.097 137.044 374.172 89.3883 342.833 56.6667C308.514 20.833 252.217 10.2189 205.111 6.5C191.118 5.39529 176.923 5.70201 162.889 5.22222C155.909 4.98361 148.726 4.56099 141.778 5.5C137.466 6.08266 134.12 6.88044 131 10",stroke:"#FF0000","stroke-width":"8","stroke-linecap":"round"},null,-1)])))}),h={width:"333",height:"258",viewBox:"0 0 333 258",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w=(0,l.aZ)({name:"Success",__name:"Success",setup:e=>(e,t)=>((0,l.wg)(),(0,l.iD)("svg",h,t[0]||(t[0]=[(0,l._)("path",{class:"path1",d:"M5 144C5 174.548 4.26579 206.734 13 236.333C16.9925 249.864 21.4473 257.351 37.1111 251.333C49.2736 246.661 60.7523 239.304 71.4444 232C119.788 198.976 164.516 160.02 208.833 121.889C244.853 90.8969 280.723 58.8293 312.833 23.7222C318.497 17.5297 325.4 11.2004 329 4",stroke:"#58EB8B","stroke-width":"8","stroke-linecap":"round"},null,-1)])))}),m={class:"page"},_={class:"input"},b=(0,l.aZ)({__name:"App",setup(e){let t=(0,l.iH)(null),n=(0,l.iH)(0),a=()=>{t.value.clear()},i=[],o=e=>{i.push({x:e.touches[0].clientX,y:e.touches[0].clientY})},u=e=>{i.push({x:e.touches[0].clientX,y:e.touches[0].clientY})},c=()=>{if(i.length<3)return;let e=i[0],t=i[i.length-1],l=i[0];for(let e=1;e<i.length;e++)i[e].x>l.x&&(l=i[e]);let o=i[0];for(let e=1;e<i.length;e++)i[e].x<o.x&&(o=i[e]);let u="";l.x>e.x&&l.x>t.x?(u=">",console.log("用户输入的是大于号 (>)")):o.x<e.x&&o.x<t.x?(console.log("用户输入的是小于号 (<)"),u="<"):console.log("用户输入的是其他"),i.length=0,function(e){!e&&setTimeout(()=>{v.value[n.value]="",a()},1e3),v.value[n.value]=e,g.value[n.value].answer===e?(n.value++,a()):setTimeout(()=>{v.value[n.value]="",a()},1e3)}(u)},v=(0,l.iH)([]),d=async e=>{},g=(0,l.iH)([]);return(0,l.wF)(async()=>{g.value=s(10)}),(e,a)=>((0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(f,{questions:g.value,active:n.value,"onUpdate:active":a[0]||(a[0]=e=>n.value=e)},{"user-answer":(0,l.w5)(e=>{let{index:t,answer:n}=e;return[(0,l._)("span",_,[(0,l._)("span",null,(0,l.zw)(v.value[t]),1),v.value[t]&&v.value[t]!==n?((0,l.wg)(),(0,l.j4)(p,{key:0})):v.value[t]&&v.value[t]===n?((0,l.wg)(),(0,l.j4)(w,{key:1})):(0,l.kq)("",!0)])]}),_:1},8,["questions","active"]),(0,l.Wm)(r,{onSubmit:d,ref_key:"signatureRef",ref:t,onStart:o,onSigning:u,onEnd:c},null,512)]))}}),C=(0,d.default)(b,[["__scopeId","data-v-5597c750"]]);(0,l.ri)(C).mount("#root")}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var i=t[l]={exports:{}};return e[l](i,i.exports,n),i.exports}n.m=e,n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e=[];n.O=function(t,l,a,i){if(l){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[l,a,i];return}for(var u=1/0,o=0;o<e.length;o++){for(var l=e[o][0],a=e[o][1],i=e[o][2],r=!0,s=0;s<l.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every(function(e){return n.O[e](l[s])})?l.splice(s--,1):(r=!1,i<u&&(u=i));if(r){e.splice(o--,1);var c=a();void 0!==c&&(t=c)}}return t}})(),n.rv=function(){return"1.0.11"},(()=>{var e={980:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a=l[0],i=l[1],o=l[2],u,r,s=0;if(a.some(function(t){return 0!==e[t]})){for(u in i)n.o(i,u)&&(n.m[u]=i[u]);if(o)var c=o(n)}for(t&&t(l);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},l=self.webpackChunkrsbuild_vue3_ts=self.webpackChunkrsbuild_vue3_ts||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})(),n.ruid="bundler=rspack@1.0.11";var l=n.O(void 0,["139"],function(){return n("842")});l=n.O(l)})();