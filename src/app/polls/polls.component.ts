import { Component } from '@angular/core';
import { Polls } from '../Models/polls';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent {

  yescount: number = 0
  nocount: number= 0

  polls:Polls[]=[

    {

      pollsId:'',
      question:'Do you like the current Government?',
      options: ['Yes', 'No'],
      votes:''

    }
  ]

  currentPoll: Polls = this.polls[0]
  selectedOption: string | null = null


  onSubmit(event: Event){

    event.preventDefault()

    if (this.selectedOption){

      const index = this.currentPoll.options.indexOf(this.selectedOption)
      if(index !== -1){
        if(index === 0){
          this.yescount++
        } else if(index === 1){
          this.nocount--
        }
      }
    }

    this.selectedOption = null
  }

  selectOption(option: string): void{

    this.selectedOption = option

  }


}
