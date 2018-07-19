__d(function(e,t,r,n,i){Object.defineProperty(n,"__esModule",{value:!0});var o=t(i[0]),a=babelHelpers.interopRequireDefault(o),l=t(i[1]),s=t(i[2]),d=babelHelpers.interopRequireDefault(s),p=t(i[3]),u=babelHelpers.interopRequireDefault(p),f=t(i[4]),c=babelHelpers.interopRequireDefault(f),h=t(i[5]),g=babelHelpers.interopRequireDefault(h),b=t(i[6]),m=babelHelpers.interopRequireDefault(b),y=t(i[7]),v=babelHelpers.interopRequireDefault(y),k=(function(e){function t(){var e,r,n,i;babelHelpers.classCallCheck(this,t);for(var o=arguments.length,l=Array(o),s=0;s<o;s++)l[s]=arguments[s];return r=n=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={widths:{}},n._renderTitleComponent=function(e){var t=e.scene.descriptor.options,r=t.headerTitle;if(a.default.isValidElement(r))return r;var i=n._getHeaderTitleString(e.scene),o=t.headerTitleStyle,l=t.headerTintColor,s=t.headerTitleAllowFontScaling,d=r&&'string'!=typeof r?r:u.default;return a.default.createElement(d,{onLayout:void 0,allowFontScaling:null==s||s,style:[l?{color:l}:null,o]},i)},n._renderLeftComponent=function(e){var t=e.scene.descriptor.options;if(a.default.isValidElement(t.headerLeft)||null===t.headerLeft)return t.headerLeft;if(0!==e.scene.index){var r=n._getBackButtonTitleString(e.scene),i=n._getTruncatedBackButtonTitle(e.scene),o=n.state.widths[e.scene.key]?(n.props.layout.initWidth-n.state.widths[e.scene.key])/2:void 0,l=t.headerLeft||c.default;return a.default.createElement(l,{onPress:function(){requestAnimationFrame(function(){e.scene.descriptor.navigation.goBack(e.scene.descriptor.key)})},pressColorAndroid:t.headerPressColorAndroid,tintColor:t.headerTintColor,backImage:t.headerBackImage,title:r,truncatedTitle:i,titleStyle:t.headerBackTitleStyle,width:o})}},n._renderModularLeftComponent=function(e,t,r){var i=e.scene.descriptor,o=i.options,l=i.navigation,s=n._getBackButtonTitleString(e.scene),d=n._getTruncatedBackButtonTitle(e.scene),p=n.state.widths[e.scene.key]?(n.props.layout.initWidth-n.state.widths[e.scene.key])/2:void 0;return a.default.createElement(g.default,{onPress:function(){requestAnimationFrame(function(){l.goBack(e.scene.descriptor.key)})},ButtonContainerComponent:t,LabelContainerComponent:r,pressColorAndroid:o.headerPressColorAndroid,tintColor:o.headerTintColor,backImage:o.headerBackImage,title:s,truncatedTitle:d,titleStyle:o.headerBackTitleStyle,width:p})},n._renderRightComponent=function(e){return e.scene.descriptor.options.headerRight||null},i=r,babelHelpers.possibleConstructorReturn(n,i)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_getHeaderTitleString",value:function(e){var t=e.descriptor.options;return'string'==typeof t.headerTitle?t.headerTitle:(t.title&&t.title,t.title)}},{key:"_getLastScene",value:function(e){return this.props.scenes.find(function(t){return t.index===e.index-1})}},{key:"_getBackButtonTitleString",value:function(e){var t=this._getLastScene(e);if(!t)return null;var r=t.descriptor.options.headerBackTitle;return r||null===r?r:this._getHeaderTitleString(t)}},{key:"_getTruncatedBackButtonTitle",value:function(e){var t=this._getLastScene(e);return t?t.descriptor.options.headerTruncatedBackTitle:null}},{key:"_renderLeft",value:function(e){var t=e.scene.descriptor.options;return'uikit'!==this.props.transitionPreset||t.headerBackImage||t.headerLeft||null===t.headerLeft?this._renderSubView(e,'left',this._renderLeftComponent,this.props.leftInterpolator):this._renderModularSubView(e,'left',this._renderModularLeftComponent,this.props.leftLabelInterpolator,this.props.leftButtonInterpolator)}},{key:"_renderTitle",value:function(e,t){var r={},n=this.props.transitionPreset;return t.hasLeftComponent||(r.left=0),t.hasRightComponent||(r.right=0),this._renderSubView(babelHelpers.extends({},e,{style:r}),'title',this._renderTitleComponent,'uikit'===n?this.props.titleFromLeftInterpolator:this.props.titleInterpolator)}},{key:"_renderRight",value:function(e){return this._renderSubView(e,'right',this._renderRightComponent,this.props.rightInterpolator)}},{key:"_renderModularSubView",value:function(e,t,r,n,i){var o=this,s=e.scene,d=s.index,p=s.isStale,u=s.key;if(0!==d){var f=this.props.navigation.state.index-d;if(Math.abs(f)>2)return null;var c=r(e,function(t){var r=t.children;return a.default.createElement(l.Animated.View,{style:[i(babelHelpers.extends({},o.props,e))]},r)},function(t){var r=t.children;return a.default.createElement(l.Animated.View,{style:[n(babelHelpers.extends({},o.props,e))]},r)});if(null===c)return c;var h=0!==f||p?'none':'box-none';return a.default.createElement(l.View,{key:t+"_"+u,pointerEvents:h,style:[C.item,C[t],e.style]},c)}}},{key:"_renderSubView",value:function(e,t,r,n){var i=e.scene,o=i.index,s=i.isStale,d=i.key,p=this.props.navigation.state.index-o;if(Math.abs(p)>2)return null;var u=r(e);if(null==u)return null;var f=0!==p||s?'none':'box-none';return a.default.createElement(l.Animated.View,{pointerEvents:f,key:t+"_"+d,style:[C.item,C[t],e.style,n(babelHelpers.extends({},this.props,e))]},u)}},{key:"_renderHeader",value:function(e){var t=e.scene.descriptor.options;if(null===t.header)return null;var r=this._renderLeft(e),n=this._renderRight(e),i=this._renderTitle(e,{hasLeftComponent:!!r,hasRightComponent:!!n}),o=this.props,s=(o.isLandscape,o.transitionPreset,{style:C.header,key:"scene_"+e.scene.key});return t.headerLeft||t.headerBackImage,a.default.createElement(l.View,s,i,r,n)}},{key:"render",value:function(){var e=this,t=void 0,r=this.props,n=r.mode,i=r.scene;r.isLandscape;if('float'===n){var o={};this.props.scenes.forEach(function(e){o[e.index]=e}),t=Object.values(o).map(function(t){return{position:e.props.position,progress:e.props.progress,scene:t}}).map(this._renderHeader,this)}else t=this._renderHeader({position:new l.Animated.Value(this.props.scene.index),progress:new l.Animated.Value(0),scene:this.props.scene});var s=i.descriptor.options,p=s.headerStyle,u=void 0===p?{}:p,f=l.StyleSheet.flatten(u),c=(f.alignItems,f.justifyContent,f.flex,f.flexDirection,f.flexGrow,f.flexShrink,f.flexBasis,f.flexWrap,f.position,f.padding,f.paddingHorizontal,f.paddingVertical,f.paddingTop,f.paddingRight,f.paddingBottom,f.paddingLeft,f.top,f.right,f.bottom,f.left,babelHelpers.objectWithoutProperties(f,["alignItems","justifyContent","flex","flexDirection","flexGrow","flexShrink","flexBasis","flexWrap","position","padding","paddingHorizontal","paddingVertical","paddingTop","paddingRight","paddingBottom","paddingLeft","top","right","bottom","left"])),h=[s.headerTransparent?C.transparentContainer:C.container,{height:56},c],g=s.headerForceInset||{top:'always',bottom:'never'};return a.default.createElement(l.Animated.View,{style:[this.props.layoutInterpolator(this.props),null]},a.default.createElement(d.default,{forceInset:g,style:h},a.default.createElement(l.View,{style:l.StyleSheet.absoluteFill},s.headerBackground),a.default.createElement(l.View,{style:C.flexOne},t)))}}],[{key:"HEIGHT",get:function(){return 56}}]),t})(a.default.PureComponent);k.defaultProps={layoutInterpolator:m.default.forLayout,leftInterpolator:m.default.forLeft,leftButtonInterpolator:m.default.forLeftButton,leftLabelInterpolator:m.default.forLeftLabel,titleFromLeftInterpolator:m.default.forCenterFromLeft,titleInterpolator:m.default.forCenter,rightInterpolator:m.default.forRight};var _;_={shadowColor:'black',shadowOpacity:.1,shadowRadius:l.StyleSheet.hairlineWidth,shadowOffset:{height:l.StyleSheet.hairlineWidth},elevation:4};var C=l.StyleSheet.create({container:babelHelpers.extends({backgroundColor:'#FFF'},_),transparentContainer:babelHelpers.extends({position:'absolute',top:0,left:0,right:0},_),header:babelHelpers.extends({},l.StyleSheet.absoluteFillObject,{flexDirection:'row'}),item:{backgroundColor:'transparent'},iconMaskContainer:{flex:1,flexDirection:'row',justifyContent:'center'},iconMaskFillerRect:{flex:1,backgroundColor:'#d8d8d8',marginLeft:-3},iconMask:{height:21,width:12,marginLeft:9,marginTop:-.5,alignSelf:'center',resizeMode:'contain',transform:[{scaleX:l.I18nManager.isRTL?-1:1}]},title:{bottom:0,top:0,left:56,right:56,position:'absolute',alignItems:'center',flexDirection:'row',justifyContent:'flex-start'},left:{left:0,bottom:0,top:0,position:'absolute',alignItems:'center',flexDirection:'row'},right:{right:0,bottom:0,top:0,position:'absolute',flexDirection:'row',alignItems:'center'},flexOne:{flex:1}});n.default=(0,v.default)(k)},335,[101,12,336,339,340,343,344,346,347]);