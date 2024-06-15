"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[9409],{8635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(5893),i=n(1151);const o={slug:"rqg-v3.0.0",title:"RQG 3.0.0",tags:["rqg","release","changelog"]},a=void 0,r={permalink:"/release-notes/rqg-v3.0.0",source:"@site/release-notes/rqg/v3.0.x/2023-08-08-v3.0.0.mdx",title:"RQG 3.0.0",description:"Supported Foundry Versions",date:"2023-08-08T00:00:00.000Z",tags:[{inline:!0,label:"rqg",permalink:"/release-notes/tags/rqg"},{inline:!0,label:"release",permalink:"/release-notes/tags/release"},{inline:!0,label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:3.15,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.0.0",title:"RQG 3.0.0",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"RQG 3.1.0",permalink:"/release-notes/rqg-v3.1.0"},nextItem:{title:"RQG 2.2.6",permalink:"/release-notes/rqg-v2.2.6"}},d={authorsImageUrls:[]},c=[{value:"New hit location view for humanoids and improved wounded indications",id:"new-hit-location-view-for-humanoids-and-improved-wounded-indications",level:2},{value:"System compendium packs are now organized into folders",id:"system-compendium-packs-are-now-organized-into-folders",level:2},{value:"Migrate Active Effects to foundry 11",id:"migrate-active-effects-to-foundry-11",level:2},{value:"BUG: Rune magic should not be accessible for cult laymembers",id:"bug-rune-magic-should-not-be-accessible-for-cult-laymembers",level:2},{value:"Improve UX of MOV and relocate the ENC display to the gear tab",id:"improve-ux-of-mov-and-relocate-the-enc-display-to-the-gear-tab",level:2},{value:"Make it easier to see if a skill can get experience or not",id:"make-it-easier-to-see-if-a-skill-can-get-experience-or-not",level:2},{value:"Show parent document name on itemSheets title",id:"show-parent-document-name-on-itemsheets-title",level:2},{value:"Show a warning if the hit locations don&#39;t add up",id:"show-a-warning-if-the-hit-locations-dont-add-up",level:2},{value:"Add tooltip to rqid window button",id:"add-tooltip-to-rqid-window-button",level:2},{value:"Various minor tweaks for Foundry v11",id:"various-minor-tweaks-for-foundry-v11",level:2}];function l(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{GithubIssue:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GithubIssue",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.0.0/system.json",alt:"Supported Foundry Versions"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.0.0/rqg.zip",alt:"Download Count"})]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This release drops support for Foundry 10 and introduces support for Foundry 11, so you need to\nupdate Foundry to v11 before you can update this system to v3.0.0"})}),"\n",(0,s.jsx)(t.h2,{id:"new-hit-location-view-for-humanoids-and-improved-wounded-indications",children:"New hit location view for humanoids and improved wounded indications"}),"\n",(0,s.jsx)(o,{issue:"290",repo:"fvtt-system-rqg"}),"\n",(0,s.jsxs)(t.p,{children:["For actors with humanoid hitlocations the display is now more graphical. For this to work the\nhitlocations need correct rqids, and that can be fixed with the supplied macro\n",(0,s.jsx)(t.code,{children:"RuneQuest Glorantha | en"}),"/",(0,s.jsx)(t.code,{children:"Macros & Rolltables"}),"/",(0,s.jsx)(t.code,{children:"Rqid Macros"}),' "Set Hit Location Rqids", that was\nadded in the last release.']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9765).Z+"",width:"534",height:"697"})}),"\n",(0,s.jsx)(t.h2,{id:"system-compendium-packs-are-now-organized-into-folders",children:"System compendium packs are now organized into folders"}),"\n",(0,s.jsx)(o,{issue:"578",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"The handling of compendiums in Foundry 11 is much improved and this release takes advantage of the\nnew abilities by organizing the supplied system compendium packs into folders."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9510).Z+"",width:"308",height:"667"})}),"\n",(0,s.jsx)(t.h2,{id:"migrate-active-effects-to-foundry-11",children:"Migrate Active Effects to foundry 11"}),"\n",(0,s.jsx)(o,{issue:"594",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(o,{issue:"602",repo:"fvtt-system-rqg"}),"\n",(0,s.jsxs)(t.p,{children:['Active Effects have changed in Foundry 11 and RQG now follows the new standard of not copying the\nactive effects from the items to the actor. Instead they remain on the items, and it is also\npossible to edit acive effects even on embedded items. The "hidden" AE debug tab that shows active\neffects that affect an actor has been updated to take this into consideration. Also the item sheets\nno longer hide the active effect tab on embedded items. Note: To see the active effect tab run\n',(0,s.jsx)(t.code,{children:"CONFIG.RQG.debug.showActorActiveEffectsTab=true"})," in the f12 browser console."]}),"\n",(0,s.jsx)(t.h2,{id:"bug-rune-magic-should-not-be-accessible-for-cult-laymembers",children:"BUG: Rune magic should not be accessible for cult laymembers"}),"\n",(0,s.jsx)(o,{issue:"593",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"If you are not initiated into a cult you should not have access to the cults common rune magic. If\nyou only have laymember status in a cult the rune magic table is now hidden."}),"\n",(0,s.jsx)(t.h2,{id:"improve-ux-of-mov-and-relocate-the-enc-display-to-the-gear-tab",children:"Improve UX of MOV and relocate the ENC display to the gear tab"}),"\n",(0,s.jsx)(o,{issue:"516",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"The MOV / ENC display in the actor sheet header has been too complicated. This tries to simplify it\nby concentrating on shoving MOV only there. The max / equipped % carried ENC is shown on the gear\ntab instead."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"GM view"})," ",(0,s.jsx)(t.img,{src:n(5344).Z+"",width:"404",height:"342"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Player view"})," ",(0,s.jsx)(t.img,{src:n(3853).Z+"",width:"356",height:"286"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"MOV tooltip"})," ",(0,s.jsx)(t.img,{src:n(5385).Z+"",width:"381",height:"327"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"ENC display"})," ",(0,s.jsx)(t.img,{src:n(6780).Z+"",width:"857",height:"531"})]}),"\n",(0,s.jsx)(t.h2,{id:"make-it-easier-to-see-if-a-skill-can-get-experience-or-not",children:"Make it easier to see if a skill can get experience or not"}),"\n",(0,s.jsx)(o,{issue:"476",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:'On the skill tab there is now a "pen" icon on the skills that can not be improved by experience, but\nhas to be studied to improve. This should make it more obvious why you don\'t get an "experience"\nglow on some skills.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9544).Z+"",width:"263",height:"248"})}),"\n",(0,s.jsx)(t.h2,{id:"show-parent-document-name-on-itemsheets-title",children:"Show parent document name on itemSheets title"}),"\n",(0,s.jsx)(t.p,{children:"To make it easier to know what item sheet you are looking at the actor name is now shown in the\ntitle."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9698).Z+"",width:"329",height:"179"})}),"\n",(0,s.jsx)(t.h2,{id:"show-a-warning-if-the-hit-locations-dont-add-up",children:"Show a warning if the hit locations don't add up"}),"\n",(0,s.jsx)(o,{issue:"499",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"If an actor has a set of hit locations that do not cover the full range of the d20 hit location die,\nor if there are hit locations that overlap there will now be a warning displayed to make it more\nobvious that the actor is not correctly set up."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(796).Z+"",width:"424",height:"351"})}),"\n",(0,s.jsx)(t.h2,{id:"add-tooltip-to-rqid-window-button",children:"Add tooltip to rqid window button"}),"\n",(0,s.jsx)(o,{issue:"455",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"The titlebar rqid icon is moved to the left side, next to the Foundry id icon. Also it is no longer\nnecessary to open the rqid window to see what rqid the document has, since that information is now\nshown as a tooltip."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7958).Z+"",width:"476",height:"250"})}),"\n",(0,s.jsx)(t.h2,{id:"various-minor-tweaks-for-foundry-v11",children:"Various minor tweaks for Foundry v11"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["fix: icon color in compendiums is wrong in v11 ",(0,s.jsx)(o,{issue:"585",repo:"fvtt-system-rqg"})]}),"\n",(0,s.jsxs)(t.li,{children:["fix: foundry v11 warns about Item translation ",(0,s.jsx)(o,{issue:"583",repo:"fvtt-system-rqg"})]}),"\n",(0,s.jsxs)(t.li,{children:["feat: use Foundry font definition for Norse font","\n",(0,s.jsx)(o,{issue:"595",repo:"fvtt-system-rqg"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9510:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/compendium-folders-e81e801c8768c996eb3f4f9625fa748c.png"},9698:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/embedded-item-title-6a02a4071c8e8db6018983cc389162c2.png"},6780:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/enc-gear-8d803feb26d659a03cf2b8345458fba8.png"},9765:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/hit-locations-wounded-556ad9957dfcc7bf076efeecf038e9f6.png"},796:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/hitlocation-warning-00569a355deb34628dd46fed1dcdd157.png"},5344:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mov-gm-aa297b448b831923462d11c0bb92e41a.png"},5385:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mov-pc-tooltip-96a5dd783bf4dcba53dcaa226ca57e10.png"},3853:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mov-pc-5b850240d235e501138a9ddb15bfaba5.png"},7958:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rqid-tooltip-c5e9cffeca57065a075b6abd4931ba24.png"},9544:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/skill-study-007a15aa057909e3a9214d12a6d60ce8.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);