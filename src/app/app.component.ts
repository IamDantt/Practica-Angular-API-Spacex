import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
const cors = require('cors');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-app';

  public listdeVideos:any = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void{
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('https://api.spacexdata.com/v4/rockets')
    .subscribe(respuesta => {
      console.log(respuesta);      
      this.listdeVideos =  respuesta;
    })

    
  }


}
