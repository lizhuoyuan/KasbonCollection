__d(function(e,t,n,i,r){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var n=new Set,i=new Set,r=new Set,u=new Set,o=new Set,l=function(){[n,i,r,u,o].forEach(function(e){return e.clear()}),s.forEach(function(e){return e&&e.remove()})},c=function(e){switch(e){case'action':return n;case'willFocus':return i;case'didFocus':return r;case'willBlur':return u;case'didBlur':return o;default:return null}},d=function(e,t){var n=babelHelpers.extends({},t,{type:e}),i=c(e);i&&i.forEach(function(e){e(n)})},a='didBlur',s=['willFocus','didFocus','willBlur','didBlur','action'].map(function(n){return e(n,function(e){var i=e.state,r=e.lastState,u=e.action,o=r&&r.routes,c=i&&i.routes,s=(r&&r.routes&&r.routes[r.index].key,c&&c[i.index].key),f=s===t,w=o&&o.find(function(e){return e.key===t}),B=c&&c.find(function(e){return e.key===t}),F={context:t+":"+u.type+"_"+(e.context||'Root'),state:B,lastState:w,action:u,type:n},v=!!i&&i.isTransitioning,y=a;'didBlur'===a&&('willFocus'===n&&f?d(a='willFocus',F):'action'===n&&f&&d(a='willFocus',F)),'willFocus'===a&&('didFocus'===n&&f&&!v?d(a='didFocus',F):'action'===n&&f&&!v&&d(a='didFocus',F)),'didFocus'===a&&(f?'willBlur'===n?d(a='willBlur',F):'action'===n&&'didFocus'===y&&d('action',F):d(a='willBlur',F)),'willBlur'===a&&('action'!==n||f||v?'didBlur'===n&&d(a='didBlur',F):d(a='didBlur',F)),'didBlur'!==a||B||l()})});return{addListener:function(e,t){var n=c(e);if(!n)throw new Error("Invalid event name \""+e+"\"");n.add(t);return{remove:function(){n.delete(t)}}}}}},315,[]);