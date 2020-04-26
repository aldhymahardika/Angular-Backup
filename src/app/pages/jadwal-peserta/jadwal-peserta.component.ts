import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-jadwal-peserta',
  templateUrl: './jadwal-peserta.component.html',
  styleUrls: ['./jadwal-peserta.component.css']
})
export class JadwalPesertaComponent implements OnInit {

  jadwal:any[]
  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute, private router: Router) {
    this.getJadwalUser()    
   }

  ngOnInit(): void {
  }

  getJadwalUser(){
    let uId='1'
    this.route.queryParams
    .subscribe(params=>{
    this.uploadService.getJadwalUser(params.id, uId).subscribe(data=>{
      this.jadwal=data
      })
    })
  }
}
