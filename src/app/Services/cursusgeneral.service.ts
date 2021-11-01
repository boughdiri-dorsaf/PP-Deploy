import { Injectable } from '@angular/core';
export interface cursusGene{
  id?:number,
  diplome:string,
  etablissement:number,
  anneeobtentation:string,
  domaine:number,
  specialite:String,
  Redoublement:number
}
@Injectable({
  providedIn: 'root'
})
export class CursusgeneralService {

  constructor() { }
}
