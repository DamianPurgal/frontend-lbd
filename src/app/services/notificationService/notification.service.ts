import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from 'src/app/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationContainer!: ViewContainerRef;

  setContainer(notificationContainer: ViewContainerRef){
    this.notificationContainer = notificationContainer;
  }

  addNotification(success: boolean, header: string, message: string){
    const notificationRef = this.notificationContainer.createComponent(
      NotificationComponent
    );
    notificationRef.instance.header = header;
    notificationRef.instance.message = message;
    notificationRef.instance.success = success;
    setTimeout(() => this.deleteNotification(notificationRef), 3000);
  }

  deleteNotification(notification: ComponentRef<NotificationComponent>){
    notification.destroy();
  }

  constructor() { }
}
