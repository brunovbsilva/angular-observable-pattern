import { IToast } from "./itoast";

export class InfoToast implements IToast {
  constructor(
    public readonly message: string,
    public readonly expirationTime: number
  ) {}

  getClass(): string {
    return 'toast--info';
  }
}