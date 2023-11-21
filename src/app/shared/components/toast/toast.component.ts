import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from './service/toast.service';
import { IToast } from './interfaces/toast.interface';
import { enterLeaveAnimations } from './animations/enter-leave.animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [ enterLeaveAnimations ]
})
export class ToastComponent implements OnDestroy {

  public subscription$: Subscription;
  public toasts: IToast[] = [];

  constructor(private readonly toastService: ToastService) {
    this.subscription$ = this.toastService.getObservable().subscribe({
      next: (toast: IToast) => {
        this.toasts.push(toast);
        setTimeout(() => this.removeToast(toast), toast.expirationTime);
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
