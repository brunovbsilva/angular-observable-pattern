import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IToast } from '../interfaces/toast.interface';
import { SuccessToast } from '../models/success-toast';
import { DangerToast } from '../models/danger-toast';
import { WarnToast } from '../models/warn-toast';
import { InfoToast } from '../models/info-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private subject$: Subject<IToast> = new Subject<IToast>();
  private readonly defaultExpirationTime: number = 5000;

  constructor() { }

  getObservable(): Observable<IToast> {
    return this.subject$.asObservable();
  }

  success(message: string, expirationTime: number = this.defaultExpirationTime) {
    this.subject$.next(new SuccessToast(message, expirationTime));
  }

  danger(message: string, expirationTime: number = this.defaultExpirationTime) {
    this.subject$.next(new DangerToast(message, expirationTime));
  }

  warning(message: string, expirationTime: number = this.defaultExpirationTime) {
    this.subject$.next(new WarnToast(message, expirationTime));
  }

  info(message: string, expirationTime: number = this.defaultExpirationTime) {
    this.subject$.next(new InfoToast(message, expirationTime));
  }
}
