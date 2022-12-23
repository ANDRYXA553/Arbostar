import { Injectable } from '@angular/core';
import { LoginFormData } from "../shared-types";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setValue(key: string, value: LoginFormData): void {
    const parsedValue: string = JSON.stringify(value);
    localStorage.setItem(key, parsedValue)
  }

  public getValue(key: string): LoginFormData | null {
    return localStorage.getItem(key) as LoginFormData | null
  }
}
