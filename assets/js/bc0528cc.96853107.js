"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[8320],{814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var s=n(5893),o=n(1151);const a={slug:"rqg-v2.2.1",title:"Release Notes RQG 2.2.1",tags:["rqg","release","changelog"]},r=void 0,i={permalink:"/release-notes/rqg-v2.2.1",source:"@site/releaseNotes/rqg/v2.2.x/2023-07-02-v2.2.1.md",title:"Release Notes RQG 2.2.1",description:"This is just a small followup bug fix release.",date:"2023-07-02T00:00:00.000Z",formattedDate:"July 2, 2023",tags:[{label:"rqg",permalink:"/release-notes/tags/rqg"},{label:"release",permalink:"/release-notes/tags/release"},{label:"changelog",permalink:"/release-notes/tags/changelog"}],readingTime:.78,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"rqg-v2.2.1",title:"Release Notes RQG 2.2.1",tags:["rqg","release","changelog"]},unlisted:!1,prevItem:{title:"Release Notes RQG 2.2.2",permalink:"/release-notes/rqg-v2.2.2"}},l={authorsImageUrls:[]},u=[];function c(e){const t={p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This is just a small followup bug fix release."}),"\n",(0,s.jsx)(t.p,{children:"The major fix is that the pre migration form now updates items in compendiums, both item compendium packs and actor pack with embedded items. The downside of this is that it takes longer time to run, but it is only run during migrations so hopefully it wont be too annoying.\nThere is a known bug left - it does not update items inside token actors on a scene. Foundry v11 has done updates to how they work and I will wait to see how it works out in that version before fixing that."}),"\n",(0,s.jsx)(t.p,{children:'The other fix is that the token actor effects duration now is defined as seconds instead of rounds. That means they will disappear even if the combat tracker is not active, but the game time moves forward (assuming you have the module "Times up").'}),"\n",(0,s.jsx)(t.p,{children:"There are also a few other minor bug fixes included."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(7294);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);