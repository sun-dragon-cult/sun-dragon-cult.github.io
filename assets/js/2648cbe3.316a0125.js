"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[7121],{4132:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(5893),i=t(1151);const a={slug:"rqg-v3.2.0",title:"RQG 3.2.0",tags:["rqg","release","changelog"]},r=void 0,o={permalink:"/release-notes/rqg-v3.2.0",source:"@site/release-notes/rqg/v3.2.x/2023-10-21-v3.2.0.md",title:"RQG 3.2.0",description:"Supported Foundry Versions",date:"2023-10-21T00:00:00.000Z",formattedDate:"October 21, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:2.535,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v3.2.0",title:"RQG 3.2.0",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"RQG 3.2.1",permalink:"/release-notes/rqg-v3.2.1"},nextItem:{title:"RQG 3.1.1",permalink:"/release-notes/rqg-v3.1.1"}},d={authorsImageUrls:[]},l=[{value:"Make damage bonus part of weapon damage string \u2013 Issue #106",id:"make-damage-bonus-part-of-weapon-damage-string--issue-106",level:2},{value:"Make runes translatable by using rqid for linking \u2013 Issue #270",id:"make-runes-translatable-by-using-rqid-for-linking--issue-270",level:2},{value:"Improvements to the rqid editor \u2013 Issue #457 and Issue #642",id:"improvements-to-the-rqid-editor--issue-457-and-issue-642",level:2},{value:"Hide Opposing / Minor rune settings depending on runeType on Rune Item Sheet \u2013 Issue #269",id:"hide-opposing--minor-rune-settings-depending-on-runetype-on-rune-item-sheet--issue-269",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{src:"https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/download/v3.2.0/system.json",alt:"Supported Foundry Versions"}),"\n",(0,n.jsx)(s.img,{src:"https://img.shields.io/github/downloads/sun-dragon-cult/fvtt-system-rqg/v3.2.0/rqg.zip",alt:"Download Count"})]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Make sure to update the wiki module to at least version 1.0.0 since this system version includes\nchanges to document types that needs to be reflected in these documents. Please look at the\n",(0,n.jsx)(s.a,{href:"/rqg-system/getting-started",children:"Installing"})," page for details about the wiki module."]})}),"\n",(0,n.jsxs)(s.h2,{id:"make-damage-bonus-part-of-weapon-damage-string--issue-106",children:["Make damage bonus part of weapon damage string \u2013 ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/106",children:"Issue #106"})]}),"\n",(0,n.jsx)(s.p,{children:"In previous versions the system tried to figure out if full, half, or no damage bonus should be\nadded to the weapon damage by looking at if it's a melee, thrown or missile weapon. This worked for\nthe majority of weapons, but could not capture exceptions like sling that is a projectile weapon,\nbut anyway should get half damage bonus."}),"\n",(0,n.jsxs)(s.p,{children:["Starting with this version you need to add ",(0,n.jsx)(s.code,{children:"+db"})," or ",(0,n.jsx)(s.code,{children:"+db/2"})," to the damage string of the weapon if\nyou want it to include a damage bonus. The damage listed in the Weapons & Equipment books are\nexpressed in the same way (except they write halv damage bonus like ",(0,n.jsx)(s.code,{children:"+\xbddb"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"There is a migration included that should update all existing damage strings."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(5647).Z+"",width:"893",height:"775"})}),"\n",(0,n.jsxs)(s.h2,{id:"make-runes-translatable-by-using-rqid-for-linking--issue-270",children:["Make runes translatable by using rqid for linking \u2013 ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/270",children:"Issue #270"})]}),"\n",(0,n.jsx)(s.p,{children:"Previous versions used the name of rune items for linking to them, with this change the rqid of the\nrunes are used instead. This should make it possible to translate the name of the runes."}),"\n",(0,n.jsxs)(s.p,{children:["The links that were changed was; opposing & minor runes links in the rune item, cult item runes,\nrune magic item runes, and skill runes (used for sorcery spells until a dedicated sorcery spell item\ntype exists). With this change the system setting for the name of the magic rune was removed and the\nrqid of the magic rune is now a CONFIG instead (set to ",(0,n.jsx)(s.code,{children:"i.rune.magic-condition"})," by default)."]}),"\n",(0,n.jsx)(s.p,{children:"There are migrations for all the item changes needed for this."}),"\n",(0,n.jsxs)(s.h2,{id:"improvements-to-the-rqid-editor--issue-457-and-issue-642",children:["Improvements to the rqid editor \u2013 ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/457",children:"Issue #457"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/642",children:"Issue #642"})]}),"\n",(0,n.jsx)(s.p,{children:"The Rqid editor field for the id now autofills the part of the id that fully depends on the document\ntype. It also handles setting language and priority better when creating a new rqid. You will get\ndefault values for that when you set a rqid."}),"\n",(0,n.jsx)(s.p,{children:"The info display, as well as the list of other items with the same rqid now has an improved display\nof what folder the document is located in."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(6206).Z+"",width:"598",height:"472"})}),"\n",(0,n.jsxs)(s.h2,{id:"hide-opposing--minor-rune-settings-depending-on-runetype-on-rune-item-sheet--issue-269",children:["Hide Opposing / Minor rune settings depending on runeType on Rune Item Sheet \u2013 ",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/269",children:"Issue #269"})]}),"\n",(0,n.jsx)(s.p,{children:"The settings for opposing and minor runes in the rune item sheet are now only shown when they are\nrelevant according to the type of the rune."}),"\n",(0,n.jsx)(s.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Name of special damage in chat damage roll is impale even for slash damage \u2013\n",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/629",children:"Issue #629"})]}),"\n",(0,n.jsxs)(s.li,{children:["Actor without POW / MP is shown as unconscious and also show MP input field \u2013\n",(0,n.jsx)(s.a,{href:"https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/631",children:"Issue #631"})]}),"\n",(0,n.jsx)(s.li,{children:'Null exception if hit location lacks rqid flag "id" when dragged to actorSheet'}),"\n",(0,n.jsx)(s.li,{children:"Combat panel SR button is not right aligned for natural weapons"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},6206:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/rqid-editor-3dc0f79b29715acc5c6f5f233b0d8a4d.png"},5647:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/weapon-db-4e93d322368f0cd61f13811a989a60d7.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(7294);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);