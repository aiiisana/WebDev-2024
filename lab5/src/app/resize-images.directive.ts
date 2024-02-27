import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appResizeImage]'
})
export class ResizeImageDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const imgElement = this.elementRef.nativeElement as HTMLImageElement;
    const maxWidth = 150;
    const maxHeight = 150;

    if (imgElement.offsetWidth > maxWidth) {
      const aspectRatio = imgElement.offsetHeight / imgElement.offsetWidth;
      const newWidth = maxWidth;
      const newHeight = maxWidth * aspectRatio;

      // Устанавливаем новые значения ширины и высоты
      imgElement.style.width = `${newWidth}px`;
      imgElement.style.height = `${newHeight}px`;
    }

  }

}
