import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  school1 = "School1";
  school2 = "School2";
  school3 = "School3";

  schoolClass: string = "red";

  education = [
    {
      school: 'school name',
      degree: 'info',
      year: '1234'
    },
    {
      school: 'school name2',
      degree: 'info2',
      year: '1235'
    },
    {
      school: 'school name3',
      degree: 'info3',
      year: '1236'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
