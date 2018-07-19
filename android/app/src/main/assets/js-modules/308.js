__d(function(t,e,n,a,i){Object.defineProperty(a,"__esModule",{value:!0}),a._TESTING_ONLY_reset_container_count=function(){0},a.default=function(t){var e=(function(e){function n(e){var a=this;babelHelpers.classCallCheck(this,n);var i=babelHelpers.possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return i.subs=null,i._actionEventSubscribers=new Set,i._handleOpenURL=function(e){var n=e.url,a=(0,d.urlToPathAndParams)(n,i.props.uriPrefix);if(a){var r=a.path,o=a.params,s=t.router.getActionForPathAndParams(r,o);s&&i.dispatch(s)}},i._persistNavigationState=function(t){var e;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=i.props.persistenceKey){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,regeneratorRuntime.awrap(s.AsyncStorage.setItem(e,JSON.stringify(t)));case 5:case"end":return n.stop()}},null,a)},i.dispatch=function(e){if(i.props.navigation)return i.props.navigation.dispatch(e);i._navState=i._navState||i.state.nav;var n=i._navState;(0,f.default)(n,'should be set in constructor if stateful');var a=t.router.getStateForAction(e,n),r=null===a?n:a,o=function(){i._actionEventSubscribers.forEach(function(t){return t({type:'action',action:e,state:r,lastState:n})})};return null===a?(o(),!0):r!==n?(i._navState=r,i.setState({nav:r},function(){i._onNavigationStateChange(n,r,e),o(),i._persistNavigationState(r)}),!0):(o(),!1)},i._getScreenProps=function(){return i.props.screenProps},b(e),i._initialAction=c.default.init(),i._isStateful()&&(i.subs=s.BackHandler.addEventListener('hardwareBackPress',function(){if(i._isMounted)return i.dispatch(c.default.back());i.subs&&i.subs.remove()})),i.state={nav:i._isStateful()&&!e.persistenceKey?t.router.getStateForAction(i._initialAction):null},i}return babelHelpers.inherits(n,e),babelHelpers.createClass(n,null,[{key:"getDerivedStateFromProps",value:function(t,e){return b(t),null}}]),babelHelpers.createClass(n,[{key:"_renderLoading",value:function(){return this.props.renderLoadingExperimental?this.props.renderLoadingExperimental():null}},{key:"_isStateful",value:function(){return _(this.props)}},{key:"_validateProps",value:function(t){if(!this._isStateful()){t.navigation,t.screenProps;var e=babelHelpers.objectWithoutProperties(t,["navigation","screenProps"]),n=Object.keys(e);if(0!==n.length)throw new Error("This navigator has both navigation and container props, so it is unclear if it should own its own state. Remove props: \""+n.join(', ')+"\" if the navigator should get its state from the navigation prop. If the navigator should maintain its own state, do not pass a navigation prop.")}}},{key:"_onNavigationStateChange",value:function(t,e,n){void 0===this.props.onNavigationStateChange&&this._isStateful()&&process.env.REACT_NAV_LOGGING?console.group?(console.group('Navigation Dispatch: '),console.log('Action: ',n),console.log('New State: ',e),console.log('Last State: ',t),console.groupEnd()):console.log('Navigation Dispatch: ',{action:n,newState:e,lastState:t}):'function'==typeof this.props.onNavigationStateChange&&this.props.onNavigationStateChange(t,e,n)}},{key:"componentDidUpdate",value:function(){this._navState===this.state.nav&&(this._navState=null)}},{key:"componentDidMount",value:function(){var e,n,a,i,r,o,u,l,c,p,h,v,f=this;return regeneratorRuntime.async(function(g){for(;;)switch(g.prev=g.next){case 0:if(this._isMounted=!0,this._isStateful()){g.next=3;break}return g.abrupt("return");case 3:if(0,s.Linking.addEventListener('url',this._handleOpenURL),e=this.props,n=e.persistenceKey,a=e.uriPrefix,g.t0=n,!g.t0){g.next=11;break}return g.next=10,regeneratorRuntime.awrap(s.AsyncStorage.getItem(n));case 10:g.t0=g.sent;case 11:return i=g.t0,g.next=14,regeneratorRuntime.awrap(s.Linking.getInitialURL());case 14:if(r=g.sent,o=r&&(0,d.urlToPathAndParams)(r,a),u=this._initialAction,(l=this.state.nav)||(process.env.REACT_NAV_LOGGING&&console.log('Init new Navigation State'),l=t.router.getStateForAction(u)),i)try{l=JSON.parse(i),S=!0}catch(t){}if(o&&(c=o.path,p=o.params,(h=t.router.getActionForPathAndParams(c,p))&&(process.env.REACT_NAV_LOGGING&&console.log('Applying Navigation Action for Initial URL:',r),u=h,l=t.router.getStateForAction(h,l))),v=function(){return f._actionEventSubscribers.forEach(function(t){return t({type:'action',action:u,state:f.state.nav,lastState:null})})},l!==this.state.nav){g.next=25;break}return v(),g.abrupt("return");case 25:this.setState({nav:l},function(){S=!1,v()});case 26:case"end":return g.stop()}},null,this)}},{key:"componentDidCatch",value:function(t,e){if(!S)throw t;S=!1,console.warn('Uncaught exception while starting app from persisted navigation state! Trying to render again with a fresh navigation state..'),this.dispatch(c.default.init())}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,s.Linking.removeEventListener('url',this._handleOpenURL),this.subs&&this.subs.remove(),this._isStateful()&&0}},{key:"render",value:function(){var e=this,n=this.props.navigation;if(this._isStateful()){var a=this.state.nav;if(!a)return this._renderLoading();this._navigation&&this._navigation.state===a||(this._navigation=(0,h.default)(t.router,a,this.dispatch,this._actionEventSubscribers,this._getScreenProps,function(){return e._navigation})),n=this._navigation}return(0,f.default)(n,'failed to get navigation'),o.default.createElement(t,babelHelpers.extends({},this.props,{navigation:n}))}}]),n})(o.default.Component);return e.router=t.router,e.navigationOptions=null,(0,u.polyfill)(e)};var r=e(i[0]),o=babelHelpers.interopRequireDefault(r),s=e(i[1]),u=e(i[2]),l=e(i[3]),c=babelHelpers.interopRequireDefault(l),p=e(i[4]),h=babelHelpers.interopRequireDefault(p),v=e(i[5]),f=babelHelpers.interopRequireDefault(v),g=e(i[6]),d=(babelHelpers.interopRequireDefault(g),e(i[7]));function _(t){return!t.navigation}function b(t){if(!_(t)){t.navigation,t.screenProps;var e=babelHelpers.objectWithoutProperties(t,["navigation","screenProps"]),n=Object.keys(e);if(0!==n.length)throw new Error("This navigator has both navigation and container props, so it is unclear if it should own its own state. Remove props: \""+n.join(', ')+"\" if the navigator should get its state from the navigation prop. If the navigator should maintain its own state, do not pass a navigation prop.")}}var S=!1},308,[101,12,309,310,311,313,317,318]);