(self.webpackChunkbible_webui=self.webpackChunkbible_webui||[]).push([[521],{8521:function(e,t,o){"use strict";o.r(t),o.d(t,{ContactsModule:function(){return A}});var n=o(1116),i=o(7091),r=o(7368),c=o(7326),l=o(2835),s=o(1462);function d(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"button",23),r.NdJ("click",function(){return r.CHM(e),r.oxw().onClose()}),r.TgZ(1,"span",24),r._uU(2,"\xd7"),r.qZA(),r.qZA()}}function u(e,t){1&e&&r._UZ(0,"span",25)}const a=function(e){return{"was-validated":e}};let p=(()=>{class e{constructor(e,t){this.productService=e,this.bsModalService=t,this.loading=!1,this.hideClose=!1}ngOnInit(){}onSubmit(e){if(e.valid){const t=e.value.product;t.id=(new Date).valueOf().toString(),console.log(t),this.productService.add(t),e.resetForm(),setTimeout(()=>{},2e3)}}onClose(){this.bsModalService._hideModal(1)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.M),r.Y36(l.tT))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-contact-add"]],decls:35,vars:6,consts:[[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","class","close float-right","aria-label","Close",3,"click",4,"ngIf"],[1,"modal-body"],[1,"form-group"],[3,"ngClass","ngSubmit"],["form","ngForm"],[1,"row"],["ngModelGroup","product",1,"col-md-12"],[1,""],[1,"row","mt-2"],[1,"col-md-6"],[1,"labels"],["type","text","placeholder","product name","required","","value","","name","name","ngModel","",1,"form-control"],["type","text","value","","placeholder","model","name","model","ngModel","","required","",1,"form-control"],[1,"row","mt-3"],[1,"col-md-12"],["type","text","placeholder","number","value","","name","number","ngModel","","required","",1,"form-control"],["type","text","placeholder","enter address","value","","name","address","ngModel","","required","","minlength","10",1,"form-control"],[1,"mt-5","text-center"],["type","submit",1,"btn","btn-outline-success","mr-2",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["type","reset",1,"btn","btn-outline-secondary"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",0),r.TgZ(1,"h4",1),r._uU(2,"Add New Product"),r.qZA(),r.YNc(3,d,3,0,"button",2),r.qZA(),r.TgZ(4,"div",3),r.TgZ(5,"div",4),r.TgZ(6,"form",5,6),r.NdJ("ngSubmit",function(){r.CHM(e);const o=r.MAs(7);return t.onSubmit(o)}),r.TgZ(8,"div",7),r.TgZ(9,"div",8),r.TgZ(10,"div",9),r.TgZ(11,"div",10),r.TgZ(12,"div",11),r.TgZ(13,"label",12),r._uU(14,"Name"),r.qZA(),r._UZ(15,"input",13),r.qZA(),r.TgZ(16,"div",11),r.TgZ(17,"label",12),r._uU(18,"Model"),r.qZA(),r._UZ(19,"input",14),r.qZA(),r.qZA(),r.TgZ(20,"div",15),r.TgZ(21,"div",16),r.TgZ(22,"label",12),r._uU(23,"Number"),r.qZA(),r._UZ(24,"input",17),r.qZA(),r.TgZ(25,"div",16),r.TgZ(26,"label",12),r._uU(27,"Address"),r.qZA(),r._UZ(28,"input",18),r.qZA(),r.qZA(),r.TgZ(29,"div",19),r.TgZ(30,"button",20),r.YNc(31,u,1,0,"span",21),r._uU(32," Save "),r.qZA(),r.TgZ(33,"button",22),r._uU(34," Reset "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&e){const e=r.MAs(7);r.xp6(3),r.Q6J("ngIf",t.hideClose),r.xp6(3),r.Q6J("ngClass",r.VKq(4,a,e.submitted&&e.invalid)),r.xp6(24),r.Q6J("disabled",t.loading),r.xp6(1),r.Q6J("ngIf",t.loading)}},directives:[n.O5,s._Y,s.JL,s.F,n.mk,s.Mq,s.Fj,s.Q7,s.JJ,s.On,s.wO],styles:[""]}),e})(),Z=(()=>{class e{constructor(e,t,o){this.bsModalService=e,this.route=t,this.productService=o}ngOnInit(){}onClose(){this.bsModalService._hideModal(1)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(l.tT),r.Y36(i.gz),r.Y36(c.M))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-contact-detail"]],inputs:{product:"product",news:"news"},decls:19,vars:6,consts:[[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,""]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"h4",1),r._uU(2,"Product Details"),r.qZA(),r.TgZ(3,"button",2),r.NdJ("click",function(){return t.onClose()}),r.TgZ(4,"span",3),r._uU(5,"\xd7"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(6,"div",4),r._uU(7),r.TgZ(8,"div",5),r.TgZ(9,"p"),r._uU(10),r.qZA(),r.TgZ(11,"p"),r._uU(12),r.qZA(),r.TgZ(13,"p"),r._uU(14),r.qZA(),r.TgZ(15,"p"),r._uU(16),r.qZA(),r.TgZ(17,"p"),r._uU(18),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(7),r.hij(" ",t.news," "),r.xp6(3),r.Oqu(t.product.id),r.xp6(2),r.Oqu(t.product.name),r.xp6(2),r.Oqu(t.product.model),r.xp6(2),r.Oqu(t.product.number),r.xp6(2),r.Oqu(t.product.address))},styles:[""]}),e})();var g=o(8318);function m(e,t){1&e&&r._UZ(0,"span",11)}let b=(()=>{class e{constructor(e,t){this.productService=e,this.bsModalService=t,this.loading=!1}ngOnInit(){}onDelete(){this.productService.removePuppy(this.product),this.bsModalService._hideModal(1)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.M),r.Y36(l.tT))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-contact-delete"]],inputs:{product:"product"},decls:23,vars:3,consts:[[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,""],[1,"modal-footer"],[1,"text-right"],[1,"btn","btn-default",3,"click"],[1,"btn","btn-danger",3,"disabled","click"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"h4",1),r._uU(2,"Delete Product ?"),r.qZA(),r.TgZ(3,"button",2),r.NdJ("click",function(){return t.onDelete()}),r.TgZ(4,"span",3),r._uU(5,"\xd7"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(6,"div",4),r.TgZ(7,"div",5),r.TgZ(8,"p"),r._uU(9," Are you sure you want to delete product "),r.TgZ(10,"b"),r._uU(11),r.qZA(),r._uU(12,"? Your product will also be deleted. "),r.qZA(),r.TgZ(13,"p"),r._uU(14,"To confirm deletion, click Delete button."),r.qZA(),r.qZA(),r.qZA(),r.TgZ(15,"div",6),r.TgZ(16,"div",7),r.TgZ(17,"button",8),r.NdJ("click",function(){return t.onDelete()}),r._uU(18,"Cancel"),r.qZA(),r._uU(19," \xa0 "),r.TgZ(20,"button",9),r.NdJ("click",function(){return t.onDelete()}),r.YNc(21,m,1,0,"span",10),r._uU(22," Delete "),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(11),r.hij("",t.product.name," "),r.xp6(9),r.Q6J("disabled",t.loading),r.xp6(1),r.Q6J("ngIf",t.loading))},directives:[n.O5],styles:[""]}),e})();function f(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",2),r._uU(1),r.ALo(2,"json"),r.TgZ(3,"button",0),r.NdJ("click",function(){const t=r.CHM(e).$implicit;return r.oxw().onDetails(t)}),r._uU(4,"Details"),r.qZA(),r.TgZ(5,"button",3),r.NdJ("click",function(){const t=r.CHM(e).$implicit;return r.oxw().onRemove(t)}),r._uU(6,"delete"),r.qZA(),r.qZA()}if(2&e){const e=t.$implicit;r.xp6(1),r.hij(" ",r.lcZ(2,1,e)," ")}}const h=[{path:"",component:(()=>{class e{constructor(e,t){this.bsModalService=e,this.productService=t,this.products$=new g.y}ngOnInit(){this.products$=this.productService.puppies$}onAdd(){this.bsModalRef=this.bsModalService.show(p,{initialState:{hideClose:!0}})}onDetails(e){this.bsModalRef=this.bsModalService.show(Z,{initialState:{product:e,hideClose:!1}})}onRemove(e){this.bsModalRef=this.bsModalService.show(b,{initialState:{product:e,hideClose:!1}})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(l.tT),r.Y36(c.M))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-contacts"]],decls:4,vars:3,consts:[[1,"btn","btn-primary",3,"click"],["class","",4,"ngFor","ngForOf"],[1,""],[1,"btn","btn-warning",3,"click"]],template:function(e,t){1&e&&(r.TgZ(0,"button",0),r.NdJ("click",function(){return t.onAdd()}),r._uU(1," Add New"),r.qZA(),r.YNc(2,f,7,3,"div",1),r.ALo(3,"async")),2&e&&(r.xp6(2),r.Q6J("ngForOf",r.lcZ(3,1,t.products$)))},directives:[n.sg],pipes:[n.Ov,n.Ts],styles:[""]}),e})()},{path:"add",component:p},{path:"details/:id",component:Z}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez,s.u5,v]]}),e})()}}]);