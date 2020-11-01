import { Component, OnInit } from '@angular/core';
import { ITeeth } from '../models/teeth.model';

@Component({
  selector: 'app-teeth-marking',
  templateUrl: './teeth-marking.component.html',
  styleUrls: ['./teeth-marking.component.scss']
})
export class TeethMarkingComponent implements OnInit {


  teeths: ITeeth[] = [];
  selectedTeeths: ITeeth[] = [];

  constructor() {
    this.initializeTeethsWithDefultStyle('default');

  }
  ngOnInit() {
  }


  initializeTeethsWithDefultStyle(defaultStyle: string): void {

    for (let i = 0; i < 32; i++) {
      this.teeths.push({ id: i, class: defaultStyle, isSelected: false });
    }
  }

  onClickTeeth(event:any, id: number) {
    const alreadySelectedTeeth = this.selectedTeeths.find((selectedTeeth) => selectedTeeth.id === id);
    if (alreadySelectedTeeth) {
      // if teeth is already selected , we are updating the isSelected status
      this.selectedTeeths.forEach((selectedTeeth, index) => {
        if (selectedTeeth.id === id) {
          this.selectedTeeths[index].isSelected = event.currentTarget.checked;
        }
      })

      
    } else {
      // in selected teeth if the teeth is not availble and checked we are adding into selected teeth variable
      if(event.currentTarget.checked)
      this.selectedTeeths.push({ id: id, class: "default", isSelected: event.currentTarget.checked });

    }
// when select and then unselect the teeth , it should update to default class
    if(!event.currentTarget.checked){
      this.teeths.forEach((teeth) => {
        if (teeth.id === id) {
          this.teeths[teeth.id].class = "default";
        }
      })
    }
    
  }
  onClickButton(teethStyle: string) {
    // applying class to selected teeths
    this.selectedTeeths.forEach((selectedTeeth) => {
      if(selectedTeeth.isSelected)
      this.teeths[selectedTeeth.id].class = teethStyle;
    });
    // clearing out for multiple class selection 
    this.selectedTeeths = [];
  }

  
}
