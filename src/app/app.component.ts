import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'blog';
  language: string = 'Korean';
  checkbox: any;
  @ViewChild('img') image: ElementRef;
  @ViewChild('wise_saying') saying: ElementRef;
  @ViewChild(HomeComponent) homeComponent: HomeComponent;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    const h: any = document.documentElement;
    const b: any = document.body;
    const st: any  = 'scrollTop';
    const sh: any = 'scrollHeight';
    const progress: any = document.querySelector('#progress');
    let scroll: any;
    let scrollpos = window.scrollY;
    let header = document.getElementById("header");
    let navcontent = document.getElementById("nav-content");

    document.addEventListener('scroll', function() {

      /*Refresh scroll % width*/
      scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      progress.style.setProperty('--scroll', scroll + '%');

      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;

      if (scrollpos > 10 && header && navcontent) {
        header.classList.add("bg-green-800");
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-green-800");
      } else if( header && navcontent) {
        header.classList.remove("bg-green-800");
        header.classList.remove("shadow");
        navcontent.classList.remove("bg-green-800");
        navcontent.classList.add("bg-gray-100");

      }

    });


    //Javascript to toggle the menu
    // @ts-ignore
    document.getElementById('nav-toggle').onclick = function() {
      // @ts-ignore
      document.getElementById("nav-content").classList.toggle("hidden");
    }
  }
  ngAfterViewInit() {
    this.checkbox = document.getElementById('checkbox');
    console.log(' app.component - ngAfterViewInit is called ');
    this.language = localStorage.getItem('language');
    this.language = this.language?? 'Korean';

    this.image.nativeElement.src = "assets/images/korean-flag.gif";
    this.saying.nativeElement.innerHTML = '생각하는대로 살지 않으면\n' +
      '        사는대로 생각하게된다.\n'
  }
  componentRef: any;
  onSelectLanguage() {
    if(this.language === 'Korean') {
      this.language = 'English';
    } else {
      this.language = 'Korean';
    }
    localStorage.setItem('language', this.language);
    this.onSelectLanguage2();
  }
  onSelectLanguage2() {
    if(this.language === 'Korean') {
      this.image.nativeElement.src = "assets/images/korean-flag.gif"
      this.saying.nativeElement.innerHTML = '생각하는대로 살지 않으면\n' +
        '        사는대로 생각하게된다.\n';
      this.componentRef.selectLanguage('Korean')
      this.checkbox.checked = false;
    } else {
      this.image.nativeElement.src = "assets/images/american-flag.gif"
      this.saying.nativeElement.innerHTML = 'One must live the way one thinks<br/>\n' +
        '        or end up thinking the way one has lived.\n';
      this.componentRef.selectLanguage('English')
      this.checkbox.checked = true;
    }
    this.cdr.detectChanges();
  }
  onActivate(componentRef: any) {
    this.componentRef = componentRef;
    this.onSelectLanguage2();
  }
}
