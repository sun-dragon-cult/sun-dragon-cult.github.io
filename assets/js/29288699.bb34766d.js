"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[2961],{6985:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(5893),a=t(1151);const i={slug:"rqg-v3.1.0",title:"Release Notes RQG 3.1.0",tags:["rqg","release","changelog"]},r=void 0,o={permalink:"/release-notes/rqg-v3.1.0",source:"@site/releaseNotes/rqg/v3.1.x/2023-09-27-v3.1.0.md",title:"Release Notes RQG 3.1.0",description:"Supported Foundry Versions",date:"2023-09-27T00:00:00.000Z",formattedDate:"September 27, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:3.08,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.1.0",title:"Release Notes RQG 3.1.0",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"Release Notes RQG 3.1.1",permalink:"/release-notes/rqg-v3.1.1"},nextItem:{title:"Release Notes RQG 3.0.0",permalink:"/release-notes/rqg-v3.0.0"}},l={authorsImageUrls:[]},d=[{value:"Move system compendiums into a separate wiki module Issue #597 &amp; Issue #598",id:"move-system-compendiums-into-a-separate-wiki-module-issue-597--issue-598",level:2},{value:"Add SR buttons to actor sheet Issue #620",id:"add-sr-buttons-to-actor-sheet-issue-620",level:2},{value:"Reset Initiative removes duplicate combatants Issue #509",id:"reset-initiative-removes-duplicate-combatants-issue-509",level:2},{value:"Missile weapon SR buttons Issue #510 &amp; Issue #504",id:"missile-weapon-sr-buttons-issue-510--issue-504",level:2},{value:"Actor name extendedName field Issue #549",id:"actor-name-extendedname-field-issue-549",level:2},{value:"Integration with module Drag Ruler Issue #618",id:"integration-with-module-drag-ruler-issue-618",level:2},{value:"Smaller bug fixes, features and refactorings",id:"smaller-bug-fixes-features-and-refactorings",level:2}];function u(e){const s={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.1.0/system.json",alt:"Supported Foundry Versions"}),"\n",(0,n.jsx)(s.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.1.0/rqg.zip",alt:"Download Count"})]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["This release requires a separate wiki module to be installed and activated. Please look at the\n",(0,n.jsx)(s.a,{href:"/rqg-system/getting-started",children:"Installing"})," page for details."]})}),"\n",(0,n.jsxs)(s.h2,{id:"move-system-compendiums-into-a-separate-wiki-module-issue-597--issue-598",children:["Move system compendiums into a separate wiki module ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/597",children:"Issue #597"})," & ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/598",children:"Issue #598"})]}),"\n",(0,n.jsx)(s.p,{children:"Having the compendiums as a separate module, one per language, mean a lot less compendiums in the\nsystem in the future when we have multiple languages. It also simplifies the administration of what\nset of wiki you want since it will be handled by activating / deactivating modules instead of\nspecialised settings in the system. Having them as a separate module also simplifies releasing\nupdates since the module can be released independently of the system."}),"\n",(0,n.jsx)(s.p,{children:'The previous compendium packs were built for the previous Foundry database NeDB, but the new wiki\nmodule builds database files for the v11+ database "classic level" so Foundry does not need to\nconvert them at startup anymore.'}),"\n",(0,n.jsxs)(s.h2,{id:"add-sr-buttons-to-actor-sheet-issue-620",children:["Add SR buttons to actor sheet ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/620",children:"Issue #620"})]}),"\n",(0,n.jsx)(s.p,{children:"For linked actors that currently are in combat there is now a row of 12 SR buttons. Clicking one of\nthose will add a combatant to the current combat tracker at that SR, and clicking it again will\nremove it. There is also a \u24d8 icon with a tooltip that has a reminder about how many SR various\nactions take. The DEX SR and SIZ SR are visualised by background color as an aid when using this."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(3883).Z+"",width:"805",height:"444"})}),"\n",(0,n.jsxs)(s.h2,{id:"reset-initiative-removes-duplicate-combatants-issue-509",children:["Reset Initiative removes duplicate combatants ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/509",children:"Issue #509"})]}),"\n",(0,n.jsx)(s.p,{children:'The top of the combat tracker is updated so that the "Reset Initiative" \u21ba button clears all\nduplicate combatants and their SRs. The previous buttons "Roll All" & "Roll NPCs" are removed since\nthey make no sense for RQG.'}),"\n",(0,n.jsxs)(s.h2,{id:"missile-weapon-sr-buttons-issue-510--issue-504",children:["Missile weapon SR buttons ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/510",children:"Issue #510"})," & ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/504",children:"Issue #504"})]}),"\n",(0,n.jsx)(s.p,{children:"Missile weapons now have buttons for populating the combat tracker at the SRs they can shoot. For\nweapons with rate S/MR there are two buttons depending on if you start the round with a loaded arrow\nor not. The Range and Rate of missile weapons are now shown, both on the combat tab and on the gear\ntab."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(5564).Z+"",width:"475",height:"392"})}),"\n",(0,n.jsxs)(s.h2,{id:"actor-name-extendedname-field-issue-549",children:["Actor name extendedName field ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/549",children:"Issue #549"})]}),"\n",(0,n.jsx)(s.p,{children:'The actor name is now divided into the name field and an extendedName / epithet field. The intended\nuse is to keep the name short since that is what is displayed in sidebars, chat etc. The epithet\nfield could then be used for family names or descriptive addons like "son of Herila" or "the dragon\nslayer". As part of this change the layout of the header was also updated, and if the actorsheet\nwidth is reduced the image is hidden to conserve space.'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(7522).Z+"",width:"444",height:"184"})}),"\n",(0,n.jsxs)(s.h2,{id:"integration-with-module-drag-ruler-issue-618",children:["Integration with module Drag Ruler ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/618",children:"Issue #618"})]}),"\n",(0,n.jsxs)(s.p,{children:["If you have the module ",(0,n.jsx)(s.a,{href:"https://foundryvtt.com/packages/drag-ruler",children:"Drag Ruler"})," active then you will\nget feedback on how far you can move your token. By default the green color means you are within\nattack range, a yellow color means you can get there but cannot attack. Red color means you cannot\nget there."]}),"\n",(0,n.jsx)(s.p,{children:'There is also support for an optional rule that lets you sprint further than your MOV. See "Speed\nProvider" settings in the drag ruler module settings.'}),"\n",(0,n.jsx)(s.h2,{id:"smaller-bug-fixes-features-and-refactorings",children:"Smaller bug fixes, features and refactorings"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Actors now fall unconscious when they reach zero magic points\n",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/414",children:"Issue #414"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["CON 0 gives wrong Max ENC\n",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/610",children:"Issue #610"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Improve restart settings code\n",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/616",children:"Issue #616"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Improve Active Effect tab [by showing a link to the item an AE originates from\n",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/617",children:"Issue #617"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"add translations for sheet names (items, actor & rollTable)"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"fix error message for non integer ENC Factor values"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"make default item icon colors black in the settings dialog"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7522:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/epithet-dd16b76ac3400ed734bed0ad5370edbb.png"},5564:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/missile-sr-buttons-73d0cd5dc7208b5d71d5bd33831d4c09.png"},3883:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sr-buttons-afd031f6e7791c12d592515751e48200.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(7294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);