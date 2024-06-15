"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[7934],{4244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(5893),s=n(1151);const i={slug:"rqg-v3.3.0",title:"RQG 3.3.0",tags:["rqg","release","changelog"]},a=void 0,r={permalink:"/release-notes/rqg-v3.3.0",source:"@site/release-notes/rqg/v3.3.x/2023-11-17-v3.3.0.mdx",title:"RQG 3.3.0",description:"Supported Foundry Versions",date:"2023-11-17T00:00:00.000Z",tags:[{inline:!0,label:"rqg",permalink:"/release-notes/tags/rqg"},{inline:!0,label:"release",permalink:"/release-notes/tags/release"},{inline:!0,label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:2.58,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.3.0",title:"RQG 3.3.0",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"RQG 3.4.0",permalink:"/release-notes/rqg-v3.4.0"},nextItem:{title:"RQG 3.2.1",permalink:"/release-notes/rqg-v3.2.1"}},l={authorsImageUrls:[]},d=[{value:"Improve UX of missile weapons &amp; projectiles",id:"improve-ux-of-missile-weapons--projectiles",level:2},{value:"Use rqid for armor coverage and remove hit locations setting",id:"use-rqid-for-armor-coverage-and-remove-hit-locations-setting",level:2},{value:"Change the hit location &quot;Connected to&quot; field to use rqid instead",id:"change-the-hit-location-connected-to-field-to-use-rqid-instead",level:2},{value:"Bug Fixes &amp; Improvements",id:"bug-fixes--improvements",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{GithubIssue:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GithubIssue",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.3.0/system.json",alt:"Supported Foundry Versions"}),"\n",(0,o.jsx)(t.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.3.0/rqg.zip",alt:"Download Count"})]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["Make sure to update the wiki module to at least version 1.2.0 since this system version includes\nchanges to document types that needs to be reflected in these documents. Please look at the\n",(0,o.jsx)(t.a,{href:"/rqg-system/getting-started",children:"Installing"})," page for details about the wiki module."]})}),"\n",(0,o.jsx)(t.p,{children:"A focus of this release has been to remove the last hindrances to translate the system. Now hit\nlocation names are no longer used for identification so they can be translated without affecting\nfunctionality. There is most likely still rough edges when it comes to translations, but from this\nversion everything should be translatable."}),"\n",(0,o.jsx)(t.h2,{id:"improve-ux-of-missile-weapons--projectiles",children:"Improve UX of missile weapons & projectiles"}),"\n",(0,o.jsx)(i,{issue:"154",repo:"fvtt-system-rqg"}),"\n",(0,o.jsx)(i,{issue:"492",repo:"fvtt-system-rqg"}),"\n",(0,o.jsxs)(t.p,{children:["In previous versions only the GM could select what arrows a bow should use. With this update the\nplayers can do that themselves in the combat tab on the actor sheet. The quantity of projectiles and\nthrown weapons can now be edited directly in the combat tab as well. The input fields have a\nslightly brighter color than the rest of the sheet. And hopefully it should be easier to understand\nhow much ammo you have. Please note that only equipped ammo will be shown in the dropdown.\n",(0,o.jsx)(t.img,{src:n(1335).Z+"",width:"992",height:"604"})," ",(0,o.jsx)(t.img,{src:n(8643).Z+"",width:"1000",height:"558"})]}),"\n",(0,o.jsx)(t.h2,{id:"use-rqid-for-armor-coverage-and-remove-hit-locations-setting",children:"Use rqid for armor coverage and remove hit locations setting"}),"\n",(0,o.jsx)(i,{issue:"379",repo:"fvtt-system-rqg"}),"\n",(0,o.jsx)(i,{issue:"380",repo:"fvtt-system-rqg"}),"\n",(0,o.jsx)(t.p,{children:"The hitlocations were previously identified by name, and the available hitlocations were defined in\na setting. That setting is now removed and the compendiums in the world are now scanned by the\nsystem for hit location rqids. This is part of making hit locations translatable, but it also makes\nit more important that the hit locations actually have a proper rqid, since that is used to identify\nwhat an armor item protects."}),"\n",(0,o.jsxs)(t.p,{children:['You can either drag and drop a hit location item to the "Hit locations" area on the armor item or\nselect one in the dropdown to add it to the set of hit locations the armor item protects.\n',(0,o.jsx)(t.img,{src:n(6786).Z+"",width:"1002",height:"942"})," ",(0,o.jsx)(t.img,{src:n(6738).Z+"",width:"996",height:"956"})]}),"\n",(0,o.jsx)(t.h2,{id:"change-the-hit-location-connected-to-field-to-use-rqid-instead",children:'Change the hit location "Connected to" field to use rqid instead'}),"\n",(0,o.jsx)(i,{issue:"449",repo:"fvtt-system-rqg"}),"\n",(0,o.jsx)(t.p,{children:'To completely remove any use of hit location names for identification, the "Connected to" property\nnow also uses rqid. A hit location item "Connected to" setting is used in damage calculations. Hit\nlocations that have a "for damage calculations act as" set to "Limb" and also are "Connected to" a\nhit location that have "for damage calculations act as" set to "Abdomen" will become useless if the\nAbdomen hit location gets a hard blow.'}),"\n",(0,o.jsx)(t.p,{children:"Also since the rqid now is so important for hit location items it is shown among the other\nproperties (see screenshot). If you need to edit it, the normal fingerprint icon in the header will\nopen the rqid editor."}),"\n",(0,o.jsx)(t.p,{children:'The "Connected to" dropdown is populated by the hit locations in compendiums that have a hit\nlocation rqid.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(5606).Z+"",width:"906",height:"668"})}),"\n",(0,o.jsx)(t.h2,{id:"bug-fixes--improvements",children:"Bug Fixes & Improvements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"add headbutt & hit as combat maneuvers"}),"\n",(0,o.jsxs)(t.li,{children:["spirit Combat panel should not be visible without spirit combat skill","\n",(0,o.jsx)(i,{issue:"658",repo:"fvtt-system-rqg"}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8643:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ammo-dropdown-76dbe74a64b7212cc9e79b651945b72c.png"},6738:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/armor-dropdown-096e176bfbee8480bb2f5b324cf62950.png"},6786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/armor-sheet-380238d1369d99ed8201c8c16e23f692.png"},5606:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hit-location-connectedto-86ede83a58379122bf317b0a5eb40ffd.png"},1335:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/no-ammo-c9fd18c8071c0524646f3f1902c986fe.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);