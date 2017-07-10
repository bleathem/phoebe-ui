export class Notification {
  constructor(public message: string, public severity: string = 'success', public lifetime: number = 0) {
  }
}
