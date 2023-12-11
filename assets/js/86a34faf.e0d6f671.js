"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[8395],{3655:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=s(5893),i=s(1151);const o={slug:"rqg-v2.2.5",title:"Release Notes RQG 2.2.5",tags:["rqg","release","changelog"]},a=void 0,r={permalink:"/release-notes/rqg-v2.2.5",source:"@site/release-notes/rqg/v2.2.x/2023-07-14-v2.2.5.md",title:"Release Notes RQG 2.2.5",description:"Supported Foundry Versions",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:1.48,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v2.2.5",title:"Release Notes RQG 2.2.5",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"Release Notes RQG 2.2.6",permalink:"/release-notes/rqg-v2.2.6"},nextItem:{title:"Release Notes RQG 2.2.4",permalink:"/release-notes/rqg-v2.2.4"}},l={authorsImageUrls:[]},c=[{value:"Fixed bugs:",id:"fixed-bugs",level:2},{value:"Set Hit Location Rqids Macro",id:"set-hit-location-rqids-macro",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v2.2.5/system.json",alt:"Supported Foundry Versions"}),"\n",(0,n.jsx)(t.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v2.2.5/rqg.zip",alt:"Download Count"})]}),"\n",(0,n.jsx)(t.h2,{id:"fixed-bugs",children:"Fixed bugs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["add missing scorpion man hitlocation\nitems,\xa0",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/575",children:"#575"})]}),"\n",(0,n.jsxs)(t.li,{children:["migration is run for new\nworlds,\xa0",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/573",children:"#573"})]}),"\n",(0,n.jsxs)(t.li,{children:["replace the broken hitlocation rqid setter form with a macro,\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/576",children:"#576"})]}),"\n",(0,n.jsxs)(t.li,{children:["update compendium hit-location rqids to new standard form,\xa0part of\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/576",children:"#576"})]}),"\n",(0,n.jsxs)(t.li,{children:["skillSheet & HitLocationSheet is missing\nvalues,\xa0",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/572",children:"#572"})]}),"\n",(0,n.jsxs)(t.li,{children:["wrong rqid on i.skill.fists-fist in compendium,\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/574",children:"#574"})]}),"\n",(0,n.jsxs)(t.li,{children:["show a rqid form for rune items,\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/577",children:"#577"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"set-hit-location-rqids-macro",children:"Set Hit Location Rqids Macro"}),"\n",(0,n.jsxs)(t.p,{children:["There has been a design change in how the rqids for hit locations should be constructed. Now the\nsystem default syntax is for example ",(0,n.jsx)(t.code,{children:"i.hit-location.left-leg"}),' and there is a macro in the\ncompendium "Rqid Macros" called "Set Hit Location Rqids" that can set the correct rqid on all\nhit-locations (even on those that already has a rqid set).']}),"\n",(0,n.jsx)(t.p,{children:"This syntax is expected by the token effect for protection, so to make that work this macro needs to\nbe run, and at least the humanoid hitlocations needs to be updated."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(4746).Z+"",width:"735",height:"783"})}),"\n",(0,n.jsx)(t.p,{children:"This macro will list RQG hit location names and let you match them to the location names from the\nsystem settings by drag-n-drop. Yellow background means that the name does not exist as a setting.\nThat might be fine if you do not have any creatures that need that hit location. It could also be\nbecause you have translated the hit location to another language so that they don't match the\nEnglish names."}),"\n",(0,n.jsx)(t.p,{children:"Drag the names from the right setting table to the corresponding hit location. If you are missing a\nhit locations to drag from, just add them to the system hit location setting, and rerun this macro."}),"\n",(0,n.jsx)(t.p,{children:'When "Update" is clicked, all hit location items in compendiums, world and scenes will get the\nstandard Rqid for that hit location.'})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4746:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/hit-location-rqid-dialog-bf6cc35135961bd36288448599313474.jpg"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(7294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);