import { IToast } from "./itoast";

export class SuccessToast implements IToast {
  constructor(
    public readonly message: string,
    public readonly expirationTime: number
  ) {}

  getClass(): string {
    return 'toast--success';
  }
}