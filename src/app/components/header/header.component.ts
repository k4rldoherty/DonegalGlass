import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  burgerClicked: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  openNav() {
    this.burgerClicked = !this.burgerClicked;
    console.log("SJHDAKJHD");
    
  }

}
