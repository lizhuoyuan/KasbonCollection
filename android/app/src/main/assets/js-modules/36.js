__d(function(n,r,f,e,a){'use strict';var i=r(a[0]),l=function(n,r,f,e,a,l){var b=r[f];return null==b?n?new Error('Required '+a+' `'+(l||f)+'` was not specified in `'+e+'`.'):void 0:'number'!=typeof b&&null===i(b)?new Error('Invalid '+a+' `'+(l||f)+'` supplied to `'+e+'`: '+b+"\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n"):void 0},b=l.bind(null,!1);b.isRequired=l.bind(null,!0),f.exports=b},36,[37]);