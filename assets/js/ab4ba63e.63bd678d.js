"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[1128],{2225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(5893),i=n(1151),a=n(8778),o=n(2161);const r={slug:"rqg-v3.4.0",title:"RQG 3.4.0",tags:["rqg","release","changelog"]},l=void 0,d={permalink:"/release-notes/rqg-v3.4.0",source:"@site/release-notes/rqg/v3.4.x/2023-12-07-v3.4.0.mdx",title:"RQG 3.4.0",description:"Supported Foundry Versions",date:"2023-12-07T00:00:00.000Z",formattedDate:"December 7, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:3.865,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.4.0",title:"RQG 3.4.0",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"Wiki 1.3.0",permalink:"/release-notes/wiki-v1.3.0"},nextItem:{title:"RQG 3.3.0",permalink:"/release-notes/rqg-v3.3.0"}},c={authorsImageUrls:[]},h=[{value:"Edit mode on actor sheets",id:"edit-mode-on-actor-sheets",level:2},{value:"Add gear items directly from actorSheet",id:"add-gear-items-directly-from-actorsheet",level:2},{value:"Loosen duplicate embedded item name check",id:"loosen-duplicate-embedded-item-name-check",level:2},{value:"Drag a weapon to a pack animal without adding the weapon skills",id:"drag-a-weapon-to-a-pack-animal-without-adding-the-weapon-skills",level:2},{value:"Background tab biography field should be player editable",id:"background-tab-biography-field-should-be-player-editable",level:2},{value:"Add hit location and rune dropdowns into RqidLink areas",id:"add-hit-location-and-rune-dropdowns-into-rqidlink-areas",level:2},{value:"Make Hero Points an opt-in setting",id:"make-hero-points-an-opt-in-setting",level:2},{value:"Make the characteristics ratings an opt-in setting",id:"make-the-characteristics-ratings-an-opt-in-setting",level:2},{value:"Other Bug Fixes &amp; Improvements",id:"other-bug-fixes--improvements",level:2}];function p(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{GithubIssue:r,ThemeInvert:l}=t;return r||u("GithubIssue",!0),l||u("ThemeInvert",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.4.0/system.json",alt:"Supported Foundry Versions"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.4.0/rqg.zip",alt:"Download Count"})]}),"\n",(0,s.jsx)(t.p,{children:"This released focuses on making the editability for players."}),"\n",(0,s.jsx)(t.h2,{id:"edit-mode-on-actor-sheets",children:"Edit mode on actor sheets"}),"\n",(0,s.jsx)(r,{issue:"639",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(r,{issue:"663",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(r,{issue:"667",repo:"fvtt-system-rqg"}),"\n",(0,s.jsxs)(t.p,{children:["There are now two modes on the actor sheet, ",(0,s.jsx)(l,{children:(0,s.jsx)(a.Z,{})})," ",(0,s.jsx)(t.strong,{children:"Edit Mode"}),"\nand ",(0,s.jsx)(l,{children:(0,s.jsx)(o.Z,{})})," ",(0,s.jsx)(t.strong,{children:"Play Mode"}),". You can switch between the modes by\nclicking on those icons in the actor sheet title bar."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"To be able to switch between the edit & play mode you need to be a trusted player or higher. Even\nnormal players can edit their values if their GM switches the mode for them, but they can not change\nmode themselves."})}),"\n",(0,s.jsx)(t.p,{children:'In edit mode it is possible to edit characteristics, rune, skill & passion values. The screenshot of\nthe skills tab, shows the gained chance input field. The percent chance shown to the right is the\n"normal" chance that includes both base chance and skill category bonus, as well as the gained\nchance.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1006).Z+"",width:"1980",height:"802"})}),"\n",(0,s.jsx)(t.p,{children:"To make it easy to see what mode the actor is in, a lot of accent colors are changed to green when\nit is in edit mode."}),"\n",(0,s.jsxs)(t.p,{children:["Play mode hides some things for the GM to make the actor sheet less cluttered. An example of this is\nthe ",(0,s.jsx)(t.code,{children:"Creature?"})," toggle that only is available in edit mode."]}),"\n",(0,s.jsx)(t.p,{children:"A new actor starts in edit mode, this means that after this upgrade all actors will be in edit mode.\nYou can easily fix that by clicking on the edit mode toggle, or you can run a script that will be\nsupplied separately."}),"\n",(0,s.jsx)(t.h2,{id:"add-gear-items-directly-from-actorsheet",children:"Add gear items directly from actorSheet"}),"\n",(0,s.jsx)(r,{issue:"671",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"It is now possible for players (and GMs) to add new gear (gear, currency & consumables) themselves\nby clicking on a + icon."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3655).Z+"",width:"863",height:"277"})}),"\n",(0,s.jsx)(t.h2,{id:"loosen-duplicate-embedded-item-name-check",children:"Loosen duplicate embedded item name check"}),"\n",(0,s.jsx)(r,{issue:"672",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"As a followup to being able to create new gear, it is now also possible to have duplicates.\nPreviously you could only have one gear, armor or weapon named the same, but now you can have as\nmany as you like."}),"\n",(0,s.jsx)(t.h2,{id:"drag-a-weapon-to-a-pack-animal-without-adding-the-weapon-skills",children:"Drag a weapon to a pack animal without adding the weapon skills"}),"\n",(0,s.jsx)(r,{issue:"450",repo:"fvtt-system-rqg"}),"\n",(0,s.jsxs)(t.p,{children:["If you drag a weapon to an actor the skills linked to that weapon will also be added so that the\nactor can use the weapon. This is good in most cases, but if you drag a spear to a horse it doesn't\nmake sense that the horse gets the skill to fight with that spear. This issue is solved by checking\nif the actor you drag the weapon to has arms (specifically a hitlocation with the rqid\n",(0,s.jsx)(t.code,{children:"i.hit-location.right-arm"}),") and if it doesn't it won't add the skills."]}),"\n",(0,s.jsx)(t.h2,{id:"background-tab-biography-field-should-be-player-editable",children:"Background tab biography field should be player editable"}),"\n",(0,s.jsx)(r,{issue:"670",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"Only the GM could edit the biography text field on the background tab of the actor sheet. Now\nplayers can do that too."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2827).Z+"",width:"904",height:"300"})}),"\n",(0,s.jsx)(t.h2,{id:"add-hit-location-and-rune-dropdowns-into-rqidlink-areas",children:"Add hit location and rune dropdowns into RqidLink areas"}),"\n",(0,s.jsx)(r,{issue:"656",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"In all places where you can set a link to a rune or hit-location there now is a dropdown that will\nadd a link. You can still drag-n-drop to the area but it is hopefully an easier way to adding these."}),"\n",(0,s.jsx)(t.p,{children:"The lists are populated by looking in compendiums for rqids of rune and hit locations, so if you\nwould like to add more runes / hit locations, you would need to create a compendium and assign a new\nrqid to them."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8731).Z+"",width:"470",height:"115"})}),"\n",(0,s.jsx)(t.h2,{id:"make-hero-points-an-opt-in-setting",children:"Make Hero Points an opt-in setting"}),"\n",(0,s.jsx)(r,{issue:"661",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"Hero points are not part of the standard rules but was still shown on the character sheet. You can\nnow decide if you want them or not with a setting."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"If you use the hero points you need to enable them in the settings after upgrading to this release."})}),"\n",(0,s.jsx)(t.h2,{id:"make-the-characteristics-ratings-an-opt-in-setting",children:"Make the characteristics ratings an opt-in setting"}),"\n",(0,s.jsx)(t.p,{children:"Each user (GM or player) can now decide if they want to see the rating of the characteristics value\nas a red / green bar under the value. The setting is per user, but realistically it's mostly for GMs\nto get a quick evaluation of NPCs."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4451).Z+"",width:"837",height:"193"})}),"\n",(0,s.jsx)(t.h2,{id:"other-bug-fixes--improvements",children:"Other Bug Fixes & Improvements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['Rqid editor "Get Document Like This" is not filled in properly',"\n",(0,s.jsx)(r,{issue:"665",repo:"fvtt-system-rqg"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Priests don't get the 20% bonus to their POW gain roll","\n",(0,s.jsx)(r,{issue:"649",repo:"fvtt-system-rqg"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Show an explanation in the Rune Magic tab why nothing is shown as lay member","\n",(0,s.jsx)(r,{issue:"668",repo:"fvtt-system-rqg"}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8778:(e,t,n)=>{n.d(t,{Z:()=>o});var s,i=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",height:16,width:20,viewBox:"0 0 640 512",fill:"#FFF","aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,s||(s=i.createElement("path",{d:"M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h293.1c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1h-91.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71L375.9 417z"})))}},2161:(e,t,n)=>{n.d(t,{Z:()=>o});var s,i=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",height:16,width:20,viewBox:"0 0 640 512",fill:"#FFF","aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,s||(s=i.createElement("path",{d:"M74.6 373.2c41.7 36.1 108 82.5 166.1 73.7 6.1-.9 12.1-2.5 18-4.5-9.2-12.3-17.3-24.4-24.2-35.4-21.9-35-28.8-75.2-25.9-113.6-20.6 4.1-39.2 13-54.7 25.4-6.5 5.2-16.3 1.3-14.8-7 6.4-33.5 33-60.9 68.2-66.3 2.6-.4 5.3-.7 7.9-.8l19.4-131.3c2-13.8 8-32.7 25-45.9 18.6-14.3 50.9-30.5 103.6-35.3l-2.4-2.1c-20.2-15.6-72.4-41.6-185.1-24.5S20.5 63 5.7 83.9C0 91.9-.8 102 .6 111.8l24.2 164.3c5.5 37.3 21.5 72.6 49.8 97.2zm87.7-219.6c4.4-3.1 10.8-2 11.8 3.3.1.5.2 1.1.3 1.6 3.2 21.8-11.6 42-33.1 45.3S99.8 192 96.6 170.3c-.1-.5-.1-1.1-.2-1.6-.6-5.4 5.2-8.4 10.3-6.7 9 3 18.8 3.9 28.7 2.4s19.1-5.3 26.8-10.8zM261.6 390c29.4 46.9 79.5 110.9 137.6 119.7s124.5-37.5 166.1-73.7c28.3-24.5 44.3-59.8 49.8-97.2l24.2-164.3c1.4-9.8.6-19.9-5.1-27.9-14.8-20.9-57.3-61.2-170-78.3s-164.8 8.9-185 24.5c-7.8 6-11.5 15.4-12.9 25.2l-24.2 164.3c-5.5 37.3-.4 75.8 19.6 107.7zm142.9-154.7c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7.1-.5.1-1.1.2-1.6 3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1.5-.2 1.1-.3 1.6-1 5.3-7.4 6.4-11.8 3.3zm136.2 15.5c-1 5.3-7.4 6.4-11.8 3.3-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7.1-.5.1-1.1.2-1.6 3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1.5-.2 1.1-.3 1.6zM530 350.2c-19.6 44.7-66.8 72.5-116.8 64.9s-87.1-48.2-93-96.7c-1-8.3 8.9-12.1 15.2-6.7 23.9 20.8 53.6 35.3 87 40.3s66.1.1 94.9-12.8c7.6-3.4 16 3.2 12.6 10.9z"})))}},3655:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/add-gear-a6424ec92d0e75c1702ec3ea0223ae85.png"},2827:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/biography-player-editable-0be6a38e77e871e4d7d34f89acdd0717.png"},4451:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/characteristic-rating-ba53455308019dfeb40e5948fb737d48.png"},1006:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/edit-mode-skills-d77e8e51f046c9fd4006c2386d12757a.png"},8731:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rune-hit-location-links-2f76e18fc93aad11afd9939fe7c22fee.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);