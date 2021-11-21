import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  language = 'Korean'
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }
  onGo() {
    window.alert('현재 기능 구현 중입니다');
  }
  selectLanguage(lang: string) {
    if(lang === 'Korean') {
      this.language = 'English';
      // console.log(' resume korean selected');
    } else {
      this.language = 'Korean';
      // console.log(' resume american selected');
    }
    this.cdr.detectChanges();
  }

}
