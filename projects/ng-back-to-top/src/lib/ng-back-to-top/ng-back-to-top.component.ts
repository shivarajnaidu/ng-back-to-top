import { Component, OnInit, HostListener, Input, ChangeDetectionStrategy } from '@angular/core';

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }

  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

@Component({
  selector: 'ng-back-to-top',
  templateUrl: './ng-back-to-top.component.html',
  styleUrls: ['./ng-back-to-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgBackToTopComponent implements OnInit {
  btnClasses: any = {};

  @Input() color = 'white';
  @Input() bgColor = 'black';

  @Input() scrollDuration = 700;
  // browser window scroll (in pixels) after which the "back to top" link is shown
  offset = 300;
  // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offsetOpacity = 1200;
  @Input() scrolling = false;



  constructor() {
    this.checkBackToTop = this.checkBackToTop.bind(this);
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    if (this.scrolling) {
      return;
    }

    this.scrolling = true;
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(this.checkBackToTop);
    } else {
      setTimeout(this.checkBackToTop, 250);
    }
  }

  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    if (window.requestAnimationFrame) {
      this.scrollTop(this.scrollDuration);
    } else {
      window.scrollTo(0, 0);
    }
  }


  getStyles() {
    return {
      color: this.color,
      backgroundColor: this.bgColor
    };
  }

  private checkBackToTop() {
    const windowTop = window.scrollY || document.documentElement.scrollTop;
    this.btnClasses = (windowTop > this.offset) ? 'ng-back-to-top--show' : '';

    if (windowTop > this.offsetOpacity) {
      this.btnClasses = `${this.btnClasses} ng-back-to-top--fade-out`;
    }

    this.scrolling = false;
  }

  private scrollTop(duration) {
    const start = window.scrollY || document.documentElement.scrollTop;
    let currentTime = null;

    const animateScroll = timestamp => {
      if (!currentTime) {
        currentTime = timestamp;
      }

      const progress = timestamp - currentTime;
      const val = Math.max(easeInOutQuad(progress, start, -start, duration), 0);
      window.scrollTo(0, val);

      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }

}
