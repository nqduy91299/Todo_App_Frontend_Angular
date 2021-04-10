(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project-frontend\Todo_App_Frontend_Angular\src\main.ts */"zUnb");


/***/ }),

/***/ "1oh7":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-input/todo-input.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class TodoInputComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() { }
    onSubmit() {
        if (this.todoContent.trim() === '') {
            return false;
        }
        this.todoService.addTodo(this.todoContent);
        this.todoContent = '';
    }
}
TodoInputComponent.ɵfac = function TodoInputComponent_Factory(t) { return new (t || TodoInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"])); };
TodoInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoInputComponent, selectors: [["app-todo-input"]], decls: 1, vars: 1, consts: [["type", "text", "placeholder", "What needs to be done?", "required", "", 1, "w-100", "h-100", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function TodoInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoInputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.todoContent = $event; })("keyup.enter", function TodoInputComponent_Template_input_keyup_enter_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todoContent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["input[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  margin-left: 10px;\n  font-size: 35px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWlucHV0L3RvZG8taW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8taW5wdXQvdG9kby1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-input',
                templateUrl: './todo-input.component.html',
                styleUrls: ['./todo-input.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-input/todo-input.component */ "1oh7");




class HeaderComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() { }
    toggleAll() {
        this.todoService.toggleAll();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "d-flex", "align-items-center", "h-100"], [1, "icon-wrapper", "h-100", "text-center"], [1, "eva", "eva-chevron-down", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_2_listener() { return ctx.toggleAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-todo-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_2__["TodoInputComponent"]], styles: [".icon-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  line-height: 45px;\n  font-size: 40px;\n  color: grey;\n  background: white;\n  transition: 250ms all ease-in-out;\n  cursor: pointer;\n}\n.icon-wrapper[_ngcontent-%COMP%]:hover {\n  color: black;\n}\napp-todo-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFHQTtFQUNFLFdBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogZ3JleTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbmFwcC10b2RvLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DRYZ":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    set(key, value) {
        this.storage[key] = value;
    }
    get(key) {
        return this.storage[key] || false;
    }
    setObject(key, value) {
        if (!value) {
            return;
        }
        this.storage[key] = JSON.stringify(value);
    }
    getObject(key) {
        return JSON.stringify(this.storage[key] || false);
    }
    getValue(key) {
        const obj = JSON.parse(this.storage[key] || null);
        return obj || null;
    }
    remove(key) {
        this.storage.removeItem(key);
    }
    clear() {
        this.storage.clear();
    }
    get length() {
        return this.storage.length;
    }
    get isStorageEmpty() {
        return this.length === 0;
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FlD/":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function TodoItemComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TodoItemComponent_form_10_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.todo.content = $event; })("keyup", function TodoItemComponent_form_10_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.submitEditForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.todo.content);
} }
const _c0 = function (a0) { return { checked: a0 }; };
const _c1 = function (a0) { return { active: a0 }; };
const fadeStrikeThroughAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeStrikeThrough', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        fontSize: '18px',
        color: 'black',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('completed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        fontSize: '17px',
        color: 'lightgrey',
        textDecoration: 'line-through',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active <=> completed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250)]),
]);
class TodoItemComponent {
    constructor() {
        this.changeStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHovered = false;
        this.isEditing = false;
    }
    ngOnInit() { }
    changeTodoStatus() {
        this.changeStatus.emit(Object.assign(Object.assign({}, this.todo), { isCompleted: !this.todo.isCompleted }));
    }
    submitEditForm(event) {
        const { keyCode } = event;
        event.preventDefault();
        if (keyCode === 13) {
            this.editTodo.emit(this.todo);
            this.isEditing = false;
        }
    }
    removeTodo() {
        this.deleteTodo.emit(this.todo);
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo" }, outputs: { changeStatus: "changeStatus", editTodo: "editTodo", deleteTodo: "deleteTodo" }, decls: 11, vars: 16, consts: [[1, "todo-item", "d-flex", "justify-content-between", "align-items-center", 3, "mouseover", "mouseout"], [1, "todo"], ["type", "checkbox", 1, "toggle", "text-center", 3, "id", "ngClass", "checked", "change"], [3, "for"], [1, "d-flex", "align-items-center"], [1, "icon-wrapper", "text-center", "edit", 3, "ngClass", "hidden"], [1, "eva", "eva-edit-outline", 3, "click"], [1, "icon-wrapper", "text-center", 3, "ngClass", "click"], [1, "eva", "eva-close"], ["class", "edit-form", 4, "ngIf"], [1, "edit-form"], ["type", "text", "name", "editTodo", 3, "ngModel", "ngModelChange", "keyup"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function TodoItemComponent_Template_div_mouseover_0_listener() { return ctx.isHovered = true; })("mouseout", function TodoItemComponent_Template_div_mouseout_0_listener() { return ctx.isHovered = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TodoItemComponent_Template_input_change_2_listener() { return ctx.changeTodoStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoItemComponent_Template_i_click_7_listener() { return ctx.isEditing = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoItemComponent_Template_span_click_8_listener() { return ctx.removeTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TodoItemComponent_form_10_Template, 2, 1, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.todo.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.todo.isCompleted))("checked", ctx.todo.isCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeStrikeThrough", ctx.todo.isCompleted ? "completed" : "active")("for", ctx.todo.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.todo.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.isHovered))("hidden", ctx.todo.isCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.isHovered));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".todo-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  padding: 0 5px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n.todo-item[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  font-size: 18px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.todo-item[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.todo-item[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: none;\n}\n.todo-item[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%]   .toggle.checked[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todo-item[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n}\n.todo-item[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  color: white;\n  background: white;\n  transition: 250ms all ease-in-out;\n}\n.todo-item[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.todo-item[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2, 1.2);\n  color: #f74e30;\n}\n.todo-item[_ngcontent-%COMP%]   .icon-wrapper.active[_ngcontent-%COMP%] {\n  color: tomato;\n  cursor: pointer;\n}\n.todo-item[_ngcontent-%COMP%]   .icon-wrapper.edit[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2, 1.2);\n  color: #00a2ff;\n}\n.todo-item[_ngcontent-%COMP%]   .icon-wrapper.edit.active[_ngcontent-%COMP%] {\n  color: deepskyblue;\n  cursor: pointer;\n}\n.todo-item[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.5%;\n  height: 100%;\n  background: white;\n}\n.todo-item[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 92%;\n  width: 92%;\n  margin-left: 35px;\n  font-size: 18px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUFDTjtBQUVJO0VBQ0Usb1VBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBQU47QUFHSTtFQUNFLHlhQUFBO0FBRE47QUFJSTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBRk47QUFNRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFKSjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBTUk7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFKTjtBQU9JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFMTjtBQVNNO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBUFI7QUFTTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVBSO0FBWUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVdJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8taXRlbSB7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJiAudG9kbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAmIC50b2dnbGUge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYgLnRvZ2dsZSArIGxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJiAudG9nZ2xlLmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzYmRkYWQ1JTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzVkYzJhZiUyMiUyMGQlM0QlMjJNNzIlMjAyNUw0MiUyMDcxJTIwMjclMjA1NmwtNCUyMDQlMjAyMCUyMDIwJTIwMzQtNTJ6JTIyLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJiBsYWJlbCB7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5pY29uLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDI1MG1zIGFsbCBlYXNlLWluLW91dDtcclxuICAgICYgPiBpIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgICAgY29sb3I6IHJnYigyNDcsIDc4LCA0OCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogdG9tYXRvO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5lZGl0IHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XHJcbiAgICAgIH1cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmVkaXQtZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTguNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICYgaW5wdXQge1xyXG4gICAgICBoZWlnaHQ6IDkyJTtcclxuICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [fadeStrikeThroughAnimation] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss'],
                animations: [fadeStrikeThroughAnimation],
            }]
    }], function () { return []; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], changeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], editTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deleteTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "GlB7":
/*!**************************************!*\
  !*** ./src/app/models/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(id, content, isCompleted = false) {
        this.id = id;
        this.content = content;
        this.isCompleted = isCompleted;
    }
}


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/filtering.modal */ "NUKm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { active: a0 }; };
function FooterComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const btn_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.filter(btn_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, btn_r1.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", btn_r1.label, " ");
} }
const _c1 = function (a0) { return { visible: a0 }; };
class FooterComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.filterButtons = [
            { type: src_app_models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].All, label: 'All', isActive: true },
            { type: src_app_models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].Active, label: 'Active', isActive: false },
            { type: src_app_models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].Completed, label: 'Completed', isActive: false },
        ];
        this.length = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.hasCompleted$ = this.todoService.todo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((todo) => todo.some((t) => t.isCompleted)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
        this.todoService.length$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((length) => {
            this.length = length;
        });
    }
    filter(type) {
        this.setActiveFilterBtn(type);
        this.todoService.filterTodos(type);
    }
    clearCompleted() {
        this.todoService.clearCompleted();
    }
    setActiveFilterBtn(type) {
        this.filterButtons.forEach((btn) => {
            btn.isActive = btn.type === type;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 8, consts: [[1, "footer"], [1, "position-absolute", "d-flex", "justify-content-between", "align-items-center", 2, "top", "0", "bottom", "0", "left", "0", "right", "0"], [1, "items-count"], ["type", "button", "class", "filter-btn", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "filter-btn", "clear-completed-btn", 3, "ngClass", "click"], ["type", "button", 1, "filter-btn", 3, "ngClass", "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_button_5_Template, 2, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_6_listener() { return ctx.clearCompleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clear Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.length, " item", ctx.length > 1 ? "s" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.hasCompleted$)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.footer[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.footer[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 0.25rem;\n  transition: 250ms all ease-in-out;\n  outline: none;\n  cursor: pointer;\n  margin-right: 5px;\n  background: white;\n  border: 1px solid white;\n}\n.footer[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover, .footer[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  border-color: burlywood;\n}\n.footer[_ngcontent-%COMP%]   .clear-completed-btn[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.footer[_ngcontent-%COMP%]   .clear-completed-btn.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.footer[_ngcontent-%COMP%]   .items-count[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUFDSjtBQUlFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBSUk7RUFFRSx1QkFBQTtBQUhOO0FBT0U7RUFDRSxrQkFBQTtBQUxKO0FBT0k7RUFDRSxtQkFBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxyXG4gICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcclxuICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gICYgLmZpbHRlci1idG4ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IDI1MG1zIGFsbCBlYXNlLWluLW91dDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgJjpob3ZlcixcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5jbGVhci1jb21wbGV0ZWQtYnRuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAmLnZpc2libGUge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAuaXRlbXMtY291bnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "NUKm":
/*!*******************************************!*\
  !*** ./src/app/models/filtering.modal.ts ***!
  \*******************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
var Filter;
(function (Filter) {
    Filter[Filter["All"] = 0] = "All";
    Filter[Filter["Active"] = 1] = "Active";
    Filter[Filter["Completed"] = 2] = "Completed";
})(Filter || (Filter = {}));


/***/ }),

/***/ "RPnm":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "FlD/");





function TodoListComponent_app_todo_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStatus", function TodoListComponent_app_todo_item_0_Template_app_todo_item_changeStatus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangeStatus($event); })("editTodo", function TodoListComponent_app_todo_item_0_Template_app_todo_item_editTodo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onEditTodo($event); })("deleteTodo", function TodoListComponent_app_todo_item_0_Template_app_todo_item_deleteTodo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDeleteTodo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1);
} }
class TodoListComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todos$ = this.todoService.todo$;
    }
    onChangeStatus(todo) {
        this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
    }
    onEditTodo(todo) {
        this.todoService.editTodo(todo.id, todo.content);
    }
    onDeleteTodo(todo) {
        this.todoService.deleteTodo(todo.id);
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], decls: 2, vars: 3, consts: [[3, "todo", "changeStatus", "editTodo", "deleteTodo", 4, "ngFor", "ngForOf"], [3, "todo", "changeStatus", "editTodo", "deleteTodo"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoListComponent_app_todo_item_0_Template, 1, 1, "app-todo-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.todos$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/todo.service */ "tadm");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");








function AppComponent_app_footer_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todoService.fetchFromLocalStorage();
        this.hasTodo$ = this.todoService.length$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((length) => length > 0));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 3, consts: [[1, "wrapper", "d-flex", "flex-column", "align-item-center"], [1, "title"], [1, "row", "justify-content-center", "w-100"], [1, "todo-wrapper", "p-0", "d-flex", "flex-column", "col-md-6", "col-sm-8"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-todo-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_footer_7_Template, 1, 0, "app-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.hasTodo$));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 120px;\n  text-align: center;\n  color: darkseagreen;\n  padding: 2rem;\n}\n.wrapper[_ngcontent-%COMP%]   .todo-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n  background: white;\n}\n.wrapper[_ngcontent-%COMP%]   .todo-wrapper[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSw0RUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtBQUFOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGRhcmtzZWFncmVlbjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgfVxyXG4gICYgLnRvZG8td3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgJiBhcHAtaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/todo-input/todo-input.component */ "1oh7");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "FlD/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_6__["TodoInputComponent"],
        _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["TodoItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_6__["TodoInputComponent"],
                    _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["TodoItemComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "tadm":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/filtering.modal */ "NUKm");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/todo.model */ "GlB7");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "DRYZ");






class TodoService {
    constructor(StorageService) {
        this.StorageService = StorageService;
        this.lengthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.displayTodoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentFilter = _models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].All;
        this.todo$ = this.displayTodoSubject.asObservable();
        this.length$ = this.lengthSubject.asObservable();
    }
    fetchFromLocalStorage() {
        this.todos =
            this.StorageService.getValue(TodoService.TodoStorageKey) || [];
        this.filteredTodos = [...this.todos];
        this.updateTodosData();
    }
    updateToLocalStorage() {
        this.StorageService.setObject(TodoService.TodoStorageKey, this.todos);
        this.filterTodos(this.currentFilter, false);
        this.updateTodosData();
    }
    addTodo(content) {
        const date = new Date(Date.now()).getTime();
        const newTodo = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"](date, content);
        this.todos.unshift(newTodo);
        this.updateToLocalStorage();
    }
    changeTodoStatus(id, isCompleted) {
        const index = this.todos.findIndex((item) => item.id === id);
        const todo = this.todos[index];
        todo.isCompleted = isCompleted;
        this.todos.splice(index, 1, todo);
        this.updateToLocalStorage();
    }
    editTodo(id, content) {
        const index = this.todos.findIndex((item) => item.id === id);
        const todo = this.todos[index];
        todo.content = content;
        this.todos.splice(index, 1, todo);
        this.updateToLocalStorage();
    }
    deleteTodo(id) {
        const index = this.todos.findIndex((item) => item.id === id);
        this.todos.splice(index, 1);
        this.updateToLocalStorage();
    }
    toggleAll() {
        this.todos = this.todos.map((todo) => {
            return Object.assign(Object.assign({}, todo), { isCompleted: !this.todos.every((t) => t.isCompleted) });
        });
        this.updateToLocalStorage();
    }
    filterTodos(filter, isFiltering = true) {
        this.currentFilter = filter;
        switch (filter) {
            case _models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].Active:
                this.filteredTodos = this.todos.filter((item) => !item.isCompleted);
                break;
            case _models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].Completed:
                this.filteredTodos = this.todos.filter((item) => item.isCompleted);
                break;
            case _models_filtering_modal__WEBPACK_IMPORTED_MODULE_2__["Filter"].All:
                this.filteredTodos = [...this.todos];
                break;
        }
        if (isFiltering) {
            this.updateTodosData();
        }
    }
    clearCompleted() {
        this.todos = this.todos.filter((todo) => !todo.isCompleted);
        this.updateToLocalStorage();
    }
    updateTodosData() {
        this.displayTodoSubject.next(this.filteredTodos);
        this.lengthSubject.next(this.todos.length);
    }
}
TodoService.TodoStorageKey = 'todos';
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map