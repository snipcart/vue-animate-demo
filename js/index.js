!function(){"use strict";var t=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t};new Vue({el:"#app",data:function(){return{points:{a:-1,b:-1,c:-1,d:-1,e:-1}}},computed:{path:function(){var t=this;return Object.keys(this.points).filter(function(t){return~"abcde".indexOf(t)}).map(function(n,e){return[100*e,100-t.points[n]]})}},methods:{setPoint:function(t){var n=this.random(3,5),e=this.random(0,100);this.animatePoint({key:t,duration:n,destination:e})},animatePoint:function(n){var e,i=n.key,o=n.duration,a=n.destination;TweenLite.to(this.points,o,(e={},t(e,i,a),t(e,"ease",Sine.easeInOut),t(e,"onComplete",this.setPoint),t(e,"onCompleteParams",[i]),e))},random:function(t,n){return(Math.random()*(n-t)+t).toFixed(2)}},mounted:function(){Object.keys(this.points).forEach(this.setPoint)}})}();