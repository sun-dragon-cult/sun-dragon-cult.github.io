"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[3089],{4351:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(7294);var n=a(512),i=a(2263),r=a(8264),s=a(5281),o=a(1460),l=a(9703),d=a(197),c=a(9985),g=a(5742),u=a(136),m=a(5893);function p(e){const t=(0,u.C)(e);return(0,m.jsx)(g.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.Z)(),{blogDescription:n,blogTitle:s,permalink:o}=t,l="/"===o?a:s;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:l,description:n}),(0,m.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,m.jsxs)(o.Z,{sidebar:n,children:[(0,m.jsx)(c.Z,{items:a}),(0,m.jsx)(l.Z,{metadata:t})]})}function x(e){return(0,m.jsxs)(r.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage),children:[(0,m.jsx)(h,{...e}),(0,m.jsx)(p,{...e}),(0,m.jsx)(b,{...e})]})}},9703:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(5999),i=a(2244),r=a(5893);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(i.Z,{permalink:a,title:(0,r.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,r.jsx)(i.Z,{permalink:s,title:(0,r.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(9460),i=a(3665),r=a(5893);function s(e){let{items:t,component:a=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.n,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},136:(e,t,a)=>{a.d(t,{C:()=>c,i:()=>g});var n=a(4996),i=a(2263),r=a(5102);var s=a(9460);const o=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function c(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:a}=(0,n.Cg)(),{metadata:{blogDescription:r,blogTitle:s,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:s,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:i,metadata:r}=e,{date:s,title:c,description:g,lastUpdatedAt:u}=r,m=n.image??i.image,p=i.keywords??[],h=`${t.url}${r.permalink}`,b=u?o(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:s,...b?{dateModified:b}:{},...l(r.authors),...d(m,a,c),...p?{keywords:p}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,s.C)(),{siteConfig:c}=(0,i.Z)(),{withBaseUrl:g}=(0,n.Cg)(),{date:u,title:m,description:p,frontMatter:h,lastUpdatedAt:b}=a,x=t.image??h.image,f=h.keywords??[],j=b?o(b):void 0,v=`${c.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:m,name:m,description:p,datePublished:u,...j?{dateModified:j}:{},...l(a.authors),...d(x,g,m),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},5586:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(4087);const i="lightInvert_V1ax",r="centerIt_zbCv";var s=a(5893);const o={...n.Z,LightInvertSvg:e=>{let{src:t,width:a}=e;return(0,s.jsx)("img",{className:i,src:t,width:a})},CenterIt:e=>{let{children:t}=e;return(0,s.jsx)("span",{className:r,children:t})},GithubIssue:e=>{let{issue:t,repo:a}=e;return(0,s.jsx)("a",{title:"Related Github Issue",className:"theme-doc-version-badge badge badge--secondary",href:`https://github.com/sun-dragon-cult/${a}/issues/${t}`,target:"_blank",children:(0,s.jsxs)("label",{children:[(0,s.jsx)("img",{src:"/img/github-mark.svg",width:"13.5px"}),"\xa0#",t]})})},ThemeInvert:e=>{let{children:t}=e;return(0,s.jsx)("span",{className:i,children:t})}}}}]);