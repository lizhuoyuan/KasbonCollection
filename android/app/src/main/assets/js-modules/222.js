__d(function(e,t,n,a,r){'use strict';var l=t(r[0]),o=t(r[1]),i=t(r[2]),s=(t(r[3]),t(r[4])),u=t(r[5]).StatusBarManager;function c(e){return{backgroundColor:null!=e.backgroundColor?{value:e.backgroundColor,animated:e.animated}:null,barStyle:null!=e.barStyle?{value:e.barStyle,animated:e.animated}:null,translucent:e.translucent,hidden:null!=e.hidden?{value:e.hidden,animated:e.animated,transition:e.showHideTransition}:null,networkActivityIndicatorVisible:e.networkActivityIndicatorVisible}}var d=(function(e){function t(){var e,n,a,r;babelHelpers.classCallCheck(this,t);for(var l=arguments.length,o=Array(l),i=0;i<l;i++)o[i]=arguments[i];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a._stackEntry=null,a._updatePropsStack=function(){clearImmediate(t._updateImmediate),t._updateImmediate=setImmediate(function(){var e,n,a=t._currentValues,r=(e=t._propsStack,n=t._defaultProps,e.reduce(function(e,t){for(var n in t)null!=t[n]&&(e[n]=t[n]);return e},babelHelpers.extends({},n)));a&&a.barStyle.value===r.barStyle.value||u.setStyle(r.barStyle.value),a&&a.backgroundColor.value===r.backgroundColor.value||u.setColor(s(r.backgroundColor.value),r.backgroundColor.animated),a&&a.hidden.value===r.hidden.value||u.setHidden(r.hidden.value),a&&a.translucent===r.translucent||u.setTranslucent(r.translucent),t._currentValues=r})},r=n,babelHelpers.possibleConstructorReturn(a,r)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this._stackEntry=c(this.props),t._propsStack.push(this._stackEntry),this._updatePropsStack()}},{key:"componentWillUnmount",value:function(){var e=t._propsStack.indexOf(this._stackEntry);t._propsStack.splice(e,1),this._updatePropsStack()}},{key:"componentDidUpdate",value:function(){var e=t._propsStack.indexOf(this._stackEntry);this._stackEntry=c(this.props),t._propsStack[e]=this._stackEntry,this._updatePropsStack()}},{key:"render",value:function(){return null}}],[{key:"setHidden",value:function(e,n){n=n||'none',t._defaultProps.hidden.value=e,u.setHidden(e)}},{key:"setBarStyle",value:function(e,n){n=n||!1,t._defaultProps.barStyle.value=e,u.setStyle(e)}},{key:"setNetworkActivityIndicatorVisible",value:function(e){console.warn('`setNetworkActivityIndicatorVisible` is only available on iOS')}},{key:"setBackgroundColor",value:function(e,n){n=n||!1,t._defaultProps.backgroundColor.value=e,u.setColor(s(e),n)}},{key:"setTranslucent",value:function(e){t._defaultProps.translucent=e,u.setTranslucent(e)}}]),t})(l.Component);d._propsStack=[],d._defaultProps=c({animated:!1,showHideTransition:'fade',backgroundColor:'black',barStyle:'default',translucent:!1,hidden:!1,networkActivityIndicatorVisible:!1}),d._updateImmediate=null,d._currentValues=null,d.currentHeight=u.HEIGHT,d.propTypes={hidden:o.bool,animated:o.bool,backgroundColor:i,translucent:o.bool,barStyle:o.oneOf(['default','light-content','dark-content']),networkActivityIndicatorVisible:o.bool,showHideTransition:o.oneOf(['fade','slide'])},d.defaultProps={animated:!1,showHideTransition:'fade'},n.exports=d},222,[111,108,36,23,134,15]);