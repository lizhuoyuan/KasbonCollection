__d(function(e,r,n,t,a){'use strict';var i=r(a[0]).DeviceEventManager,v=r(a[1]),o=new Set;v.addListener('hardwareBackPress',function(){for(var e=!0,r=Array.from(o.values()).reverse(),n=0;n<r.length;++n)if(r[n]()){e=!1;break}e&&s.exitApp()});var s={exitApp:function(){i.invokeDefaultBackPressHandler()},addEventListener:function(e,r){return o.add(r),{remove:function(){return s.removeEventListener(e,r)}}},removeEventListener:function(e,r){o.delete(r)}};n.exports=s},283,[15,30]);