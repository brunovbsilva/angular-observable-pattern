import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from './service/toast.service';
import { IToast } from './models/itoast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnDestroy {

  private subscription$: Subscription;
  public toasts: IToast[] = [];

  constructor(private readonly toastService: ToastService) {
    this.subscription$ = this.toastService.getObservable().subscribe({
      next: (toast: IToast) => {
        this.toasts.push(toast);
        setTimeout(() => this.removeToast(toast), toast.expirationTime)
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  removeToast(toast: IToast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
