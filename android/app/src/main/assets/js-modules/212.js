__d(function(e,n,t,r,i){'use strict';var a=n(i[0]),p=n(i[1]),o=n(i[2]),s=a.checkPropTypes,u=o({spring:!0,linear:!0,easeInEaseOut:!0,easeIn:!0,easeOut:!0,keyboard:!0}),c=o({opacity:!0,scaleXY:!0}),y=a.shape({duration:a.number,delay:a.number,springDamping:a.number,initialVelocity:a.number,type:a.oneOf(Object.keys(u)).isRequired,property:a.oneOf(Object.keys(c))}),l=a.shape({duration:a.number.isRequired,create:y,update:y,delete:y});function d(e,n){p.configureNextLayoutAnimation(e,n||function(){},function(){})}function g(e,n,t){return{duration:e,create:{type:n,property:t},update:{type:n},delete:{type:n,property:t}}}var f={easeInEaseOut:g(300,u.easeInEaseOut,c.opacity),linear:g(500,u.linear,c.opacity),spring:{duration:700,create:{type:u.linear,property:c.opacity},update:{type:u.spring,springDamping:.4},delete:{type:u.linear,property:c.opacity}}},b={configureNext:d,create:g,Types:u,Properties:c,checkConfig:function(e,n,t){s({config:l},{config:e},n,t)},Presets:f,easeInEaseOut:d.bind(null,f.easeInEaseOut),linear:d.bind(null,f.linear),spring:d.bind(null,f.spring)};t.exports=b},212,[108,95,132]);