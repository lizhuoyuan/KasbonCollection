__d(function(e,a,t,o,i){Object.defineProperty(o,"__esModule",{value:!0});var n=a(i[0]),r=(babelHelpers.interopRequireDefault(n),a(i[1]),a(i[2])),l=a(i[3]),b=babelHelpers.interopRequireDefault(l),d=a(i[4]),s=babelHelpers.interopRequireDefault(d),u=a(i[5]),p=function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=babelHelpers.extends({},e.Presets.Default,t),i=(0,r.TabRouter)(a,o),n=(0,r.createNavigator)(b.default,i,o);return(0,r.createNavigationContainer)(n)},f={iOSBottomTabs:{tabBarComponent:babelHelpers.interopRequireDefault(u).default,tabBarPosition:'bottom',swipeEnabled:!1,animationEnabled:!1,initialLayout:void 0},AndroidTopTabs:{tabBarComponent:s.default,tabBarPosition:'top',swipeEnabled:!0,animationEnabled:!0,initialLayout:void 0}};p.Presets={iOSBottomTabs:f.iOSBottomTabs,AndroidTopTabs:f.AndroidTopTabs,Default:f.AndroidTopTabs},o.default=p},381,[101,12,307,382,393,395]);