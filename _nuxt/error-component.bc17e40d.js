import{o as l,c as m,n as E,g as f,u as s,d as n,_ as o}from"./entry.5ee180ee.js";const g={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=a?n(()=>o(()=>import("./error-404.0a3a07fd.js"),["./error-404.0a3a07fd.js","./entry.5ee180ee.js","./_plugin-vue_export-helper.d3cd5315.js","./error-404.7fc72018.css"],import.meta.url).then(e=>e.default||e)):n(()=>o(()=>import("./error-500.e3bd63bc.js"),["./error-500.e3bd63bc.js","./entry.5ee180ee.js","./_plugin-vue_export-helper.d3cd5315.js","./error-500.c5df6088.css"],import.meta.url).then(e=>e.default||e));return(e,d)=>(l(),m(s(_),E(f({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=g;export{x as default};
