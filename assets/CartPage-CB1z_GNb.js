import{r as v,j as s,c as u,e as p,a as g,f as n,u as P,g as k,h as O,M as U,i as B,k as E,l as T,m as w,n as C,o as V,p as W,q as b,t as D,v as i,w as L,C as M,x as R}from"./index-B-DnQvpl.js";import{B as y}from"./Button-C0atdr1H.js";const A=({classWrapper:e,classBtn:c,classTable:a,classSvg:o,value:x,disabledDecr:t,disabledIncrem:d,changeCount:l})=>{const[r,h]=v.useState(x),N=()=>{if(r>1&&!t){const m=r-1;h(m),l(m)}},j=()=>{if(!d){const m=r+1;h(m),l(m)}};return s.jsxs("div",{className:u(p.counterWrapper,e&&e),children:[s.jsx("button",{disabled:r<=1||t,className:u(p.btn,c&&c),onClick:N,children:s.jsx("svg",{className:u(p.svg,o&&o),children:s.jsx("use",{href:g+"#icon-minus"})})}),s.jsx("span",{className:u(p.table,a&&a),children:r}),s.jsx("button",{disabled:d,className:u(p.btn,c&&c),onClick:j,children:s.jsx("svg",{className:u(p.svg,o&&o),children:s.jsx("use",{href:g+"#icon-plus"})})})]})},Q=({data:e,changeCount:c,onClickDelete:a,onClickAdd:o})=>e.map(({id:t,image:d,quantity:l,name:r,color:h,price:N,discounted_price:j,flavor:m,volume:f,isDisabledIncrement:I})=>s.jsxs("li",{className:n.itemproduct,id:t,children:[s.jsx("img",{className:n.itemImg,src:d,alt:r}),s.jsxs("div",{className:n.itemInfo,children:[s.jsxs("div",{children:[s.jsx("p",{className:n.itemName,children:r}),s.jsxs("div",{className:n.itemDetails,children:[m&&s.jsxs("p",{className:n.itemFlavor,children:["Смак: ",m]}),f&&s.jsxs("p",{className:n.itemVol,children:["об’єм: ",f]}),h&&s.jsxs("p",{className:n.itemColor,children:["Колір: ",h]})]})]}),s.jsxs("div",{className:n.prices,children:[j&&s.jsxs("p",{className:n.itemDiscPrice,children:[j," грн"]}),j?s.jsxs("p",{className:n.itemPriceDisc,children:[N," грн"]}):s.jsxs("p",{className:n.itemPrice,children:[N," грн"]})]}),s.jsxs("div",{className:n.itemFooter,children:[s.jsx(A,{classWrapper:n.counter,classSvg:n.classSvg,value:l,changeCount:F=>c({id:t,newCount:F}),disabledIncrem:I}),s.jsx("button",{type:"button",className:n.deleteBtn,onClick:()=>a(t),children:s.jsx("svg",{children:s.jsx("use",{href:g+"#icon-delete"})})}),s.jsx("button",{className:n.btnTest,type:"submit",onClick:()=>o({id:t,image:d,quantity:l,name:r,color:h,price:N,discounted_price:j,flavor:m,volume:f}),children:"Test btn"})]})]})]},t)),q=e=>e.cart.products,S=e=>e.cart.totalPrice,$=e=>e.cart.discount,z=()=>{const e=P(q),c=k(),a=(t,d)=>{c(E(t,d))};v.useEffect(()=>{c(O())},[c]);const o=t=>{c(T({id:t}))},x=t=>{c(w(t))};return s.jsxs("section",{children:[s.jsx(U,{title:"Мій кошик"}),s.jsx("ul",{className:B.listOrederdProducts,children:s.jsx(Q,{data:e,changeCount:a,onClickDelete:o,onClickAdd:x})})]})},G=({onClick:e})=>{const c=P($);return s.jsxs("div",{className:C.boxUsedPromo,children:[s.jsxs("div",{children:[s.jsx("p",{className:C.boxInfo,children:"Ваш промокод застосовано"}),s.jsxs("p",{className:C.infoPrice,children:["Знижка ",s.jsxs("span",{className:C.infoPriceFigure,children:[c," грн"]})]})]}),s.jsx("button",{type:"button",className:C.deactivatedPromoBtn,onClick:e,children:"Скасувати"})]})},H=({priceDisc:e})=>{const[c,a]=v.useState(!1),o=P(S),x=k(),t=V({initialValues:{promoCode:""},validate:l=>{const r={};return l.promoCode.length===0&&(r.promoCode="Промокод є обов'язковим"),r},onSubmit:l=>(a(!0),x(W({values:l,total:o})),l)}),d=()=>{a(!1),x(D())};return s.jsxs("section",{className:b.sectionPromo,children:[s.jsxs("form",{className:b.form,onSubmit:t.handleSubmit,children:[s.jsx("div",{children:s.jsx("input",{className:b.input,type:"text",name:"promoCode",placeholder:"Промокод",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.promoCode})}),s.jsx(y,{title:"Застосувати",className:b.btn,type:"submit",disabled:!t.isValid||t.values.promoCode.trim()===""})]}),c&&s.jsx(G,{priceDisc:e,onClick:d})]})},J=()=>{const e=P($),a=P(S)-e;return s.jsxs("section",{className:i.boxSummary,children:[s.jsxs("div",{className:i.boxSum,children:[s.jsxs("div",{children:[s.jsx("p",{className:i.tittle,children:"Сума замовлення"}),s.jsxs("p",{className:i.price,children:[a," грн"]})]}),s.jsxs("div",{children:[s.jsx("p",{className:i.tittleDisc,children:"Ваша знижка"}),s.jsxs("p",{className:i.priceDisc,children:[e," грн"]})]}),s.jsxs("div",{children:[s.jsx("p",{className:i.tittle,children:"Вартість доставки"}),s.jsx("p",{className:i.lastP,children:"за тарифами перевізника"})]})]}),s.jsxs("div",{className:i.total,children:[s.jsx("p",{children:"Загальна сума"}),s.jsxs("p",{children:[a," грн"]})]}),s.jsx(y,{type:"submit",title:"Оформити замовлення",className:i.btn}),s.jsx("p",{className:i.accept,children:"* Натискаючи на кнопку, я погоджуюсь з умовами обробки персональних даних"})]})},K=()=>s.jsxs("section",{className:L.blockRight,children:[s.jsx(H,{}),s.jsx(J,{})]}),X=()=>{const e=k();return v.useEffect(()=>{e(D())},[e]),s.jsx("section",{children:s.jsxs(M,{className:R.cartBlock,children:[s.jsxs("section",{children:[s.jsx(z,{}),s.jsx("p",{children:"component forms"}),s.jsx("p",{children:"component delivery"})]}),s.jsx(K,{})]})})},_=()=>s.jsx(s.Fragment,{children:s.jsx(X,{})});export{_ as default};
