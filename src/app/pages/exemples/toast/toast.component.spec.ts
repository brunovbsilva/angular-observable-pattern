import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { ToastService } from 'src/app/shared/components/toast/service/toast.service';

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

    it('success', () => {
      // Arrange
      const message = 'Toast de sucesso';
      // Act
      component.sendToast(0);
      // Assert
      expect(serviceSpy.success).toHaveBeenCalledWith(message, expirationTime);
    });

    it('danger', () => {
      // Arrange
      const message = 'Toast de erro';
      // Act
      component.sendToast(1);
      // Assert
      expect(serviceSpy.danger).toHaveBeenCalledWith(message, expirationTime);
    });

    it('warning', () => {
      // Arrange
      const message = 'Toast de alerta';
      // Act
      component.sendToast(2);
      // Assert
      expect(serviceSpy.warning).toHaveBeenCalledWith(message, expirationTime);
    });

    it('info', () => {
      // Arrange
      const message = 'Toast de informação';
      // Act
      component.sendToast(3);
      // Assert
      expect(serviceSpy.info).toHaveBeenCalledWith(message, expirationTime);
    });
  })
});
