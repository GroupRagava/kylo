var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material", "@angular/forms", "ng2-validation"], function (require, exports, core_1, material_1, forms_1, ng2_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var password = new forms_1.FormControl('', forms_1.Validators.required);
    var confirmPassword = new forms_1.FormControl('', ng2_validation_1.CustomValidators.equalTo(password));
    var DialogCreate = (function () {
        function DialogCreate(dialogRef, fb) {
            this.dialogRef = dialogRef;
            this.fb = fb;
        }
        DialogCreate.prototype.ngOnInit = function () {
            this.form = this.fb.group({
                fname: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
                email: [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.email])],
                range: [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.range([5, 9])])],
                url: [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.url])],
                date: [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.date])],
                creditCard: [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.creditCard])],
                phone: [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.phone('en-US')])],
                gender: [null, forms_1.Validators.required],
                password: password,
                confirmPassword: confirmPassword
            });
        };
        return DialogCreate;
    }());
    DialogCreate = __decorate([
        core_1.Component({
            selector: 'app-demo-content-element-dialog',
            styles: [
                "img {\n      max-width: 100%;\n    }"
            ],
            template: "\n    <h2 md-dialog-title>Create Project</h2>\n    <md-dialog-content>\n \n    </md-dialog-content>\n    <md-dialog-actions>\n         <span fxFlex></span>\n            <button\n        md-button\n        color=\"warn\"\n        md-dialog-close>CANCEL</button>\n            <button\n        md-button\n        color=\"primary\"\n        md-dialog-close=\"true\">OK</button>\n    </md-dialog-actions>\n  "
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef, forms_1.FormBuilder])
    ], DialogCreate);
    exports.DialogCreate = DialogCreate;
});
//# sourceMappingURL=dialog-create.component.js.map