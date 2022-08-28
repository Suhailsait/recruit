import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {

  data:any
  assess:any
  chat:any

  constructor(private ds: ServiceService) { }

  ngOnInit(): void {
  

  this.ds.assessment()
      .subscribe((response: any) => {
        this.data=response 
        this.assess=this.data[0].job_stages               
      });

  this.ds.chatbot()
  .subscribe((response:any)=>{
    this.chat=response
  })

    }
}
