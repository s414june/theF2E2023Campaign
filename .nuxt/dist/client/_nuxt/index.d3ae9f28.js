import{d as y,r as h,G as B,t as i,v as o,L as p,M as C,N as M,o as H,O as G,A as l,x as t,T as N,_ as w,B as x,y as r,C as L,D as I,z as a,P as m,Q as v,R as S}from"./entry.b0afeb85.js";const V=["canAnimate"],W=y({__name:"autoAnimate",props:{animateClass:String,animateStyle:String,canAnimate:Boolean},setup(e){const c=e,_=h(!1),g=h(null);return B(()=>c.canAnimate,u=>{u&&(_.value=!0)},{immediate:!0}),(u,f)=>(i(),o("div",{class:C(["auto-animate w-100 d-flex justify-content-center align-items-center",[{"is-animate":_.value},e.animateClass?e.animateClass:""]]),style:M(e.animateStyle),canAnimate:e.canAnimate,ref_key:"scrollAnimate",ref:g},[p(u.$slots,"default")],14,V))}});const P=y({__name:"scrollAnimate",props:{animateClass:String},setup(e){const c=h(!1),_=h(null),g=function(){if(!_.value||c.value)return;let u=_.value.offsetTop-window.innerHeight/2;window.scrollY>=u&&(c.value=!0,_.value.removeEventListener("scroll",g,!0))};return H(()=>{window.addEventListener("scroll",g)}),(u,f)=>(i(),G(N,null,{default:l(()=>[t("div",{class:C(["scroll-animate",[{"is-animate":c.value},e.animateClass?e.animateClass:""]]),ref_key:"scrollAnimate",ref:_},[p(u.$slots,"default")],2)]),_:3}))}});const T={},j={class:"card"},z={class:"row g-0"},D={class:"col-lg-8"},E={class:"card-body"},R={class:"col-lg-4"};function U(e,c){return i(),o("div",j,[t("div",z,[t("div",D,[t("div",E,[p(e.$slots,"body",{},void 0,!0)])]),t("div",R,[p(e.$slots,"image",{},void 0,!0)])])])}const q=w(T,[["render",U],["__scopeId","data-v-0941ffd4"]]),F=e=>(L("data-v-24bfa8e2"),e=e(),I(),e),O=F(()=>t("span",{class:"material-symbols-outlined"}," arrow_forward ",-1)),Q=y({__name:"buttomWithGoto",props:{text:String},setup(e){return(c,_)=>(i(),o("button",null,[x(r(e.text)+" ",1),O]))}});const Y=w(Q,[["__scopeId","data-v-24bfa8e2"]]);const J={},K={class:"card"},X={class:"card-body d-flex flex-column h-100"};function Z(e,c){return i(),o("div",K,[t("div",X,[p(e.$slots,"default",{},void 0,!0)])])}const tt=w(J,[["render",Z],["__scopeId","data-v-d031040e"]]),et=""+new URL("lead.6afb77a6.png",import.meta.url).href,st=""+new URL("donate.4dc5cbb2.png",import.meta.url).href,n=e=>(L("data-v-c4465bc4"),e=e(),I(),e),nt={id:"app",class:"mw-100"},at={class:"lead"},lt=n(()=>t("h1",{class:"slogan"},"台灣的明天 喵先鋪路",-1)),it=n(()=>t("section",{class:"info"},[t("button",null,"2024 立委參選人"),t("div",{class:"name has-bg"},[t("span",null,"3"),t("h1",null,"喵立翰 Miao Li-Han")])],-1)),ot=n(()=>t("div",{class:"lead-image"},[t("img",{src:et,alt:"喵立翰 Miao Li-Han 頭像"})],-1)),ct={class:"marquee"},_t=n(()=>t("span",null," 為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望 ",-1)),dt={class:"page bg-light claim",id:"claim"},ut=n(()=>t("h2",{class:"page-title"},"候選人主張",-1)),rt=n(()=>t("h3",null,[x(" 我堅信 ! 藉由推動更完善的"),t("span",null,"貓咪福利"),x("和相關政策，更是間接地投資於"),t("span",null,"台灣的未來"),x("。 ")],-1)),mt=n(()=>t("p",null," 畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。 ",-1)),ht=n(()=>t("div",{class:"claim-image"},null,-1)),gt={class:"page bg-white news",id:"news"},ft=n(()=>t("h2",{class:"page-title"},"最新活動",-1)),pt={class:"row"},vt={key:0,class:"col-12 col-lg-6 news-top"},xt=["src","alt"],yt={class:"time"},wt={class:"col-12 col-lg-6 news-list"},bt={key:0,class:"row"},At={class:"col-4"},$t=["src","alt"],St={class:"col-8"},Ct={class:"time"},Lt={class:"page bg-white issue",id:"issue"},It=n(()=>t("h2",{class:"page-title"},"政策議題",-1)),kt={class:"row"},Bt={class:"col-lg-4 col-sm-6 issue-list d-flex flex-column justify-content-between"},Mt=["src","alt"],Ht={class:"page bg-white donate-and-mail",id:"donate-and-mail"},Gt={class:"d-flex"},Nt=n(()=>t("h3",null,"小額支持喵喵",-1)),Vt=n(()=>t("p",null,"您的小筆捐款，是每隻毛孩未來的大大動力！",-1)),Wt={class:"d-flex flex-grow-1 align-items-end justify-content-between"},Pt=n(()=>t("img",{src:st,alt:"小額捐款"},null,-1)),Tt=n(()=>t("h3",null,"民眾服務信箱",-1)),jt=n(()=>t("p",null,"親愛的鄉親，每一位市民的意見都是我們社區前進的原動力",-1)),zt={class:"d-flex flex-grow-1 align-items-end"},Dt=n(()=>t("section",{class:"page d-flex flex-column align-items-center bg-white"},[t("h2",{class:"mb-2"},"台灣的明天 喵先鋪路"),t("div",{class:"name has-bg"},[t("span",null,"3"),t("h1",null,"喵立翰 Miao Li-Han")])],-1)),Et={class:"bg-light"},Rt={class:"row w-100"},Ut={class:"col-lg-6 col-12"},qt=n(()=>t("div",{class:"name"},[t("span",null,"3"),t("h1",null,"喵立翰 Miao Li-Han")],-1)),Ft={class:"d-flex social"},Ot=["href"],Qt=["src","alt","title"],Yt=n(()=>t("span",null,"© 2023 喵立翰 Miao Li-Han 版權所有",-1)),Jt=n(()=>t("div",{class:"col-lg-6 col-12"},[t("h4",null,"競選總部"),t("ul",null,[t("li",null,"辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓"),t("li",null,"電話：(02) 888-5678"),t("li",null,"電子郵件地址：meowoffice@linmeow.tw")])],-1)),Kt=y({__name:"index",props:{social:Array,canAnimate:Boolean},setup(e){const c=h([{title:"參與台北寵物論壇，爭取貓咪友善環境",time:"2023/12/26",desc:"炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",image:"/_nuxt/assets/images/news1.png"},{title:"掃街模式開啟！帶著你的貓耳，來和我一起走！",time:"2023/12/24",desc:"街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",image:"/_nuxt/assets/images/news2.png"},{title:"收容所模特兒大比拼！",time:"2023/12/20",desc:"今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",image:"/_nuxt/assets/images/news3.png"},{title:"參與台北寵物論壇，爭取貓咪友善環境",time:"2023/12/26",desc:"炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",image:"/_nuxt/assets/images/news1.png"}]),_=h([{title:"參與台北寵物論壇，爭取貓咪友善環境",image:"/_nuxt/assets/images/issue1.png"},{title:"打造休閒天堂！推廣寵物休閒與娛樂場所",image:"/_nuxt/assets/images/issue2.png"},{title:"推廣寵物飼養教育，讓愛更加專業",image:"/_nuxt/assets/images/issue3.png"}]);return(g,u)=>{const f=W,d=P,k=q,b=Y,$=tt;return i(),o("div",nt,[t("main",null,[t("div",null,[t("section",at,[a(f,{animateStyle:"transition-delay: 0.5s",canAnimate:e.canAnimate},{default:l(()=>[lt]),_:1},8,["canAnimate"]),a(f,{animateStyle:"transition-delay: 1s",canAnimate:e.canAnimate},{default:l(()=>[it]),_:1},8,["canAnimate"])]),a(f,{animateStyle:"transition-delay: 1.5s",canAnimate:e.canAnimate},{default:l(()=>[ot]),_:1},8,["canAnimate"])]),t("div",ct,[a(d,{animateClass:"right-to-left"},{default:l(()=>[_t]),_:1})])]),t("section",dt,[a(d,null,{default:l(()=>[a(k,null,{body:l(()=>[ut,rt,mt]),image:l(()=>[ht]),_:1})]),_:1})]),t("section",gt,[a(d,null,{default:l(()=>[ft]),_:1}),a(d,null,{default:l(()=>[t("div",pt,[(i(!0),o(m,null,v(c.value,(s,A)=>(i(),o(m,null,[A===0?(i(),o("div",vt,[t("img",{src:s.image,alt:s.title},null,8,xt),t("span",yt,r(s.time),1),t("h5",null,r(s.title),1),t("p",null,r(s.desc),1)])):S("",!0)],64))),256)),t("div",wt,[(i(!0),o(m,null,v(c.value,(s,A)=>(i(),o(m,null,[A>0?(i(),o("div",bt,[t("div",At,[t("img",{src:s.image,alt:s.title},null,8,$t)]),t("div",St,[t("span",Ct,r(s.time),1),t("h6",null,r(s.title),1),t("p",null,r(s.desc),1)])])):S("",!0)],64))),256)),a(b,{class:"more-btn",text:"查看更多"})])])]),_:1})]),t("section",Lt,[a(d,null,{default:l(()=>[It]),_:1}),a(d,null,{default:l(()=>[t("div",kt,[(i(!0),o(m,null,v(_.value,s=>(i(),o("div",Bt,[t("h4",null,r(s.title),1),t("img",{src:s.image,alt:s.title},null,8,Mt)]))),256))])]),_:1})]),t("section",Ht,[t("div",Gt,[a(d,null,{default:l(()=>[a($,{class:"bg-primary donate",id:"donate"},{default:l(()=>[Nt,Vt,t("div",Wt,[a(b,{text:"小額捐款"}),Pt])]),_:1})]),_:1}),a(d,null,{default:l(()=>[a($,{class:"bg-dark mail",id:"mail"},{default:l(()=>[Tt,jt,t("div",zt,[a(b,{text:"填寫表單"})])]),_:1})]),_:1})])]),a(d,null,{default:l(()=>[Dt]),_:1}),t("footer",Et,[t("div",Rt,[t("div",Ut,[qt,t("div",Ft,[(i(!0),o(m,null,v(e.social,s=>(i(),o("a",{href:s.href},[t("img",{src:s.src,alt:s.alt,title:s.title},null,8,Qt)],8,Ot))),256))]),Yt]),Jt])])])}}});const Zt=w(Kt,[["__scopeId","data-v-c4465bc4"]]);export{Zt as default};
