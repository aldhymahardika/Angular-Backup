import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.css']
})
export class ReportInputComponent implements OnInit {
  
  details:any[]
  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router) { 
    this.getDetailUser();
  }

  ngOnInit(): void {
  }

  getDetailUser(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailUser(params.kId, params.uId).subscribe(data=>{
        this.details=data
      })
    })
  }
}
