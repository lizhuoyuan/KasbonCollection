__d(function(o,n,e,t,s){'use strict';var i=n(s[0]),r=n(s[1]),c=n(s[2]),p=n(s[3]),l=(n(s[4]),n(s[5])),a=n(s[6]),h=n(s[7]),d=n(s[8]),v=n(s[9]),b=n(s[10]),f=p.oneOfType([i.propTypes.source,p.oneOf([])]),u=d({displayName:'ToolbarAndroid',mixins:[r],propTypes:babelHelpers.extends({},a,{actions:p.arrayOf(p.shape({title:p.string.isRequired,icon:f,show:p.oneOf(['always','ifRoom','never']),showWithText:p.bool})),logo:f,navIcon:f,onActionSelected:p.func,onIconClicked:p.func,overflowIcon:f,subtitle:p.string,subtitleColor:h,title:p.string,titleColor:h,contentInsetStart:p.number,contentInsetEnd:p.number,rtl:p.bool,testID:p.string}),render:function(){var o=babelHelpers.extends({},this.props);if(this.props.logo&&(o.logo=b(this.props.logo)),this.props.navIcon&&(o.navIcon=b(this.props.navIcon)),this.props.overflowIcon&&(o.overflowIcon=b(this.props.overflowIcon)),this.props.actions){for(var n=[],e=0;e<this.props.actions.length;e++){var t=babelHelpers.extends({},this.props.actions[e]);t.icon&&(t.icon=b(t.icon)),t.show&&(t.show=l.ToolbarAndroid.Constants.ShowAsAction[t.show]),n.push(t)}o.nativeActions=n}return c.createElement(I,babelHelpers.extends({onSelect:this._onSelect},o))},_onSelect:function(o){var n=o.nativeEvent.position;-1===n?this.props.onIconClicked&&this.props.onIconClicked():this.props.onActionSelected&&this.props.onActionSelected(n)}}),I=v('ToolbarAndroid',u,{nativeOnly:{nativeActions:!0}});e.exports=u},273,[206,38,111,108,153,95,112,36,155,127,142]);