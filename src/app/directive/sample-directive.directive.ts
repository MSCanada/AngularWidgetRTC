import { Directive , Renderer2, OnInit,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
  this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }


ngOnInit(){}
}
