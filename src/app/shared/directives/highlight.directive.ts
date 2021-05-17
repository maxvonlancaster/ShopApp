import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  backgroundColor = '#ffffff !important';
  constructor() { }

  @HostBinding('style.backgroundColor') get getBackgroundColor(): string {
    return this.backgroundColor;
  }

  @HostBinding('style.cursor') get getCursor(): string {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = '#ff4314 !important';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = '#ffffff !important';
  }
}
