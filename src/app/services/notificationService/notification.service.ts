import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent} from 'src/app/notification/notification.component';
import { NotificationType } from 'src/app/notification/type/notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  addNotification(type: NotificationType, header: string, message: string, overlayRef: OverlayRef){
    overlayRef.detach();

    let notification = new ComponentPortal(NotificationComponent);
    let notificationRef = overlayRef.attach(notification);
    notificationRef.instance.type = type;
    notificationRef.instance.header = header;
    notificationRef.instance.message = message;

    setTimeout(() => overlayRef.detach(), 3500);
  }

  constructor() { }
}
