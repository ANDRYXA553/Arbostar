import { Component, OnInit } from '@angular/core';
import { LoginDialogService } from "./services/login-dialog.service";
import { LocalStorageService } from "./services/local-storage.service";
import { LOGIN_FORM_STORAGE_KEY } from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private loginDialogService: LoginDialogService,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    if (!this.localStorageService.getValue(LOGIN_FORM_STORAGE_KEY)) {
      this.loginDialogService.openDialog()
    }
  }
}
