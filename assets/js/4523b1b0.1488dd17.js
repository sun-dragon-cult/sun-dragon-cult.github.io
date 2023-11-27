"use strict";(self.webpackChunksun_dragon_cult=self.webpackChunksun_dragon_cult||[]).push([[754],{6290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var s=t(5893),i=t(1151);const a={sidebar_position:20,slug:"addons/item-pile-settings",title:"Item Pile Settings",tags:["module"]},r=void 0,m={id:"rqg-system/addons/item-pile-settings",title:"Item Pile Settings",description:"This is an incomplete setting for Item Piles. What's missing is defining what items are unique.",source:"@site/docs/rqg-system/addons/item-pile-settings.md",sourceDirName:"rqg-system/addons",slug:"/rqg-system/addons/addons/item-pile-settings",permalink:"/rqg-system/addons/addons/item-pile-settings",draft:!1,unlisted:!1,tags:[{label:"module",permalink:"/tags/module"}],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,slug:"addons/item-pile-settings",title:"Item Pile Settings",tags:["module"]},sidebar:"rqgSidebar",previous:{title:"3rd party modules",permalink:"/rqg-system/addons/"}},o={},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This is an incomplete setting for Item Piles. What's missing is defining what items are unique.\nRunning this in the terminal or through a macro will set the settings in Item Piles."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'game.itempiles.API.setActorClassType("character");\ngame.itempiles.API.setItemQuantityAttribute("system.quantity");\ngame.itempiles.API.setItemPriceAttribute("system.price.real");\ngame.itempiles.API.setItemFilters([\n  {\n    path: "type",\n    filters: [\n      "cult",\n      "hitLocation",\n      "homeland",\n      "occupation",\n      "passion",\n      "rune",\n      "runeMagic",\n      "skill",\n      "spiritMagic",\n    ].join(","),\n  },\n  {\n    path: "system.isNatural",\n    filters: "true",\n  },\n]);\ngame.itempiles.API.setCurrencies([\n  {\n    type: "gear",\n    name: "Wheels",\n    primary: false,\n    img: "systems/rqg/assets/images/gear/wheel.webp",\n    abbreviation: "{#}W",\n    exchangeRate: 10,\n    data: {\n      item: {\n        name: "Wheels",\n        type: "gear",\n        system: {\n          physicalItemType: "currency",\n          price: {\n            real: 10,\n          },\n        },\n      },\n    },\n  },\n  {\n    type: "gear",\n    name: "Lunars",\n    primary: true,\n    img: "systems/rqg/assets/images/gear/lunar.webp",\n    abbreviation: "{#}L",\n    exchangeRate: 1,\n    data: {\n      item: {\n        name: "Lunars",\n        type: "gear",\n        system: {\n          physicalItemType: "currency",\n          price: {\n            real: 1,\n          },\n        },\n      },\n    },\n  },\n  {\n    type: "gear",\n    name: "Clacks",\n    primary: false,\n    img: "systems/rqg/assets/images/gear/clack.webp",\n    abbreviation: "{#}C",\n    exchangeRate: 0.1,\n    data: {\n      item: {\n        name: "Clacks",\n        type: "gear",\n        system: {\n          physicalItemType: "currency",\n          price: {\n            real: 0.1,\n          },\n        },\n      },\n    },\n  },\n  {\n    type: "gear",\n    name: "Bolgs",\n    primary: false,\n    img: "systems/rqg/assets/images/gear/bolg.webp",\n    abbreviation: "{#}B",\n    exchangeRate: 0.01,\n    data: {\n      item: {\n        name: "Bolgs",\n        type: "gear",\n        system: {\n          physicalItemType: "currency",\n          price: {\n            real: 0.01,\n          },\n        },\n      },\n    },\n  },\n]);\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>m,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);