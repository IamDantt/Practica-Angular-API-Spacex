import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private htpp: HttpClient) { }

public get(url:string){
  return this.htpp.get(url) //GET https://pokeapi.co/api/v2/pokemon
}

}
