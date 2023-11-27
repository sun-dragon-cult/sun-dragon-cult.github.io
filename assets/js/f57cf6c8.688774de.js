"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[9223],{2917:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(5893),o=s(1151);const i={slug:"rqg-v3.3.0",title:"Release Notes RQG 3.3.0",tags:["rqg","release","changelog"]},a=void 0,r={permalink:"/release-notes/rqg-v3.3.0",source:"@site/releaseNotes/rqg/v3.3.x/2023-11-17-v3.3.0.md",title:"Release Notes RQG 3.3.0",description:"Make sure to update the wiki module to at least version 1.2.0 since this system version includes",date:"2023-11-17T00:00:00.000Z",formattedDate:"November 17, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:2.525,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.3.0",title:"Release Notes RQG 3.3.0",tags:["rqg","release","changelog"]},unlisted:!1,nextItem:{title:"Release Notes RQG 3.2.1",permalink:"/release-notes/rqg-v3.2.1"}},l={authorsImageUrls:[]},h=[{value:"Improve UX of missile weapons &amp; projectiles \u2013 Issue #154 &amp; Issue #492",id:"improve-ux-of-missile-weapons--projectiles--issue-154--issue-492",level:2},{value:"Use rqid for armor coverage and remove hit locations setting \u2013 Issue #379 &amp; Issue #380",id:"use-rqid-for-armor-coverage-and-remove-hit-locations-setting--issue-379--issue-380",level:2},{value:"Change the hit location &quot;Connected to&quot; field to use rqid instead \u2013 Issue #449",id:"change-the-hit-location-connected-to-field-to-use-rqid-instead--issue-449",level:2},{value:"Bug Fixes &amp; Improvements",id:"bug-fixes--improvements",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Make sure to update the wiki module to at least version 1.2.0 since this system version includes\nchanges to document types that needs to be reflected in these documents. Please look at the\n",(0,n.jsx)(t.a,{href:"/rqg-system/getting-started",children:"Installing"})," page for details about the wiki module."]})}),"\n",(0,n.jsx)(t.p,{children:"A focus of this release has been to remove the last hindrances to translate the system. Now hit\nlocation names are no longer used for identification so they can be translated without affecting\nfunctionality. There is most likely still rough edges when it comes to translations, but from this\nversion everything should be translatable."}),"\n",(0,n.jsxs)(t.h2,{id:"improve-ux-of-missile-weapons--projectiles--issue-154--issue-492",children:["Improve UX of missile weapons & projectiles \u2013 ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/154",children:"Issue #154"})," & ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/492",children:"Issue #492"})]}),"\n",(0,n.jsxs)(t.p,{children:["In previous versions only the GM could select what arrows a bow should use. With this update the\nplayers can do that themselves in the combat tab on the actor sheet. The quantity of projectiles and\nthrown weapons can now be edited directly in the combat tab as well. The input fields have a\nslightly brighter color than the rest of the sheet. And hopefully it should be easier to understand\nhow much ammo you have. Please note that only equipped ammo will be shown in the dropdown.\n",(0,n.jsx)(t.img,{src:s(9896).Z+"",width:"992",height:"604"})," ",(0,n.jsx)(t.img,{src:s(2990).Z+"",width:"1000",height:"558"})]}),"\n",(0,n.jsxs)(t.h2,{id:"use-rqid-for-armor-coverage-and-remove-hit-locations-setting--issue-379--issue-380",children:["Use rqid for armor coverage and remove hit locations setting \u2013 ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/379",children:"Issue #379"})," & ",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/380",children:"Issue #380"})]}),"\n",(0,n.jsx)(t.p,{children:"The hitlocations were previously identified by name, and the available hitlocations were defined in\na setting. That setting is now removed and the compendiums in the world are now scanned by the\nsystem for hit location rqids. This is part of making hit locations translatable, but it also makes\nit more important that the hit locations actually have a proper rqid, since that is used to identify\nwhat an armor item protects."}),"\n",(0,n.jsxs)(t.p,{children:['You can either drag and drop a hit location item to the "Hit locations" area on the armor item or\nselect one in the dropdown to add it to the set of hit locations the armor item protects.\n',(0,n.jsx)(t.img,{src:s(7057).Z+"",width:"1002",height:"942"})," ",(0,n.jsx)(t.img,{src:s(5932).Z+"",width:"996",height:"956"})]}),"\n",(0,n.jsxs)(t.h2,{id:"change-the-hit-location-connected-to-field-to-use-rqid-instead--issue-449",children:['Change the hit location "Connected to" field to use rqid instead \u2013 ',(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/449",children:"Issue #449"})]}),"\n",(0,n.jsx)(t.p,{children:'To completely remove any use of hit location names for identification, the "Connected to" property\nnow also uses rqid. A hit location item "Connected to" setting is used in damage calculations. Hit\nlocations that have a "for damage calculations act as" set to "Limb" and also are "Connected to" a\nhit location that have "for damage calculations act as" set to "Abdomen" will become useless if the\nAbdomen hit location gets a hard blow.'}),"\n",(0,n.jsx)(t.p,{children:"Also since the rqid now is so important for hit location items it is shown among the other\nproperties (see screenshot). If you need to edit it, the normal fingerprint icon in the header will\nopen the rqid editor."}),"\n",(0,n.jsx)(t.p,{children:'The "Connected to" dropdown is populated by the hit locations in compendiums that have a hit\nlocation rqid.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(240).Z+"",width:"906",height:"668"})}),"\n",(0,n.jsx)(t.h2,{id:"bug-fixes--improvements",children:"Bug Fixes & Improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"add headbutt & hit as combat maneuvers"}),"\n",(0,n.jsxs)(t.li,{children:["spirit Combat panel should not be visible without spirit combat skill \u2013\n",(0,n.jsx)(t.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/658",children:"Issue #658"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2990:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/ammo-dropdown-76dbe74a64b7212cc9e79b651945b72c.png"},5932:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/armor-dropdown-096e176bfbee8480bb2f5b324cf62950.png"},7057:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/armor-sheet-380238d1369d99ed8201c8c16e23f692.png"},240:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/hit-location-connectedto-86ede83a58379122bf317b0a5eb40ffd.png"},9896:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/no-ammo-c9fd18c8071c0524646f3f1902c986fe.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(7294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);