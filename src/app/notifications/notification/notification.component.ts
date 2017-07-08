import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent {
  @Input() public message: string;
  @Input() public severity: string = 'success';

  constructor(private el: ElementRef) { }

  getAlertSeverityClass() {
    return `alert-${this.severity}`;
  }

  remove() {
    this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
  }

}
