__d(function(t,e,i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var a=e(o[0]),r=babelHelpers.interopRequireDefault(a),d=e(o[1]),s=e(o[2]),p=babelHelpers.interopRequireDefault(s),c=375,g=812,u=d.Dimensions.get('window'),l=(u.height,u.width,d.NativeModules.PlatformConstants),h=((void 0===l?{}:l).reactNativeVersion||{}).minor,f=(void 0===h?0:h)>=50&&d.DeviceInfo.isIPhoneX_deprecated,v=null,b=function(e){return null!==v?v:t.Expo?t.Expo.Constants.statusBarHeight:0},m=function(t){if(!t.includes('%'))return 0;var e=parseFloat(t)/100;return isNaN(e)?0:e},y=(function(t){function e(){var t,i,n,o;babelHelpers.classCallCheck(this,e);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return i=n=babelHelpers.possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),n.state={touchesTop:!0,touchesBottom:!0,touchesLeft:!0,touchesRight:!0,orientation:null,viewWidth:0,viewHeight:0},n._onLayout=function(){if(n.view){var t=n.props.isLandscape,e=n.state.orientation,i=t?'landscape':'portrait';if(!e||e!==i){var o=t?g:c,a=t?c:g;n.view._component.measureInWindow(function(t,e,r,d){var s=e,p=t;s>=a?s%=a:s<0&&(s=s%a+a),p>=o?p%=o:p<0&&(p=p%o+o);var c=0===s,g=s+d>=a,u=0===p,l=p+r>=o;n.setState({touchesTop:c,touchesBottom:g,touchesLeft:u,touchesRight:l,orientation:i,viewWidth:r,viewHeight:d})})}}},n._getSafeAreaStyle=function(){var t=n.state,e=t.touchesTop,i=t.touchesBottom,o=t.touchesLeft,a=t.touchesRight,r=n.props,d=r.forceInset,s=(r.isLandscape,n._getViewStyles()),p=s.paddingTop,c=s.paddingBottom,g=s.paddingLeft,u=s.paddingRight,l=s.viewStyle,h=babelHelpers.extends({},l,{paddingTop:e?n._getInset('top'):0,paddingBottom:i?n._getInset('bottom'):0,paddingLeft:o?n._getInset('left'):0,paddingRight:a?n._getInset('right'):0});return d&&Object.keys(d).forEach(function(t){var e=d[t];switch('always'===e&&(e=n._getInset(t)),'never'===e&&(e=0),t){case'horizontal':h.paddingLeft=e,h.paddingRight=e;break;case'vertical':h.paddingTop=e,h.paddingBottom=e;break;case'left':case'right':case'top':case'bottom':var i="padding"+t[0].toUpperCase()+t.slice(1);h[i]=e}}),h.height&&'number'==typeof h.height&&(h.height+=h.paddingTop+h.paddingBottom),h.width&&'number'==typeof h.width&&(h.width+=h.paddingLeft+h.paddingRight),h.paddingTop=Math.max(h.paddingTop,p),h.paddingBottom=Math.max(h.paddingBottom,c),h.paddingLeft=Math.max(h.paddingLeft,g),h.paddingRight=Math.max(h.paddingRight,u),h},n._getViewStyles=function(){var t=n.state.viewWidth,e=d.StyleSheet.flatten(n.props.style||{}),i=e.padding,o=void 0===i?0:i,a=e.paddingVertical,r=void 0===a?o:a,s=e.paddingHorizontal,p=void 0===s?o:s,c=e.paddingTop,g=void 0===c?r:c,u=e.paddingBottom,l=void 0===u?r:u,h=e.paddingLeft,f=void 0===h?p:h,v=e.paddingRight,b=void 0===v?p:v,y=babelHelpers.objectWithoutProperties(e,["padding","paddingVertical","paddingHorizontal","paddingTop","paddingBottom","paddingLeft","paddingRight"]);return'number'!=typeof g&&(g=m(g)*t),'number'!=typeof l&&(l=m(l)*t),'number'!=typeof f&&(f=m(f)*t),'number'!=typeof b&&(b=m(b)*t),{paddingTop:g,paddingBottom:l,paddingLeft:f,paddingRight:b,viewStyle:y}},n._getInset=function(t){var e=n.props.isLandscape;switch(t){case'horizontal':case'right':case'left':return e&&f?44:0;case'vertical':case'top':return b(e);case'bottom':return f?e?24:34:0}},o=i,babelHelpers.possibleConstructorReturn(n,o)}return babelHelpers.inherits(e,t),babelHelpers.createClass(e,[{key:"componentDidMount",value:function(){var t=this;d.InteractionManager.runAfterInteractions(function(){t._onLayout()})}},{key:"componentWillReceiveProps",value:function(){this._onLayout()}},{key:"render",value:function(){var t=this,e=this.props,i=(e.forceInset,e.isLandscape,e.children,e.style,this._getSafeAreaStyle());return r.default.createElement(d.Animated.View,{ref:function(e){return t.view=e},onLayout:this._onLayout,style:i,pointerEvents:"box-none"},this.props.children)}}]),e})(a.Component);y.setStatusBarHeight=function(t){v=t},n.default=(0,p.default)(y)},400,[101,12,401]);