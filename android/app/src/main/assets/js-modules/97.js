__d(function(n,u,t,e,r){'use strict';u(r[0]);var c=u(r[1]),l={_currentlyFocusedID:null,currentlyFocusedField:function(){return this._currentlyFocusedID},focusTextInput:function(n){this._currentlyFocusedID!==n&&null!==n&&(this._currentlyFocusedID=n,c.dispatchViewManagerCommand(n,c.AndroidTextInput.Commands.focusTextInput,null))},blurTextInput:function(n){this._currentlyFocusedID===n&&null!==n&&(this._currentlyFocusedID=null,c.dispatchViewManagerCommand(n,c.AndroidTextInput.Commands.blurTextInput,null))}};t.exports=l},97,[23,95]);