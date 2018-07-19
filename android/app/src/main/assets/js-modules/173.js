__d(function(e,t,s,o,r){'use strict';var n=t(r[0]),i=t(r[1]),a=t(r[2]),p=t(r[3]),l=t(r[4]),d=t(r[5]),c=t(r[6]),h=t(r[7]),u=t(r[8]),b=t(r[9]),f=a.shape({type:a.oneOf(['RippleAndroid']),color:a.number,borderless:a.bool}),y=a.shape({type:a.oneOf(['ThemeAttrAndroid']),attribute:a.string.isRequired}),P=a.oneOfType([f,y]),g={top:20,left:20,right:20,bottom:30},H=h({displayName:'TouchableNativeFeedback',propTypes:babelHelpers.extends({},d.propTypes,{background:P,hasTVPreferredFocus:a.bool,useForeground:a.bool}),statics:{SelectableBackground:function(){return{type:'ThemeAttrAndroid',attribute:'selectableItemBackground'}},SelectableBackgroundBorderless:function(){return{type:'ThemeAttrAndroid',attribute:'selectableItemBackgroundBorderless'}},Ripple:function(e,t){return{type:'RippleAndroid',color:b(e),borderless:t}},canUseNativeForeground:function(){return n.Version>=23}},mixins:[l.Mixin],getDefaultProps:function(){return{background:this.SelectableBackground()}},getInitialState:function(){return this.touchableGetInitialState()},componentDidMount:function(){u(this.props)},UNSAFE_componentWillReceiveProps:function(e){u(e)},touchableHandleActivePressIn:function(e){this.props.onPressIn&&this.props.onPressIn(e),this._dispatchPressedStateChange(!0),this.pressInLocation&&this._dispatchHotspotUpdate(this.pressInLocation.locationX,this.pressInLocation.locationY)},touchableHandleActivePressOut:function(e){this.props.onPressOut&&this.props.onPressOut(e),this._dispatchPressedStateChange(!1)},touchableHandlePress:function(e){this.props.onPress&&this.props.onPress(e)},touchableHandleLongPress:function(e){this.props.onLongPress&&this.props.onLongPress(e)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||g},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn},touchableGetLongPressDelayMS:function(){return this.props.delayLongPress},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut},_handleResponderMove:function(e){this.touchableHandleResponderMove(e),this._dispatchHotspotUpdate(e.nativeEvent.locationX,e.nativeEvent.locationY)},_dispatchHotspotUpdate:function(e,t){c.dispatchViewManagerCommand(p.findNodeHandle(this),c.RCTView.Commands.hotspotUpdate,[e||0,t||0])},_dispatchPressedStateChange:function(e){c.dispatchViewManagerCommand(p.findNodeHandle(this),c.RCTView.Commands.setPressed,[e])},render:function(){var e,t=i.Children.only(this.props.children),s=t.props.children;l.TOUCH_TARGET_DEBUG&&'View'===t.type.displayName&&(Array.isArray(s)||(s=[s]),s.push(l.renderDebugView({color:'brown',hitSlop:this.props.hitSlop}))),this.props.useForeground&&!H.canUseNativeForeground()&&console.warn("Requested foreground ripple, but it is not available on this version of Android. Consider calling TouchableNativeFeedback.canUseNativeForeground() and using a different Touchable if the result is false.");var o=this.props.useForeground&&H.canUseNativeForeground()?'nativeForegroundAndroid':'nativeBackgroundAndroid',r=babelHelpers.extends({},t.props,(e={},babelHelpers.defineProperty(e,o,this.props.background),babelHelpers.defineProperty(e,"accessible",!1!==this.props.accessible),babelHelpers.defineProperty(e,"accessibilityLabel",this.props.accessibilityLabel),babelHelpers.defineProperty(e,"accessibilityComponentType",this.props.accessibilityComponentType),babelHelpers.defineProperty(e,"accessibilityTraits",this.props.accessibilityTraits),babelHelpers.defineProperty(e,"children",s),babelHelpers.defineProperty(e,"testID",this.props.testID),babelHelpers.defineProperty(e,"onLayout",this.props.onLayout),babelHelpers.defineProperty(e,"hitSlop",this.props.hitSlop),babelHelpers.defineProperty(e,"isTVSelectable",!0),babelHelpers.defineProperty(e,"hasTVPreferredFocus",this.props.hasTVPreferredFocus),babelHelpers.defineProperty(e,"onStartShouldSetResponder",this.touchableHandleStartShouldSetResponder),babelHelpers.defineProperty(e,"onResponderTerminationRequest",this.touchableHandleResponderTerminationRequest),babelHelpers.defineProperty(e,"onResponderGrant",this.touchableHandleResponderGrant),babelHelpers.defineProperty(e,"onResponderMove",this._handleResponderMove),babelHelpers.defineProperty(e,"onResponderRelease",this.touchableHandleResponderRelease),babelHelpers.defineProperty(e,"onResponderTerminate",this.touchableHandleResponderTerminate),e));return i.cloneElement(t,r)}});s.exports=H},173,[23,111,108,39,166,174,95,155,176,134]);