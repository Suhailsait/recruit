import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from "../service/service.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: any
  constructor(private ds: ServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {



    this.ds.data()
      .subscribe((response: any) => {
        this.data=response
      });

    
  }
}
