import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { LucideAngularModule,ChevronLeft,ChevronRight } from 'lucide-angular';

@Component({
  selector: 'calender',
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  readonly leftArrowIcon = ChevronLeft;
  readonly rightArrowIcon = ChevronRight;
  currentDate = new Date();
  currentDateDay = this.currentDate.getDate();
  currentDateMonth = this.currentDate.getMonth();
  currentDateYear = this.currentDate.getFullYear();
  monthInc = this.currentDateMonth;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  daysInMonth(){
    return new Date(this.currentDateYear, this.currentDateMonth+1, 0).getDate();
  }
  startDay = signal(17);
  endDay = signal((this.startDay()+14)%this.daysInMonth());
  daysArray:{day:number,month:number}[] = []
  clickDay :number|null= this.daysArray?.findIndex((item)=>item.day==this.currentDateDay)
  constructor(){
    effect(() => {
      let start = this.startDay();
      this.daysArray = Array.from({ length: 14 }, (_, i) => {
        const val =((start) % this.daysInMonth()) == 0 ? this.daysInMonth(): ((start) % this.daysInMonth());
        start++;
        return {day:val,month:this.monthInc};
      });
      
    });
  }
  nextDates = () => {
    this.startDay.set(this.endDay());
    this.endDay.set((this.startDay() + 14) % this.daysInMonth());
    this.monthInc = (this.monthInc+1)%12;

  };
  preDates = () => {
    this.endDay.set(this.startDay());
    this.startDay.set((this.startDay()-1-13)>0?(this.startDay()-1-13):this.daysInMonth()+(this.startDay()-1-13));
    if(this.monthInc<=0){
      this.monthInc= 11;
    }
    else{
      this.monthInc = (this.monthInc-1)%12;
    }
  }
  handelClick = (val:number|null)=>{
    this.clickDay = val;
  }
   
}
