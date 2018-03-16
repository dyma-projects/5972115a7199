import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core'

@Directive({
	selector: '[appColor]'
})
export class ColorDirective implements OnInit {
	@HostBinding('style.color') pColor = 'black';

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		this.pColor = 'black';
	}

	@HostListener('window:keydown', ['$event']) keyEvent($event) {
      console.log($event);
      if ($event.key == "ArrowUp") {
		this.pColor = 'blue';
      }
      if (event.key == "ArrowDown") {
		this.pColor = 'pink';
      }
      if (event.key == "ArrowLeft") {
		this.pColor = 'purple';
      }
      if (event.key == "ArrowRight") {
		this.pColor = 'green';
      }
    }

}