import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ActivityPageComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'bootstrap-grid');
   }

  ngOnInit() {
  }

}
