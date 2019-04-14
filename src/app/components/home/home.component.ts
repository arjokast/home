import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    d3.select("#textcontainer")
      .append("h1")
      .text("Bro")
      .style("opacity", 0)
      .transition()
      .duration(2000)
      .style("opacity", 1)
      .transition()
      .duration(2000)
      .style("opacity", 0)
      .transition()
      .duration(1)
      .text("Do you even lift?")
      .transition()
      .duration(2000)
      .style("opacity", 1);


      // 

      // .attr("color", "blue")
     
      // .attr("color", "red");

      // <h1 id="bro">
      //   Bro
      // </h1>
      
      // <h1 id="doyoueven">
      //   Do you even lift?
      // </h1>

  }
}
