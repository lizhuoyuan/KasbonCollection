__d(function(e,t,a,s,r){'use strict';var l=t(r[0]),i=t(r[1]),n=t(r[2]),_=t(r[3]),o=t(r[4]),y=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return(e=o(e)||{}).transform&&(e=babelHelpers.extends({},e,{transform:new i(e.transform)})),a._style=e,a}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_walkStyleAndGetValues",value:function(e){var t={};for(var a in e){var s=e[a];s instanceof l?s.__isNative||(t[a]=s.__getValue()):s&&!Array.isArray(s)&&'object'==typeof s?t[a]=this._walkStyleAndGetValues(s):t[a]=s}return t}},{key:"__getValue",value:function(){return this._walkStyleAndGetValues(this._style)}},{key:"_walkStyleAndGetAnimatedValues",value:function(e){var t={};for(var a in e){var s=e[a];s instanceof l?t[a]=s.__getAnimatedValue():s&&!Array.isArray(s)&&'object'==typeof s&&(t[a]=this._walkStyleAndGetAnimatedValues(s))}return t}},{key:"__getAnimatedValue",value:function(){return this._walkStyleAndGetAnimatedValues(this._style)}},{key:"__attach",value:function(){for(var e in this._style){var t=this._style[e];t instanceof l&&t.__addChild(this)}}},{key:"__detach",value:function(){for(var e in this._style){var a=this._style[e];a instanceof l&&a.__removeChild(this)}babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"__detach",this).call(this)}},{key:"__makeNative",value:function(){for(var e in babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"__makeNative",this).call(this),this._style){var a=this._style[e];a instanceof l&&a.__makeNative()}}},{key:"__getNativeConfig",value:function(){var e={};for(var t in this._style)this._style[t]instanceof l&&(e[t]=this._style[t].__getNativeTag());return _.validateStyles(e),{type:'style',style:e}}}]),t})(n);a.exports=y},194,[183,195,185,184,99]);