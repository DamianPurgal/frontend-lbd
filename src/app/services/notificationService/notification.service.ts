import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent} from 'src/app/notification/notification.component';
import { NotificationType } from 'src/app/notification/type/notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationContainer!: ViewContainerRef;

  setContainer(notificationContainer: ViewContainerRef){
    this.notificationContainer = notificationContainer;
  }

  addNotification(type: NotificationType, header: string, message: string){
    const notificationRef = this.notificationContainer.createComponent(
      NotificationComponent, {index: 0}
    );
    notificationRef.instance.header = header;
    notificationRef.instance.message = message;
    notificationRef.instance.type = type;
    setTimeout(() => this.deleteNotification(notificationRef), 3500);
  }

  deleteNotification(notification: ComponentRef<NotificationComponent>){
    notification.destroy();
  }

  constructor() { }
}
