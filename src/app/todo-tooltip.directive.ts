import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appTodoTooltip]',
  providers: [MatTooltip]
})
export class TodoTooltipDirective {

  @Input() date?: Date;

  @Input() done!: boolean;

  constructor(private elementRef: ElementRef, private tooltip: MatTooltip) { }
  
  @HostListener('mouseover') mouseover() {
    if(this.done == true){
      if(this.date != undefined){
        this.tooltip.message = "Zrobione dnia: " 
        + this.date.toLocaleDateString('default', {month: 'short'}) + " "
        + this.date.toLocaleDateString('default', {day: '2-digit'}) + ", "
        + this.date.toLocaleDateString('default', {year: 'numeric'});
      }
      this.tooltip.show();
    }
    
}
  @HostListener('mouseleave') mouseleave() {
      this.tooltip.hide();
  }
}
