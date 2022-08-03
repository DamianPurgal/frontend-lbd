import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  @Input()
  success!: boolean;

  @Input()
  header!: string;

  @Input()
  message!: string;

  ngOnInit(): void {
  }

}
