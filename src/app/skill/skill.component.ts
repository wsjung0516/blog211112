import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onGo() {
    window.alert('현재 기능 구현 중입니다');
  }

}
