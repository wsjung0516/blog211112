import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blog';
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
}
