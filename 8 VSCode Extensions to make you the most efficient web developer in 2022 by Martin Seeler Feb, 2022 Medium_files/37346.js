(self.webpackChunklite=self.webpackChunklite||[]).push([[37346],{81162:(e,n,i)=>{"use strict";i.d(n,{Z:()=>d});var a=i(67294);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l=a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M6.93 15.34l-2.06-2.06c-2.16-2.16-3.53-3.15-2.9-3.79.33-.32.8-.39 1.2 0l2.13 2.2c.08.08.16.07.38.13.21.05.36-.05.54-.23.17-.16.07-.6-.09-.77L3.5 8.2c-.37-.36-.5-1-.1-1.39.37-.37.8-.19 1.14.15.39.38 2.7 2.76 2.7 2.76a.42.42 0 0 0 .3.13.54.54 0 0 0 .33-.16c.17-.16.25-.46.09-.63 0 0-1.34-1.4-1.82-1.88-.71-.72-.77-1.22-.46-1.54.45-.44 1.05-.3 1.86.62l3.58 3.89-.75-1.95s-.47-1.25 0-1.5.84.4 1.17.9l1.86 3.34c1.01 1.65.69 3.8-.73 5.19-1.87 1.87-4.07.87-5.73-.78zM10.26.04H8.73l.77 3.3zM13.93 1.2L12.5.7l-.4 3.36zM6.5.57l-1.44.52L6.9 3.93z"}),a.createElement("path",{d:"M14.3 7.03c-.34-.5-.9-.52-1.25-.24-.25.19-.21.6-.2.9l1.51 2.64c1.17 1.9 1.33 3.66 0 5.45.4-.19.52-.23.9-.61 1.52-1.52 1.86-3.32.85-4.96l-1.8-3.18z"}));const d=function(e){return a.createElement("svg",t({width:19,height:19,viewBox:"0 0 19 19"},e),l)}},14349:(e,n,i)=>{"use strict";i.d(n,{Z:()=>d});var a=i(67294);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l=a.createElement("path",{d:"M16.19 9.42c0 1.67-.72 2.84-2.03 4l-.1.09v.13a4.3 4.3 0 0 0 .15.85c.17.6.46 1.2.86 1.8a4.94 4.94 0 0 1-2.46-.84c-.26-.17-.33-.2-.54-.4l-.13-.12-.16.05c-.68.2-2.75.46-4.88-.16a5.9 5.9 0 0 1-4.1-5.4c0-3.37 3-6.12 6.7-6.12s6.69 2.75 6.69 6.12z",fillRule:"evenodd"});const d=function(e){return a.createElement("svg",t({width:19,height:19,viewBox:"0 0 19 19"},e),l)}},44169:(e,n,i)=>{"use strict";i.d(n,{c:()=>m});var a=i(319),t=i.n(a),l=i(13740),d=i(25036),o=i(95467),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"listItemsConnection"},name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogCovers_catalogItemV2"}}]}}]}}]}}].concat(t()(o.u.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItem_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"getCatalogSlugId_Catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"formatItemsCount_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"}}]}}].concat(t()(l.g.definitions),t()(d.BR.definitions),t()(r.definitions))}},25036:(e,n,i)=>{"use strict";i.d(n,{hz:()=>u,BR:()=>s,nf:()=>m});var a=i(319),t=i.n(a),l=i(68216),d=i(27048),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Voter_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(t()(l.$m.definitions),t()(d.W.definitions))},r=i(78693),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getCatalogMiroURLForMetadata_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"thumbnailImage"}}]}}]},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"formatItemsCount_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postItemsCount"}},{kind:"Field",name:{kind:"Name",value:"bookEditionItemsCount"}}]}}]},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogVotersDialog_catalogClapperConnection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogClapperConnection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clappers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"Voter_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}},{kind:"Field",name:{kind:"Name",value:"paging"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextPageCursor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}].concat(t()(o.definitions),t()(r.s.definitions))}},27628:(e,n,i)=>{"use strict";i.d(n,{i:()=>l});var a=i(319),t=i.n(a),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostResultError_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"}}]}}]}}].concat(t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]),t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]))}},94986:(e,n,i)=>{"use strict";i.d(n,{Ij:()=>D,iT:()=>w,rK:()=>T});var a=i(28655),t=i.n(a),l=i(71439),d=i(67294),o=i(29747),r=i(34575),m=i.n(r),s=i(2205),u=i.n(s),c=i(78585),k=i.n(c),v=i(29754),p=i.n(v),N=i(65957);var g=function(e){u()(t,e);var n,i,a=(n=t,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=p()(n);if(i){var t=p()(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return k()(this,e)});function t(){return m()(this,t),a.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return t}(i.n(N)()(Error)),S=i(43683),f=i(2808),F=i(49216),y=i(57815);function h(){var e=t()(["\n  fragment UnavailableForLegalReasonsScreen_unavailableForLegalReasons on UnavailableForLegalReasons {\n    lumenId\n  }\n"]);return h=function(){return e},e}function E(e){var n=e.errorData,i=e.showMetabar;return d.createElement(S.q,{code:451,title:"451 Not available — Medium",lumenId:n.lumenId,showMetabar:i},"This story is subject to a DMCA copyright or other legal or government claim.")}var C=(0,l.Ps)(h());function b(){var e=t()(["\n  fragment WithheldInCountryScreen_withheldInCountry on WithheldInCountry {\n    lumenId\n  }\n"]);return b=function(){return e},e}function I(e){var n=e.errorData,i=e.showMetabar;return d.createElement(S.q,{code:451,title:"451 Not available in your country — Medium",lumenId:n.lumenId,showMetabar:i},"This page is not available in your country.")}var R=(0,l.Ps)(b()),x=i(59764);function _(){var e=t()(["\n  fragment PostResultError_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n    }\n    ... on UnavailableForLegalReasons {\n      ...UnavailableForLegalReasonsScreen_unavailableForLegalReasons\n    }\n    ... on WithheldInCountry {\n      ...WithheldInCountryScreen_withheldInCountry\n    }\n  }\n  ","\n  ","\n"]);return _=function(){return e},e}var T=function(e){return!(0,x.f)(e)},D=function(e){var n=e.postResult,i=e.showMetabar;if(!n)return d.createElement(f.C,{error:new g});switch(n.__typename){case"Unauthorized":return d.createElement(o.N,{opt_isDraft:!0});case"NotFound":return d.createElement(F.$,{showMetabar:i});case"AccountDeleted":return d.createElement(S.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:i},"User deactivated or deleted their account.");case"AccountSuspended":return d.createElement(y.y,{suspension:"account",showMetabar:i});case"PostSuspended":return d.createElement(y.y,{suspension:"post",showMetabar:i});case"Blocked":return d.createElement(S.q,{code:403,title:"403 Blocked — Medium",showMetabar:i},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return d.createElement(S.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:i},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return d.createElement(E,{errorData:n,showMetabar:i});case"WithheldInCountry":return d.createElement(I,{errorData:n,showMetabar:i});default:return d.createElement(f.C,{error:new Error("Unsupported postResult: ".concat(n.__typename)),showMetabar:i})}},w=(0,l.Ps)(_(),C,R)},56785:(e,n,i)=>{"use strict";i.d(n,{V:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"InResponseToEntityPreview_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"inResponseToEntityType"}}]}}]}},54701:(e,n,i)=>{"use strict";i.d(n,{h:()=>M});var a=i(67294),t=i(46829),l=i(94986),d=i(40043),o=i(93164),r=i(27323),m=i(77355),s=i(87691),u=i(14646),c=i(97217),k=i(81162),v=i(14349),p=i(21372),N=i(44923),g=i(50458),S=i(319),f=i.n(S),F=i(68216),y=i(82717),h={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Quote_quote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quoteId"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"markups"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"anchorType"}},{kind:"Field",name:{kind:"Name",value:"end"}},{kind:"Field",name:{kind:"Name",value:"href"}},{kind:"Field",name:{kind:"Name",value:"rel"}},{kind:"Field",name:{kind:"Name",value:"start"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"userId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"TextParagraph_paragraph"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"buildQuotePreviewParagraph_quote"}}]}}].concat(f()(F.$m.definitions),f()(y.Rg.definitions),f()([{kind:"FragmentDefinition",name:{kind:"Name",value:"buildQuotePreviewParagraph_quote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"markups"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"end"}},{kind:"Field",name:{kind:"Name",value:"start"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}}]}}]))},E=i(27628),C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"InResponseToPostPreviewQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"inResponseToPostResult"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"responsesCount"}},{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"inResponseToMediaResource"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"mediumQuote"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Quote_quote"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}}]}}]}}].concat(f()(h.definitions),f()(E.i.definitions))},b=function(e){return{fill:e.baseColor.fill.lighter}},I=function(e){var n=e.postId,i=e.postPreviewMarginBottom,S=(0,u.I)(),f=(0,t.useQuery)(C,{variables:{postId:n}}),F=f.data,y=f.error,h=f.loading;if(y||h||!F||(0,l.rK)(F.postResult))return null;var E=F.postResult,I=E.inResponseToMediaResource,R=E.inResponseToPostResult,x="Post"===(null==R?void 0:R.__typename)?R:void 0;if(!x||x.visibility===c.Wn.UNLISTED)return null;var _=x.title,T=x.creator&&x.creator.name,D=parseInt(x.clapCount,10),w=x.responsesCount||0,M=(null==I?void 0:I.mediumQuote)&&(0,N.Gj)(I.mediumQuote),P=M&&M.type;return P===c.NJ.IMG||P===c.NJ.IFRAME||P===c.NJ.COVER_TITLE||P===c.NJ.HR||P===c.NJ.MIXTAPE_EMBED||P===c.NJ.SECTION_CAPTION?null:a.createElement(r.P,{href:(0,g.jVf)(x)},a.createElement(o.Z,{marginBottom:i},a.createElement(m.x,{paddingLeft:"20px",paddingRight:"20px"},M&&P&&a.createElement(m.x,{paddingBottom:"20px"},a.createElement(d.Do,{paragraph:M,paragraphStyle:P,spaceTop:10,richTextStyle:"STREAM"})),a.createElement(m.x,{display:"flex"},a.createElement(m.x,{display:"flex",flexGrow:"1",flexShrink:"1",alignItems:"center"},a.createElement(s.F,{scale:"M",color:"DARKER",clamp:1,tag:"span"},_)),a.createElement(m.x,{display:"flex",flexGrow:"0",alignItems:"center"},D>0?a.createElement(m.x,{display:"flex",alignItems:"center"},a.createElement("span",{className:S(b)},a.createElement(m.x,{tag:k.Z,marginRight:"4px"})),a.createElement(s.F,{scale:"M",tag:"div"},(0,p.pY)(D))):null,w>0?a.createElement(m.x,{display:"flex",alignItems:"center"},a.createElement("span",{className:S(b)},a.createElement(m.x,{tag:v.Z,marginLeft:"8px",marginRight:"4px"})),a.createElement(s.F,{scale:"M",tag:"div"},(0,p.pY)(w))):null)),a.createElement(s.F,{scale:"M"},T))))},R=i(75221),x=i(57799),_=i(1109),T=i(44169),D={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"InResponseToCatalogPreviewQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"inResponseToCatalogResult"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItem_catalog"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}}]}}]}}].concat(f()(T.c.definitions),f()(E.i.definitions))},w=function(e){var n=e.postId,i=(0,_.KB)(),d=(0,t.useQuery)(D,{variables:{postId:n}}),o=d.data,r=d.error,m=d.loading;if(r||m||!o||(0,l.rK)(o.postResult))return null;var s=o.postResult.inResponseToCatalogResult,u=i("Catalog"===(null==s?void 0:s.__typename)?s.creator.id:"");return s&&"Catalog"===s.__typename&&(u||"PUBLIC"===s.visibility)?a.createElement(x.l,{catalog:s}):null},M=(0,a.memo)((function(e){var n=e.post,i=e.padding,t=e.postPreviewMarginBottom,l=n.inResponseToEntityType;return l===R.Jh.CATALOG?a.createElement(m.x,{padding:i},a.createElement(w,{postId:n.id})):l===R.Jh.POST?a.createElement(m.x,{padding:i},a.createElement(I,{postId:n.id,postPreviewMarginBottom:t})):null}))},21232:(e,n,i)=>{"use strict";i.d(n,{f:()=>a});var a=i(67294).createContext({addContinueThisThreadSidebar:function(){return null},openSidebar:function(){return null},closeSidebar:function(){return null}})},29747:(e,n,i)=>{"use strict";i.d(n,{N:()=>s});var a=i(67294),t=i(90833),l=i(18839),d=i(66411),o=i(43487),r=i(78870),m=i(50458),s=function(e){var n=e.opt_isDraft,i=e.opt_params,s=e.operation,u=(0,o.v9)((function(e){return e.config.authDomain})),c=(0,o.v9)((function(e){return e.navigation.currentLocation})),k=(0,d.pK)(),v=(0,d.hp)(),p=(0,r.Rk)((0,m.Kkz)(u),{operation:s||"login",redirect:(0,l.hQ)(c,k,v,null,null,i),isDraft:n?"1":"0"});return a.createElement(t.l,{to:p,temporary:!0})}},93164:(e,n,i)=>{"use strict";i.d(n,{Z:()=>d});var a=i(67294),t=i(77355),l=i(31889),d=function(e){var n=e.children,i=e.marginBottom,d=void 0===i?24:i,o=(0,l.F)();return a.createElement(t.x,{backgroundColor:"BACKGROUND",border:"BASE_LIGHTER",borderRadius:"5px",boxShadow:"0 1px 4px ".concat(o.baseColor.border.lighter),marginBottom:"".concat(d,"px"),padding:"23px 0"},n)}},43683:(e,n,i)=>{"use strict";i.d(n,{q:()=>y});var a=i(67294),t=i(70405),l=i(5977),d=i(59713),o=i.n(d),r=i(77355),m=i(14199),s=i(14646),u=i(97489),c={fontSize:"20px",textTransform:"uppercase"},k=function(e){return o()({display:"block",fontSize:"192px",lineHeight:"200px"},u.sm(e),{fontSize:"150px"})},v=function(e){var n=e.errorCode,i=(0,s.I)(),t=(0,m.n)({name:"marketing",scale:"XXXL",color:"DARKER"});return a.createElement(r.x,{display:"flex",flexDirection:"column"},a.createElement("div",{className:i(c)},"Error"),a.createElement("div",{className:i([t,k])},n))},p=i(43432),N=i(96370),g=i(93310),S=i(64529),f=i(21638),F={fontSize:"24px"};function y(e){var n=e.code,i=e.title,d=e.children,o=e.lumenId,m=e.showMetabar,u=void 0===m||m,c=(0,s.I)();return(0,S.Nx)(new Error("[".concat(n,"]: ").concat(i)),{status:n}),a.createElement(l.AW,{render:function(e){var l=e.staticContext;return l&&(l.statusCode=n),a.createElement("div",null,a.createElement(t.q,null,a.createElement("title",null,i)),u&&a.createElement(p.kw,null),a.createElement(r.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},a.createElement(N.P,{size:"inset"},a.createElement(r.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},a.createElement(v,{errorCode:n}),a.createElement("div",{className:c((0,f.rJ)())},a.createElement(r.x,{marginBottom:"28px"},a.createElement("div",{className:c(F)},d)),o?a.createElement("div",{className:c(F)},"A report is available on"," ",a.createElement(g.r,{href:"https://lumendatabase.org/notices/".concat(o),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},57815:(e,n,i)=>{"use strict";i.d(n,{y:()=>s});var a=i(67294),t=i(77355),l=i(47230),d=i(90586),o=i(18627),r=i(43683),m=i(43487),s=function(e){var n=e.suspension,i=e.showMetabar,s=(0,o.Av)(),u=(0,m.v9)((function(e){return e.config.authDomain}));return a.createElement(r.q,{code:410,title:"410 ".concat(n," suspended — Medium"),showMetabar:i},a.createElement(t.x,{display:"flex",marginTop:"-30px"},a.createElement(d.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),a.createElement(t.x,{display:"flex",marginTop:"80px"},a.createElement(d.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",a.createElement("br",null)," to find one that’s right for you.")),a.createElement(t.x,{display:"flex",marginTop:"15px"},a.createElement(l.z,{buttonStyle:"SUBTLE",href:"https://".concat(u),onClick:function(){s.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/37346.c744a48a.chunk.js.map