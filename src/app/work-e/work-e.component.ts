import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-e',
  templateUrl: './work-e.component.html',
  styleUrls: ['./work-e.component.css']
})
export class WorkEComponent implements OnInit {

  job1 = "Job1";
  job2 = "Job2";
  job3 = "Job3";
  
  constructor() { }

  ngOnInit() {
  }

}
