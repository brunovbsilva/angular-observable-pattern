import { IToast } from "../interfaces/toast.interface";

export class WarnToast implements IToast {
  constructor(
    public readonly message: string,
    public readonly expirationTime: number
  ) {}

  getClass(): string {
    return 'toast--warning';
  }
}