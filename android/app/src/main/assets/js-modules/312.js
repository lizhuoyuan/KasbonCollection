__d(function(e,t,a,n,o){Object.defineProperty(n,"__esModule",{value:!0});var r=t(o[0]),i=babelHelpers.interopRequireDefault(r),u=t(o[1]),l=babelHelpers.interopRequireDefault(u);n.default=function(e){return{goBack:function(t){var a=t;return void 0===t&&e.key&&((0,l.default)('string'==typeof e.key,'key should be a string'),a=e.key),i.default.back({key:a})},navigate:function(e,t,a){return'string'==typeof e?i.default.navigate({routeName:e,params:t,action:a}):((0,l.default)('object'==typeof e,'Must navigateTo an object or a string'),(0,l.default)(null==t,'Params must not be provided to .navigate() when specifying an object'),(0,l.default)(null==a,'Child action must not be provided to .navigate() when specifying an object'),i.default.navigate(e))},setParams:function(t){return(0,l.default)(e.key&&'string'==typeof e.key,'setParams cannot be called by root navigator'),i.default.setParams({params:t,key:e.key})}}}},312,[310,313]);