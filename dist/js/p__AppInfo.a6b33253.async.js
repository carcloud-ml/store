(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4,6],{"0lfv":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n=()=>JSON.parse(localStorage.getItem("dataSource")||"{}"),r=(e,t)=>{var a=n(),r=Object.keys(a).find((t=>a[t].author===e))||"",c=a[r].apps||[];return c.find((e=>e.name===t))},c=e=>localStorage.setItem("dataSource",JSON.stringify(e))},Idy6:function(e,t,a){"use strict";a.r(t);a("QE6f");var n=a("Xo8F"),r=(a("tLCQ"),a("XYLF")),c=a("VTBJ"),l=(a("RFiq"),a("ZyfH")),o=(a("1Cgs"),a("zvbH")),i=(a("D2jH"),a("2ROE")),s=a("ODXe"),m=a("q1tI"),u=a.n(m),d=a("Ty5D"),p=a("9kvl"),g=a("bTu8"),E=a("Ap4+"),b=a("xqva"),f=a("Ndxo"),_=a("i7U8"),h=a("0lfv"),v=a("bIAK"),O=a("I5X1"),w=a("La0L"),y=a.n(w);a("J/SH");g["a"].use([E["a"]]);var j=()=>{var e=Object(d["l"])(),t=e.appId,a=e.author,g=Object(m["useState"])(!1),E=Object(s["a"])(g,2),w=E[0],j=E[1],x=Object(h["b"])(a,t),k=Object(O["a"])("initialiseModel",(e=>e)),I=k.isScriptable;return Object(m["useEffect"])((()=>{window.loadingEvent=new CustomEvent("setLoading",{detail:{setLoading:j}})}),[j,w]),u.a.createElement(u.a.Fragment,null,u.a.createElement(o["a"],{mode:"light",icon:u.a.createElement(i["a"],{type:"left"}),onLeftClick:()=>p["a"].goBack()}),u.a.createElement(l["a"],{toast:!0,text:"\u4e0b\u8f7d\u4e2d...",animating:w}),x?u.a.createElement("div",{className:y.a.container},u.a.createElement(r["a"],{full:!0},u.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u4fe1\u606f",extra:I?u.a.createElement(_["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png",onClick:()=>{var e=new CustomEvent("catalog-event",{detail:Object(c["a"])(Object(c["a"])({},x),{},{key:"downloadButtonClicked"})});window.dispatchEvent(e),console.log("\u89e6\u53d1\u4e0b\u8f7d\u529f\u80fd")}}):u.a.createElement("a",{href:x.scriptURL,download:"".concat(x.name,".js")},u.a.createElement(_["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png"}))}),u.a.createElement(r["a"].Body,{className:y.a.container_body},u.a.createElement(n["a"],{align:"start",justify:"start"},u.a.createElement("img",{className:y.a.appImg,src:x.thumb,alt:x.name}),u.a.createElement(n["a"].Item,null,u.a.createElement(n["a"],{direction:"column",align:"start"},u.a.createElement(n["a"],null,u.a.createElement("h3",{className:y.a.appTitle},x.title)),u.a.createElement(n["a"].Item,null,u.a.createElement("div",{className:y.a.appDesc},x.description))))))),x.html&&u.a.createElement(r["a"],{full:!0},u.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u63cf\u8ff0"}),u.a.createElement(r["a"].Body,null,u.a.createElement("div",{dangerouslySetInnerHTML:{__html:x.html.join("")}}))),x.images&&u.a.createElement("div",{className:y.a.photos},u.a.createElement(r["a"],{full:!0},u.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u76f8\u518c"}),u.a.createElement(r["a"].Body,null,u.a.createElement(b["a"],{scrollbar:{draggable:!0},spaceBetween:10,slidesPerView:1.2},x.images.map(((e,t)=>u.a.createElement(f["a"],{key:"img".concat(t)},u.a.createElement("img",{style:{maxWidth:"100%",width:"auto"},src:e,alt:""}))))))))):u.a.createElement(v["a"],null,"\u6ca1\u6709\u627e\u5230\u8be5\u7ec4\u4ef6"))};t["default"]=j},La0L:function(e,t,a){e.exports={container:"container___2dK_3",container_body:"container_body___1k27R",appImg:"appImg___1MXfc",appTitle:"appTitle___2Vrw4",appDesc:"appDesc___qLGi7"}},R0pf:function(e,t,a){e.exports={container:"container___3WbTd",widgetTitle:"widgetTitle___1Ojl9",icon:"icon___38pp4",subList:"subList___1NVQZ","row-dragging":"row-dragging___1TbdM",avatar:"avatar___2yRWX",user_info:"user_info___1pF6R",user_title:"user_title___3VZaa",user_text:"user_text___2-KJa",extra:"extra___1Pjch"}},i7U8:function(e,t,a){"use strict";a.r(t),a.d(t,"CustomerIcon",(function(){return L}));a("mw1O");var n=a("nJCp"),r=a("VTBJ"),c=(a("tLCQ"),a("XYLF")),l=a("o0o1"),o=a.n(l),i=a("HaE+"),s=(a("RFiq"),a("ZyfH")),m=a("ODXe"),u=(a("pYJI"),a("EIQY")),d=(a("QE6f"),a("Xo8F")),p=(a("B8GA"),a("8dL9")),g=a("wx14"),E=a("Ff2n"),b=(a("puyI"),a("xZH1")),f=a("q1tI"),_=a.n(f),h=a("wYyv"),v=a.n(h),O=a("YJCA"),w=a("R0pf"),y=a.n(w),j=a("0lfv"),x=(a("HVTF"),a("OT5E")),k=a("9kvl"),I=function(){var e=Object(i["a"])(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["c"])(t,{method:"get"});case 2:a=e.sent;try{a.scriptable?(n=JSON.parse(localStorage.getItem("dataSource")||"{}"),n[t]=a,localStorage.setItem("dataSource",JSON.stringify(n))):x["a"].fail("\u8ba2\u9605\u5730\u5740\u9519\u8bef")}catch(r){x["a"].fail(JSON.stringify(r))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=a("bIAK"),N=b["a"].prompt,L=Object(f["forwardRef"])(((e,t)=>{var a=e.icon,n=Object(E["a"])(e,["icon"]);return _.a.createElement("img",Object(g["a"])({ref:t,className:y.a.icon,alt:"",src:a},n))})),C=Object(O["c"])((e=>{var t=e.counts;return _.a.createElement(p["a"],{style:{userSelect:"none"},text:t,size:"small"})})),H=e=>{var t=e.dataSource,a=e.update,n=e.setLoading;return _.a.createElement(u["a"],{className:y.a.subList,autoClose:!0,right:[{text:"\u66f4\u65b0",onPress:()=>(n(!0),I(t.url).then((()=>{var e=Object(j["a"])();a(e)})).finally((()=>{n(!1)}))),style:{backgroundColor:"#77cad1",color:"white"}},{text:"\u5220\u9664",onPress:()=>{var e=Object(j["a"])();delete e[t.url],Object(j["c"])(e),a(e)},style:{backgroundColor:"red",color:"white"}}],style:{marginBottom:10,padding:"10px 0"}},_.a.createElement(d["a"],null,_.a.createElement("img",{className:y.a.avatar,alt:"",src:t.icon}),_.a.createElement("div",null,_.a.createElement(d["a"],{className:y.a.user_info,direction:"column",justify:"start"},_.a.createElement("div",{className:y.a.user_title},t.author," \u7ec4\u4ef6"),_.a.createElement("div",null,t.repo),_.a.createElement("div",{className:y.a.user_text},"@",t.author))),_.a.createElement(C,{counts:t.counts}),_.a.createElement("div",{style:{marginLeft:"auto"}},_.a.createElement("a",{href:t.repo,target:"_blank"},_.a.createElement(L,{icon:"https://img.icons8.com/clouds/344/github.png",style:{width:"3rem",height:"3rem"}})))))},T=Object(O["b"])((e=>_.a.createElement(H,e))),J=Object(O["a"])((e=>{var t=e.children;return _.a.createElement("div",null,t)}));t["default"]=()=>{var e=Object(j["a"])(),t=_.a.useState(e),a=Object(m["a"])(t,2),l=a[0],u=a[1],d=_.a.useState(!1),p=Object(m["a"])(d,2),g=p[0],E=p[1];return _.a.createElement(n["a"],{className:y.a.container},_.a.createElement(s["a"],{toast:!0,animating:g}),_.a.createElement(c["a"],null,_.a.createElement(c["a"].Header,{className:y.a.widgetTitle,title:"\u7ec4\u4ef6\u8ba2\u9605(".concat(Object.keys(l).length,")"),extra:_.a.createElement("div",{className:y.a.extra},_.a.createElement(L,{icon:"https://img.icons8.com/clouds/344/cloud-refresh.png",onClick:Object(i["a"])(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object.keys(l),E(!0),a=0,n=t;case 3:if(!(a<n.length)){e.next=10;break}return r=n[a],e.next=7,I(r);case 7:a++,e.next=3;break;case 10:u(Object(j["a"])()),E(!1);case 12:case"end":return e.stop()}}),e)})))}),_.a.createElement(L,{icon:"https://img.icons8.com/clouds/344/add.png",onClick:()=>N("\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740","",[{text:"\u53d6\u6d88"},{text:"\u786e\u5b9a",onPress:function(){var e=Object(i["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return E(!0),e.next=3,I(t);case 3:u(Object(j["a"])()),E(!1);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}])}))}),_.a.createElement(c["a"].Body,{style:{minHeight:100}},_.a.createElement(J,{useDragHandle:!0,helperClass:y.a["row-dragging"],onSortEnd:t=>{var a=t.oldIndex,n=t.newIndex,r=Object.keys(l),c=v()(r,a,n),o={};c.forEach((t=>{o[t]=e[t]})),Object(j["c"])(o),u(o)}},Object.keys(l).length?Object.keys(l).map(((e,t)=>{var a=l[e],n=Object(r["a"])(Object(r["a"])({},a),{},{counts:a.apps.length,url:e});return _.a.createElement(T,{key:e,index:t,dataSource:n,update:u,setLoading:E})})):_.a.createElement(S["a"],{style:{height:"5rem"}},"\u6682\u672a\u6dfb\u52a0\u76f8\u5173\u8ba2\u9605")))))}}}]);