"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[7913],{1752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(5893),o=n(1151);const i={slug:"rqg-v3.4.1",title:"RQG 3.4.1",tags:["rqg","release","changelog"]},r=void 0,a={permalink:"/release-notes/rqg-v3.4.1",source:"@site/release-notes/rqg/v3.4.x/2024-01-16-v3.4.1.mdx",title:"RQG 3.4.1",description:"Supported Foundry Versions",date:"2024-01-16T00:00:00.000Z",tags:[{inline:!0,label:"rqg",permalink:"/release-notes/tags/rqg"},{inline:!0,label:"release",permalink:"/release-notes/tags/release"},{inline:!0,label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:1.64,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.4.1",title:"RQG 3.4.1",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"RQG 3.4.2",permalink:"/release-notes/rqg-v3.4.2"},nextItem:{title:"Wiki 1.3.0",permalink:"/release-notes/wiki-v1.3.0"}},l={authorsImageUrls:[]},d=[{value:"Rename &quot;Command Cult Spirit (Elemental)&quot; to &quot;Command Cult spirit&quot;",id:"rename-command-cult-spirit-elemental-to-command-cult-spirit",level:2},{value:"Remove old migrations",id:"remove-old-migrations",level:2},{value:"Other Bug Fixes &amp; Improvements",id:"other-bug-fixes--improvements",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{GithubIssue:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GithubIssue",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.4.1/system.json",alt:"Supported Foundry Versions"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.4.1/rqg.zip",alt:"Download Count"})]}),"\n",(0,s.jsxs)(t.p,{children:["This released is a smaller update, mainly to match the wiki release\n",(0,s.jsx)(t.a,{href:"/release-notes/wiki-v1.3.0",children:"1.3.0"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"rename-command-cult-spirit-elemental-to-command-cult-spirit",children:'Rename "Command Cult Spirit (Elemental)" to "Command Cult spirit"'}),"\n",(0,s.jsx)(n,{issue:"682",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(n,{issue:"17",repo:"fvtt-module-wiki-rqg"}),"\n",(0,s.jsxs)(t.p,{children:["The common rune magic spell ",(0,s.jsx)(t.code,{children:"Command Cult Spirit"})," was named ",(0,s.jsx)(t.code,{children:"Command Cult Spirit (Elemental)"})," so\nthat has been changed, and the rqid for it that was changed to ",(0,s.jsx)(t.code,{children:"i.rune-magic.command-cult-spirit"}),"\nfrom ",(0,s.jsx)(t.code,{children:"i.rune-magic.command-cult-spirit-elemental"})," along with the journal entry description rqid that\nis now ",(0,s.jsx)(t.code,{children:"je..command-cult-spirit"}),". This is a common rune magic that is added to most cults, so to not\nbreak any existing links there is a migration that updates these names and rqids (for English only)."]}),"\n",(0,s.jsxs)(t.p,{children:["The wiki version ",(0,s.jsx)(t.a,{href:"/release-notes/wiki-v1.3.0",children:"1.3.0"})," has the corresponding change."]}),"\n",(0,s.jsx)(t.h2,{id:"remove-old-migrations",children:"Remove old migrations"}),"\n",(0,s.jsx)(n,{issue:"685",repo:"fvtt-system-rqg"}),"\n",(0,s.jsx)(t.p,{children:"A lot of old migrations have been removed, partly because they no longer should be necessary, and\npartly because the code in them was not going to work in Foundry v12 that deprecates a lot of old\nstyle code."}),"\n",(0,s.jsx)(t.p,{children:"The removal of migrateWeaponItemDamageBonus will make sure any weapon damage bonus definitions are\nnot overwritten when updating the system. Previously a system update would enforce melee weapons to\nget damage bonus, missile weapons to remove any damage bonus and thrown weapons to get half db. Now\nthe update will leave the weapons as they are defined."}),"\n",(0,s.jsx)(t.p,{children:"Of the system provided macros, only the assign rqid to journals macro is left.\nassign-rqid-to-hit-locations does not work after hit location setting was removed, and\nmigrate-old-journal-links should not be necessary anymore."}),"\n",(0,s.jsx)(t.h2,{id:"other-bug-fixes--improvements",children:"Other Bug Fixes & Improvements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Update the wiki installation documentation link to the new documentation site:\n",(0,s.jsx)(t.a,{href:"https://sun-dragon-cult.github.io/rqg-system/getting-started",children:"Getting Started"})]}),"\n",(0,s.jsxs)(t.li,{children:["Rename default armor material names to make them consistent","\n",(0,s.jsx)(n,{issue:"679",repo:"fvtt-system-rqg"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:['Rune types ("element", "power", ...) are should be in lower case to match wiki runes',"\n",(0,s.jsx)(n,{issue:"680",repo:"fvtt-system-rqg"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Update documentation ",(0,s.jsx)(n,{issue:"62",repo:"fvtt-system-rqg"})]}),"\n",(0,s.jsxs)(t.li,{children:["Fix usage of deprecated code in preparation for Foundry v12","\n",(0,s.jsx)(n,{issue:"686",repo:"fvtt-system-rqg"}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);