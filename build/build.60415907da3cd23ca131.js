(()=>{"use strict";var e,t,s,o,a,i,r={563:(e,t,s)=>{s.d(t,{Z:()=>n});var o=s(81),a=s.n(o),i=s(645),r=s.n(i)()(a());r.push([e.id,".container{\r\n\tmargin-top: 50px;\r\n}\r\n\r\n.title-header{\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n}",""]);const n=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",o=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),o&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),o&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);o&&r[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),s&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=s):p[2]=s),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},280:(e,t,s)=>{var o=s(379),a=s.n(o),i=s(795),r=s.n(i),n=s(569),c=s.n(n),l=s(565),p=s.n(l),h=s(216),d=s.n(h),u=s(589),m=s.n(u),y=s(563),f={};f.styleTagTransform=m(),f.setAttributes=p(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),a()(y.Z,f),y.Z&&y.Z.locals&&y.Z.locals},379:e=>{var t=[];function s(e){for(var s=-1,o=0;o<t.length;o++)if(t[o].identifier===e){s=o;break}return s}function o(e,o){for(var i={},r=[],n=0;n<e.length;n++){var c=e[n],l=o.base?c[0]+o.base:c[0],p=i[l]||0,h="".concat(l," ").concat(p);i[l]=p+1;var d=s(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var m=a(u,o);o.byIndex=n,t.splice(n,0,{identifier:h,updater:m,references:1})}r.push(h)}return r}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var n=s(i[r]);t[n].references--}for(var c=o(e,a),l=0;l<i.length;l++){var p=s(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},569:e=>{var t={};e.exports=function(e,s){var o=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(s)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var o="";s.supports&&(o+="@supports (".concat(s.supports,") {")),s.media&&(o+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(o+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),o+=s.css,a&&(o+="}"),s.media&&(o+="}"),s.supports&&(o+="}");var i=s.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},860:e=>{e.exports=require("express")},496:e=>{e.exports=require("sequelize")},17:e=>{e.exports=require("path")},556:()=>{const e=new bootstrap.Modal("#modal"),t=window.location.toString().split("/")[window.location.toString().split("/").length-1].split(".")[0];document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("input#phoneCustomer"),s=document.querySelector("input#phoneEmployee");"employees"===t?IMask(s,{mask:"{495}-00-00"}):"customers"!==t&&"suppliers"!==t||IMask(e,{mask:"{8}-000-000-00-00"})})),window.location.href,new Vue({el:"#app",data:{deleteItemsId:[],modal:{visibleCheckBox:!1,addModal:!1},positions:[],employees:[],books:[],customers:[],purchases:[],receipts:[],suppliers:[],form:{employee:{FIO:"",phone:"",position_id:""},position:{name:"",salary:""},book:{title:"",author:"",description:"",cost:"",year:"",quantity:""},customer:{FIO:"",email:"",phone:""},purchaser:{quantity:"",book_id:"",employee_id:"",customer_id:""},receipt:{providerId:""},supplier:{name:"",phone:"",address:""}}},methods:{...{async getBooks(){try{await fetch("http://egorse6o.beget.tech/api/books").then((e=>e.json())).then((e=>this.books=e.items))}catch(e){console.log(e)}},async addBook(){try{const e=await fetch("http://egorse6o.beget.tech/api/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.forms.book)}).then((e=>e.json()));e.title?(this.books=[e,...this.books],this.closeModals()):"name is occupied"===e?.detail?alert("Книга с таким названием уже есть"):alert("Не удалось добавить книгу")}catch(e){console.log(e),alert("Не удалось добавить книгу")}},async removeBooks(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/books",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({BooksId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить книгу");this.deleteItemsId.forEach((e=>{this.books=this.books.filter((t=>t.id!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e)}}},...{async getEmployees(){try{await fetch("http://egorse6o.beget.tech/api/employees").then((e=>e.json())).then((e=>this.employees=e.items))}catch(e){console.log(e)}},async addEmployee(){try{const e=await fetch("http://egorse6o.beget.tech/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:this.form.employee.FIO.split(" ")[1],last_name:this.form.employee.FIO.split(" ")[0],patronymic:this.form.employee.FIO.split(" ")[2],phone:this.form.employee.phone,position_id:this.form.employee.position_id})}).then((e=>e.json()));e.first_name?(this.employees=[e,...this.employees],this.closeModals()):alert("Не удалось добавить сотрудника")}catch(e){console.log(e),alert("Не удалось добавить сотрудника")}},async removeEmployee(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/employees",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeesId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить сотрудника");this.deleteItemsId.forEach((e=>{this.employees=this.employees.filter((t=>t.id!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e),alert("Не удалось удалить сотрудника")}}},...{async getPositions(){try{await fetch("http://egorse6o.beget.tech/api/positions").then((e=>e.json())).then((e=>this.positions=e.items))}catch(e){console.log(e)}},async addPosition(){try{const e=await fetch("http://egorse6o.beget.tech/api/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.form.position.name[0].toUpperCase()+this.form.position.name.slice(1),salary:this.form.position.salary||null})}).then((e=>e.json()));e?.name?(this.positions=[e,...this.positions],this.closeModals()):"name is occupied"===e?.detail?alert("Должность с таким названием уже существует"):alert("Не удалось добавить должность")}catch(e){console.log(e),alert("Не удалось добавить должность")}},async removePosition(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/positions",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({positionsId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить должность");this.deleteItemsId.forEach((e=>{this.positions=this.positions.filter((t=>t.id!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e),alert("Не удалось удалить должность")}},getPositionName(e){return this.positions?.filter((t=>t.id===e))[0]?.name}},...{async getCustomers(){try{await fetch("http://egorse6o.beget.tech/api/customers").then((e=>e.json())).then((e=>this.customers=e.items))}catch(e){console.log(e)}},async addCustomer(){try{const e=await fetch("http://egorse6o.beget.tech/api/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:this.form.customer.FIO.split(" ")[1],last_name:this.form.customer.FIO.split(" ")[0],patronymic:this.form.customer.FIO.split(" ")[2],email:this.form.customer.email,phone:this.form.customer.phone})}).then((e=>e.json()));e?.first_name?(this.customers=[e,...this.customers],this.closeModals()):alert("Не удалось добавить клиента")}catch(e){console.log(e),alert("Не удалось добавить клиента")}},async removeCustomer(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/customers",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({customersId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить клиента");this.deleteItemsId.forEach((e=>{this.customers=this.customers.filter((t=>t.id!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e),alert("Не удалось удалить клиента")}}},...{async getPurchases(){try{await fetch("http://egorse6o.beget.tech/api/purchases").then((e=>e.json())).then((e=>this.purchases=e.items))}catch(e){console.log(e)}},async addPurchaser(){try{(await fetch("http://egorse6o.beget.tech/api/purchases",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:this.form.purchaser.quantity,book_id:this.form.purchaser.book_id,employee_id:this.form.purchaser.employee_id,customer_id:this.form.purchaser.customer_id})}).then((e=>e.json())))?.quantity?(this.closeModals(),await this.getPurchases()):alert("Не удалось добавить клиента")}catch(e){console.log(e),alert("Не удалось добавить клиента")}},async removePurchaser(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/purchases",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({purchasesId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить клиента");this.deleteItemsId.forEach((e=>{this.purchases=this.purchases.filter((t=>t.id!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e),alert("Не удалось удалить клиента")}}},...{async getReceipts(){try{await fetch("http://egorse6o.beget.tech/api/receipts").then((e=>e.json())).then((e=>this.receipts=e.items))}catch(e){console.log(e)}},async addReceipt(){try{(await fetch("http://egorse6o.beget.tech/api/receipts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({providerId:this.form.receipt.providerId})}).then((e=>e.json())))?.date?(this.closeModals(),await this.getReceipts()):alert("Не удалось добавить поступление")}catch(e){console.log(e),alert("Не удалось добавить поступление")}},async removeReceipt(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/receipts",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({receiptsId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить клиента");this.deleteItemsId.forEach((e=>{this.receipts=this.receipts.filter((t=>t.receiptsID!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e),alert("Не удалось удалить клиента")}}},...{async getSuppliers(){try{await fetch("http://egorse6o.beget.tech/api/suppliers").then((e=>e.json())).then((e=>this.suppliers=e.items))}catch(e){console.log(e)}},async addSupplier(){try{const e=await fetch("http://egorse6o.beget.tech/api/suppliers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${this.form.supplier.name.split(" ")[0]} "${this.form.supplier.name.split(" ")[1]}"`,phone:this.form.supplier.phone,address:this.form.supplier.address})}).then((e=>e.json()));e?.name?(this.suppliers=[e,...this.suppliers],this.closeModals()):alert("Не удалось добавить клиента")}catch(e){console.log(e),alert("Не удалось добавить клиента")}},async removeSupplier(){try{if(!this.deleteItemsId.length)return this.modal.visibleCheckBox=!1;if((await fetch("http://egorse6o.beget.tech/api/suppliers",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({suppliersId:this.deleteItemsId})}).then((e=>e.json())))?.detail)return alert("Не удалось удалить клиента");this.deleteItemsId.forEach((e=>{this.suppliers=this.suppliers.filter((t=>t.id!==e))})),this.modal.visibleCheckBox=!1}catch(e){console.log(e),alert("Не удалось удалить клиента")}}},closeModals(){this.modal.addModal=!1,e.hide()},pushIdForDelete(e){this.deleteItemsId.includes(e)?this.deleteItemsId=this.deleteItemsId.filter((t=>t!=e)):this.deleteItemsId.push(e)},showCheckBox(){this.modal.visibleCheckBox=!this.modal.visibleCheckBox,this.deleteItemsId=[]},showModal(){this.modal.addModal=!this.modal.addModal,e.show()}},mounted(){(async()=>{const e=window.location.toString().split("/")[window.location.toString().split("/").length-1].split(".")[0];"books"===e?await this.getBooks():"employees"===e?(await this.getEmployees(),await this.getPositions()):"positions"===e?await this.getPositions():"customers"===e?await this.getCustomers():"purchases"===e?await this.getPurchases():"receipts"===e?(await this.getReceipts(),await this.getSuppliers()):"suppliers"===e&&await this.getSuppliers()})()}})},924:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>a});const e=new(s(496).Sequelize)("bookstore","root","Bookstore123",{host:"localhost",dialect:"mysql"});try{await e.authenticate(),console.log("Соединение с БД было успешно установлено")}catch(e){console.log("Невозможно выполнить подключение к БД: ",e)}const a=e;o()}catch(e){o(e)}}),1)},136:(e,t,s)=>{s.a(e,(async(e,t)=>{try{s(556),s(280);var o=s(860),a=s(17),i=s(139),r=s(899),n=s(46),c=s(753),l=s(613),p=s(161),h=s(330),d=e([i,r,n,c,l,p,h]);[i,r,n,c,l,p,h]=d.then?(await d)():d;const u=a.resolve(),m=8e3,y=o();y.use(o.static(u+"/public")),y.use(o.json()),y.use("/api/books",i.Z),y.use("/api/employees",n.Z),y.use("/api/positions",c.Z),y.use("/api/customers",r.Z),y.use("/api/purchases",l.Z),y.use("/api/receipts",p.Z),y.use("/api/suppliers",h.Z),y.get("/",((e,t)=>t.sendFile("/index.html",{root:"public"}))),y.get("/books",((e,t)=>t.sendFile("/books.html",{root:"public"}))),y.get("/employees",((e,t)=>t.sendFile("/employees.html",{root:"public"}))),y.get("/positions",((e,t)=>t.sendFile("/positions.html",{root:"public"}))),y.get("/customers",((e,t)=>t.sendFile("/customers.html",{root:"public"}))),y.get("/purchases",((e,t)=>t.sendFile("/purchases.html",{root:"public"}))),y.get("/receipts",((e,t)=>t.sendFile("/receipts.html",{root:"public"}))),y.get("/suppliers",((e,t)=>t.sendFile("/suppliers.html",{root:"public"}))),y.listen(m,(()=>{console.log(`the server is started on the port = ${m}`)})),t()}catch(e){t(e)}}))},34:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{$6:()=>u,Ly:()=>l,O8:()=>p,RB:()=>c,fy:()=>n,qK:()=>h,wS:()=>d});var a=s(496),i=s(924),r=e([i]);const n=(i=(r.then?(await r)():r)[0]).Z.define("books",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},title:a.DataTypes.CHAR(75),author:a.DataTypes.CHAR(50),description:a.DataTypes.STRING,cost:a.DataTypes.INTEGER,year:a.DataTypes.INTEGER,year:a.DataTypes.INTEGER,delivery_id:a.DataTypes.INTEGER,quantity:a.DataTypes.INTEGER},{timestamps:!1}),c=i.Z.define("employees",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},last_name:a.DataTypes.CHAR(100),first_name:a.DataTypes.CHAR(100),patronymic:a.DataTypes.CHAR(100),position_id:a.DataTypes.INTEGER,phone:a.DataTypes.CHAR(20)},{timestamps:!1}),l=i.Z.define("positions",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},name:a.DataTypes.CHAR(50),salary:{type:a.DataTypes.INTEGER,defaultValue:null}},{timestamps:!1}),p=i.Z.define("customers",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},last_name:a.DataTypes.CHAR(100),first_name:a.DataTypes.CHAR(100),patronymic:a.DataTypes.CHAR(100),email:a.DataTypes.CHAR(20),phone:a.DataTypes.CHAR(20)},{timestamps:!1}),h=i.Z.define("purchases",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},book_id:a.DataTypes.INTEGER,customer_id:a.DataTypes.INTEGER,date:a.DataTypes.DATE,employee_id:a.DataTypes.INTEGER,quantity:a.DataTypes.INTEGER},{timestamps:!1}),d=i.Z.define("receipts",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},provider_id:a.DataTypes.INTEGER,date:a.DataTypes.DATE},{timestamps:!1}),u=i.Z.define("suppliers",{id:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},name:a.DataTypes.CHAR(76),phone:a.DataTypes.CHAR(20),address:a.DataTypes.CHAR(50)},{timestamps:!1});o()}catch(e){o(e)}}))},139:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>c});var a=s(860),i=s(34),r=e([i]);i=(r.then?(await r)():r)[0];const n=(0,a.Router)();n.get("/",(async(e,t)=>{try{const e=await i.fy.findAll();t.status(200).json({items:e})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{title:s,author:o,description:a,cost:r,year:n,quantity:c}=e.body;if(!(s||o||a||r||n||c))return t.status(204).json({detail:"all fields are required"});if((await i.fy.findAll({attributes:["id"],where:{title:s}}))[0]?.dataValues)return t.status(302).json({detail:"name is occupied"});const l=await i.fy.create({title:s,author:o,description:a,cost:r,year:n,quantity:c,delivery_id:0});t.status(201).json(l.dataValues)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{BooksId:s}=e.body;if(!s)return t.status(204).json({detail:"param BooksId is required"});s.forEach((async e=>{await i.fy.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const c=n;o()}catch(e){o(e)}}))},899:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>c});var a=s(860),i=s(34),r=e([i]);i=(r.then?(await r)():r)[0];const n=(0,a.Router)();n.get("/",(async(e,t)=>{try{const e=await i.O8.findAll();t.status(200).json({items:e})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{first_name:s,last_name:o,patronymic:a,email:r,phone:n}=e.body;if(!(s||o||a||r||n))return t.status(204).json({detail:"all fields are required"});const c=await i.O8.create({first_name:s,last_name:o,patronymic:a,email:r,phone:n});t.status(201).json(c)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{customersId:s}=e.body;if(!s)return t.status(204).json({detail:"param customersId is required"});s.forEach((async e=>{await i.O8.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const c=n;o()}catch(e){o(e)}}))},46:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>c});var a=s(860),i=s(34),r=e([i]);i=(r.then?(await r)():r)[0];const n=(0,a.Router)();n.get("/",(async(e,t)=>{try{const e=await i.RB.findAll();t.status(200).json({items:e})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{first_name:s,last_name:o,patronymic:a,position_id:r,phone:n}=e.body;if(!(s||o||a||r||n))return t.status(204).json({detail:"all fields are required"});const c=await i.RB.create({first_name:s,last_name:o,patronymic:a,position_id:r,phone:n});t.status(201).json(c)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{employeesId:s}=e.body;if(!s)return t.status(204).json({detail:"param employeesId is required"});s.forEach((async e=>{await i.RB.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const c=n;o()}catch(e){o(e)}}))},753:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>c});var a=s(860),i=s(34),r=e([i]);i=(r.then?(await r)():r)[0];const n=(0,a.Router)();n.get("/",(async(e,t)=>{try{const e=await i.Ly.findAll();t.status(200).json({items:e})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{name:s}=e.body;if(!s)return t.status(204).json({detail:"name field is required"});if((await i.Ly.findAll({attributes:["id"],where:{name:s}}))[0]?.dataValues)return t.status(302).json({detail:"name is occupied"});const o=await i.Ly.create({name:s,salary});t.status(201).json(o)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{positionsId:s}=e.body;if(!s)return t.status(204).json({detail:"id field is required"});s.forEach((async e=>{await i.Ly.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const c=n;o()}catch(e){o(e)}}))},613:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>l});var a=s(860),i=s(924),r=s(34),n=e([i,r]);[i,r]=n.then?(await n)():n;const c=(0,a.Router)();c.get("/",(async(e,t)=>{try{const e=await i.Z.query("\n\t\t\t\tSELECT * FROM purchases\n\t\t\t\tJOIN (\n\t\t\t\t\tSELECT books.title AS bookTitle, books.id AS bookID FROM books\n\t\t\t\t) AS B ON purchases.book_id = bookID\n\t\t\t\tJOIN (\n\t\t\t\t\tSELECT customers.patronymic AS customers_patronymic, customers.last_name AS customers_last_name, customers.first_name AS customers_first_name, customers.id AS customerID FROM customers\n\t\t\t\t) AS C ON purchases.customer_id = customerID\n\t\t\t\tJOIN (\n\t\t\t\t\tSELECT employees.patronymic AS employees_patronymic, employees.last_name AS employees_last_name, employees.first_name AS employees_first_name, employees.id AS employeeID FROM employees\n\t\t\t\t) AS E ON purchases.employee_id = employeeID\n\t\t\t");t.status(200).json({items:e[0]})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{quantity:s,book_id:o,employee_id:a,customer_id:i}=e.body;if(!(s||o||a||i))return t.status(204).json({detail:"all fields are required"});const n=await r.qK.create({quantity:s,book_id:o,employee_id:a,customer_id:i,date:Date()});t.status(201).json(n)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{purchasesId:s}=e.body;if(!s)return t.status(204).json({detail:"param purchasesId is required"});s.forEach((async e=>{await r.qK.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const l=c;o()}catch(e){o(e)}}))},161:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>l});var a=s(860),i=s(924),r=s(34),n=e([i,r]);[i,r]=n.then?(await n)():n;const c=(0,a.Router)();c.get("/",(async(e,t)=>{try{const e=await i.Z.query("\n\t\t\t\tSELECT *, receipts.id AS receiptsID FROM receipts \n\t\t\t\tJOIN (\n\t\t\t\t\tSELECT *, suppliers.id AS providerID FROM suppliers\n\t\t\t\t) AS S ON receipts.provider_id = providerID\n\t\t\t");t.status(200).json({items:e[0]})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{providerId:s}=e.body;if(!s)return t.status(204).json({detail:"providerId field is required"});const o=await r.wS.create({provider_id:s,date:Date()});t.status(201).json(o)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{receiptsId:s}=e.body;if(!s)return t.status(204).json({detail:"id field is required"});s.forEach((async e=>{await r.wS.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const l=c;o()}catch(e){o(e)}}))},330:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Z:()=>c});var a=s(860),i=s(34),r=e([i]);i=(r.then?(await r)():r)[0];const n=(0,a.Router)();n.get("/",(async(e,t)=>{try{const e=await i.$6.findAll();t.status(200).json({items:e})}catch(e){console.log(e),t.status(500).json("server has problems")}})).post("/",(async(e,t)=>{try{const{name:s,phone:o,address:a}=e.body;if(!(s||o||a))return t.status(204).json({detail:"name, phone, address field is required"});const r=await i.$6.create({name:s,phone:o,address:a});t.status(201).json(r)}catch(e){console.log(e),t.status(500).json("server has problems")}})).delete("/",(async(e,t)=>{try{const{suppliersId:s}=e.body;if(!s)return t.status(204).json({detail:"id field is required"});s.forEach((async e=>{await i.$6.destroy({where:{id:e}})})),t.status(200).json("successfully deleted")}catch(e){console.log(e),t.status(500).json("server has problems")}}));const c=n;o()}catch(e){o(e)}}))}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={id:e,exports:{}};return r[e](s,s.exports,c),s.exports}e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",s="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a=e=>!--e.r&&e(),i=(e,t)=>e?e.push(t):a(t),c.a=(r,n,c)=>{var l,p,h,d=c&&[],u=r.exports,m=!0,y=!1,f=(t,s,o)=>{y||(y=!0,s.r+=t.length,t.map(((t,a)=>t[e](s,o))),y=!1)},g=new Promise(((e,t)=>{h=t,p=()=>(e(u),o(d),d=0)}));g[t]=u,g[e]=(e,t)=>{if(m)return a(e);l&&f(l,e,t),i(d,e),g.catch(t)},r.exports=g,n((r=>{var n;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var n=[];r.then((e=>{c[t]=e,o(n),n=0}),(e=>{c[s]=e,o(n),n=0}));var c={};return c[e]=(e,t)=>(i(n,e),r.catch(t)),c}}var l={};return l[e]=e=>a(e),l[t]=r,l})))(r);var c=()=>l.map((e=>{if(e[s])throw e[s];return e[t]})),p=new Promise(((e,t)=>{(n=()=>e(c)).r=0,f(l,n,t)}));return n.r?p:c()}),(e=>(e&&h(g[s]=e),p()))),m=!1},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var s in t)c.o(t,s)&&!c.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.nc=void 0,c(136)})();