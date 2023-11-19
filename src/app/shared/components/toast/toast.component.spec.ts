import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { ToastService } from './service/toast.service';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastComponent]
    });
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toast list', () => {

    it('should start be empty', () => {
      expect(component.toasts).toEqual([]);
    });

    it('should push a toast', () => {
      // Arrange
      let service = TestBed.inject(ToastService);
      // Act
      service.success('test');
      // Assert
      expect(component.toasts.length).toEqual(1);
    });

    it('should push a toast and remove after expiration time', fakeAsync(() => {
      // Arrange
      let service = TestBed.inject(ToastService);
      // Act
      service.success('test', 1000);
      // Assert
      expect(component.toasts.length).toEqual(1);
      tick(1001);
      expect(component.toasts.length).toEqual(0);
    }));
  })
});
