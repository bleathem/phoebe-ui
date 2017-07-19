import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent {
  @Input() public show = true;
  @Input() public message: string;
  @Input() public severity = 'success';

  constructor(private el: ElementRef) {
  }

  @Input()
  set lifetime(lifetime: number) {
    if (lifetime > 0) {
      setTimeout(() => {
        this.el.nativeElement.classList.add('fade');
        this.el.nativeElement.addEventListener('transitionend', event => {
          this.show = false;
        }, false)
      }, lifetime * 1000);
    }
  }

  getAlertSeverityClass() {
    return `alert-${this.severity}`;
  }

  remove() {
    this.show = false;
  }

}
