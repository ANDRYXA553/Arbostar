import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "../components/login-dialog/login-dialog.component";
import { LoginFormData } from "../shared-types";
import { filter } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { LOGIN_FORM_STORAGE_KEY } from "../constants";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {

  constructor(
    private matDialog: MatDialog,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
  ) {}

  public openDialog(): void {
    this.matDialog.open<LoginDialogComponent, undefined, LoginFormData>(LoginDialogComponent,
      {
        disableClose: true,
        minWidth: '350px'
      }
    ).afterClosed()
      .pipe(filter(Boolean),)

      //there is no point to unsubscribe because afterClose is a cold observable and completes by itself
      .subscribe(value => {
        this.handleDialogClose(value)
      })
  }

  public handleDialogClose(value: LoginFormData): void {
    this.localStorageService.setValue(LOGIN_FORM_STORAGE_KEY, value)
    this.notificationService.open(
      'Your data has been successfully store. You can check it within application section in devtools.',
      {
        duration: 5000 //ms
      }
    )
  }

}
