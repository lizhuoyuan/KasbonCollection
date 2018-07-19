__d(function(e,t,r,a,n){Object.defineProperty(a,"__esModule",{value:!0});var i=t(n[0]),o=babelHelpers.interopRequireDefault(i),u=t(n[1]),l=babelHelpers.interopRequireDefault(u),s=t(n[2]),f=babelHelpers.interopRequireDefault(s),p=t(n[3]),d=babelHelpers.interopRequireDefault(p),m=t(n[4]),y=babelHelpers.interopRequireDefault(m),c=t(n[5]),b=babelHelpers.interopRequireDefault(c),v=t(n[6]),k=babelHelpers.interopRequireDefault(v),g=t(n[7]),x=t(n[8]);function A(e){return e.type===o.default.NAVIGATE||e.type===l.default.PUSH}var H=function(e,t){return{}};function N(e){return e.type===l.default.RESET&&null===e.key}a.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,b.default)(e);var r={},a=Object.keys(e);a.forEach(function(t){var a=(0,d.default)(e,t);a&&a.router?r[t]=a.router:r[t]=null});var n=t.initialRouteParams,i=t.getCustomActionCreators||H,u=t.initialRouteName||a[0],s=r[u];function p(e){var a={},i=r[e.routeName];if(A(e)&&void 0!==i){var l={};if(null!==i){var f=e.action||o.default.init({params:e.params});l=i.getStateForAction(f)}return{key:'StackRouterRoot',isTransitioning:!1,index:0,routes:[babelHelpers.extends({params:e.params},l,{key:e.key||(0,g.generateKey)(),routeName:e.routeName})]}}s&&(a=s.getStateForAction(o.default.navigate({routeName:u,params:n})));var p=(a.params||e.params||n)&&babelHelpers.extends({},a.params||{},e.params||{},n||{}),d=t.initialRouteKey;return{key:'StackRouterRoot',isTransitioning:!1,index:0,routes:[a=babelHelpers.extends({},a,p?{params:p}:{},{routeName:u,key:e.key||d||(0,g.generateKey)()})]}}var m=(0,x.createPathParser)(r,e,t.paths,u,n),c=m.getPathAndParamsForRoute,v=m.getActionForPathAndParams;return{childRouters:r,getComponentForState:function(t){var a=t.routes[t.index],n=a.routeName;return r[n]?r[n].getComponentForState(a):(0,d.default)(e,n)},getComponentForRouteName:function(t){return(0,d.default)(e,t)},getActionCreators:function(e,t){return babelHelpers.extends({},i(e,t),{pop:function(e,t){return l.default.pop(babelHelpers.extends({n:e},t))},popToTop:function(e){return l.default.popToTop(e)},push:function(e,t,r){return l.default.push({routeName:e,params:t,action:r})},replace:function(t,r,a,n){return'string'==typeof t?l.default.replace({routeName:t,params:r,action:a,key:e.key,newKey:n}):((0,k.default)('object'==typeof t,'Must replaceWith an object or a string'),(0,k.default)(null==r,'Params must not be provided to .replace() when specifying an object'),(0,k.default)(null==a,'Child action must not be provided to .replace() when specifying an object'),(0,k.default)(null==n,'Child action must not be provided to .replace() when specifying an object'),l.default.replace(t))},reset:function(e,r){return l.default.reset({actions:e,index:null==r?e.length-1:r,key:t})},dismiss:function(){return o.default.back({key:t})}})},getStateForAction:function(e,t){if(!t)return p(e);var a=t.routes[t.index];if(N(e)||e.type===o.default.NAVIGATE){if(e.type===o.default.NAVIGATE){var n=t.routes.slice().reverse(),i=Array.isArray(n),u=0;for(n=i?n:n["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var s;if(i){if(u>=n.length)break;s=n[u++]}else{if((u=n.next()).done)break;s=u.value}var f=s,d=r[f.routeName],m=e.routeName===f.routeName&&e.action?e.action:e;if(d){var c=d.getStateForAction(m,f);if(null===c||c!==f){var b=y.default.replaceAndPrune(t,c?c.key:f.key,c||f);return babelHelpers.extends({},b,{isTransitioning:t.index!==b.index?!0!==e.immediate:t.isTransitioning})}}}}}else{var v=r[a.routeName];if(v){var x=v.getStateForAction(e,a);if(null!==x&&x!==a)return y.default.replaceAt(t,a.key,x,e.type===o.default.SET_PARAMS)}}if(A(e)&&void 0!==r[e.routeName]){var H=r[e.routeName],S=void 0;(0,k.default)(e.type!==l.default.PUSH||null==e.key,'StackRouter does not support key on the push action');var P=t.routes.findIndex(function(t){return e.key?t.key===e.key:t.routeName===e.routeName});if(e.type!==l.default.PUSH&&-1!==P){if(t.index===P&&!e.params)return null;var T=t.routes.slice(0,P+1);if(e.params){var h=t.routes[P];T[P]=babelHelpers.extends({},h,{params:babelHelpers.extends({},h.params,e.params)})}return babelHelpers.extends({},t,{isTransitioning:t.index!==P?!0!==e.immediate:t.isTransitioning,index:P,routes:T})}if(H){var R=e.action||o.default.init({params:e.params});S=babelHelpers.extends({params:e.params},H.getStateForAction(R),{routeName:e.routeName,key:e.key||(0,g.generateKey)()})}else S={params:e.params,routeName:e.routeName,key:e.key||(0,g.generateKey)()};return babelHelpers.extends({},y.default.push(t,S),{isTransitioning:!0!==e.immediate})}if(e.type===l.default.PUSH&&void 0===r[e.routeName])return t;if(A(e))for(var F=Object.keys(r),E=0;E<F.length;E++){var O=F[E],C=r[O];if(C){var K=C.getStateForAction(o.default.init()),_=C.getStateForAction(e,K),j=null;if(null===_?j=K:_!==K&&(j=_),j){var q=babelHelpers.extends({},j,{routeName:O,key:e.key||(0,g.generateKey)()});return babelHelpers.extends({},y.default.push(t,q),{isTransitioning:!0!==e.immediate})}}}if(e.type===l.default.POP_TO_TOP)return e.key&&t.key!==e.key?t:t.index>0?babelHelpers.extends({},t,{isTransitioning:!0!==e.immediate,index:0,routes:[t.routes[0]]}):t;if(e.type===l.default.REPLACE){var D=t.routes.findIndex(function(t){return t.key===e.key});if(-1!==D){var I=r[e.routeName],M={};if(I){var w=e.action||o.default.init({params:e.params});M=I.getStateForAction(w)}var U=[].concat(babelHelpers.toConsumableArray(t.routes));return U[D]=babelHelpers.extends({params:e.params},M,{routeName:e.routeName,key:e.newKey||(0,g.generateKey)()}),babelHelpers.extends({},t,{routes:U})}}if(e.type===l.default.COMPLETE_TRANSITION&&(null==e.key||e.key===t.key)&&t.isTransitioning)return babelHelpers.extends({},t,{isTransitioning:!1});if(e.type===o.default.SET_PARAMS){var G=e.key,V=t.routes.find(function(e){return e.key===G});if(V){var L=babelHelpers.extends({},V.params,e.params),B=[].concat(babelHelpers.toConsumableArray(t.routes));return B[t.routes.indexOf(V)]=babelHelpers.extends({},V,{params:L}),babelHelpers.extends({},t,{routes:B})}}if(e.type===l.default.RESET){if(null!=e.key&&e.key!=t.key)return t;var W=e.actions;return babelHelpers.extends({},t,{routes:W.map(function(e){var t=r[e.routeName],a={};if(t){var n=e.action||o.default.init({params:e.params});a=t.getStateForAction(n)}return babelHelpers.extends({params:e.params},a,{routeName:e.routeName,key:e.key||(0,g.generateKey)()})}),index:e.index})}if(e.type===o.default.BACK||e.type===l.default.POP){var z=e.key,J=e.n,Q=e.immediate,X=t.index;if(e.type===l.default.POP&&null!=J)X=Math.max(1,t.index-J+1);else if(z){var Y=t.routes.find(function(e){return e.key===z});X=t.routes.indexOf(Y)}if(X>0)return babelHelpers.extends({},t,{routes:t.routes.slice(0,X),index:X-1,isTransitioning:!0!==Q})}var Z=e.key?y.default.indexOf(t,e.key):-1,$=t.routes.slice().reverse(),ee=Array.isArray($),te=0;for($=ee?$:$["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var re;if(ee){if(te>=$.length)break;re=$[te++]}else{if((te=$.next()).done)break;re=te.value}var ae=re;if(ae.key!==a.key&&!(Z>=0&&ae.key!==e.key)){var ne=r[ae.routeName];if(ne){var ie=ne.getStateForAction(e,ae);if(null===ie)return t;if(ie&&ie!==ae)return y.default.replaceAt(t,ae.key,ie,e.type===o.default.SET_PARAMS)}}}return t},getPathAndParamsForState:function(e){var t=e.routes[e.index];return c(t)},getActionForPathAndParams:function(e,t){return v(e,t)},getScreenOptions:(0,f.default)(e,t.navigationOptions)}}},360,[310,348,361,362,324,364,313,365,318]);