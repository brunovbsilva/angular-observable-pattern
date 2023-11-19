import { Component } from '@angular/core';
import { ToastService } from 'src/app/shared/components/toast/service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  buttons = [
    { label: 'Toast de sucesso', type: 0 },
    { label: 'Toast de erro', type: 1 },
    { label: 'Toast de alerta', type: 2 },
    { label: 'Toast de informação', type: 3 }
  ];

  constructor(private service: ToastService) { }

  sendToast(type: number) {
    switch (type) {
      case 0:
        this.service.success('Toast de sucesso', 1000);
        break;
      case 1:
        this.service.danger('Toast de erro', 1000);
        break;
      case 2:
        this.service.warning('Toast de alerta', 1000);
        break;
      case 3:
        this.service.info('Toast de informação', 1000);
        break;
    }
  }
}
