import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-apexcharts',
  templateUrl: './charts-apexcharts.component.html',
  styleUrls: ['./charts-apexcharts.component.scss']
})
export class ChartsApexchartsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
