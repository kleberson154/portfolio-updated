import{j as d,B as m,F as p,G as _,r as u,A as b,a as f,b as N,I as g,c as v,d as h,e as k,f as x,g as w,h as y,i as A,k as F,l as L,M,R as S,m as j,n as C,o as H}from"./vendor.5d44e4b2.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}};I();const e=d.exports.jsx,a=d.exports.jsxs,D=d.exports.Fragment,E=()=>e("div",{className:"blur"});const G=()=>a("div",{className:"cta",children:[e("a",{href:"https://github.com/kleberson154",className:"btn",children:"Code"}),e("a",{href:"#contact",className:"btn btn-primary",children:"Let's Talk"})]});var T="/assets/ReadyPlayerMe-Avatar.7e75a4f8.png";const B=()=>a("div",{className:"header__socials",children:[e("a",{href:"https://www.linkedin.com/in/kleberson-andrade-47187520a/",target:"_blank",children:e(m,{})}),e("a",{href:"https://github.com/kleberson154",target:"_blank",children:e(p,{})}),e("a",{href:"https://www.instagram.com/kleberson.14/",target:"_blank",children:e(_,{})})]}),q=()=>e("header",{children:a("div",{className:"container header__container",children:[e("h5",{children:"Hello I'm"}),e("h1",{children:"Kleberson Andrade"}),e("h5",{className:"text-light",children:"Front-End Developer"}),e(G,{}),e(B,{}),e("div",{className:"me",children:e("img",{src:T,alt:"me",className:"img__header"})}),e("a",{href:"#contact",className:"scroll__down",children:"Scroll Down"})]})});const R=()=>{const[c,r]=u.exports.useState("#");return a("nav",{children:[e("a",{href:"#",onClick:()=>r("#"),className:c==="#"?"active":"",children:e(b,{})}),e("a",{href:"#about",onClick:()=>r("#about"),className:c==="#about"?"active":"",children:e(f,{})}),e("a",{href:"#experience",onClick:()=>r("#experience"),className:c==="#experience"?"active":"",children:e(N,{})}),e("a",{href:"#portfolio",onClick:()=>r("#services"),className:c==="#services"?"active":"",children:e(g,{})}),e("a",{href:"#contact",onClick:()=>r("#contact"),className:c==="#contact"?"active":"",children:e(v,{})})]})};var P="/assets/kleberson.fa385cb0.jpg";const O=()=>a("section",{id:"about",children:[e("h5",{children:"Get To Know"}),e("h2",{children:"About Me"}),a("div",{className:"container about__container",children:[e("div",{className:"about__me",children:e("div",{className:"about__me-image",children:e("img",{src:P,alt:"About Image"})})}),a("div",{className:"about__content",children:[a("div",{className:"about__cards",children:[a("article",{className:"about__card",children:[e(h,{className:"about__icon"}),e("h5",{children:"Experience"}),e("small",{children:"junior developer"})]}),a("article",{className:"about__card",children:[e(k,{className:"about__icon"}),e("h5",{children:"Clients"}),e("small",{children:"junior developer"})]}),a("article",{className:"about__card",children:[e(h,{className:"about__icon"}),e("h5",{children:"Projects"}),e("small",{children:"+20 created"})]})]}),e("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quidem qui ea? Quae qui autem maxime eveniet ad accusamus soluta omnis pariatur neque alias, natus perferendis adipisci cupiditate a? Ut."}),e("a",{href:"#contact",className:"btn btn-primary",children:"Let's Talk"})]})]})]});const K=()=>a("section",{id:"experience",children:[e("h5",{children:"What Skills I Have"}),e("h2",{children:"My Experience"}),e("div",{className:"container experience__container",children:a("div",{className:"experience__frontend",children:[e("h3",{children:"Frontend Development"}),a("div",{className:"experience__content",children:[a("div",{className:"raimbow",children:["Raimbow",a("article",{className:"experience__details",children:[e(x,{className:".experience__details-icon",id:"html-icon"}),a("div",{children:[e("h4",{children:"HTML"}),e("small",{className:"text-light",children:"Intermediate"})]})]})]}),e("div",{className:"raimbow",children:a("article",{className:"experience__details",children:[e(w,{className:".experience__details-icon",id:"css-icon"}),a("div",{children:[e("h4",{children:"CSS"}),e("small",{className:"text-light",children:"Intermediate"})]})]})}),e("div",{className:"raimbow",children:a("article",{className:"experience__details",children:[e(y,{className:".experience__details-icon",id:"javaS-icon"}),a("div",{children:[e("h4",{children:"JavaScript"}),e("small",{className:"text-light",children:"Intermediate"})]})]})}),e("div",{className:"raimbow",children:a("article",{className:"experience__details",children:[e(A,{className:".experience__details-icon",id:"react-icon"}),a("div",{children:[e("h4",{children:"React"}),e("small",{className:"text-light",children:"Beginner"})]})]})}),e("div",{className:"raimbow",children:a("article",{className:"experience__details",children:[e(F,{className:".experience__details-icon",id:"boot-icon"}),a("div",{children:[e("h4",{children:"Bootstrap"}),e("small",{className:"text-light",children:"Intermediate"})]})]})}),e("div",{className:"raimbow",children:a("article",{className:"experience__details",children:[e(L,{className:".experience__details-icon",id:"figma-icon"}),a("div",{children:[e("h4",{children:"Figma"}),e("small",{className:"text-light",children:"Beginner"})]})]})})]})]})})]});var n="/assets/proj-login.1ee7a8e2.png";const Y=()=>a("section",{id:"portfolio",children:[e("h5",{children:"My Projects"}),e("h2",{children:"Portfolio"}),a("div",{className:"container portfolio__container",children:[a("article",{className:"portfolio__item",children:[e("div",{className:"portfolio__item-image",children:e("img",{src:n,alt:""})}),e("h3",{children:"This is a portfolio item title"}),a("div",{className:"portfolio__item-cta",children:[e("a",{href:"https://github.com",className:"btn",target:"_blank",children:"GitHub"}),e("a",{href:"https://github.com",className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]}),a("article",{className:"portfolio__item",children:[e("div",{className:"portfolio__item-image",children:e("img",{src:n,alt:""})}),e("h3",{children:"This is a portfolio item title"}),a("div",{className:"portfolio__item-cta",children:[e("a",{href:"https://github.com",className:"btn",target:"_blank",children:"GitHub"}),e("a",{href:"https://github.com",className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]}),a("article",{className:"portfolio__item",children:[e("div",{className:"portfolio__item-image",children:e("img",{src:n,alt:""})}),e("h3",{children:"This is a portfolio item title"}),a("div",{className:"portfolio__item-cta",children:[e("a",{href:"https://github.com",className:"btn",target:"_blank",children:"GitHub"}),e("a",{href:"https://github.com",className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]}),a("article",{className:"portfolio__item",children:[e("div",{className:"portfolio__item-image",children:e("img",{src:n,alt:""})}),e("h3",{children:"This is a portfolio item title"}),a("div",{className:"portfolio__item-cta",children:[e("a",{href:"https://github.com",className:"btn",target:"_blank",children:"GitHub"}),e("a",{href:"https://github.com",className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]}),a("article",{className:"portfolio__item",children:[e("div",{className:"portfolio__item-image",children:e("img",{src:n,alt:""})}),e("h3",{children:"This is a portfolio item title"}),a("div",{className:"portfolio__item-cta",children:[e("a",{href:"https://github.com",className:"btn",target:"_blank",children:"GitHub"}),e("a",{href:"https://github.com",className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]}),a("article",{className:"portfolio__item",children:[e("div",{className:"portfolio__item-image",children:e("img",{src:n,alt:""})}),e("h3",{children:"This is a portfolio item title"}),a("div",{className:"portfolio__item-cta",children:[e("a",{href:"https://github.com",className:"btn",target:"_blank",children:"GitHub"}),e("a",{href:"https://github.com",className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]})]})]});const U=()=>{const c=u.exports.useRef();return a("section",{id:"contact",children:[e("h5",{children:"Get In Touch"}),e("h3",{children:"Contact Me"}),a("div",{className:"container contact__container",children:[a("div",{className:"contact__options",children:[a("article",{className:"contact__option",children:[e(M,{className:"contact__option-icon"}),e("h4",{children:"Email"}),e("h5",{children:"kleberson55@hotmail.com"}),e("a",{href:"mailto:kleberson55@hotmail.com",target:"_blank",children:"Send a message"})]}),a("article",{className:"contact__option",children:[e(S,{className:"contact__option-icon"}),e("h4",{children:"Direct"}),e("h5",{children:"@kleberson.14"}),e("a",{href:"https://www.instagram.com/kleberson.14/",target:"_blank",children:"Send a message"})]}),a("article",{className:"contact__option",children:[e(j,{className:"contact__option-icon"}),e("h4",{children:"Whatsapp"}),e("h5",{children:"+55 34 99133-6956"}),e("a",{href:"https://api.whatsapp.com/send?phone=5534991336956",target:"_blank",children:"Send a message"})]})]}),a("form",{ref:c,onSubmit:s=>{s.preventDefault(),C.sendForm("service_udfo3zk","template_3o5gymc",c.current,"mwalJaYwUw8hYAZd6"),s.target.reset().then(l=>{console.log(l.text)},l=>{console.log(l.text)})},children:[e("input",{type:"text",name:"name",placeholder:"Your Full Name",required:!0}),e("input",{type:"email",name:"email",placeholder:"Your Email",required:!0}),e("textarea",{name:"message",rows:"7",placeholder:"Your Message",required:!0}),e("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})]})]})]})};const W=()=>a("footer",{children:[e("a",{href:"#",className:"footer__logo",children:"Kleberson Andrade"}),a("ul",{className:"permalinks",children:[e("li",{children:e("a",{href:"#",children:"Home"})}),e("li",{children:e("a",{href:"#About",children:"About"})}),e("li",{children:e("a",{href:"#experience",children:"Experience"})}),e("li",{children:e("a",{href:"#portfolio",children:"Portfolio"})}),e("li",{children:e("a",{href:"#contact",children:"Contact"})})]}),a("div",{className:"footer__socials",children:[e("a",{href:"https://www.linkedin.com/in/kleberson-andrade-47187520a/",target:"_blank",children:e(m,{})}),e("a",{href:"https://github.com/kleberson154",target:"_blank",children:e(p,{})}),e("a",{href:"https://www.instagram.com/kleberson.14/",target:"_blank",children:e(_,{})})]}),e("div",{className:"footer__copyright",children:e("small",{children:"\xA9 Kleberson. All rights reserved."})})]}),J=()=>a(D,{children:[e(E,{}),e(q,{}),e(R,{}),e(O,{}),e(K,{}),e(Y,{}),e(U,{}),e(W,{})]});H.render(e(J,{}),document.querySelector("#root"));