__d(function(n,t,e,u,r){"use strict";var o=t(r[0]),l=o.LISTENERS,i=o.ATTRIBUTE,c=o.newNode;function f(n,t){for(var e=n[l][t];null!=e;){if(e.kind===i)return e.listener;e=e.next}return null}function a(n,t,e){"function"!=typeof e&&"object"!=typeof e&&(e=null);for(var u=null,r=n[l][t];null!=r;)r.kind===i?null==u?n[l][t]=r.next:u.next=r.next:u=r,r=r.next;null!=e&&(null==u?n[l][t]=c(e,i):u.next=c(e,i))}u.defineCustomEventTarget=function(n,t){function e(){n.call(this)}var u={constructor:{value:e,configurable:!0,writable:!0}};return t.forEach(function(n){u["on"+n]={get:function(){return f(this,n)},set:function(t){a(this,n,t)},configurable:!0,enumerable:!0}}),e.prototype=Object.create(n.prototype,u),e}},64,[63]);