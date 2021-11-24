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
  selectLanguage(lang: string) {
    this.language = lang;
    this.cdr.detectChanges();
  }
}
