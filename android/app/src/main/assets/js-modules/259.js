__d(function(e,i,n,t,o){'use strict';var s=i(o[0]),a=i(o[1]),r=i(o[2]),p=i(o[3]),h=i(o[4]),u=i(o[5]),d=i(o[6]),l=i(o[7]),c=i(o[8]),_=i(o[9]),m=a.isRTL,w=c({displayName:'SwipeableRow',_panResponder:{},_previousLeft:0,mixins:[d],propTypes:{children:h.any,isOpen:h.bool,preventSwipeRight:h.bool,maxSwipeDistance:h.number.isRequired,onOpen:h.func.isRequired,onClose:h.func.isRequired,onSwipeEnd:h.func.isRequired,onSwipeStart:h.func.isRequired,shouldBounceOnMount:h.bool,slideoutView:h.node.isRequired,swipeThreshold:h.number.isRequired},getInitialState:function(){return{currentLeft:new s.Value(this._previousLeft),isSwipeableViewRendered:!1,rowHeight:null}},getDefaultProps:function(){return{isOpen:!1,preventSwipeRight:!1,maxSwipeDistance:0,onOpen:_,onClose:_,onSwipeEnd:_,onSwipeStart:_,swipeThreshold:30}},UNSAFE_componentWillMount:function(){this._panResponder=r.create({onMoveShouldSetPanResponderCapture:this._handleMoveShouldSetPanResponderCapture,onPanResponderGrant:this._handlePanResponderGrant,onPanResponderMove:this._handlePanResponderMove,onPanResponderRelease:this._handlePanResponderEnd,onPanResponderTerminationRequest:this._onPanResponderTerminationRequest,onPanResponderTerminate:this._handlePanResponderEnd,onShouldBlockNativeResponder:function(e,i){return!1}})},componentDidMount:function(){var e=this;this.props.shouldBounceOnMount&&this.setTimeout(function(){e._animateBounceBack(400)},700)},UNSAFE_componentWillReceiveProps:function(e){this.props.isOpen&&!e.isOpen&&this._animateToClosedPosition()},render:function(){var e=void 0;this.state.isSwipeableViewRendered&&this.state.rowHeight&&(e=p.createElement(l,{style:[S.slideOutContainer,{height:this.state.rowHeight}]},this.props.slideoutView));var i=p.createElement(s.View,{onLayout:this._onSwipeableViewLayout,style:{transform:[{translateX:this.state.currentLeft}]}},this.props.children);return p.createElement(l,this._panResponder.panHandlers,e,i)},close:function(){this.props.onClose(),this._animateToClosedPosition()},_onSwipeableViewLayout:function(e){this.setState({isSwipeableViewRendered:!0,rowHeight:e.nativeEvent.layout.height})},_handleMoveShouldSetPanResponderCapture:function(e,i){return i.dy<10&&this._isValidSwipe(i)},_handlePanResponderGrant:function(e,i){},_handlePanResponderMove:function(e,i){this._isSwipingExcessivelyRightFromClosedPosition(i)||(this.props.onSwipeStart(),this._isSwipingRightFromClosed(i)?this._swipeSlowSpeed(i):this._swipeFullSpeed(i))},_isSwipingRightFromClosed:function(e){var i=m?-e.dx:e.dx;return 0===this._previousLeft&&i>0},_swipeFullSpeed:function(e){this.state.currentLeft.setValue(this._previousLeft+e.dx)},_swipeSlowSpeed:function(e){this.state.currentLeft.setValue(this._previousLeft+e.dx/4)},_isSwipingExcessivelyRightFromClosedPosition:function(e){var i=m?-e.dx:e.dx;return this._isSwipingRightFromClosed(e)&&i>120},_onPanResponderTerminationRequest:function(e,i){return!1},_animateTo:function(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_;s.timing(this.state.currentLeft,{duration:n,toValue:e,useNativeDriver:!0}).start(function(){i._previousLeft=e,t()})},_animateToOpenPosition:function(){var e=m?-this.props.maxSwipeDistance:this.props.maxSwipeDistance;this._animateTo(-e)},_animateToOpenPositionWith:function(e,i){e=e>.3?e:.3;var n=Math.abs((this.props.maxSwipeDistance-Math.abs(i))/e),t=m?-this.props.maxSwipeDistance:this.props.maxSwipeDistance;this._animateTo(-t,n)},_animateToClosedPosition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;this._animateTo(0,e)},_animateToClosedPositionDuringBounce:function(){this._animateToClosedPosition(300)},_animateBounceBack:function(e){var i=m?-30:30;this._animateTo(-i,e,this._animateToClosedPositionDuringBounce)},_isValidSwipe:function(e){return!(this.props.preventSwipeRight&&0===this._previousLeft&&e.dx>0)&&Math.abs(e.dx)>10},_shouldAnimateRemainder:function(e){return Math.abs(e.dx)>this.props.swipeThreshold||e.vx>.3},_handlePanResponderEnd:function(e,i){var n=m?-i.dx:i.dx;this._isSwipingRightFromClosed(i)?(this.props.onOpen(),this._animateBounceBack(300)):this._shouldAnimateRemainder(i)?n<0?(this.props.onOpen(),this._animateToOpenPositionWith(i.vx,n)):(this.props.onClose(),this._animateToClosedPosition()):0===this._previousLeft?this._animateToClosedPosition():this._animateToOpenPosition(),this.props.onSwipeEnd()}}),S=u.create({slideOutContainer:{bottom:0,left:0,position:'absolute',right:0,top:0}});n.exports=w},259,[178,245,260,111,108,150,175,152,155,28]);