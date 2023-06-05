import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
    signUpInfoFormGroup: FormGroup;

    @Input()
    user;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {

        this.signUpInfoFormGroup = this.formBuilder.group({
            UserId: new FormControl('', Validators.required),
            Email: new FormControl('', Validators.required),
            Name: new FormControl('', Validators.required),
            Phone: new FormControl(''),
            SchoolName: new FormControl(''),
            EducationanLevel: new FormControl('')
        });
    }

}
