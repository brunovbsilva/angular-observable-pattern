export interface IToast {
  readonly message: string;
  readonly expirationTime: number;
  getClass(): string;
}