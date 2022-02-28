(self.webpackChunklite=self.webpackChunklite||[]).push([[56361],{87565:(e,n,i)=>{"use strict";i.d(n,{CD:()=>o});var t=i(319),a=i.n(t),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemingProvider_colorPalette"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPalette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"highlightSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"defaultBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"tintBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorSpectrum"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundColor"}},{kind:"Field",name:{kind:"Name",value:"colorPoints"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"}},{kind:"Field",name:{kind:"Name",value:"point"}}]}}]}}]))},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemingProvider_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"primary"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorPalette"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"background"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rgb"}},{kind:"Field",name:{kind:"Name",value:"alpha"}},{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorPalette"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"fonts"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"font1"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"font2"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"font3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorPalette"}}]}}]}}]}}].concat(a()(l.definitions))}},56361:(e,n,i)=>{"use strict";i.r(n),i.d(n,{UserThemingProvider:()=>S});var t=i(46829),a=i(67294),l=i(81390),o=i(98096),d=i(31889),r=i(33108),m=i(3207),c=i(319),s=i.n(c),u=i(87565),k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserThemingProviderQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_publisher"}}]}}]}}]}}].concat(s()(u.CD.definitions))},v=function(e){var n=e.customStyleSheet;return(0,r.T)(n),null},S=function(e){var n=e.children,i=e.id,r=e.username,c=(0,d.F)(),s=(0,t.useQuery)(k,{variables:{id:i,username:r}}),u=s.data,S=s.error;if(s.loading||S||!u||(0,l.b)(null==u?void 0:u.userResult))return n;var p=u.userResult.customStyleSheet,f=(0,m.zI)(p,c),N=(0,m.ZI)(p,f);return a.createElement(o.f,{theme:N},a.createElement(v,{customStyleSheet:p}),n)}},81390:(e,n,i)=>{"use strict";i.d(n,{b:()=>r,j:()=>m});var t=i(67294),a=i(43683),l=i(2808),o=i(49216),d=i(57815),r=function(e){return!function(e){return"User"===(null==e?void 0:e.__typename)}(e)},m=function(e){var n=e.userResult,i=e.showMetabar;switch(null==n?void 0:n.__typename){case"Blocked":return t.createElement(a.q,{code:403,title:"403 Blocked — Medium",showMetabar:i},"This user had blocked you from following them or viewing their stories.");case"NotFound":return t.createElement(o.$,{showMetabar:i});case"AccountSuspended":return t.createElement(d.y,{suspension:"account",showMetabar:i});default:return t.createElement(l.C,{error:new Error("Unsupported userResult: ".concat(null==n?void 0:n.__typename)),showMetabar:i})}}},43683:(e,n,i)=>{"use strict";i.d(n,{q:()=>y});var t=i(67294),a=i(70405),l=i(5977),o=i(59713),d=i.n(o),r=i(77355),m=i(14199),c=i(14646),s=i(97489),u={fontSize:"20px",textTransform:"uppercase"},k=function(e){return d()({display:"block",fontSize:"192px",lineHeight:"200px"},s.sm(e),{fontSize:"150px"})},v=function(e){var n=e.errorCode,i=(0,c.I)(),a=(0,m.n)({name:"marketing",scale:"XXXL",color:"DARKER"});return t.createElement(r.x,{display:"flex",flexDirection:"column"},t.createElement("div",{className:i(u)},"Error"),t.createElement("div",{className:i([a,k])},n))},S=i(43432),p=i(96370),f=i(93310),N=i(64529),g=i(21638),h={fontSize:"24px"};function y(e){var n=e.code,i=e.title,o=e.children,d=e.lumenId,m=e.showMetabar,s=void 0===m||m,u=(0,c.I)();return(0,N.Nx)(new Error("[".concat(n,"]: ").concat(i)),{status:n}),t.createElement(l.AW,{render:function(e){var l=e.staticContext;return l&&(l.statusCode=n),t.createElement("div",null,t.createElement(a.q,null,t.createElement("title",null,i)),s&&t.createElement(S.kw,null),t.createElement(r.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},t.createElement(p.P,{size:"inset"},t.createElement(r.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},t.createElement(v,{errorCode:n}),t.createElement("div",{className:u((0,g.rJ)())},t.createElement(r.x,{marginBottom:"28px"},t.createElement("div",{className:u(h)},o)),d?t.createElement("div",{className:u(h)},"A report is available on"," ",t.createElement(f.r,{href:"https://lumendatabase.org/notices/".concat(d),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},57815:(e,n,i)=>{"use strict";i.d(n,{y:()=>c});var t=i(67294),a=i(77355),l=i(47230),o=i(90586),d=i(18627),r=i(43683),m=i(43487),c=function(e){var n=e.suspension,i=e.showMetabar,c=(0,d.Av)(),s=(0,m.v9)((function(e){return e.config.authDomain}));return t.createElement(r.q,{code:410,title:"410 ".concat(n," suspended — Medium"),showMetabar:i},t.createElement(a.x,{display:"flex",marginTop:"-30px"},t.createElement(o.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),t.createElement(a.x,{display:"flex",marginTop:"80px"},t.createElement(o.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",t.createElement("br",null)," to find one that’s right for you.")),t.createElement(a.x,{display:"flex",marginTop:"15px"},t.createElement(l.z,{buttonStyle:"SUBTLE",href:"https://".concat(s),onClick:function(){c.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}},33108:(e,n,i)=>{"use strict";i.d(n,{T:()=>l});var t=i(67294),a=i(76544),l=function(e){var n=t.useCallback((function(){e&&Array.from(document.getElementsByTagName("iframe")).forEach((function(n){null!=n&&n.contentWindow&&n.contentWindow.postMessage(JSON.stringify({context:"medium.customStyleSheet",customStyleSheet:e}),"*")}))}),[e]);(0,a.r)("medium.getCustomStyleSheet",n)}},76544:(e,n,i)=>{"use strict";i.d(n,{r:()=>a});var t=i(67294),a=function(e,n){t.useEffect((function(){if("undefined"!=typeof window){var i=function(i){if(i.data){var t,a;try{a=JSON.parse(i.data)}catch(e){}(null===(t=a)||void 0===t?void 0:t.context)===e&&n(a)}};return window.addEventListener("message",i),function(){window.removeEventListener("message",i)}}}),[n,e])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/56361.fbdf24c9.chunk.js.map