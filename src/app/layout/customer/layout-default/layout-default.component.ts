import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.css'],
})
export class LayoutDefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor() {}
  ngOnInit(): void {}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
