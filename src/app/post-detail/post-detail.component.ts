import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta:any;

  constructor(private route:ActivatedRoute, private RestService:RestService){ }

  ngOnInit(): void{
    this.route.paramMap.subscribe( (paraMap:any) => {
      const {params} = paraMap
      this.cargarData(params.variable)
    })
  }

  cargarData(id:string){
    this.RestService.get('https://api.spacexdata.com/v4/rockets/'+id)
    .subscribe(respuesta => {
       this.respuesta = respuesta;
    })

  }

}
// ?.id=${id}
