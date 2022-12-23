import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSnackBarConfig } from "@angular/material/snack-bar/snack-bar-config";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnackBar: MatSnackBar) {
  }

  public open(message: string, config?: MatSnackBarConfig): void {
    this.matSnackBar.open(message, '', config
    )
  }
}
