import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {
  @Output() currentPage = new EventEmitter<string>();
  collapsed: boolean = true;
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectPage(page: string) {
    // Page Change Logic - Pass Page to Parent
    // console.log("NAV:", page);
    this.currentPage.emit(page);
  }
}
