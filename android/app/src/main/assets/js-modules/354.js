__d(function(i,n,e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var o=n(a[0]),r=n(a[1]),d=babelHelpers.interopRequireDefault(r),s=void 0,g=(s=(0,n(a[2]).supportsImprovedSpringAnimation)()?{timing:o.Animated.spring,stiffness:1e3,damping:500,mass:3}:{duration:500,easing:o.Easing.bezier(.2833,.99,.31833,.99),timing:o.Animated.timing},d.default.forHorizontal,d.default.forVertical,{transitionSpec:{duration:350,easing:o.Easing.out(o.Easing.poly(5)),timing:o.Animated.timing},screenInterpolator:d.default.forFadeFromBottomAndroid}),u={transitionSpec:{duration:230,easing:o.Easing.in(o.Easing.poly(4)),timing:o.Animated.timing},screenInterpolator:d.default.forFadeFromBottomAndroid};function f(i,n,e){return n&&i.index<n.index?u:g}t.default={defaultTransitionConfig:f,getTransitionConfig:function(i,n,e,t){var a=f(n,e);return i?babelHelpers.extends({},a,i(n,e,t)):a}}},354,[12,355,356]);