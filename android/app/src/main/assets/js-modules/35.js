__d(function(e,t,i,a,r){'use strict';var s=t(r[0]),n=t(r[1]),o=(t(r[2]),t(r[3])),l=t(r[4]),c=t(r[5]),d=t(r[6]),p=t(r[7]),h=t(r[8]),m=t(r[9]),u=(t(r[10]),m({displayName:'ActivityIndicator',mixins:[n],propTypes:babelHelpers.extends({},h,{animating:l.bool,color:s,size:l.oneOfType([l.oneOf(['small','large']),l.number]),hidesWhenStopped:l.bool}),getDefaultProps:function(){return{animating:!0,color:void 0,hidesWhenStopped:!0,size:'small'}},render:function(){var e=this.props,t=e.onLayout,i=e.style,a=babelHelpers.objectWithoutProperties(e,["onLayout","style"]),r=void 0;switch(a.size){case'small':r=y.sizeSmall;break;case'large':r=y.sizeLarge;break;default:r={height:a.size,width:a.size}}var s=babelHelpers.extends({},a,{style:r,styleAttr:'Normal',indeterminate:!0});return c.createElement(p,{onLayout:t,style:[y.container,i]},c.createElement(o,s))}})),y=d.create({container:{alignItems:'center',justifyContent:'center'},sizeSmall:{width:20,height:20},sizeLarge:{width:36,height:36}});i.exports=u},35,[36,38,23,107,108,111,150,152,112,155,127]);