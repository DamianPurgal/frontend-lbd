import { Component, Input, OnInit } from '@angular/core';
import { NotificationType } from './type/notification-type';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input()
  type!: NotificationType;

  @Input()
  header!: string;

  @Input()
  message!: string;

  NotificationTypes = NotificationType;

  constructor() {}

  setNotificationInfo(type: NotificationType, header: string, message: string){
    this.type = type;
    this.header = header;
    this.message = message;
  }
}
