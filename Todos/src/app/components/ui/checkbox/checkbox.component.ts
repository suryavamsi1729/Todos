import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check} from 'lucide-angular';
@Component({
  selector: 'Checkbox',
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  readonly checkboxIcon = Check;
  checked = false;
  setClicked(){
    this.checked = !this.checked;
  }
}
