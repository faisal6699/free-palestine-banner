!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.freePalestine=n():e.freePalestine=n()}(this,(()=>{return e={138:(e,n,t)=>{const r=t(515),o=t(920),a=t(462);e.exports={createBanner:function(e){r();const n=document.createElement("div");o(n),a(n,e),window.addEventListener("load",(function(){document.body.appendChild(n)}))}}},515:e=>{e.exports=function(){const e=document.createElement("style");e.type="text/css",e.innerHTML="\n    \n    body {\n      margin-top: 45px;  \n    } \n    \n    .free-palestine-banner {\n        background-color: rgb(47 47 47);\n        text-align: center;\n        color: white;\n        position: absolute;\n        width: 100%;\n        padding: 0.5rem 0;\n        font-size: 1.25rem;\n        top: 0px;\n        left: 0px;\n        right: 0px;       \n    }\n\n    .free-paestine-banner-text-color-red {\n        color: #E4312b;\n    }\n\n    .free-paestine-banner-text-color-green {\n        color: #149954;\n      }\n\n    .free-paestine-banner-link {\n        text-decoration: underline;        \n    }\n\n    .free-paestine-banner-link:hover {\n        text-decoration: underline;\n        color: blue;\n        cursor: pointer;        \n    }\n\n    .free-paestine-banner-text-padding-left {\n        padding-left: 0.2rem;\n    }\n    ",document.getElementsByTagName("head")[0].appendChild(e)}},920:e=>{e.exports=function(e){e.classList.add("free-palestine-banner");const n=document.createElement("span");n.classList.add("free-paestine-banner-text-color-red"),n.innerHTML="&#x1f1f5;&#x1f1f8; #FreePalestine.",e.appendChild(n)}},462:(e,n,t)=>{const r=t(498),o=t(656);e.exports=function(e,n){const t=document.createElement("span");t.classList.add("free-paestine-banner-text-color-green");const a=o(n?.statement)?"Lets stand together in solidarity for the people of Palestine.":n.statement,i=document.createTextNode(a);t.classList.add("free-paestine-banner-text-padding-left"),t.appendChild(i),r(n?.externalLink)&&(t.classList.add("free-paestine-banner-link"),t.addEventListener("click",(function(){window.open(n.externalLink,"_blank")}))),e.appendChild(t)}},656:e=>{e.exports=function(e){return!e||/^\s*$/.test(e)}},498:e=>{e.exports=function(e){let n;try{n=new URL(e)}catch(e){return!1}return"http:"===n.protocol||"https:"===n.protocol}}},n={},function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}(138);var e,n}));