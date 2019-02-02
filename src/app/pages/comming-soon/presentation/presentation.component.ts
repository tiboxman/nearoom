import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  private sections = [
                       {name: "bulb", src: "./assets/img/bulb.png"},
                       {name: "bulb", src: "./assets/img/euro.png"},
                       {name: "bulb", src: "./assets/img/locked.png"},
                       {name: "bulb", src: "./assets/img/spotlight.png"}
                     ];

  constructor() { }

  ngOnInit() {
  }

}
