!function(e){function t(t){for(var r,i,s=t[0],l=t[1],d=t[2],u=0,p=[];u<s.length;u++)i=s[u],n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={9:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([228,0]),o()}({124:function(e,t,o){var r=o(47),n=o(222);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a,i=0,s={injectType:"lazyStyleTag",insert:"head",singleton:!1},l={};n.locals&&(l.locals=n.locals),l.use=function(){return i++||(a=r(n,s)),l},l.unuse=function(){i>0&&!--i&&(a(),a=null)},e.exports=l},222:function(e,t,o){(t=o(48)(!1)).push([e.i,"._2Uafr--container{position:absolute;z-index:10}._2Uafr--container._2rjGz--largeContainer{top:20px;right:66px}._2Uafr--container._2wAHR--middleContainer{top:3px;right:5px}._1vWmF--button{display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:rgba(0,0,0,.5);border-radius:50%;z-index:9;border:1px solid hsla(0,0%,50.2%,.5)}._1vWmF--button a{padding:10px}._2rjGz--largeContainer .WFpoc--tooltip{top:1px;right:55px}._2wAHR--middleContainer .WFpoc--tooltip{top:-47px;left:1px}.WFpoc--tooltip{position:absolute;width:299px;height:37px;background:rgba(0,0,0,.7);border-radius:2px;text-align:center;font-size:13px;color:#fff;font-family:sans-serif;padding:2px;border:1px solid hsla(0,0%,50.2%,.5);z-index:999;@-webkit-keyframes FSLHI--pulse{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,0,0,.7)}70%{transform:scale(1);box-shadow:0 0 0 10px transparent}to{transform:scale(.95);box-shadow:0 0 0 0 transparent}}}._2_1dj--tooltip--pulse{transform:scale(1);-webkit-animation:FSLHI--pulse 2s infinite;animation:FSLHI--pulse 2s infinite}@keyframes FSLHI--pulse{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,0,0,.7)}70%{transform:scale(1);box-shadow:0 0 0 10px transparent}to{transform:scale(.95);box-shadow:0 0 0 0 transparent}}",""]),t.locals={container:"_2Uafr--container",largeContainer:"_2rjGz--largeContainer",middleContainer:"_2wAHR--middleContainer",button:"_1vWmF--button",tooltip:"WFpoc--tooltip","tooltip--pulse":"_2_1dj--tooltip--pulse",tooltipPulse:"_2_1dj--tooltip--pulse",pulse:"FSLHI--pulse"},e.exports=t},228:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(10),a=o(18),i=o(9),s=o(15),l=o(13),d=o(17),c=o(38),u=o(4),p=o(3),f=o(124),b=o.n(f),m=o(32),v=o(28),h=o.n(v);var g=p.c.memo(({url:e,filename:t,isLargeCard:o,children:n})=>{const a=Object(m.a)(b.a),[i,s]=p.c.useState(!1),[l,d]=p.c.useState(!1),c=p.c.useCallback(e=>{e.stopPropagation(),e.altKey||r.a.isFirefox||(l||(d(!0),setTimeout(()=>{d(!1)},2e3)),e.preventDefault())},[l]),u=p.c.useCallback(()=>{!r.a.isFirefox&&s(!i)},[i]);return p.c.createElement("div",{className:h()(a.container,o?a.largeContainer:a.middleContainer)},p.c.createElement("div",{className:a.button},p.c.createElement("a",{href:e,download:t,target:"_blank",onclick:c,onmouseenter:u,onmouseleave:u},n),i&&p.c.createElement("div",{className:h()(a.tooltip,l&&a.tooltipPulse)},r.a.i18n.getMessage("downloadTitle"))))}),y=o(5),x=o(1),_=o(7);const w=Object(n.a)("tiktok_com");a.a.isSingle()&&Object(d.b)("tiktok",(e,t)=>{const o=Object(s.a)(t),{preferences:n}=t;let a=n.moduleTiktok;const d=location.pathname.includes("/embed");r.a.onMessage.addListener((t,o,r)=>{if("getModuleInfo"===t.action){if(t.url!==location.href)return;return r({state:a,moduleName:e})}if("changeState"===t.action){if(e!==t.moduleName)return;return p.changeState(t.state)}"updatePreferences"!==t.action||Object.assign(n,t.preferences)}),a&&setTimeout(()=>{p.run()});const p={style:void 0,run(){a=1,d?i.a.isAvailable()&&f.mutationMode.start():i.a.isAvailable()&&(this.mutationMode.start(),this.injectStyle())},mutationMode:{observer:null,start(){if(this.observer)return this.observer.start();this.observer=new i.a({queries:[{css:[".video-card-big video[src]",".video-box video[src]",".video-card video[src]"],is:"added",callback:e=>{for(let t,o=0;t=e.added[o];o++)t.dataset.sfSkip>0||(t.dataset.sfSkip="1",p.runDesktop(t))}}]})},stop(){this.observer&&this.observer.stop(),document.querySelectorAll(".sf-dl-container").forEach(e=>{e.remove()}),p.style&&p.style.remove(),["sfSkip","sfReady"].forEach((function(e){let t=Object(l.a)(e),o=document.querySelectorAll("["+t+"]");for(let e,r=0;e=o[r];r++)e.removeAttribute(t)}))}},runDesktop(e){if(!e)return w.error("videoElement don't found");if(!e.closest(".video-feed-item, .video-card-big"))return w.error("videoCard don't found");const t=null!==e.closest(".video-card-big");let o;o=t?e.closest("div"):e.closest("div._ratio_");const r=document.querySelector(".user-username, .share-title"),n=r&&r.textContent?y.a.modify(r.textContent+".mp4"):"video.mp4";if(o&&!o.dataset.sfReady){o.dataset.sfReady=String(1);const r=document.createElement("div");r.classList.add("sf-dl-container"),o.appendChild(r),p.createDownloadButton(r,n,e.src,t)}},createDownloadButton:(e,t,r,n)=>Object(c.a)(Object(u.f)(g,{url:r,filename:t,isLargeCard:n},[Object(u.f)("img",{src:o.svg.getSrc("download","#fff")})]),e),injectStyle(){this.style=x.a.create("style",{text:Object(_.a)({".sf-dl-container":{display:"none"},"._ratio_:hover .sf-dl-container, .video-card-container:hover .sf-dl-container":{display:"block"}})}),document.body.appendChild(this.style)},changeState(e){a=e,this.mutationMode.stop(),e&&this.run()}},f={mutationMode:{observer:null,start(){if(this.observer)return this.observer.start();this.observer=new i.a({queries:[{css:"._embed_player_video-wrapper",is:"added",callback:e=>{for(let t,o=0;t=e.added[o];o++)t.dataset.sfSkip>0||(t.dataset.sfSkip="1",f.insertDownloadButton(t))}}]})}},insertDownloadButton(e){if(!e.dataset.sfReady){let t;e.dataset.sfReady=String(1);const o=document.querySelector("._embed_video_card-user span"),r=o&&o.textContent?y.a.modify(o.textContent+".mp4"):"video.mp4";e.addEventListener("mouseenter",()=>{const o=document.querySelector("video");o&&(t=p.createDownloadButton(e,r,o.src,!0))}),e.addEventListener("mouseleave",()=>{t&&t()})}}}})}});