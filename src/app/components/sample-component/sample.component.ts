import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sample-component",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"]
})
export class SampleComponent implements OnInit {
  sampleText: string;
  constructor() {
    this.sampleText = "Sample Component";
  }

  ngOnInit() {}
}
