import { Component } from '@angular/core';
import { LucideAngularModule , Search } from 'lucide-angular';

@Component({
  selector: 'Search',
  standalone:true,
  imports: [LucideAngularModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  input = "";
  readonly searchIcon = Search;
  setInput(event:Event){
    this.input = (event.target as HTMLInputElement ).value;
  }
  handelClickEvent (event:KeyboardEvent){
    if(event.key === "Enter"){
      console.log(this.input);
    }
  }
  
}
