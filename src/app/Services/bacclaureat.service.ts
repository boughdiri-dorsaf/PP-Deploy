import { Injectable } from '@angular/core';
export interface bac{
  id?:number,
  annee:string,
  section:string,
  moyenne:number,
  mention:string,
  session:string,

}
@Injectable({
  providedIn: 'root'
})
export class BacclaureatService {

  constructor() { }
}
