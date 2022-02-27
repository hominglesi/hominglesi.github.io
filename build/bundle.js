var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const i=l(t,n,e,o);return t[0](i)}}function l(t,e,o,i){return t[1]&&i?n(o.ctx.slice(),t[1](i(e))):o.ctx}function c(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}function m(t,n,e,o,i,r){if(i){const a=l(n,e,o,r);t.p(a,i)}}function f(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function u(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let w;function j(t){w=t}const y=[],z=[],S=[],D=[],_=Promise.resolve();let M=!1;function L(t){S.push(t)}const O=new Set;let N=0;function C(){const t=w;do{for(;N<y.length;){const t=y[N];N++,j(t),F(t.$$)}for(j(null),y.length=0,N=0;z.length;)z.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];O.has(n)||(O.add(n),n())}S.length=0}while(y.length);for(;D.length;)D.pop()();M=!1,O.clear(),j(t)}function F(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const T=new Set;let P;function E(){P={r:0,c:[],p:P}}function H(){P.r||i(P.c),P=P.p}function A(t,n){t&&t.i&&(T.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),P.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function B(t){t&&t.c()}function G(t,n,o,a){const{fragment:s,on_mount:l,on_destroy:c,after_update:m}=t.$$;s&&s.m(n,o),a||L((()=>{const n=l.map(e).filter(r);c?c.push(...n):i(n),t.$$.on_mount=[]})),m.forEach(L)}function I(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function V(t,n){-1===t.$$.dirty[0]&&(y.push(t),M||(M=!0,_.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function W(n,e,r,a,s,l,c,m=[-1]){const f=w;j(n);const u=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:m,skip_bound:!1,root:e.target||f.$$.root};c&&c(u.root);let p=!1;if(u.ctx=r?r(n,e.props||{},((t,e,...o)=>{const i=o.length?o[0]:e;return u.ctx&&s(u.ctx[t],u.ctx[t]=i)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](i),p&&V(n,t)),e})):[],u.update(),p=!0,i(u.before_update),u.fragment=!!a&&a(u.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);u.fragment&&u.fragment.l(t),t.forEach(g)}else u.fragment&&u.fragment.c();e.intro&&A(n.$$.fragment),G(n,e.target,e.anchor,e.customElement),C()}j(f)}class J{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(t){let n,e;const o=t[10].default,i=s(o,t,t[9],null);return{c(){n=$("div"),i&&i.c(),k(n,"min-width",t[0]),k(n,"max-width",t[0]),k(n,"height",t[1]),k(n,"flex-direction",t[2]),k(n,"margin",t[3]),k(n,"flex-grow",t[4]),k(n,"align-items",t[5]),k(n,"background-color",t[6]),k(n,"padding",t[7]),k(n,"gap",t[8]),x(n,"class","svelte-15ghbln")},m(t,o){p(t,n,o),i&&i.m(n,null),e=!0},p(t,[r]){i&&i.p&&(!e||512&r)&&m(i,o,t,t[9],e?c(o,t[9],r,null):f(t[9]),null),(!e||1&r)&&k(n,"min-width",t[0]),(!e||1&r)&&k(n,"max-width",t[0]),(!e||2&r)&&k(n,"height",t[1]),(!e||4&r)&&k(n,"flex-direction",t[2]),(!e||8&r)&&k(n,"margin",t[3]),(!e||16&r)&&k(n,"flex-grow",t[4]),(!e||32&r)&&k(n,"align-items",t[5]),(!e||64&r)&&k(n,"background-color",t[6]),(!e||128&r)&&k(n,"padding",t[7]),(!e||256&r)&&k(n,"gap",t[8])},i(t){e||(A(i,t),e=!0)},o(t){Q(i,t),e=!1},d(t){t&&g(n),i&&i.d(t)}}}function U(t,n,e){let{$$slots:o={},$$scope:i}=n,{width:r="auto"}=n,{height:a="auto"}=n,{flexDirection:s="row"}=n,{margin:l="0"}=n,{flexGrow:c="0"}=n,{alignItems:m="auto"}=n,{backgroundColor:f=""}=n,{padding:u="0"}=n,{gap:p="0"}=n;return t.$$set=t=>{"width"in t&&e(0,r=t.width),"height"in t&&e(1,a=t.height),"flexDirection"in t&&e(2,s=t.flexDirection),"margin"in t&&e(3,l=t.margin),"flexGrow"in t&&e(4,c=t.flexGrow),"alignItems"in t&&e(5,m=t.alignItems),"backgroundColor"in t&&e(6,f=t.backgroundColor),"padding"in t&&e(7,u=t.padding),"gap"in t&&e(8,p=t.gap),"$$scope"in t&&e(9,i=t.$$scope)},[r,a,s,l,c,m,f,u,p,i,o]}class Y extends J{constructor(t){super(),W(this,t,U,K,a,{width:0,height:1,flexDirection:2,margin:3,flexGrow:4,alignItems:5,backgroundColor:6,padding:7,gap:8})}}function q(t){let n,e;const o=t[5].default,i=s(o,t,t[4],null);return{c(){n=$("nav"),i&&i.c(),x(n,"class","nav-container svelte-1uxc40l")},m(t,o){p(t,n,o),i&&i.m(n,null),e=!0},p(t,n){i&&i.p&&(!e||16&n)&&m(i,o,t,t[4],e?c(o,t[4],n,null):f(t[4]),null)},i(t){e||(A(i,t),e=!0)},o(t){Q(i,t),e=!1},d(t){t&&g(n),i&&i.d(t)}}}function X(t){let n,e,o,i,r,a,s=t[1]&&q(t);return{c(){n=$("div"),e=d(t[0]),o=h(),s&&s.c(),x(n,"class","nav-item svelte-1uxc40l")},m(l,c){p(l,n,c),u(n,e),u(n,o),s&&s.m(n,null),i=!0,r||(a=b(n,"click",t[2]),r=!0)},p(t,[o]){(!i||1&o)&&v(e,t[0]),t[1]?s?(s.p(t,o),2&o&&A(s,1)):(s=q(t),s.c(),A(s,1),s.m(n,null)):s&&(E(),Q(s,1,1,(()=>{s=null})),H())},i(t){i||(A(s),i=!0)},o(t){Q(s),i=!1},d(t){t&&g(n),s&&s.d(),r=!1,a()}}}function Z(t,n,e){let{$$slots:o={},$$scope:i}=n,{link:r}=n,{name:a}=n,{isDropDownList:s=!1}=n;return t.$$set=t=>{"link"in t&&e(3,r=t.link),"name"in t&&e(0,a=t.name),"isDropDownList"in t&&e(1,s=t.isDropDownList),"$$scope"in t&&e(4,i=t.$$scope)},[a,s,function(){0==s&&(window.location.href=r)},r,i,o]}class R extends J{constructor(t){super(),W(this,t,Z,X,a,{link:3,name:0,isDropDownList:1})}}function tt(n){let e,o,i,a;return{c(){e=$("div"),o=d(n[0]),x(e,"class","svelte-10mo09h")},m(t,s){p(t,e,s),u(e,o),i||(a=b(e,"click",(function(){r(window.location.href=n[1])&&(window.location.href=n[1]).apply(this,arguments)})),i=!0)},p(t,[e]){n=t,1&e&&v(o,n[0])},i:t,o:t,d(t){t&&g(e),i=!1,a()}}}function nt(t,n,e){let{text:o}=n,{link:i}=n;return t.$$set=t=>{"text"in t&&e(0,o=t.text),"link"in t&&e(1,i=t.link)},[o,i]}class et extends J{constructor(t){super(),W(this,t,nt,tt,a,{text:0,link:1})}}function ot(n){let e,o;return{c(){e=$("h1"),o=d(n[0]),k(e,"font-size",n[1]),k(e,"font-family",n[2]),k(e,"color",n[3]),k(e,"margin",n[4]),x(e,"class","svelte-b0rjgn")},m(t,n){p(t,e,n),u(e,o)},p(t,[n]){1&n&&v(o,t[0]),2&n&&k(e,"font-size",t[1]),4&n&&k(e,"font-family",t[2]),8&n&&k(e,"color",t[3]),16&n&&k(e,"margin",t[4])},i:t,o:t,d(t){t&&g(e)}}}function it(t,n,e){let{text:o="none"}=n,{fontSize:i="32px"}=n,{fontFamily:r="Ariel, Helvetica, sans-serif"}=n,{color:a="black"}=n,{margin:s="0"}=n;return t.$$set=t=>{"text"in t&&e(0,o=t.text),"fontSize"in t&&e(1,i=t.fontSize),"fontFamily"in t&&e(2,r=t.fontFamily),"color"in t&&e(3,a=t.color),"margin"in t&&e(4,s=t.margin)},[o,i,r,a,s]}class rt extends J{constructor(t){super(),W(this,t,it,ot,a,{text:0,fontSize:1,fontFamily:2,color:3,margin:4})}}var at=[],st=new Object;function lt(n){let e,o,i,r,a,s,l,c;return{c(){e=$("div"),o=$("h2"),i=d(n[0]),r=h(),a=$("h3"),s=d(n[1]),l=h(),c=$("p"),x(o,"class","svelte-n7dptf"),x(a,"class","svelte-n7dptf"),x(c,"class","blogPostContent")},m(t,m){p(t,e,m),u(e,o),u(o,i),u(e,r),u(e,a),u(a,s),u(e,l),u(e,c),c.innerHTML=n[2]},p(t,[n]){1&n&&v(i,t[0]),2&n&&v(s,t[1]),4&n&&(c.innerHTML=t[2])},i:t,o:t,d(t){t&&g(e)}}}function ct(t,n,e){let{title:o}=n,{date:i}=n,{content:r}=n;return t.$$set=t=>{"title"in t&&e(0,o=t.title),"date"in t&&e(1,i=t.date),"content"in t&&e(2,r=t.content)},[o,i,r]}st.title="Sajt je pomeren",st.date="14. 01. 2022.",st.content="<h1>fastmans2 je prebacen na hominglesi.github.io kao i suspicious dictionary.<br><br>\nKada sam pravio sve ove sajtove sam uvek morao da pravim i novi email i novi github za njih jer\njedan github account moze da ima samo jedan github page na kome se hostuje site.\nU tome svemu sam se izgubio koji gmail je za sta i pozaboravljao sam lozinke (zbog cega je i bio\nfastmans2 jer je prvi zaboravljen). Od sada ce svaki novi site biti ovde.<br><br>\nJos uvek ce se zvati fastmans dok ne promenim kako izgleda ovaj main page.</h1>",at.push(st),(st=new Object).title="Minesweeper Competition",st.date="2019.11.10",st.content='<h1> Takmicenje izmedju mene i skekule ko ce napraviti bolji minesweeper.<br><br>\nS obzirom da ja vise od godinu dana radim u javascriptu a on je tek poceo sa c# formama mislim da je ovo veoma fer i da niko nema prednost.<br><br>\nMoj sajt: <a href="https://hominglesi.github.io/p/mines/index.html">Mines</a><br>\nSkekulin program: <a href="https://drive.google.com/open?id=1mHjXaS01AVa2fSt7E4LN80pnTixPa93W">Google drive</a><br>\nVideo skekulinog programa: <a href="https://youtu.be/Nv2sIySHONQ">Youtube</a><br>\n</h1>',at.push(st),(st=new Object).title="New Stuff",st.date="2019.10.24",st.content="<h1> Toxic Man - 2019.10.22 - Linija na koju se mogu postavljati slike very cool.<br><br>\nList Man - 2019.10.24 - Tier liste. Napravio sam da je veoma lako ubaciti razliciti setovi slika sto je bilo isto very cool.<br><br>\nSada pise na vrhu fastmans2 very cool.<br><br>\nvery cool<br><br>\nps. mozda je vreme za treci redizajn???</h1>",at.push(st),(st=new Object).title="Fastmans2???",st.date="2019.10.7",st.content='<h1>Prvo sam napravio <a href="https://fastmans.github.io">fastmans.github.io</a>,\nali sam naravno zaboravio sifru. Onda sam napravio <a href="https://fastermans.github.io">fastermans.github.io</a>,\nali ovoga puta nisam zaboravio sifru, zaboravio sam lozinku.\nVreme je za fastmans2.<br><br>\nDodao sam dugme da bi se prebacivalo sa starog dizajna na novi.\nNe znam zasto ali moglo mi se.(Artwork je naravno iz painta).<br><br>\nBtw zelim da pitam sebe iz proslosti zasto sam mislio da bi\nbilo pametno napisati datum kao godina.mesec.dan?<br><br>\nKao poslednje i naj bitnije, napravio sam very cool pong.\nNije najbolji al sam ga napravio bolje nego sto sam ocekivao.</h1>',at.push(st),(st=new Object).title="Drugi redizajn",st.date="2018.10.18",st.content="<h1>Sve što za ovo mogu reći je da kada se prave klase za velike sajtove treba davati tim klasama normalna imena.</h1>",at.push(st),(st=new Object).title="p5.js Library",st.date="2018.10.14",st.content='<h1>Ubacio sam biblioteku koju sam koristio za JavaScript i otkrio sam drugi način da pustim zvuk preko jos jedne biblioteke koja se zove Howler.js:\n</h1>\n<a href="https://p5js.org/">p5.js</a>\n<br>\n<a href="https://github.com/goldfire/howler.js">Howler.js</a>',at.push(st),(st=new Object).title="Web Test",st.date="2018.10.13",st.content='<h1>Saznali smo za sajtove koji mogu biti veoma korisni pri pravljenju\nstranica i time sam ispravio "sve" greske koje sam imao. Ostaviću\nih ovde ako je neko zainteresovan da pogleda:</h1>\n\n<a href="https://validator.w3.org/">HTML validator</a>\n<br>\n<a href="http://csslint.net/">CSS checker</a>',at.push(st),(st=new Object).title='Pocetak "normalne" strane',st.date="2018.10.12",st.content="<h1>Napokon sam napravio nesto što nije max kancer.<br>Yay</h1>",at.push(st);class mt extends J{constructor(t){super(),W(this,t,ct,lt,a,{title:0,date:1,content:2})}}function ft(t,n,e){const o=t.slice();return o[0]=n[e],o}function ut(n){let e,o,i,r,a,s,l,c,m,f;return e=new R({props:{name:"Stari Sajt",link:"https://hominglesi.github.io/p/old/index.html"}}),i=new R({props:{name:"Web Dizajn",link:"https://hominglesi.github.io/p/web_dizajn/index.html"}}),a=new R({props:{name:"Hardver",link:"https://hominglesi.github.io/p/hardver/index.html"}}),l=new R({props:{name:"FastJam",link:"https://hominglesi.github.io/p/jam/index.html"}}),m=new R({props:{name:"Forest Shelter",link:"https://hominglesi.github.io/p/forest_shelter/index.html"}}),{c(){B(e.$$.fragment),o=h(),B(i.$$.fragment),r=h(),B(a.$$.fragment),s=h(),B(l.$$.fragment),c=h(),B(m.$$.fragment)},m(t,n){G(e,t,n),p(t,o,n),G(i,t,n),p(t,r,n),G(a,t,n),p(t,s,n),G(l,t,n),p(t,c,n),G(m,t,n),f=!0},p:t,i(t){f||(A(e.$$.fragment,t),A(i.$$.fragment,t),A(a.$$.fragment,t),A(l.$$.fragment,t),A(m.$$.fragment,t),f=!0)},o(t){Q(e.$$.fragment,t),Q(i.$$.fragment,t),Q(a.$$.fragment,t),Q(l.$$.fragment,t),Q(m.$$.fragment,t),f=!1},d(t){I(e,t),t&&g(o),I(i,t),t&&g(r),I(a,t),t&&g(s),I(l,t),t&&g(c),I(m,t)}}}function pt(t){let n,e;return n=new Y({props:{flexDirection:"column",$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){B(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},p(t,e){const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function gt(t){let n,e,o,i,r,a,s,l,c,m;return n=new R({props:{name:"Blog",link:"https://hominglesi.github.io/"}}),o=new R({props:{name:"Peh",link:"https://hominglesi.github.io/p/peh/index.html"}}),r=new R({props:{name:"Tesic site",link:"https://hominglesi.github.io/p/tesic/index.html"}}),s=new R({props:{name:"Zvuci",link:"https://hominglesi.github.io/p/zvuci/index.html"}}),c=new R({props:{name:"Arhivirano",isDropDownList:"true",$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){B(n.$$.fragment),e=h(),B(o.$$.fragment),i=h(),B(r.$$.fragment),a=h(),B(s.$$.fragment),l=h(),B(c.$$.fragment)},m(t,f){G(n,t,f),p(t,e,f),G(o,t,f),p(t,i,f),G(r,t,f),p(t,a,f),G(s,t,f),p(t,l,f),G(c,t,f),m=!0},p(t,n){const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),c.$set(e)},i(t){m||(A(n.$$.fragment,t),A(o.$$.fragment,t),A(r.$$.fragment,t),A(s.$$.fragment,t),A(c.$$.fragment,t),m=!0)},o(t){Q(n.$$.fragment,t),Q(o.$$.fragment,t),Q(r.$$.fragment,t),Q(s.$$.fragment,t),Q(c.$$.fragment,t),m=!1},d(t){I(n,t),t&&g(e),I(o,t),t&&g(i),I(r,t),t&&g(a),I(s,t),t&&g(l),I(c,t)}}}function $t(t){let e,o;const i=[t[0]];let r={};for(let t=0;t<i.length;t+=1)r=n(r,i[t]);return e=new mt({props:r}),{c(){B(e.$$.fragment)},m(t,n){G(e,t,n),o=!0},p(t,n){const o=0&n?function(t,n){const e={},o={},i={$$scope:1};let r=t.length;for(;r--;){const a=t[r],s=n[r];if(s){for(const t in a)t in s||(o[t]=1);for(const t in s)i[t]||(e[t]=s[t],i[t]=1);t[r]=s}else for(const t in a)i[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(i,[(r=t[0],"object"==typeof r&&null!==r?r:{})]):{};var r;e.$set(o)},i(t){o||(A(e.$$.fragment,t),o=!0)},o(t){Q(e.$$.fragment,t),o=!1},d(t){I(e,t)}}}function dt(t){let n,e,o,i;n=new rt({props:{text:"Blog",fontFamily:"Quantico",fontSize:"42px",margin:"0 0 16px 0"}});let r=at,a=[];for(let n=0;n<r.length;n+=1)a[n]=$t(ft(t,r,n));const s=t=>Q(a[t],1,1,(()=>{a[t]=null}));return{c(){B(n.$$.fragment),e=h();for(let t=0;t<a.length;t+=1)a[t].c();o=d("")},m(t,r){G(n,t,r),p(t,e,r);for(let n=0;n<a.length;n+=1)a[n].m(t,r);p(t,o,r),i=!0},p(t,n){if(0&n){let e;for(r=at,e=0;e<r.length;e+=1){const i=ft(t,r,e);a[e]?(a[e].p(i,n),A(a[e],1)):(a[e]=$t(i),a[e].c(),A(a[e],1),a[e].m(o.parentNode,o))}for(E(),e=r.length;e<a.length;e+=1)s(e);H()}},i(t){if(!i){A(n.$$.fragment,t);for(let t=0;t<r.length;t+=1)A(a[t]);i=!0}},o(t){Q(n.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)Q(a[t]);i=!1},d(t){I(n,t),t&&g(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(a,t),t&&g(o)}}}function ht(n){let e,o,i,r,a,s,l,c,m,f,u,$,d,b,x,v,k,w;return e=new et({props:{text:"Wordle Versus",link:"https://hominglesi.github.io/p/wordle/"}}),i=new et({props:{text:"Playlists",link:"https://hominglesi.github.io/p/playlists/index.html"}}),a=new et({props:{text:"Suspicious Dictionary",link:"https://hominglesi.github.io/p/dictionary/index.html"}}),l=new et({props:{text:"Bubble Clicker",link:"https://hominglesi.github.io/p/osu/index.html"}}),m=new et({props:{text:"Pong Man",link:"https://hominglesi.github.io/p/pong/index.html"}}),u=new et({props:{text:"Toxic Man",link:"https://hominglesi.github.io/p/toxic/index.html"}}),d=new et({props:{text:"List Man",link:"https://hominglesi.github.io/p/list/index.html"}}),x=new et({props:{text:"Mine Man",link:"https://hominglesi.github.io/p/mines/index.html"}}),k=new et({props:{text:"Kalendar",link:"https://hominglesi.github.io/p/kalendar/index.html"}}),{c(){B(e.$$.fragment),o=h(),B(i.$$.fragment),r=h(),B(a.$$.fragment),s=h(),B(l.$$.fragment),c=h(),B(m.$$.fragment),f=h(),B(u.$$.fragment),$=h(),B(d.$$.fragment),b=h(),B(x.$$.fragment),v=h(),B(k.$$.fragment)},m(t,n){G(e,t,n),p(t,o,n),G(i,t,n),p(t,r,n),G(a,t,n),p(t,s,n),G(l,t,n),p(t,c,n),G(m,t,n),p(t,f,n),G(u,t,n),p(t,$,n),G(d,t,n),p(t,b,n),G(x,t,n),p(t,v,n),G(k,t,n),w=!0},p:t,i(t){w||(A(e.$$.fragment,t),A(i.$$.fragment,t),A(a.$$.fragment,t),A(l.$$.fragment,t),A(m.$$.fragment,t),A(u.$$.fragment,t),A(d.$$.fragment,t),A(x.$$.fragment,t),A(k.$$.fragment,t),w=!0)},o(t){Q(e.$$.fragment,t),Q(i.$$.fragment,t),Q(a.$$.fragment,t),Q(l.$$.fragment,t),Q(m.$$.fragment,t),Q(u.$$.fragment,t),Q(d.$$.fragment,t),Q(x.$$.fragment,t),Q(k.$$.fragment,t),w=!1},d(t){I(e,t),t&&g(o),I(i,t),t&&g(r),I(a,t),t&&g(s),I(l,t),t&&g(c),I(m,t),t&&g(f),I(u,t),t&&g($),I(d,t),t&&g(b),I(x,t),t&&g(v),I(k,t)}}}function bt(t){let n,e,o,i;return n=new Y({props:{flexDirection:"column",flexGrow:"1",padding:"20px",$$slots:{default:[dt]},$$scope:{ctx:t}}}),o=new Y({props:{flexDirection:"column",width:"450px",alignItems:"center",gap:"8px",padding:"50px 0 0 0",$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){B(n.$$.fragment),e=h(),B(o.$$.fragment)},m(t,r){G(n,t,r),p(t,e,r),G(o,t,r),i=!0},p(t,e){const i={};8&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),o.$set(r)},i(t){i||(A(n.$$.fragment,t),A(o.$$.fragment,t),i=!0)},o(t){Q(n.$$.fragment,t),Q(o.$$.fragment,t),i=!1},d(t){I(n,t),t&&g(e),I(o,t)}}}function xt(t){let n,e,o,i,r,a,s,l,c,m,f;return e=new rt({props:{text:"Fast Mans",fontFamily:"Sofia",fontSize:"48px",margin:"32px 0 0 0"}}),i=new Y({props:{width:"1200px",height:"40px",margin:"0 auto",backgroundColor:"rgba(0,0,0,0.5)",$$slots:{default:[gt]},$$scope:{ctx:t}}}),a=new Y({props:{width:"1200px",margin:"0 auto",height:"10px"}}),l=new Y({props:{width:"1200px",margin:"0 auto 8px auto",backgroundColor:"rgba(0,0,0,0.6)",$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){n=$("main"),B(e.$$.fragment),o=h(),B(i.$$.fragment),r=h(),B(a.$$.fragment),s=h(),B(l.$$.fragment),c=h(),m=$("style"),m.textContent="@font-face {\r\n\t\tfont-family: \"Quantico\";\r\n\t\tsrc: url('build/fonts/Quantico.eot?#iefix') format('embedded-opentype'),\r\n\t\t\turl('build/fonts/Quantico.woff') format('woff'),\r\n\t\t\turl('build/fonts/Quantico.ttf')  format('truetype'),\r\n\t\t\turl('build/fonts/Quantico.svg#svgFontName') format('svg');\r\n\t\tfont-weight: normal;\r\n\t\tfont-style: normal;\r\n\t\t}\r\n\r\n\t\t@font-face {\r\n\t\t\tfont-family: \"Sofia\";\r\n\t\t\tsrc: url('build/fonts/Sofia.eot?#iefix') format('embedded-opentype'),\r\n\t\t\t\turl('build/fonts/Sofia.woff') format('woff'),\r\n\t\t\t\turl('build/fonts/Sofia.ttf')  format('truetype'),\r\n\t\t\t\turl('build/fonts/Sofia.svg#svgFontName') format('svg');\r\n\t\t\tfont-weight: normal;\r\n\t\t\tfont-style: normal;\r\n\t\t}\r\n\t\tbody{\r\n\t\t\tbackground: url(\"build/bg.jpg\") no-repeat center center fixed;;\r\n\t\t}\r\n\t",x(n,"class","svelte-1x2bzwb"),document.title="Fastmans"},m(t,g){p(t,n,g),G(e,n,null),u(n,o),G(i,n,null),u(n,r),G(a,n,null),u(n,s),G(l,n,null),p(t,c,g),u(document.head,m),f=!0},p(t,[n]){const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),i.$set(e);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){f||(A(e.$$.fragment,t),A(i.$$.fragment,t),A(a.$$.fragment,t),A(l.$$.fragment,t),f=!0)},o(t){Q(e.$$.fragment,t),Q(i.$$.fragment,t),Q(a.$$.fragment,t),Q(l.$$.fragment,t),f=!1},d(t){t&&g(n),I(e),I(i),I(a),I(l),t&&g(c),g(m)}}}function vt(t){return console.log(at),[]}return new class extends J{constructor(t){super(),W(this,t,vt,xt,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
