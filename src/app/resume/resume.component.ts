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
  selectLanguage(lang: string) {
    this.language = lang;
    this.cdr.detectChanges();
  }
}
