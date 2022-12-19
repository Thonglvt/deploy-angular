"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[446],{7446:(w,f,s)=>{s.d(f,{oG:()=>x,p9:()=>B});var h=s(3191),e=s(5e3),m=s(3075),r=s(508),g=s(5664),b=s(7144);const C=["input"],y=function(a){return{enterDuration:a}},v=["*"],M=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:u});function u(){return{color:"accent",clickAction:"check-indeterminate"}}let A=0;const p=u(),T={provide:m.JU,useExisting:(0,e.Gpc)(()=>x),multi:!0};class E{}const I=(0,r.sb)((0,r.pj)((0,r.Kr)((0,r.Id)(class{constructor(a){this._elementRef=a}}))));let R=(()=>{class a extends I{constructor(i,t,n,o,d,k,l){super(t),this._changeDetectorRef=n,this._ngZone=o,this._animationMode=k,this._options=l,this.ariaLabel="",this.ariaLabelledby=null,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||p,this.color=this.defaultColor=this._options.color||p.color,this.tabIndex=parseInt(d)||0,this.id=this._uniqueId=`${i}${++A}`}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(i){this._required=(0,h.Ig)(i)}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(i){const t=(0,h.Ig)(i);t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(i){const t=(0,h.Ig)(i);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(i){const t=i!=this._indeterminate;this._indeterminate=(0,h.Ig)(i),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(i){this.checked=!!i}registerOnChange(i){this._controlValueAccessorChangeFn=i}registerOnTouched(i){this._onTouched=i}setDisabledState(i){this.disabled=i}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(i){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(t!==i&&n&&(this._currentAnimationClass.length>0&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,i),this._currentCheckState=i,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);const o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){var i;const t=null===(i=this._options)||void 0===i?void 0:i.clickAction;this.disabled||"noop"===t?!this.disabled&&"noop"===t&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==t&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}_onInteractionEvent(i){i.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(i,t){if("NoopAnimations"===this._animationMode)return"";switch(i){case 0:if(1===t)return this._animationClasses.uncheckedToChecked;if(3==t)return this._animationClasses.uncheckedToIndeterminate;break;case 2:return 1===t?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case 1:return 2===t?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case 3:return 1===t?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(i){const t=this._inputElement;t&&(t.nativeElement.indeterminate=i)}}return a.\u0275fac=function(i){e.$Z()},a.\u0275dir=e.lG2({type:a,viewQuery:function(i,t){if(1&i&&(e.Gf(C,5),e.Gf(r.wG,5)),2&i){let n;e.iGM(n=e.CRH())&&(t._inputElement=n.first),e.iGM(n=e.CRH())&&(t.ripple=n.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],id:"id",required:"required",labelPosition:"labelPosition",name:"name",value:"value",checked:"checked",disabled:"disabled",indeterminate:"indeterminate"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},features:[e.qOj]}),a})(),x=(()=>{class a extends R{constructor(i,t,n,o,d,k,l){super("mat-checkbox-",i,t,o,d,k,l),this._focusMonitor=n,this._animationClasses={uncheckedToChecked:"mat-checkbox-anim-unchecked-checked",uncheckedToIndeterminate:"mat-checkbox-anim-unchecked-indeterminate",checkedToUnchecked:"mat-checkbox-anim-checked-unchecked",checkedToIndeterminate:"mat-checkbox-anim-checked-indeterminate",indeterminateToChecked:"mat-checkbox-anim-indeterminate-checked",indeterminateToUnchecked:"mat-checkbox-anim-indeterminate-unchecked"}}_createChangeEvent(i){const t=new E;return t.source=this,t.checked=i,t}_getAnimationTargetElement(){return this._elementRef.nativeElement}ngAfterViewInit(){super.ngAfterViewInit(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{i||this._onBlur()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onInputClick(i){i.stopPropagation(),super._handleInputClick()}focus(i,t){i?this._focusMonitor.focusVia(this._inputElement,i,t):this._inputElement.nativeElement.focus(t)}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(g.tE),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(e.QbO,8),e.Y36(M,8))},a.\u0275cmp=e.Xpm({type:a,selectors:[["mat-checkbox"]],hostAttrs:[1,"mat-checkbox"],hostVars:14,hostBindings:function(i,t){2&i&&(e.Ikx("id",t.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matCheckbox"],features:[e._Bn([T]),e.qOj],ngContentSelectors:v,decls:17,vars:21,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(i,t){if(1&i&&(e.F$t(),e.TgZ(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.NdJ("change",function(o){return t._onInteractionEvent(o)})("click",function(o){return t._onInputClick(o)}),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"span",6),e.qZA(),e._UZ(7,"span",7),e.TgZ(8,"span",8),e.O4$(),e.TgZ(9,"svg",9),e._UZ(10,"path",10),e.qZA(),e.kcU(),e._UZ(11,"span",11),e.qZA()(),e.TgZ(12,"span",12,13),e.NdJ("cdkObserveContent",function(){return t._onLabelTextChange()}),e.TgZ(14,"span",14),e._uU(15,"\xa0"),e.qZA(),e.Hsn(16),e.qZA()()),2&i){const n=e.MAs(1),o=e.MAs(13);e.uIk("for",t.inputId),e.xp6(2),e.ekj("mat-checkbox-inner-container-no-side-margin",!o.textContent||!o.textContent.trim()),e.xp6(1),e.Q6J("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),e.uIk("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked())("aria-describedby",t.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",n)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.VKq(19,y,"NoopAnimations"===t._animationMode?0:150))}},dependencies:[r.wG,b.wD],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}"],encapsulation:2,changeDetection:0}),a})(),_=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),a})(),B=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[r.si,r.BQ,b.Q8,_,r.BQ,_]}),a})()}}]);