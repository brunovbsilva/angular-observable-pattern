import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { IToast } from '../interfaces/toast.interface';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getObservable', () => {
    it('should return an observable', () => {
      // Act
      const observable$ = service.getObservable();
      // Assert
      expect(observable$).toBeTruthy();
    });

    it('should return an observable of type IToast', () => {
      // Arrange & Assert
      service.getObservable().subscribe({
        next: (toast: IToast) => expect(toast).toBeTruthy(),
        error: () => fail('should not return an error'),
      });
      // Act
      service.success('test');
    });

    it('should not call next if unsubscribed', () => {
      // Arrange
      const observable$ = service.getObservable().subscribe({
        next: (toast: IToast) => fail('should not subscribe'),
      });
      observable$.unsubscribe();
      // Act
      service.success('test');
      // Assert
      expect(observable$.closed).toBeTruthy();
    });
  });

  describe('subscribes', () => {

    const message = 'test';
    const expirationTime = 1000;
    const defaultExpirationTime = 5000;

    describe('success', () => {
      it('should subscribe with message and expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--success');
            expect(toast.expirationTime).toEqual(expirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.success(message, expirationTime);
      });
  
      it('should subscribe with message and default expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--success');
            expect(toast.expirationTime).toEqual(defaultExpirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.success(message);
      });
    });

    describe('danger', () => {
      it('should subscribe with message and expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--danger');
            expect(toast.expirationTime).toEqual(expirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.danger(message, expirationTime);
      });
  
      it('should subscribe with message and default expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--danger');
            expect(toast.expirationTime).toEqual(defaultExpirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.danger(message);
      });
    });

    describe('warning', () => {
      it('should subscribe with message and expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--warning');
            expect(toast.expirationTime).toEqual(expirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.warning(message, expirationTime);
      });
  
      it('should subscribe with message and default expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--warning');
            expect(toast.expirationTime).toEqual(defaultExpirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.warning(message);
      });
    });

    describe('info', () => {
      it('should subscribe with message and expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--info');
            expect(toast.expirationTime).toEqual(expirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.info(message, expirationTime);
      });
  
      it('should subscribe with message and default expiration time', () => {
        // Arrange & Assert
        service.getObservable().subscribe({
          next: (toast: IToast) => {
            expect(toast.message).toEqual(message);
            expect(toast.getClass()).toEqual('toast--info');
            expect(toast.expirationTime).toEqual(defaultExpirationTime);
          },
          error: () => fail('should not return an error'),
        });
        // Act
        service.info(message);
      });
    });
  });
});
