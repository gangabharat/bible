!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(self.webpackChunkbible_webui=self.webpackChunkbible_webui||[]).push([[321],{1321:function(t,o,i){"use strict";i.r(o),i.d(o,{ProductModule:function(){return O}});var r=i(1116),a=i(7091),d=i(8318),l=i(5291),u=i(7368),c=i(7326),s=i(2835),p=i(1462),f=i(1608);function g(e,t){1&e&&u._UZ(0,"span",26)}var Z=function(e){return{"was-validated":e}};function m(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"div",2),u.TgZ(1,"h4",3),u._uU(2,"Add New Product"),u.qZA(),u.TgZ(3,"button",4),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u.TgZ(4,"span",5),u._uU(5,"\xd7"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",6),u.TgZ(7,"div",7),u.TgZ(8,"form",8,9),u.NdJ("ngSubmit",function(){u.CHM(n);var e=u.MAs(9);return u.oxw().onSubmit(e)}),u.TgZ(10,"div",10),u.TgZ(11,"div",11),u.TgZ(12,"div",0),u.TgZ(13,"div",12),u.TgZ(14,"div",13),u.TgZ(15,"label",14),u._uU(16,"Name"),u.qZA(),u._UZ(17,"input",15),u.qZA(),u.TgZ(18,"div",13),u.TgZ(19,"label",14),u._uU(20,"Model"),u.qZA(),u._UZ(21,"input",16),u.qZA(),u.qZA(),u.TgZ(22,"div",17),u.TgZ(23,"div",18),u.TgZ(24,"label",14),u._uU(25,"Number"),u.qZA(),u._UZ(26,"input",19),u.qZA(),u.TgZ(27,"div",18),u.TgZ(28,"label",14),u._uU(29,"Address"),u.qZA(),u._UZ(30,"input",20),u.qZA(),u.qZA(),u.TgZ(31,"div",21),u.TgZ(32,"button",22),u.YNc(33,g,1,0,"span",23),u._UZ(34,"fa-icon",24),u._uU(35," Save"),u.qZA(),u.TgZ(36,"button",25),u._UZ(37,"fa-icon",24),u._uU(38," Reset "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&e){var o=u.MAs(9),i=u.oxw();u.xp6(8),u.Q6J("ngClass",u.VKq(5,Z,o.submitted&&o.invalid)),u.xp6(24),u.Q6J("disabled",i.loading),u.xp6(1),u.Q6J("ngIf",i.loading),u.xp6(1),u.Q6J("icon",i.faSave),u.xp6(3),u.Q6J("icon",i.faUndo)}}var v=function(){var t=function(){function t(n,o){e(this,t),this.productService=n,this.modalService=o,this.faPlus=l.r8p,this.faSave=l.r6l,this.faUndo=l.X7o,this.loading=!1}return n(t,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(e){var t=this;if(e.valid){this.loading=!0;var n=e.value.product;n.id=(new Date).valueOf().toString(),console.log(n),this.productService.add(n),e.resetForm(),this.newListCancelled(),setTimeout(function(){t.loading=!1},2e3)}}},{key:"showModal",value:function(e){this.newListModalRef=this.modalService.show(e,{focus:!0,ignoreBackdropClick:!0})}},{key:"newListCancelled",value:function(){this.newListModalRef.hide()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Y36(c.M),u.Y36(s.tT))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-product-add"]],decls:3,vars:0,consts:[[1,""],["newModalTemplate",""],[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],[3,"ngClass","ngSubmit"],["form","ngForm"],[1,"row"],["ngModelGroup","product",1,"col-md-12"],[1,"row","mt-2"],[1,"col-md-6"],[1,"labels"],["type","text","placeholder","product name","required","","value","","name","name","ngModel","",1,"form-control"],["type","text","value","","placeholder","model","name","model","ngModel","","required","",1,"form-control"],[1,"row","mt-3"],[1,"col-md-12"],["type","text","placeholder","number","value","","name","number","ngModel","","required","",1,"form-control"],["type","text","placeholder","enter address","value","","name","address","ngModel","","required","","minlength","10",1,"form-control"],[1,"mt-5","text-center"],["type","submit",1,"btn","btn-outline-success","mr-2",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[3,"icon"],["type","reset",1,"btn","btn-outline-secondary"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.YNc(1,m,39,7,"ng-template",null,1,u.W1O),u.qZA())},directives:[p._Y,p.JL,p.F,r.mk,p.Mq,p.Fj,p.Q7,p.JJ,p.On,p.wO,r.O5,f.BN],styles:[""]}),t}();function h(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"div",3),u.TgZ(1,"h4",4),u._uU(2,"Product Details"),u.qZA(),u.TgZ(3,"button",5),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u.TgZ(4,"span",6),u._uU(5,"\xd7"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",7),u.TgZ(7,"div",8),u.TgZ(8,"p"),u._uU(9),u.qZA(),u.TgZ(10,"p"),u._uU(11),u.qZA(),u.TgZ(12,"p"),u._uU(13),u.qZA(),u.TgZ(14,"p"),u._uU(15),u.qZA(),u.TgZ(16,"p"),u._uU(17),u.qZA(),u.qZA(),u.qZA(),u.TgZ(18,"div",9),u.TgZ(19,"div",10),u.TgZ(20,"button",11),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u._uU(21," Close "),u.qZA(),u._uU(22," \xa0 "),u.qZA(),u.qZA()}if(2&e){var o=u.oxw();u.xp6(9),u.Oqu(o.product.id),u.xp6(2),u.Oqu(o.product.name),u.xp6(2),u.Oqu(o.product.model),u.xp6(2),u.Oqu(o.product.number),u.xp6(2),u.Oqu(o.product.address)}}var b=function(){var t=function(){function t(n,o){e(this,t),this.productService=n,this.modalService=o,this.faPlus=l.r8p,this.faSave=l.r6l,this.faEye=l.Mdf,this.loading=!1}return n(t,[{key:"ngOnInit",value:function(){}},{key:"showModal",value:function(e){this.newListModalRef=this.modalService.show(e,{focus:!0,ignoreBackdropClick:!0})}},{key:"newListCancelled",value:function(){this.newListModalRef.hide()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Y36(c.M),u.Y36(s.tT))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-product-detail"]],inputs:{product:"product"},decls:4,vars:1,consts:[[1,"text-info",3,"click"],[3,"icon"],["newModalTemplate",""],[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,""],[1,"modal-footer"],[1,"text-right"],[1,"btn","btn-secondary",3,"click"]],template:function(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"a",0),u.NdJ("click",function(){u.CHM(n);var e=u.MAs(3);return t.showModal(e)}),u._UZ(1,"fa-icon",1),u.qZA(),u.YNc(2,h,23,5,"ng-template",null,2,u.W1O)}2&e&&(u.xp6(1),u.Q6J("icon",t.faEye))},directives:[f.BN],styles:[""]}),t}();function q(e,t){1&e&&u._UZ(0,"span",28)}var T=function(e){return{"was-validated":e}};function A(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"div",3),u.TgZ(1,"h4",4),u._uU(2,"Edit Product"),u.qZA(),u.TgZ(3,"button",5),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u.TgZ(4,"span",6),u._uU(5,"\xd7"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",7),u.TgZ(7,"div",8),u.TgZ(8,"form",9,10),u.NdJ("ngSubmit",function(){u.CHM(n);var e=u.MAs(9);return u.oxw().onSubmit(e)}),u.TgZ(10,"div",11),u.TgZ(11,"div",12),u.TgZ(12,"div",13),u.TgZ(13,"input",14),u.NdJ("ngModelChange",function(e){return u.CHM(n),u.oxw().loadProduct.id=e}),u.qZA(),u.TgZ(14,"div",15),u.TgZ(15,"div",16),u.TgZ(16,"label",17),u._uU(17,"Name"),u.qZA(),u.TgZ(18,"input",18),u.NdJ("ngModelChange",function(e){return u.CHM(n),u.oxw().loadProduct.name=e}),u.qZA(),u.qZA(),u.TgZ(19,"div",16),u.TgZ(20,"label",17),u._uU(21,"Model"),u.qZA(),u.TgZ(22,"input",19),u.NdJ("ngModelChange",function(e){return u.CHM(n),u.oxw().loadProduct.model=e}),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"div",20),u.TgZ(24,"div",21),u.TgZ(25,"label",17),u._uU(26,"Number"),u.qZA(),u.TgZ(27,"input",22),u.NdJ("ngModelChange",function(e){return u.CHM(n),u.oxw().loadProduct.number=e}),u.qZA(),u.qZA(),u.TgZ(28,"div",21),u.TgZ(29,"label",17),u._uU(30,"Address"),u.qZA(),u.TgZ(31,"input",23),u.NdJ("ngModelChange",function(e){return u.CHM(n),u.oxw().loadProduct.address=e}),u.qZA(),u.qZA(),u.qZA(),u.TgZ(32,"div",24),u.TgZ(33,"button",25),u.YNc(34,q,1,0,"span",26),u._uU(35," Save"),u.qZA(),u._uU(36,"\xa0 "),u.TgZ(37,"button",27),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u._uU(38," Close "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&e){var o=u.MAs(9),i=u.oxw();u.xp6(8),u.Q6J("ngClass",u.VKq(7,T,o.submitted&&o.invalid)),u.xp6(5),u.Q6J("ngModel",i.loadProduct.id),u.xp6(5),u.Q6J("ngModel",i.loadProduct.name),u.xp6(4),u.Q6J("ngModel",i.loadProduct.model),u.xp6(5),u.Q6J("ngModel",i.loadProduct.number),u.xp6(4),u.Q6J("ngModel",i.loadProduct.address),u.xp6(3),u.Q6J("ngIf",i.loading)}}var w=function(){var t=function(){function t(n,o){e(this,t),this.productService=n,this.modalService=o,this.faEdit=l.Xcf,this.loading=!1}return n(t,[{key:"ngOnInit",value:function(){this.loadProduct=Object.assign({},this.product)}},{key:"showModal",value:function(e){this.newListModalRef=this.modalService.show(e,{focus:!0,class:"modal-lg",ignoreBackdropClick:!0})}},{key:"newListCancelled",value:function(){this.newListModalRef.hide()}},{key:"onSubmit",value:function(e){var t=this;if(console.log(e.value),e.valid){this.loading=!0;var n=e.value.product;console.log(n),this.productService.updatePuppy(n),this.newListCancelled(),setTimeout(function(){t.loading=!1,e.resetForm()},2e3)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Y36(c.M),u.Y36(s.tT))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-product-edit"]],inputs:{product:"product"},decls:4,vars:1,consts:[[1,"text-warning",3,"click"],[3,"icon"],["newModalTemplate",""],[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],[3,"ngClass","ngSubmit"],["form","ngForm"],[1,"row"],["ngModelGroup","product",1,"col-md-12"],[1,""],["type","hidden","name","id",3,"ngModel","ngModelChange"],[1,"row","mt-2"],[1,"col-md-6"],[1,"labels"],["type","text","placeholder","product name","required","","name","name",1,"form-control",3,"ngModel","ngModelChange"],["type","text","value","","placeholder","model","name","model","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","mt-3"],[1,"col-md-12"],["type","text","placeholder","number","name","number","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","enter address","name","address","required","","minlength","10",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-5","text-center"],["type","submit",1,"btn","btn-outline-success"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"a",0),u.NdJ("click",function(){u.CHM(n);var e=u.MAs(3);return t.showModal(e)}),u._UZ(1,"fa-icon",1),u.qZA(),u.YNc(2,A,39,9,"ng-template",null,2,u.W1O)}2&e&&(u.xp6(1),u.Q6J("icon",t.faEdit))},directives:[f.BN,p._Y,p.JL,p.F,r.mk,p.Mq,p.Fj,p.JJ,p.On,p.Q7,p.wO,r.O5],styles:[""]}),t}();function M(e,t){1&e&&u._UZ(0,"span",14)}function y(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"div",3),u.TgZ(1,"h4",4),u._uU(2,"Delete Product ?"),u.qZA(),u.TgZ(3,"button",5),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u.TgZ(4,"span",6),u._uU(5,"\xd7"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",7),u.TgZ(7,"div",8),u.TgZ(8,"p"),u._uU(9," Are you sure you want to delete product "),u.TgZ(10,"b"),u._uU(11),u.qZA(),u._uU(12,"? Your product will also be deleted. "),u.qZA(),u.TgZ(13,"p"),u._uU(14,"To confirm deletion, click Delete button."),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"div",9),u.TgZ(16,"div",10),u.TgZ(17,"button",11),u.NdJ("click",function(){return u.CHM(n),u.oxw().newListCancelled()}),u._uU(18," Cancel "),u.qZA(),u._uU(19," \xa0 "),u.TgZ(20,"button",12),u.NdJ("click",function(){return u.CHM(n),u.oxw().onDelete()}),u.YNc(21,M,1,0,"span",13),u._UZ(22,"fa-icon",1),u._uU(23," Delete "),u.qZA(),u.qZA(),u.qZA()}if(2&e){var o=u.oxw();u.xp6(11),u.hij("",o.product.name," "),u.xp6(9),u.Q6J("disabled",o.loading),u.xp6(1),u.Q6J("ngIf",o.loading),u.xp6(1),u.Q6J("icon",o.faTrash)}}var x=function(){var t=function(){function t(n,o){e(this,t),this.productService=n,this.modalService=o,this.faTrash=l.$aW,this.loading=!1}return n(t,[{key:"ngOnInit",value:function(){console.log(this.product)}},{key:"showModal",value:function(e){this.newListModalRef=this.modalService.show(e,{focus:!0,ignoreBackdropClick:!0})}},{key:"onDelete",value:function(){var e=this;this.loading=!0,this.productService.removePuppy(this.product),this.newListCancelled(),setTimeout(function(){e.loading=!1},5e3)}},{key:"newListCancelled",value:function(){this.newListModalRef.hide()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Y36(c.M),u.Y36(s.tT))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-product-delete"]],inputs:{product:"product"},decls:4,vars:1,consts:[[1,"text-danger",3,"click"],[3,"icon"],["newModalTemplate",""],[1,"modal-header","clearfix"],[1,"modal-title","float-left"],["type","button","aria-label","Close",1,"close","float-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,""],[1,"modal-footer"],[1,"text-right"],[1,"btn","btn-default",3,"click"],[1,"btn","btn-danger",3,"disabled","click"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"a",0),u.NdJ("click",function(){u.CHM(n);var e=u.MAs(3);return t.showModal(e)}),u._UZ(1,"fa-icon",1),u.qZA(),u.YNc(2,y,24,4,"ng-template",null,2,u.W1O)}2&e&&(u.xp6(1),u.Q6J("icon",t.faTrash))},directives:[f.BN,r.O5],styles:[""]}),t}();function k(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"li",2),u.TgZ(1,"div",3),u.TgZ(2,"div"),u.TgZ(3,"div",4),u._uU(4),u.qZA(),u._uU(5," Cras justo odio "),u._UZ(6,"div",5),u.TgZ(7,"div",6),u._UZ(8,"app-product-detail",7),u._UZ(9,"app-product-edit",7),u._UZ(10,"app-product-delete",7),u._UZ(11,"span",6),u.TgZ(12,"fa-icon",8),u.NdJ("click",function(){return u.CHM(n),u.oxw().incrementCounter()}),u.qZA(),u.TgZ(13,"fa-icon",9),u.NdJ("click",function(){return u.CHM(n),u.oxw().incrementCounter()}),u.qZA(),u.TgZ(14,"p",10),u._uU(15," Current count: "),u.TgZ(16,"strong"),u._uU(17),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(18,"div",11),u.TgZ(19,"span",12),u._uU(20,"14"),u.qZA(),u.TgZ(21,"span",12),u._uU(22),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&e){var o=t.$implicit,i=t.index,r=u.oxw();u.xp6(4),u.AsE("",i+1," : ",o.name,""),u.xp6(2),u.Q6J("innerHTML",r.sampleString,u.oJD),u.xp6(2),u.Q6J("product",o),u.xp6(1),u.Q6J("product",o),u.xp6(1),u.Q6J("product",o),u.xp6(2),u.Q6J("icon",r.faThumbsUp),u.xp6(1),u.Q6J("icon",r.faHeart),u.xp6(4),u.Oqu(r.currentCount),u.xp6(5),u.Oqu(i+1)}}var C,_,U=function(){var t=function(){function t(n){e(this,t),this.productService=n,this.products$=new d.y,this.faEdit=l.Xcf,this.faThumbsUp=l.u8Q,this.faHeart=l.m6i,this.faSpinner=l.LM3,this.currentCount=0,this.sampleString='Some time prior to May 2016, <a href="https://motherboard.vice.com/read/rosebuttboard-ip-board" target="_blank" rel="noopener">the forum known as &quot;Rosebutt Board&quot; was hacked</a> and 107k accounts were exposed. The self-described &quot;top one board for anal fisting, prolapse, huge insertions and rosebutt fans&quot; had email and IP addresses, usernames and weakly stored salted MD5 password hashes hacked from the IP.Board based forum.'}return n(t,[{key:"ngOnInit",value:function(){this.products$=this.productService.puppies$}},{key:"onRemove",value:function(e){}},{key:"getRandom",value:function(e){return e*Math.random()*100}},{key:"incrementCounter",value:function(){this.currentCount++}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Y36(c.M))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-product-list"]],decls:3,vars:3,consts:[[1,"list-group","list-group-numbered"],["class","card-shadow list-group-item d-flex justify-content-between align-items-start mb-3",4,"ngFor","ngForOf"],[1,"card-shadow","list-group-item","d-flex","justify-content-between","align-items-start","mb-3"],[1,"bd-callout","bd-callout-info"],[1,"text-uppercase"],[1,"",3,"innerHTML"],[1,""],[3,"product"],[1,"fa","fa-2x","text-primary",3,"icon","click"],[1,"fas","fa-spinner","fa-spin","text-danger",3,"icon","click"],["aria-live","polite"],[1,"row"],[1,"badge","bg-warning","rounded-pill"]],template:function(e,t){1&e&&(u.TgZ(0,"ol",0),u.YNc(1,k,23,10,"li",1),u.ALo(2,"async"),u.qZA()),2&e&&(u.xp6(1),u.Q6J("ngForOf",u.lcZ(2,1,t.products$)))},directives:[r.sg,b,w,x,f.BN],pipes:[r.Ov],styles:[""]}),t}(),J=["template"],S=[{path:"",component:(C=function(){function t(n,o){e(this,t),this.productService=n,this.bsModalService=o,this.products$=new d.y,this.displayStyle="none"}return n(t,[{key:"ngOnInit",value:function(){this.loadProducts()}},{key:"onAdd",value:function(){this.modalRef=this.bsModalService.show(v,{animated:!0,backdrop:"static"})}},{key:"openModal",value:function(){this.modalRef=this.bsModalService.show(this.template,{animated:!0,backdrop:"static"})}},{key:"openPopup",value:function(){this.displayStyle="block"}},{key:"closePopup",value:function(){this.displayStyle="none"}},{key:"loadProducts",value:function(){for(var e=0;e<50;e++){var t={id:""+10*e*Math.random(),address:""+10*e*Math.random(),model:""+10*e*Math.random(),name:""+10*e*Math.random(),number:""+10*e*Math.random()};this.productService.load(t)}}}]),t}(),C.\u0275fac=function(e){return new(e||C)(u.Y36(c.M),u.Y36(s.tT))},C.\u0275cmp=u.Xpm({type:C,selectors:[["app-product"]],viewQuery:function(e,t){var n;1&e&&u.Gf(J,5),2&e&&u.iGM(n=u.CRH())&&(t.template=n.first)},decls:9,vars:0,consts:[[1,"text-primary","text-center"],[1,"btn","btn-primary",3,"click"],[1,""]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"h1"),u._uU(2,"Product Details"),u.qZA(),u.qZA(),u.TgZ(3,"button",1),u.NdJ("click",function(){return t.onAdd()}),u._uU(4,"Add New"),u.qZA(),u._UZ(5,"div",2),u._UZ(6,"br"),u.TgZ(7,"div"),u._UZ(8,"app-product-list"),u.qZA())},directives:[U],styles:[""]}),C)}],N=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[a.Bz.forChild(S)],a.Bz]}),t}(),O=((_=function t(){e(this,t)}).\u0275fac=function(e){return new(e||_)},_.\u0275mod=u.oAB({type:_}),_.\u0275inj=u.cJS({imports:[[r.ez,p.u5,f.uH,N]]}),_)}}])}();