"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[9874],{5507:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=s(5893),i=s(1151);const o={slug:"rqg-v3.0.0",title:"Release Notes RQG 3.0.0",tags:["rqg","release","changelog"]},a=void 0,r={permalink:"/release-notes/rqg-v3.0.0",source:"@site/releaseNotes/rqg/v3.0.x/2023-08-08-v3.0.0.md",title:"Release Notes RQG 3.0.0",description:"This release drops support for Foundry 10 and introduces support for Foundry 11 so you need to",date:"2023-08-08T00:00:00.000Z",formattedDate:"August 8, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:3.005,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.0.0",title:"Release Notes RQG 3.0.0",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"Release Notes RQG 3.1.0",permalink:"/release-notes/rqg-v3.1.0"},nextItem:{title:"Release Notes RQG 2.2.6",permalink:"/release-notes/rqg-v2.2.6"}},d={authorsImageUrls:[]},c=[{value:"New hit location view for humanoids and improved wounded indications Issue #290",id:"new-hit-location-view-for-humanoids-and-improved-wounded-indications-issue-290",level:2},{value:"System compendium packs are now organized into folders Issue #578",id:"system-compendium-packs-are-now-organized-into-folders-issue-578",level:2},{value:"Migrate Active Effects to foundry 11 Issue #594 &amp; #602",id:"migrate-active-effects-to-foundry-11-issue-594--602",level:2},{value:"BUG: Rune magic should not be accessible for cult laymembers Issue #593",id:"bug-rune-magic-should-not-be-accessible-for-cult-laymembers-issue-593",level:2},{value:"Improve UX of MOV and relocate the ENC display to the gear tab Issue #516",id:"improve-ux-of-mov-and-relocate-the-enc-display-to-the-gear-tab-issue-516",level:2},{value:"Make it easier to see if a skill can get experience or not Issue #476",id:"make-it-easier-to-see-if-a-skill-can-get-experience-or-not-issue-476",level:2},{value:"Show parent document name on itemSheets title",id:"show-parent-document-name-on-itemsheets-title",level:2},{value:"Show a warning if the hit locations don&#39;t add up Issue #499",id:"show-a-warning-if-the-hit-locations-dont-add-up-issue-499",level:2},{value:"Add tooltip to rqid window button Issue #455",id:"add-tooltip-to-rqid-window-button-issue-455",level:2},{value:"Various minor tweaks for Foundry v11",id:"various-minor-tweaks-for-foundry-v11",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"This release drops support for Foundry 10 and introduces support for Foundry 11 so you need to\nupdate Foundry to v11 before you can update this system to v3.0.0"})}),"\n",(0,n.jsxs)(t.h2,{id:"new-hit-location-view-for-humanoids-and-improved-wounded-indications-issue-290",children:["New hit location view for humanoids and improved wounded indications ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/290",children:"Issue #290"})]}),"\n",(0,n.jsxs)(t.p,{children:["For actors with humanoid hitlocations the display is now more graphical. For this to work the\nhitlocations need correct rqids, and that can be fixed with the supplied macro\n",(0,n.jsx)(t.code,{children:"RuneQuest Glorantha | en"}),"/",(0,n.jsx)(t.code,{children:"Macros & Rolltables"}),"/",(0,n.jsx)(t.code,{children:"Rqid Macros"}),' "Set Hit Location Rqids", that was\nadded in the last release.']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(5907).Z+"",width:"534",height:"697"})}),"\n",(0,n.jsxs)(t.h2,{id:"system-compendium-packs-are-now-organized-into-folders-issue-578",children:["System compendium packs are now organized into folders ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/578",children:"Issue #578"})]}),"\n",(0,n.jsx)(t.p,{children:"The handling of compendiums in Foundry 11 is much improved and this release takes advantage of the\nnew abilities by organizing the supplied system compendium packs into folders."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(5615).Z+"",width:"308",height:"667"})}),"\n",(0,n.jsxs)(t.h2,{id:"migrate-active-effects-to-foundry-11-issue-594--602",children:["Migrate Active Effects to foundry 11 ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/594",children:"Issue #594"})," & ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/602",children:"#602"})]}),"\n",(0,n.jsxs)(t.p,{children:['Active Effects have changed in Foundry 11 and RQG now follows the new standard of not copying the\nactive effects from the items to the actor. Instead they remain on the items, and it is also\npossible to edit acive effects even on embedded items. The "hidden" AE debug tab that shows active\neffects that affect an actor has been updated to take this into consideration. Also the item sheets\nno longer hide the active effect tab on embedded items. Note: To see the active effect tab run\n',(0,n.jsx)(t.code,{children:"CONFIG.RQG.debug.showActorActiveEffectsTab=true"})," in the f12 browser console."]}),"\n",(0,n.jsxs)(t.h2,{id:"bug-rune-magic-should-not-be-accessible-for-cult-laymembers-issue-593",children:["BUG: Rune magic should not be accessible for cult laymembers ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/593",children:"Issue #593"})]}),"\n",(0,n.jsx)(t.p,{children:"If you are not initiated into a cult you should not have access to the cults common rune magic. If\nyou only have laymember status in a cult the rune magic table is now hidden."}),"\n",(0,n.jsxs)(t.h2,{id:"improve-ux-of-mov-and-relocate-the-enc-display-to-the-gear-tab-issue-516",children:["Improve UX of MOV and relocate the ENC display to the gear tab ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/516",children:"Issue #516"})]}),"\n",(0,n.jsx)(t.p,{children:"The MOV / ENC display in the actor sheet header has been too complicated. This tries to simplify it\nby concentrating on shoving MOV only there. The max / equipped % carried ENC is shown on the gear\ntab instead."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"GM view"})," ",(0,n.jsx)(t.img,{src:s(7099).Z+"",width:"404",height:"342"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Player view"})," ",(0,n.jsx)(t.img,{src:s(6841).Z+"",width:"356",height:"286"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"MOV tooltip"})," ",(0,n.jsx)(t.img,{src:s(7575).Z+"",width:"381",height:"327"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"ENC display"})," ",(0,n.jsx)(t.img,{src:s(8259).Z+"",width:"857",height:"531"})]}),"\n",(0,n.jsxs)(t.h2,{id:"make-it-easier-to-see-if-a-skill-can-get-experience-or-not-issue-476",children:["Make it easier to see if a skill can get experience or not ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/476",children:"Issue #476"})]}),"\n",(0,n.jsx)(t.p,{children:'On the skill tab there is now a "pen" icon on the skills that can not be improved by experience, but\nhas to be studied to improve. This should make it more obvious why you don\'t get an "experience"\nglow on some skills.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(5035).Z+"",width:"263",height:"248"})}),"\n",(0,n.jsx)(t.h2,{id:"show-parent-document-name-on-itemsheets-title",children:"Show parent document name on itemSheets title"}),"\n",(0,n.jsx)(t.p,{children:"To make it easier to know what item sheet you are looking at the actor name is now shown in the\ntitle."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9257).Z+"",width:"329",height:"179"})}),"\n",(0,n.jsxs)(t.h2,{id:"show-a-warning-if-the-hit-locations-dont-add-up-issue-499",children:["Show a warning if the hit locations don't add up ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/499",children:"Issue #499"})]}),"\n",(0,n.jsx)(t.p,{children:"If an actor has a set of hit locations that do not cover the full range of the d20 hit location die,\nor if there are hit locations that overlap there will now be a warning displayed to make it more\nobvious that the actor is not correctly set up."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(3028).Z+"",width:"424",height:"351"})}),"\n",(0,n.jsxs)(t.h2,{id:"add-tooltip-to-rqid-window-button-issue-455",children:["Add tooltip to rqid window button ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/455",children:"Issue #455"})]}),"\n",(0,n.jsx)(t.p,{children:"The titlebar rqid icon is moved to the left side, next to the Foundry id icon. Also it is no longer\nnecessary to open the rqid window to see what rqid the document has, since that information is now\nshown as a tooltip."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(3171).Z+"",width:"476",height:"250"})}),"\n",(0,n.jsx)(t.h2,{id:"various-minor-tweaks-for-foundry-v11",children:"Various minor tweaks for Foundry v11"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["fix: icon color in compendiums is wrong in v11\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/585",children:"Issue #585"})]}),"\n",(0,n.jsxs)(t.li,{children:["fix: foundry v11 warns about Item translation\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/583",children:"Issue #583"})]}),"\n",(0,n.jsxs)(t.li,{children:["feat: use Foundry font definition for Norse font\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/595",children:"Issue #595"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5615:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/compendium-folders-e81e801c8768c996eb3f4f9625fa748c.png"},9257:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/embedded-item-title-6a02a4071c8e8db6018983cc389162c2.png"},8259:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/enc-gear-8d803feb26d659a03cf2b8345458fba8.png"},5907:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/hit-locations-wounded-556ad9957dfcc7bf076efeecf038e9f6.png"},3028:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/hitlocation-warning-00569a355deb34628dd46fed1dcdd157.png"},7099:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/mov-gm-aa297b448b831923462d11c0bb92e41a.png"},7575:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/mov-pc-tooltip-96a5dd783bf4dcba53dcaa226ca57e10.png"},6841:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/mov-pc-5b850240d235e501138a9ddb15bfaba5.png"},3171:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/rqid-tooltip-c5e9cffeca57065a075b6abd4931ba24.png"},5035:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/skill-study-007a15aa057909e3a9214d12a6d60ce8.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(7294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);