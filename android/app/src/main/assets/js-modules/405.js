__d(function(e,r,t,n,a){Object.defineProperty(n,"__esModule",{value:!0});var o=r(a[0]),i=babelHelpers.interopRequireWildcard(o),s=(r(a[1]),r(a[2])),l=r(a[3]),p=babelHelpers.interopRequireDefault(l),b=r(a[4]),u=babelHelpers.interopRequireDefault(b),c=r(a[5]),d=babelHelpers.interopRequireDefault(c),f=(function(e){function r(){var e,t,n,a;babelHelpers.classCallCheck(this,r);for(var o=arguments.length,l=Array(o),p=0;p<o;p++)l[p]=arguments[p];return t=n=babelHelpers.possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),n._getLabel=function(e){var r=e.route,t=e.tintColor,a=e.focused,o=n.props.descriptors[r.key].options;return o.tabBarLabel?'function'==typeof o.tabBarLabel?o.tabBarLabel({tintColor:t,focused:a}):o.tabBarLabel:'string'==typeof o.title?o.title:r.routeName},n._renderIcon=function(e){var r=e.focused,t=e.route,a=e.tintColor,o=n.props.descriptors[t.key].options;return o.tabBarIcon?'function'==typeof o.tabBarIcon?o.tabBarIcon({tintColor:a,focused:r}):o.tabBarIcon:null},n._renderTabBar=function(e){var r=n.props.navigation.state,t=r.routes[r.index],a=n.props.descriptors[t.key].options,o=null==a.tabBarVisible||a.tabBarVisible,s=n.props,l=s.tabBarComponent,p=void 0===l?u.default:l,b=s.tabBarPosition,c=s.tabBarOptions;return null!==p&&o?i.createElement(p,babelHelpers.extends({},c,e,{tabBarPosition:b,screenProps:n.props.screenProps,navigation:n.props.navigation,getLabelText:n.props.getLabelText,getAccessibilityLabel:n.props.getAccessibilityLabel,getTestID:n.props.getTestID,renderIcon:n._renderIcon,onTabPress:n.props.onTabPress})):null},n._renderPanPager=function(e){return i.createElement(s.PagerPan,e)},n._renderScene=function(e){var r=e.route,t=n.props,a=t.renderScene,o=t.animationEnabled,s=t.swipeEnabled,l=t.descriptors;if(!1===o&&!1===s){var p=l[r.key].navigation;return i.createElement(d.default,{isFocused:p.isFocused()},a({route:r}))}return a({route:r})},a=t,babelHelpers.possibleConstructorReturn(n,a)}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"render",value:function(){var e=this.props,r=e.navigation,t=e.animationEnabled,n=(e.renderScene,babelHelpers.objectWithoutProperties(e,["navigation","animationEnabled","renderScene"])),a=void 0,o=this.props.navigation.state,l=o.routes[o.index],p=this.props.descriptors[l.key].options,b=null==p.swipeEnabled?this.props.swipeEnabled:p.swipeEnabled;return'function'==typeof b&&(b=b(o)),!1===t&&!1===b&&(a=this._renderPanPager),i.createElement(s.TabView,babelHelpers.extends({},n,{navigationState:r.state,animationEnabled:t,swipeEnabled:b,renderPager:a,renderTabBar:this._renderTabBar,renderScene:this._renderScene}))}}]),r})(i.PureComponent);f.defaultProps={initialLayout:{width:1,height:0}},n.default=(0,p.default)(f)},405,[101,12,406,398,417,404]);