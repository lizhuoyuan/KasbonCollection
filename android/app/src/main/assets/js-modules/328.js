__d(function(e,t,n,r,u){Object.defineProperty(r,"__esModule",{value:!0});var s=t(u[0]),o=babelHelpers.interopRequireDefault(s),l=t(u[1]);r.default=function(e){var t,n;return n=t=(function(t){function n(){var e,t,r,u;babelHelpers.classCallCheck(this,n);for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return t=r=babelHelpers.possibleConstructorReturn(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),r._previouslyFocusedTextInput=null,r._handleGestureBegin=function(){r._previouslyFocusedTextInput=l.TextInput.State.currentlyFocusedField(),r._previouslyFocusedTextInput&&l.TextInput.State.blurTextInput(r._previouslyFocusedTextInput),r.props.onGestureBegin&&r.props.onGestureBegin()},r._handleGestureCanceled=function(){r._previouslyFocusedTextInput&&l.TextInput.State.focusTextInput(r._previouslyFocusedTextInput),r.props.onGestureCanceled&&r.props.onGestureCanceled()},r._handleGestureFinish=function(){r._previouslyFocusedTextInput=null,r.props.onGestureFinish&&r.props.onGestureFinish()},r._handleTransitionStart=function(e,t){if(e.index!==t.index){var n=l.TextInput.State.currentlyFocusedField();n&&l.TextInput.State.blurTextInput(n)}r.props.onTransitionStart&&r.props.onTransitionStart(e,t)},u=t,babelHelpers.possibleConstructorReturn(r,u)}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"render",value:function(){return o.default.createElement(e,babelHelpers.extends({},this.props,{onGestureBegin:this._handleGestureBegin,onGestureCanceled:this._handleGestureCanceled,onGestureFinish:this._handleGestureFinish,onTransitionStart:this._handleTransitionStart}))}}]),n})(o.default.Component),t.router=e.router,n}},328,[101,12]);