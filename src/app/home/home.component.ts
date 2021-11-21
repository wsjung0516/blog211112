import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  language = 'Korean';
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // this.selectLanguage('korean');
  }
  selectLanguage(lang: string) {
    if(lang === 'Korean') {
      this.language = 'Korean';
      // console.log(' home korean selected');
    } else {
      this.language = 'English';
      // console.log(' home american selected');
    }
    this.cdr.detectChanges();
  }
}
