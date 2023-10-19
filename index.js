(()=>{"use strict";var e={669:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    padding-right: 20px;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n.news {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\r\n    gap: 15px;\r\n    padding: 0 15px;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".sources {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n",""]);const i=o},767:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    position: relative;\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n    height: 100%;\r\n    max-height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: 10vh 1fr 10vh;\r\n    margin: 0;\r\n    gap: 15px;\r\n    box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n    margin: 0;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    max-height: 74vh;\r\n}\r\n\r\n.news-container {\r\n    overflow-y: scroll;\r\n    width: calc(100% - 300px);\r\n}\r\n\r\n.buttons-container {\r\n    width: 550px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.buttons-container::-webkit-scrollbar, .news-container::-webkit-scrollbar {\r\n    width: 15px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.buttons-container::-webkit-scrollbar-track, .news-container::-webkit-scrollbar-track {\r\n    background: #17181c;\r\n    border-radius: 10px;\r\n    border: 1px solid #30c5ff;\r\n}\r\n\r\n.buttons-container::-webkit-scrollbar-thumb, .news-container::-webkit-scrollbar-thumb {\r\n    background-color: #30c5ff;\r\n    border-radius: 20px;\r\n    border: 1px solid #17181c;\r\n    box-sizing: border-box;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.footer-github {\r\n    width: 2.1rem;\r\n    border-radius: 50px;\r\n    margin-right: 10px;\r\n    background-color: #fff;\r\n    border: 3px solid #17181c;\r\n}\r\n\r\n.footer-rsschool {\r\n    height: 2.1rem;\r\n    padding: 2px;\r\n    filter: invert(100%);\r\n    border: 3px solid #e7e7e8;\r\n}\r\n\r\n.footer-github:hover,\r\n.footer-rsschool:hover {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(0.25em);\r\n}\r\n\r\n.links {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n @media (max-width:860px) {\r\n    main {\r\n       flex-direction: column;\r\n    }\r\n    .buttons-container, .news-container  {\r\n        width: 90%;\r\n        height: 120px;\r\n        margin: 0 auto;\r\n    }\r\n    .news-container {\r\n        width: 90%;\r\n        height: 50vh;\r\n        margin: 30px auto 0px auto;\r\n    }\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},242:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(379),o=n.n(t),i=n(669);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},595:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(379),o=n.n(t),i=n(501);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},427:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(379),o=n.n(t),i=n(767);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function s(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function a(e,r){for(var n={},t=[],o=0;o<e.length;o++){var a=e[o],c=r.base?a[0]+r.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,r),references:1}),t.push(d)}return t}function c(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var l,d=(l=[],function(e,r){return l[e]=r,l.filter(Boolean).join("\n")});function u(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),s=e.childNodes;s[r]&&e.removeChild(s[r]),s.length?e.insertBefore(i,s[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(e,r){var n,t,o;if(r.singleton){var i=m++;n=p||(p=c(r)),t=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=a(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=s(n[t]);i[o].references--}for(var c=a(e,r),l=0;l<n.length;l++){var d=s(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}},717:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(842)),i=n(527);r.default=class{constructor(){this.controller=new o.default,this.view=new i.AppView}start(){const e=document.querySelector(".sources");e&&e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},853:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(24));class i extends o.default{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"cbf49a28782e49479384dbfa58b8a11b"})}}r.default=i},842:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(853)),i=n(230);class s extends o.default{getSources(e){super.getResp({endpoint:i.Endpoint.Sources},e)}getNews(e,r){let n=e.target instanceof HTMLElement?e.target:null;const t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;for(;n!==t;){if(n instanceof HTMLElement&&n.classList.contains("source__item")){const e=n.getAttribute("data-source-id");return void(t.getAttribute("data-source")!==e&&(t.setAttribute("data-source",e),super.getResp({endpoint:i.Endpoint.everything,options:{sources:e}},r)))}n=n.parentNode}}}r.default=s},24:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0});const t=n(230);r.default=class{constructor(e,r){this.baseLink=e,this.options=r}getResp({endpoint:e,options:r},n=(()=>{console.error("No callback for GET response")})){this.load("GET",e,n,r)}errorHandler(e){if(!e.ok)throw e.status!==t.ErrorStatus.Unauthorized&&e.status!==t.ErrorStatus.NotFound||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,r){const n=Object.assign(Object.assign({},this.options),e);let t=`${this.baseLink}${r}?`;return Object.entries(n).forEach((([e,r])=>{t+=`${e}=${null!=r?r:""}&`})),t.slice(0,-1)}load(e,r,n,t){fetch(this.makeUrl(t,r),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>n(e))).catch((e=>console.error(e)))}}},527:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.AppView=void 0;const o=t(n(798)),i=t(n(53));class s{constructor(){this.news=new o.default,this.sources=new i.default}drawNews(e){const r=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(r)}drawSources(e){const r=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(r)}}r.AppView=s,r.default=s},798:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),n(242);const o=t(n(835));r.default=class{draw(e){const r=e.length>=10?e.filter(((e,r)=>r<10)):e,n=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");r.forEach(((e,r)=>{var i;if(t instanceof HTMLTemplateElement){const s=t.content.cloneNode(!0);r%2&&s instanceof Element&&(null===(i=s.querySelector(".news__item"))||void 0===i||i.classList.add("alt"));const a=s.querySelector(".news__meta-photo");a instanceof HTMLElement&&(a.style.backgroundImage=`url(${e.urlToImage||o.default})`,s.querySelector(".news__meta-author").textContent=e.author||e.name,s.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),s.querySelector(".news__description-title").textContent=e.title,s.querySelector(".news__description-source").textContent=e.name,s.querySelector(".news__description-content").textContent=e.description,s.querySelector(".news__read-more a").setAttribute("href",e.url),n.append(s))}})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(n)}}},53:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),n(595),r.default=class{draw(e){const r=document.createDocumentFragment(),n=document.querySelector("#sourceItemTemp");n instanceof HTMLTemplateElement&&(e.forEach((e=>{const t=n.content.cloneNode(!0);t.querySelector(".source__item-name").textContent=e.name,t.querySelector(".source__item").setAttribute("data-source-id",e.id),r.append(t)})),document.querySelector(".sources").append(r))}}},607:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(717));n(427),(new o.default).start()},230:(e,r)=>{var n,t;Object.defineProperty(r,"__esModule",{value:!0}),r.ErrorStatus=r.Endpoint=void 0,function(e){e.Sources="sources",e.everything="everything"}(n||(r.Endpoint=n={})),function(e){e[e.Unauthorized=401]="Unauthorized",e[e.NotFound=404]="NotFound"}(t||(r.ErrorStatus=t={}))},835:(e,r,n)=>{e.exports=n.p+"57314987c1e9ceccf1a5.jpg"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,n(607)})();