__d(function(e,t,n,r,a){Object.defineProperty(r,"__esModule",{value:!0});var o=t(a[0]),i=babelHelpers.interopRequireWildcard(o),l=t(a[1]),c=t(a[2]),u=t(a[3]),s=babelHelpers.interopRequireDefault(u),p=(function(e){function t(){var e,n,r,a;babelHelpers.classCallCheck(this,t);for(var o=arguments.length,c=Array(o),u=0;u<o;u++)c[u]=arguments[u];return n=r=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r._renderLabel=function(e){var t=e.route,n=r.props,a=n.position,o=n.navigation,c=n.activeTintColor,u=n.inactiveTintColor,s=n.showLabel,p=n.upperCaseLabel,f=n.labelStyle,d=n.allowFontScaling;if(!1===s)return null;var v=o.state.routes,g=v.indexOf(t),C=g===o.state.index,h=[-1].concat(babelHelpers.toConsumableArray(v.map(function(e,t){return t}))),y=h.map(function(e){return e===g?c:u}),m=a.interpolate({inputRange:h,outputRange:y}),T=C?c:u,_=r.props.getLabelText({route:t});return'string'==typeof _?i.createElement(l.Animated.Text,{style:[b.label,{color:m},f],allowFontScaling:d},p?_.toUpperCase():_):'function'==typeof _?_({focused:C,tintColor:T}):_},r._renderIcon=function(e){var t=e.route,n=r.props,a=n.position,o=n.navigation,l=n.activeTintColor,c=n.inactiveTintColor,u=n.renderIcon,p=n.showIcon,f=n.iconStyle;if(!1===p)return null;var d=o.state.routes.indexOf(t),v=[-1].concat(babelHelpers.toConsumableArray(o.state.routes.map(function(e,t){return t}))),g=a.interpolate({inputRange:v,outputRange:v.map(function(e){return e===d?1:0})}),C=a.interpolate({inputRange:v,outputRange:v.map(function(e){return e===d?0:1})});return i.createElement(s.default,{route:t,navigation:o,activeOpacity:g,inactiveOpacity:C,activeTintColor:l,inactiveTintColor:c,renderIcon:u,style:[b.icon,f]})},a=n,babelHelpers.possibleConstructorReturn(r,a)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.navigation,n=(e.renderIcon,e.getLabelText,babelHelpers.objectWithoutProperties(e,["navigation","renderIcon","getLabelText"]));return i.createElement(c.TabBar,babelHelpers.extends({},n,{navigationState:t.state,renderIcon:this._renderIcon,renderLabel:this._renderLabel}))}}]),t})(i.PureComponent);p.defaultProps={activeTintColor:'#fff',inactiveTintColor:'#fff',showIcon:!1,showLabel:!0,upperCaseLabel:!0,allowFontScaling:!0},r.default=p;var b=l.StyleSheet.create({icon:{height:24,width:24},label:{textAlign:'center',fontSize:13,margin:8,backgroundColor:'transparent'}})},417,[101,12,406,402]);