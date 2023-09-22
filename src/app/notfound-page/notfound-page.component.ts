import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.scss']
})
export class NotfoundPageComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'Not found Anything';
  @Input() resetLinkText: string = 'Reset';
  @Input() resetLinkRoute: string = '/';

  constructor() { }

  ngOnInit(): void {

  }


}
