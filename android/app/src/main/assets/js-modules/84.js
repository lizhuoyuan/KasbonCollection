__d(function(e,t,a,r,n){'use strict';var l=t(n[0]).AlertManager,i=(function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"alert",value:function(e,t,a,r){if(void 0!==r)return console.warn('AlertIOS.alert() with a 4th "type" parameter is deprecated and will be removed. Use AlertIOS.prompt() instead.'),void this.prompt(e,t,a,r);this.prompt(e,t,a,'default')}},{key:"prompt",value:function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:'plain-text',n=arguments[4],i=arguments[5];if('function'!=typeof r){var o,s,u=[],c=[];'function'==typeof a?u=[a]:a instanceof Array&&a.forEach(function(e,t){if(u[t]=e.onPress,'cancel'===e.style?o=String(t):'destructive'===e.style&&(s=String(t)),e.text||t<(a||[]).length-1){var r={};r[t]=e.text||'',c.push(r)}}),l.alertWithArgs({title:e||'',message:t||void 0,buttons:c,type:r||void 0,defaultValue:n,cancelButtonKey:o,destructiveButtonKey:s,keyboardType:i},function(e,t){var a=u[e];a&&a(t)})}else{console.warn("You passed a callback function as the \"type\" argument to AlertIOS.prompt(). React Native is assuming  you want to use the deprecated AlertIOS.prompt(title, defaultValue, buttons, callback) signature. The current signature is AlertIOS.prompt(title, message, callbackOrButtons, type, defaultValue, keyboardType) and the old syntax will be removed in a future version.");var p=r;l.alertWithArgs({title:e||'',type:'plain-text',defaultValue:t},function(e,t){p(t)})}}}]),e})();a.exports=i},84,[15]);