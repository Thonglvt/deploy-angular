"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[574],{9574:(y,c,a)=>{a.r(c),a.d(c,{ErrorsModule:()=>g});var l=a(9808),i=a(9826),o=a(6190),t=a(5e3),u=a(4861);let d=(()=>{class e{constructor(r,n){this.router=r,this.modeService=n,this.unsubscribe=[]}ngOnInit(){const r=this.modeService.mode.asObservable().subscribe(n=>{document.body.style.backgroundImage="dark"===n?"url(./assets/media/auth/bg1-dark.jpg)":"url(./assets/media/auth/bg1.jpg)"});this.unsubscribe.push(r)}routeToDashboard(){this.router.navigate(["dashboard"]),setTimeout(()=>{o.n$.reinitialization(),o.nW.reinitialization(),o.hg.reinitialization(),o.bv.bootstrap(),o.Mn.reinitialization(),o.lg.reinitialization()},200)}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe()),document.body.style.backgroundImage="none"}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(i.F0),t.Y36(u.t))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-error404"]],decls:10,vars:0,consts:[[1,"fw-bolder","fs-2hx","text-gray-900","mb-4"],[1,"fw-semibold","fs-6","text-gray-500","mb-7"],[1,"mb-3"],["src","./assets/media/auth/404-error.png","alt","",1,"mw-100","mh-300px","theme-light-show"],["src","./assets/media/auth/404-error-dark.png","alt","",1,"mw-100","mh-300px","theme-dark-show"],[1,"mb-0"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"h1",0),t._uU(1," Oops!\n"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," We can't find that page.\n"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3)(6,"img",4),t.qZA(),t.TgZ(7,"div",5)(8,"a",6),t.NdJ("click",function(){return n.routeToDashboard()}),t._uU(9,"Return Home"),t.qZA()())}}),e})(),p=(()=>{class e{constructor(r,n){this.router=r,this.modeService=n,this.unsubscribe=[]}ngOnInit(){const r=this.modeService.mode.asObservable().subscribe(n=>{document.body.style.backgroundImage="dark"===n?"url(./assets/media/auth/bg7-dark.jpg)":"url(./assets/media/auth/bg7.jpg)"});this.unsubscribe.push(r)}routeToDashboard(){this.router.navigate(["dashboard"]),setTimeout(()=>{o.n$.reinitialization(),o.nW.reinitialization(),o.hg.reinitialization(),o.bv.bootstrap(),o.Mn.reinitialization(),o.lg.reinitialization()},200)}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe()),document.body.style.backgroundImage="none"}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(i.F0),t.Y36(u.t))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-error500"]],decls:10,vars:0,consts:[[1,"fw-bolder","fs-2qx","text-gray-900","mb-4"],[1,"fw-semibold","fs-6","text-gray-500","mb-7"],[1,"mb-11"],["src","./assets/media/auth/500-error.png","alt","",1,"mw-100","mh-300px","theme-light-show"],["src","./assets/media/auth/500-error-dark.png","alt","",1,"mw-100","mh-300px","theme-dark-show"],[1,"mb-0"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"h1",0),t._uU(1," System Error\n"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," Something went wrong! Please try again later.\n"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3)(6,"img",4),t.qZA(),t.TgZ(7,"div",5)(8,"a",6),t.NdJ("click",function(){return n.routeToDashboard()}),t._uU(9,"Return Home"),t.qZA()())}}),e})();const m=["bgi-size-cover","bgi-position-center","bgi-no-repeat"],h=[{path:"",component:(()=>{class e{constructor(r){this.router=r,this.class="d-flex flex-column flex-root"}ngOnInit(){m.forEach(r=>document.body.classList.add(r))}ngOnDestroy(){m.forEach(r=>document.body.classList.remove(r))}routeToDashboard(){this.router.navigate(["dashboard"]),setTimeout(()=>{o.n$.bootstrap(),o.nW.bootstrap(),o.hg.bootstrap(),o.bv.bootstrap(),o.Mn.bootstrap(),o.lg.bootstrap()},200)}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-errors"]],hostVars:2,hostBindings:function(r,n){2&r&&t.Tol(n.class)},decls:5,vars:0,consts:[[1,"d-flex","flex-column","flex-center","flex-column-fluid"],[1,"d-flex","flex-column","flex-center","text-center","p-10"],[1,"card","card-flush","w-lg-650px","py-5"],[1,"card-body","py-15","py-lg-20"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()()()())},dependencies:[i.lC],styles:["[_nghost-%COMP%]{height:100%;margin:0}"]}),e})(),children:[{path:"404",component:d},{path:"500",component:p},{path:"",redirectTo:"404",pathMatch:"full"},{path:"**",redirectTo:"404",pathMatch:"full"}]}];let b=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(h),i.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,b]}),e})()}}]);