__d(function(t,i,e,n,a){'use strict';i(a[0]);var v=i(a[1]).TVNavigationEventEmitter,o=i(a[2]);function _(){this.__nativeTVNavigationEventListener=null,this.__nativeTVNavigationEventEmitter=null}_.prototype.enable=function(t,i){this.__nativeTVNavigationEventEmitter=new o(v),this.__nativeTVNavigationEventListener=this.__nativeTVNavigationEventEmitter.addListener('onHWKeyEvent',function(e){i&&i(t,e)})},_.prototype.disable=function(){this.__nativeTVNavigationEventListener&&(this.__nativeTVNavigationEventListener.remove(),delete this.__nativeTVNavigationEventListener),this.__nativeTVNavigationEventEmitter&&delete this.__nativeTVNavigationEventEmitter},e.exports=_},170,[23,15,68]);