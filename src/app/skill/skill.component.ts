import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  language = 'Korean';
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }
  onGo() {
    window.alert('현재 기능 구현 중입니다');
  }
  selectLanguage(lang: string) {
    if(lang === 'Korean') {
      this.language = 'English';
      // console.log(' skill koran selected');
    } else {
      this.language = 'Korean';
      // console.log(' skill american selected');
    }
    this.cdr.detectChanges();
  }

}
