import { Component } from '@angular/core';
import { ToastType } from 'src/app/shared/components/toast/enums/toast-type.enum';
import { ToastService } from 'src/app/shared/components/toast/service/toast.service';

interface ToastButtons {
  label: string;
  type: ToastType;
}
const expirationTime: number = 3000;
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  public buttons: ToastButtons[] = [
    { label: 'Sucesso', type: ToastType.SUCCESS },
    { label: 'Erro', type: ToastType.DANGER },
    { label: 'Alerta', type: ToastType.WARNING },
    { label: 'Informação', type: ToastType.INFO }
  ];

  constructor(private service: ToastService) { }

  sendToast(type: ToastType) {
    switch (type) {
      case ToastType.SUCCESS:
        this.service.success('Olá! Sou um toast de SUCESSO capturado pelo observable!', expirationTime);
        break;
      case ToastType.DANGER:
        this.service.danger('Olá! Sou um toast de ERRO capturado pelo observable!', expirationTime);
        break;
      case ToastType.WARNING:
        this.service.warning('Olá! Sou um toast de ALERTA capturado pelo observable!', expirationTime);
        break;
      case ToastType.INFO:
        this.service.info('Olá! Sou um toast de INFORMAÇÃO capturado pelo observable!', expirationTime);
        break;
    }
  }

  getClass(type: ToastType) {
    return {
      'button--success': type === ToastType.SUCCESS,
      'button--danger': type === ToastType.DANGER,
      'button--warning': type === ToastType.WARNING,
      'button--info': type === ToastType.INFO
    };
  }
}
