import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { NotificationComponent} from 'src/app/notification/notification.component';
import { NotificationType } from 'src/app/notification/type/notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().right().top(),
      hasBackdrop: false
    });
  }

  private overlayRef!: OverlayRef;

  private clearWithTimeoutEvent?: any;

  addNotification(type: NotificationType, header: string, message: string){

    clearTimeout(this.clearWithTimeoutEvent);
    this.overlayRef.detach();

    let notification = new ComponentPortal(NotificationComponent);
    let notificationRef = this.overlayRef.attach(notification);
    notificationRef.instance.type = type;
    notificationRef.instance.header = header;
    notificationRef.instance.message = message;

    this.clearWithTimeoutEvent = setTimeout(() => {
        this.overlayRef.detach();
    }, 3500);

  }


}
