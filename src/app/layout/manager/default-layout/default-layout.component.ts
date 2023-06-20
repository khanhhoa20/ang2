import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  sideBarOpen = true
  constructor(){}
  
  ngOnInit(): void{}
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen
  }
}
