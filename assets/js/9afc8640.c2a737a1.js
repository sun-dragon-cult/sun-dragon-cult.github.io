"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[3060],{5079:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=s(5893),a=s(1151);const i={slug:"rqg-v3.1.0",title:"RQG 3.1.0",tags:["rqg","rqg-3","rqg-3-1"]},o=void 0,r={permalink:"/release-notes/rqg-v3.1.0",source:"@site/release-notes/rqg/v3.1.x/2023-09-27-v3.1.0.mdx",title:"RQG 3.1.0",description:"Supported Foundry Versions",date:"2023-09-27T00:00:00.000Z",tags:[{inline:!0,label:"rqg",permalink:"/release-notes/tags/rqg"},{inline:!0,label:"rqg-3",permalink:"/release-notes/tags/rqg-3"},{inline:!0,label:"rqg-3-1",permalink:"/release-notes/tags/rqg-3-1"}],readingTime:3.19,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.1.0",title:"RQG 3.1.0",tags:["rqg","rqg-3","rqg-3-1"]},unlisted:!1,prevItem:{title:"RQG 3.1.1",permalink:"/release-notes/rqg-v3.1.1"},nextItem:{title:"RQG 3.0.0",permalink:"/release-notes/rqg-v3.0.0"}},l={authorsImageUrls:[]},d=[{value:"Move system compendiums into a separate wiki module",id:"move-system-compendiums-into-a-separate-wiki-module",level:2},{value:"Add SR buttons to actor sheet",id:"add-sr-buttons-to-actor-sheet",level:2},{value:"Reset Initiative removes duplicate combatants",id:"reset-initiative-removes-duplicate-combatants",level:2},{value:"Missile weapon SR buttons",id:"missile-weapon-sr-buttons",level:2},{value:"Actor name extendedName field",id:"actor-name-extendedname-field",level:2},{value:"Integration with module Drag Ruler",id:"integration-with-module-drag-ruler",level:2},{value:"Smaller bug fixes, features and refactorings",id:"smaller-bug-fixes-features-and-refactorings",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{GithubIssue:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GithubIssue",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.1.0/system.json",alt:"Supported Foundry Versions"}),"\n",(0,n.jsx)(t.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.1.0/rqg.zip",alt:"Download Count"})]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This release requires a separate wiki module to be installed and activated. Please look at the\n",(0,n.jsx)(t.a,{href:"/rqg-system/getting-started",children:"Installing"})," page for details."]})}),"\n",(0,n.jsx)(t.h2,{id:"move-system-compendiums-into-a-separate-wiki-module",children:"Move system compendiums into a separate wiki module"}),"\n",(0,n.jsx)(i,{issue:"597",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(i,{issue:"598",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(t.p,{children:"Having the compendiums as a separate module, one per language, mean a lot less compendiums in the\nsystem in the future when we have multiple languages. It also simplifies the administration of what\nset of wiki you want since it will be handled by activating / deactivating modules instead of\nspecialised settings in the system. Having them as a separate module also simplifies releasing\nupdates since the module can be released independently of the system."}),"\n",(0,n.jsx)(t.p,{children:'The previous compendium packs were built for the previous Foundry database NeDB, but the new wiki\nmodule builds database files for the v11+ database "classic level" so Foundry does not need to\nconvert them at startup anymore.'}),"\n",(0,n.jsx)(t.h2,{id:"add-sr-buttons-to-actor-sheet",children:"Add SR buttons to actor sheet"}),"\n",(0,n.jsx)(i,{issue:"620",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(t.p,{children:"For linked actors that currently are in combat there is now a row of 12 SR buttons. Clicking one of\nthose will add a combatant to the current combat tracker at that SR, and clicking it again will\nremove it. There is also a \u24d8 icon with a tooltip that has a reminder about how many SR various\nactions take. The DEX SR and SIZ SR are visualised by background color as an aid when using this."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9336).Z+"",width:"805",height:"444"})}),"\n",(0,n.jsx)(t.h2,{id:"reset-initiative-removes-duplicate-combatants",children:"Reset Initiative removes duplicate combatants"}),"\n",(0,n.jsx)(i,{issue:"509",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(t.p,{children:'The top of the combat tracker is updated so that the "Reset Initiative" \u21ba button clears all\nduplicate combatants and their SRs. The previous buttons "Roll All" & "Roll NPCs" are removed since\nthey make no sense for RQG.'}),"\n",(0,n.jsx)(t.h2,{id:"missile-weapon-sr-buttons",children:"Missile weapon SR buttons"}),"\n",(0,n.jsx)(i,{issue:"510",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(i,{issue:"504",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(t.p,{children:"Missile weapons now have buttons for populating the combat tracker at the SRs they can shoot. For\nweapons with rate S/MR there are two buttons depending on if you start the round with a loaded arrow\nor not. The Range and Rate of missile weapons are now shown, both on the combat tab and on the gear\ntab."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9007).Z+"",width:"475",height:"392"})}),"\n",(0,n.jsx)(t.h2,{id:"actor-name-extendedname-field",children:"Actor name extendedName field"}),"\n",(0,n.jsx)(i,{issue:"549",repo:"fvtt-system-rqg"}),"\n",(0,n.jsx)(t.p,{children:'The actor name is now divided into the name field and an extendedName / epithet field. The intended\nuse is to keep the name short since that is what is displayed in sidebars, chat etc. The epithet\nfield could then be used for family names or descriptive addons like "son of Herila" or "the dragon\nslayer". As part of this change the layout of the header was also updated, and if the actorsheet\nwidth is reduced the image is hidden to conserve space.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1342).Z+"",width:"444",height:"184"})}),"\n",(0,n.jsx)(t.h2,{id:"integration-with-module-drag-ruler",children:"Integration with module Drag Ruler"}),"\n",(0,n.jsx)(i,{issue:"618",repo:"fvtt-system-rqg"}),"\n",(0,n.jsxs)(t.p,{children:["If you have the module ",(0,n.jsx)(t.a,{href:"https://foundryvtt.com/packages/drag-ruler",children:"Drag Ruler"})," active then you will\nget feedback on how far you can move your token. By default the green color means you are within\nattack range, a yellow color means you can get there but cannot attack. Red color means you cannot\nget there."]}),"\n",(0,n.jsx)(t.p,{children:'There is also support for an optional rule that lets you sprint further than your MOV. See "Speed\nProvider" settings in the drag ruler module settings.'}),"\n",(0,n.jsx)(t.h2,{id:"smaller-bug-fixes-features-and-refactorings",children:"Smaller bug fixes, features and refactorings"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Actors now fall unconscious when they reach zero magic points","\n",(0,n.jsx)(i,{issue:"414",repo:"fvtt-system-rqg"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["CON 0 gives wrong Max ENC ",(0,n.jsx)(i,{issue:"610",repo:"fvtt-system-rqg"})]}),"\n",(0,n.jsxs)(t.li,{children:["Improve restart settings code ",(0,n.jsx)(i,{issue:"616",repo:"fvtt-system-rqg"})]}),"\n",(0,n.jsxs)(t.li,{children:["Improve Active Effect tab by showing a link to the item an AE originates from","\n",(0,n.jsx)(i,{issue:"617",repo:"fvtt-system-rqg"}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"add translations for sheet names (items, actor & rollTable)"}),"\n",(0,n.jsx)(t.li,{children:"fix error message for non integer ENC Factor values"}),"\n",(0,n.jsx)(t.li,{children:"make default item icon colors black in the settings dialog"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1342:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/epithet-dd16b76ac3400ed734bed0ad5370edbb.png"},9007:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/missile-sr-buttons-73d0cd5dc7208b5d71d5bd33831d4c09.png"},9336:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sr-buttons-afd031f6e7791c12d592515751e48200.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(7294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);