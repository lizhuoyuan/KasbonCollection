__d(function(e,t,s,u,n){'use strict';t(n[0]);var a=t(n[1]),r=(function(){function e(t){var s=t.onMoreTasks;babelHelpers.classCallCheck(this,e),this._onMoreTasks=s,this._queueStack=[{tasks:[],popable:!1}]}return babelHelpers.createClass(e,[{key:"enqueue",value:function(e){this._getCurrentQueue().push(e)}},{key:"enqueueTasks",value:function(e){var t=this;e.forEach(function(e){return t.enqueue(e)})}},{key:"cancelTasks",value:function(e){this._queueStack=this._queueStack.map(function(t){return babelHelpers.extends({},t,{tasks:t.tasks.filter(function(t){return-1===e.indexOf(t)})})}).filter(function(e,t){return e.tasks.length>0||0===t})}},{key:"hasTasksToProcess",value:function(){return this._getCurrentQueue().length>0}},{key:"processNext",value:function(){var e=this._getCurrentQueue();if(e.length){var t=e.shift();try{t.gen?this._genPromise(t):t.run?t.run():(a('function'==typeof t,'Expected Function, SimpleTask, or PromiseTask, but got:\n'+JSON.stringify(t,null,2)),t())}catch(e){throw e.message='TaskQueue: Error with task '+(t.name||'')+': '+e.message,e}}}},{key:"_getCurrentQueue",value:function(){var e=this._queueStack.length-1,t=this._queueStack[e];return t.popable&&0===t.tasks.length&&this._queueStack.length>1?(this._queueStack.pop(),this._getCurrentQueue()):t.tasks}},{key:"_genPromise",value:function(e){var t=this;this._queueStack.push({tasks:[],popable:!1});var s=this._queueStack.length-1;e.gen().then(function(){t._queueStack[s].popable=!0,t.hasTasksToProcess()&&t._onMoreTasks()}).catch(function(t){throw t.message="TaskQueue: Error resolving Promise in task "+e.name+": "+t.message,t}).done()}}]),e})();s.exports=r},187,[93,13]);