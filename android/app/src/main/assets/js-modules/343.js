__d(function(e,t,i,n,a){Object.defineProperty(n,"__esModule",{value:!0});var r=t(a[0]),l=babelHelpers.interopRequireDefault(r),o=t(a[1]),s=t(a[2]),c=babelHelpers.interopRequireDefault(s),u=t(a[3]),d=(function(e){function t(){var e,i,n,a;babelHelpers.classCallCheck(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return i=n=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={},n._onTextLayout=function(e){n.state.initialTextWidth||n.setState({initialTextWidth:e.nativeEvent.layout.x+e.nativeEvent.layout.width})},a=i,babelHelpers.possibleConstructorReturn(n,a)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_renderBackImage",value:function(){var e=this.props,t=e.backImage,i=e.title,n=e.tintColor,a=void 0,r=void 0;return l.default.isValidElement(t)?t:(t?(a=t,r={tintColor:n,title:i}):(a=o.Image,r={style:[p.icon,!!i&&p.iconWithTitle,!!n&&{tintColor:n}],source:u}),l.default.createElement(a,r))}},{key:"render",value:function(){var e=this.props,t=e.onPress,i=e.width,n=e.title,a=e.titleStyle,r=e.tintColor,s=e.truncatedTitle,u=!(!this.state.initialTextWidth||!i)&&this.state.initialTextWidth>i?s:n;u&&u.length>8&&(u=s);var d=this.props,b=d.ButtonContainerComponent,f=d.LabelContainerComponent;return l.default.createElement(c.default,{accessibilityComponentType:"button",accessibilityLabel:u,accessibilityTraits:"button",testID:"header-back",delayPressIn:0,onPress:t,style:p.container,borderless:!0},l.default.createElement(o.View,{style:p.container},l.default.createElement(b,null,this._renderBackImage()),'string'==typeof u&&l.default.createElement(f,null,l.default.createElement(o.Text,{onLayout:this._onTextLayout,style:[p.title,!!r&&{color:r},a],numberOfLines:1},u))))}}]),t})(l.default.PureComponent);d.defaultProps={tintColor:'#037aff',truncatedTitle:'Back'};var p=o.StyleSheet.create({container:{alignItems:'center',flexDirection:'row',backgroundColor:'transparent'},title:{fontSize:17,paddingRight:10},icon:{height:21,width:12,marginLeft:9,marginRight:22,marginVertical:12,resizeMode:'contain',transform:[{scaleX:o.I18nManager.isRTL?-1:1}]},iconWithTitle:{marginRight:3}});n.default=d},343,[101,12,341,342]);