import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { ToastService } from 'src/app/shared/components/toast/service/toast.service';
import { ToastType } from 'src/app/shared/components/toast/enums/toast-type.enum';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastComponent]
    });
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should send toast', () => {
    const expirationTime = 1000;
    let serviceSpy: {
      success: jasmine.Spy,
      danger: jasmine.Spy,
      warning: jasmine.Spy,
      info: jasmine.Spy
    }

    beforeEach(() => {
      serviceSpy = {
        success: spyOn(service, 'success'),
        danger: spyOn(service, 'danger'),
        warning: spyOn(service, 'warning'),
        info: spyOn(service, 'info')
      }
    });

    describe('default', () => {
      [
        ToastType.SUCCESS,
        ToastType.DANGER,
        ToastType.WARNING,
        ToastType.INFO
      ].forEach(type => {
        it(ToastType[type], () => {
          // Act
          component.sendToast(type);
          // Assert
          switch (type) {
            case ToastType.SUCCESS:
              expect(serviceSpy.success).toHaveBeenCalled();
              break;
            case ToastType.DANGER:
              expect(serviceSpy.danger).toHaveBeenCalled();
              break;
            case ToastType.WARNING:
              expect(serviceSpy.warning).toHaveBeenCalled();
              break;
            case ToastType.INFO:
              expect(serviceSpy.info).toHaveBeenCalled();
              break;
          }
        });
      });
    });

    describe('with custom message', () => {
      [
        ToastType.SUCCESS,
        ToastType.DANGER,
        ToastType.WARNING,
        ToastType.INFO
      ].forEach(type => {
        it(ToastType[type], () => {
          // Arrange
          const message = 'custom message';
          const expirationTime = 3000;
          // Act
          component.sendCustomToast(type, message);
          // Assert
          switch (type) {
            case ToastType.SUCCESS:
              expect(serviceSpy.success).toHaveBeenCalledWith(message, expirationTime);
              break;
            case ToastType.DANGER:
              expect(serviceSpy.danger).toHaveBeenCalledWith(message, expirationTime);
              break;
            case ToastType.WARNING:
              expect(serviceSpy.warning).toHaveBeenCalledWith(message, expirationTime);
              break;
            case ToastType.INFO:
              expect(serviceSpy.info).toHaveBeenCalledWith(message, expirationTime);
              break;
          }
        });

        it('should alert with warning toast when message is empty', () => {
          // Arrange
          const message = '';
          const expirationTime = 3000;
          // Act
          component.sendCustomToast(type, message);
          // Assert
          expect(serviceSpy.warning).toHaveBeenCalledWith('Por favor, digite uma mensagem!', expirationTime);
        });
      });
    })
  })
});
