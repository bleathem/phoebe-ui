import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ComponentRef
} from '@angular/core'

// From: https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
import { NotificationComponent } from './notification/notification.component'

import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private factoryResolver: ComponentFactoryResolver;
  private rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  showNotification(message: string, severity: string = 'success') {
    const factory = this.factoryResolver.resolveComponentFactory(NotificationComponent)
    const component: ComponentRef<NotificationComponent> = factory.create(this.rootViewContainer.parentInjector)
    component.instance.message = message;
    component.instance.severity = severity;
    setTimeout(() => {
      this.rootViewContainer.insert(component.hostView)
    }, 0);
  }

}
