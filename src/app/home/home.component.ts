import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'portfolio-app';

  public listdeVideos:any = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void{
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('https://api.spacexdata.com/v4/rockets/')
    .subscribe(respuesta => {
      console.log(respuesta);      
      this.listdeVideos =  respuesta;
    })

    
  }
}
