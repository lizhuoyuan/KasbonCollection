__d(function(n,t,r,o,e){'use strict';function i(n){return 3.62*(n-30)+194}function u(n){return 3*(n-8)+25}r.exports={fromOrigamiTensionAndFriction:function(n,t){return{stiffness:i(n),damping:u(t)}},fromBouncinessAndSpeed:function(n,t){function r(n,t,r){return(n-t)/(r-t)}function o(n,t,r){return t+n*(r-t)}function e(n,t,r){return n*r+(1-n)*t}function f(n){return 44e-6*Math.pow(n,3)-.006*Math.pow(n,2)+.36*n+2}function c(n){return 4.5e-7*Math.pow(n,3)-332e-6*Math.pow(n,2)+.1078*n+5.84}var s=r(n/1.7,0,20);s=o(s,0,.8);var a,p,d,h,w=o(r(t/1.7,0,20),.5,200),M=(a=s,p=(d=w)<=18?(h=d,7e-4*Math.pow(h,3)-.031*Math.pow(h,2)+.64*h+1.28):d>18&&d<=44?f(d):c(d),e(2*a-a*a,p,.01));return{stiffness:i(w),damping:u(M)}}}},201,[]);