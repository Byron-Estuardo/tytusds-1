!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GZeB:function(n,a,i){"use strict";i.r(a),i.d(a,"DashboardModule",function(){return v});var s=i("ofXK"),r=i("1kSV"),o=i("M0ag"),c=i("tyNb"),l=i("ZZ88"),b=i("fXoL");function u(t,e){if(1&t&&(b.Rb(0,"img",5),b.Vb(1,"div",6),b.Vb(2,"h3"),b.Bc(3),b.Ub(),b.Vb(4,"p"),b.Bc(5),b.Ub(),b.Ub()),2&t){var n=b.hc().$implicit;b.mc("src",n.imagePath,b.wc),b.Db(3),b.Cc(n.label),b.Db(2),b.Cc(n.text)}}function d(t,e){1&t&&b.zc(0,u,6,3,"ng-template",4)}var f,m,p,h=[{path:"",component:(f=function(){function n(){t(this,n),this.alerts=[],this.sliders=[],this.sliders.push({imagePath:"assets/images/usac-700x387.png",label:"USAC Tricentenaria",text:"Grande entre las del Mundo."},{imagePath:"assets/images/tonystark.jpg",label:"Escuela de Sistemas.",text:"USAC"},{imagePath:"assets/images/hulk-profesro.jpg",label:"Estructura de Datos",text:"USAC"})}var a,i,s;return a=n,(i=[{key:"ngOnInit",value:function(){}},{key:"closeAlert",value:function(t){var e=this.alerts.indexOf(t);this.alerts.splice(e,1)}}])&&e(a.prototype,i),s&&e(a,s),n}(),f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=b.Kb({type:f,selectors:[["app-dashboard"]],decls:10,vars:2,consts:[[1,"text-muted"],[1,"row"],[1,"col-md-12"],[4,"ngFor","ngForOf"],["ngbSlide",""],["alt","Random first slide","width","100%",1,"img-fluid","mx-auto","d-block",3,"src"],[1,"carousel-caption"]],template:function(t,e){1&t&&(b.Vb(0,"div"),b.Vb(1,"h2",0),b.Bc(2,"Dashboard "),b.Vb(3,"small"),b.Bc(4,"TyTusDS"),b.Ub(),b.Ub(),b.Vb(5,"div",1),b.Vb(6,"div",2),b.Vb(7,"ngb-carousel"),b.zc(8,d,1,0,void 0,3),b.Ub(),b.Ub(),b.Ub(),b.Rb(9,"hr"),b.Ub()),2&t&&(b.mc("@routerTransition",void 0),b.Db(8),b.mc("ngForOf",e.sliders))},directives:[r.b,s.j,r.i],styles:[""],data:{animation:[Object(l.a)()]}}),f)}],g=((p=function e(){t(this,e)}).\u0275fac=function(t){return new(t||p)},p.\u0275mod=b.Ob({type:p}),p.\u0275inj=b.Nb({imports:[[c.f.forChild(h)],c.f]}),p),v=((m=function e(){t(this,e)}).\u0275fac=function(t){return new(t||m)},m.\u0275mod=b.Ob({type:m}),m.\u0275inj=b.Nb({imports:[[s.b,r.c,r.a,g,o.c]]}),m)}}])}();