import { Component, Input, OnChanges } from '@angular/core';
import { AUTO_STYLE, trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.less'],
  animations: [
    trigger('collapsedChanged', [
      state('true' , style({ visibility: 'visible', opacity: 1, height: AUTO_STYLE })),
      state('false', style({ visibility: 'hidden', opacity: 0, height: '0px' })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('300ms'))
    ])
  ],
})
export class CollapsiblePanelComponent implements OnChanges {
  @Input() isCollapsed : boolean = true;

  ngOnChanges() { }
}
