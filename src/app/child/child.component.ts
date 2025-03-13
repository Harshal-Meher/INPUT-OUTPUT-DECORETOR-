import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../app.component';

@Component({  
  selector: 'app-child',  
  templateUrl: './child.component.html',  
  styleUrls: ['./child.component.scss']  
})  
export class ChildComponent {  

  @Input() Products!: IProduct[]; //interface 
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();  

  deleteProduct(index: number) {  
    this.remove.emit(index);  
  }  
}  
