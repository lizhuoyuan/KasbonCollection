__d(function(e,t,i,n,r){Object.defineProperty(n,"__esModule",{value:!0});var l=t(r[0]),o=babelHelpers.interopRequireDefault(l),a=t(r[1]),c=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.route,i=e.activeOpacity,n=e.inactiveOpacity,r=e.activeTintColor,l=e.inactiveTintColor,c=e.renderIcon,u=e.style;return o.default.createElement(a.View,{style:u},o.default.createElement(a.Animated.View,{style:[s.icon,{opacity:i}]},c({route:t,focused:!0,tintColor:r})),o.default.createElement(a.Animated.View,{style:[s.icon,{opacity:n}]},c({route:t,focused:!1,tintColor:l})))}}]),t})(o.default.Component);n.default=c;var s=a.StyleSheet.create({icon:{position:'absolute',alignSelf:'center',alignItems:'center',justifyContent:'center',height:'100%',width:'100%',minWidth:25}})},402,[101,12]);