import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginFormData } from "../../shared-types";

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'arb-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDialogComponent {
  public loginForm: FormGroup<LoginForm>

  constructor(
    public matDialogRef: MatDialogRef<LoginDialogComponent, LoginFormData>
  ) {
    this.initialiseForm()
  }


  private initialiseForm(): void {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),

      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)]
      },)
    })
  }

  public submitForm(): void {
    this.loginForm.markAllAsTouched()

    if (!this.loginForm.valid) {
      return
    }

    this.matDialogRef.close(this.loginForm.getRawValue())
  }
}
