import{d as k,r as $,u as g,c as T,o as n,a as i,b as s,t as c,F as x,e as b,f as v,n as S,p as F,g as q,h as u,i as p,w as y,v as B,j as A,k as C,l as V,m as I,q as f,s as U}from"./index-7764e864.js";import"https://cdn.skypack.dev/axios@1.3.4";import"https://cdn.skypack.dev/web3@1.9.0";const w=k("squad",()=>{const t=$([]),o=g(),_=T(()=>{let e=[],d={factions:[],weapons:[],factionsBonus:0,weaponsBonus:0,uniteThe7Bonus:0,totalBonus:0};return t.value.forEach(l=>{l.factions.length&&l.factions.forEach(m=>{d.factions.push(m.name),d.factionsBonus+=m.bonus}),l.weapon&&(d.weapons.push(l.weapon.name),d.weaponsBonus+=l.weapon.bonus),e.indexOf(l.skin)===-1&&e.push(l.skin)}),e.length==7&&(d.uniteThe7Bonus=o.uniteThe7Bonus),d.totalBonus=d.factionsBonus+d.weaponsBonus+d.uniteThe7Bonus,d});function a(e){t.value.push(e)}function r(e){const d=t.value.findIndex(l=>l.name===e.name);d>-1&&t.value.splice(d,1)}function h(){t.value=[]}return{selectedAssets:t,stats:_,add:a,remove:r,reset:h}});const M=(t,o)=>{const _=t.__vccOpts||t;for(const[a,r]of o)_[a]=r;return _},N=t=>(F("data-v-dfef644a"),t=t(),q(),t),O=["id","disabled"],P=["for"],E={class:"card h-100"},W=["src"],L={class:"card-body d-flex flex-column p-2 p-md-3"},R={class:"card-title"},j={class:"row mb-0"},D={class:"col-7 text-truncate small"},X={class:"col-5 text-end text-nowrap small mb-1"},z={key:0,class:"row mb-0"},G={class:"col-7 text-truncate small"},Y={class:"col-5 text-end text-nowrap small mb-1"},H={class:"card-footer p-2 p-md-3"},J={class:"row mt-auto mb-0"},K=N(()=>s("dt",{class:"col-6 small text-nowrap"},"TOTAL",-1)),Q={class:"col-6 text-end text-nowrap fw-bold small mb-0"},Z={__name:"AssetCard",props:["asset","disabled"],emits:["change"],setup(t,{emit:o}){const _=t,a=r=>{r.target.checked?o("select",_.asset):o("unselect",_.asset)};return(r,h)=>(n(),i("div",{class:S(["col p-1 position-relative",{"opacity-50":t.disabled}])},[s("input",{class:"form-check-input position-absolute top-0 end-0 rounded-circle m-3 p-2",type:"checkbox",id:`checkbox-${t.asset.name}`,onInput:a,disabled:t.disabled},null,40,O),s("label",{class:"rounded-3 h-100",for:`checkbox-${t.asset.name}`},[s("div",E,[s("img",{src:t.asset.img,class:"card-img-top"},null,8,W),s("div",L,[s("h5",R,c(t.asset.name),1),(n(!0),i(x,null,b(t.asset.factions,e=>(n(),i("dl",j,[s("dt",D,c(e.name),1),s("dd",X,c(parseFloat(e.bonus).toFixed(2))+"%",1)]))),256)),t.asset.weapon?(n(),i("dl",z,[s("dt",G,c(t.asset.weapon.name),1),s("dd",Y,c(parseFloat(t.asset.weapon.bonus).toFixed(2))+"% ",1)])):v("",!0)]),s("div",H,[s("dl",J,[K,s("dd",Q,c(parseFloat(t.asset.totalBonus).toFixed(2))+"%",1)])])])],8,P)],2))}},ss=M(Z,[["__scopeId","data-v-dfef644a"]]),ts={class:"col p-2 position-relative"},es={class:"card h-100"},os=["src"],as={class:"card-footer p-2 p-md-3"},ls={class:"row mt-auto mb-0"},cs=s("dt",{class:"col-6 small text-nowrap"},"TOTAL",-1),ns={class:"col-6 text-end text-nowrap fw-bold small mb-0"},ds={class:"col p-2 position-relative"},is=s("div",{class:"card h-100"},[s("svg",{class:"bd-placeholder-img card-img-top h-auto",width:"180",height:"180",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[s("title",null,"Placeholder"),s("rect",{width:"100%",height:"100%",fill:"#2b3035"})]),s("div",{class:"card-footer p-2 p-md-3"},[s("dl",{class:"row mt-auto mb-0"},[s("dt",{class:"col-6 small"},[s("span",{class:"placeholder col-10"})]),s("dd",{class:"col-6 text-end small mb-0"},[s("span",{class:"placeholder col-8"})])])])],-1),rs=[is],us={__name:"SquadList",setup(t){const o=w();return(_,a)=>(n(),i(x,null,[(n(!0),i(x,null,b(u(o).selectedAssets,r=>(n(),i("div",ts,[s("div",es,[s("img",{src:r.img,class:"card-img-top"},null,8,os),s("div",as,[s("dl",ls,[cs,s("dd",ns,c(parseFloat(r.totalBonus).toFixed(2))+"%",1)])])])]))),256)),(n(!0),i(x,null,b(7-u(o).selectedAssets.length,r=>(n(),i("div",ds,rs))),256))],64))}},_s={class:"card text-white bg-dark h-100"},hs=s("div",{class:"card-header text-uppercase"},"Squad Bonuses",-1),ps={class:"card-body"},ms={class:"row mb-0"},xs={class:"col-8 small"},bs={key:0},ws={class:"fw-normal"},fs={class:"col-4 text-end small"},vs={class:"row mb-0"},$s={class:"col-8 small"},gs={key:0},ys={class:"fw-normal"},Bs={class:"col-4 text-end small"},ks={class:"row mb-0"},Ts=s("dt",{class:"col-8 small"},"Unite the 7 Bonus",-1),Ss={class:"col-4 text-end small"},Fs={class:"card-footer"},qs={class:"row mt-auto mb-0"},As=s("dt",{class:"col-8 small text-uppercase"},"Total Squad Bonus",-1),Cs={class:"col-4 text-end fw-bold small mb-0"},Vs={__name:"SquadStats",setup(t){const o=w(),_=a=>a.filter((r,h,e)=>e.indexOf(r)===h);return(a,r)=>(n(),i("div",_s,[hs,s("div",ps,[s("dl",ms,[s("dt",xs,[p("Factions Bonus "),u(o).stats.factions.length?(n(),i("ul",bs,[(n(!0),i(x,null,b(_(u(o).stats.factions),h=>(n(),i("li",ws,c(h)+" ("+c(u(o).stats.factions.filter(e=>e==h).length)+")",1))),256))])):v("",!0)]),s("dd",fs,c(parseFloat(u(o).stats.factionsBonus).toFixed(2))+"%",1)]),s("dl",vs,[s("dt",$s,[p("Weapons Bonus "),u(o).stats.weapons.length?(n(),i("ul",gs,[(n(!0),i(x,null,b(_(u(o).stats.weapons),h=>(n(),i("li",ys,c(h)+" ("+c(u(o).stats.weapons.filter(e=>e==h).length)+")",1))),256))])):v("",!0)]),s("dd",Bs,c(parseFloat(u(o).stats.weaponsBonus).toFixed(2))+"%",1)]),s("dl",ks,[Ts,s("dd",Ss,c(u(o).stats.uniteThe7Bonus)+"%",1)])]),s("div",Fs,[s("dl",qs,[As,s("dd",Cs,c(parseFloat(u(o).stats.totalBonus).toFixed(2))+"%",1)])])]))}},Is={class:"card text-white bg-dark h-100"},Us=s("div",{class:"card-header text-uppercase"},"Upgrade Chances",-1),Ms={class:"card-body"},Ns={class:"btn-group mb-4",role:"group"},Os=s("label",{class:"btn btn-outline-primary text-white border-2 px-4",for:"wasxType1"},"Iron WASX",-1),Ps=s("label",{class:"btn btn-outline-primary text-white border-2 px-4",for:"wasxType2"},"Gold WASX",-1),Es={class:"table-responsive"},Ws={class:"table table-sm table-dark table-striped table-hover table-borderless text-end"},Ls=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"align-top text-start"},"Tiers"),s("th",{scope:"col",class:"align-top text-white-50"},[p("Base "),s("br"),p("chances")]),s("th",{scope:"col",class:"align-top"},[p("With "),s("br"),p("bonus"),s("sup",null,"1")]),s("th",{scope:"col",class:"align-top"},[p("Pickaxes "),s("br"),p("per tier"),s("sup",null,"2")]),s("th",{scope:"col",class:"align-top"},[p("Pickaxes "),s("br"),p(" cumulative"),s("sup",null,"3")])])],-1),Rs={class:"table-group-divider"},js={scope:"row",class:"text-start"},Ds={class:"text-white-50"},Xs={class:"fw-bold"},zs={class:"fw-bold"},Gs={class:"fw-bold"},Ys=A('<p class="mb-0"><small class="text-muted">1. Base Chance x (100% + Bonus%) = Final Chance</small></p><p class="mb-0"><small class="text-muted">2. Estimated amout of pickaxes required to level up by 1 tier, based on base + bonus chances</small></p><p class="mb-0"><small class="text-muted">3. Estimated amout of pickaxes required to level up from Tier 0, based on base + bonus chances</small></p>',3),Hs={__name:"UpgradeTable",setup(t){const o=g(),_=w(),a=$("iron"),r=e=>parseFloat(e*(100+_.stats.totalBonus)/100).toFixed(2),h=(e,d)=>{let l=0;for(let m=e;m>=0;m--)l+=100/r(o.tiers[m][d]);return Math.ceil(l)};return(e,d)=>(n(),i("div",Is,[Us,s("div",Ms,[s("div",Ns,[y(s("input",{type:"radio",class:"btn-check",name:"wasxType",id:"wasxType1","onUpdate:modelValue":d[0]||(d[0]=l=>a.value=l),value:"iron"},null,512),[[B,a.value]]),Os,y(s("input",{type:"radio",class:"btn-check",name:"wasxType",id:"wasxType2","onUpdate:modelValue":d[1]||(d[1]=l=>a.value=l),value:"gold"},null,512),[[B,a.value]]),Ps]),s("div",Es,[s("table",Ws,[Ls,s("tbody",Rs,[(n(!0),i(x,null,b(u(o).tiers,(l,m)=>(n(),i("tr",null,[s("th",js,c(l.name),1),s("td",Ds,c(l[a.value+"Chance"].toFixed(2))+"%",1),s("td",Xs,c(r(l[a.value+"Chance"]))+"%",1),s("td",zs,c(Math.ceil(100/r(l[a.value+"Chance"]))),1),s("td",Gs,c(h(m,a.value+"Chance")),1)]))),256))])])]),Ys])]))}};const Js={class:"container-fluid px-3 px-md-5 my-4 my-md-5"},Ks={class:"row"},Qs={class:"col-12 col-lg-6 col-xl-4 p-2"},Zs={class:"col-12 col-lg-6 col-xl-8 p-2"},st={class:"container-fluid px-3 px-md-5 my-4 my-md-5"},tt={class:"badge bg-secondary small ms-2"},et={class:"row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-7"},ot={class:"container-fluid px-3 px-md-5 my-4 my-md-5"},at={class:"badge bg-secondary small ms-2"},lt={class:"row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-7"},it={__name:"TeamView",setup(t){const o=C();g();const _=V(),a=w();$("iron");const r=e=>{a.add(e)},h=e=>{a.remove(e)};return I(()=>{_.all.length<=0&&o.push("/")}),(e,d)=>(n(),i("main",null,[s("section",Js,[s("div",Ks,[s("div",Qs,[f(Vs)]),s("div",Zs,[f(Hs)])])]),s("section",st,[s("h2",null,[p("Selected squad "),s("span",tt,c(u(a).selectedAssets.length)+"/7",1)]),s("div",et,[f(us)])]),s("section",ot,[s("h2",null,[p("All assets "),s("span",at,c(u(_).all.length),1)]),s("div",lt,[(n(!0),i(x,null,b(u(_).all,l=>(n(),U(ss,{asset:l,disabled:u(a).selectedAssets.length>6&&u(a).selectedAssets.indexOf(l)===-1,onSelect:r,onUnselect:h},null,8,["asset","disabled"]))),256))])])]))}};export{it as default};
