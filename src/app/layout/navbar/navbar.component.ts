import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  countriesFlag = "../assets/images/countriesflag/27017.jpg"

  constructor() { }

  ngOnInit(): void {
  }


  getHeadClass(){

    return null

  }

}
