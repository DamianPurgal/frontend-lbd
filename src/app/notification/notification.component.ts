import { Component, ComponentRef, destroyPlatform, ElementRef, Input, OnInit } from '@angular/core';
import { NotificationType } from './type/notification-type';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  @Input()
  type!: NotificationType;

  @Input()
  header!: string;

  @Input()
  message!: string;

  NotificationTypes = NotificationType;

  ngOnInit(): void {
  }

}
