export class CursusGenerale {
 id_cursusgenerale?:number;
    constructor(
 public diplome:string,
 public etablissement:number,
 public anneeobtentation:string,
 public domaine:number,
 public specialite:number,
 public Redoublement:number
    ){

    }
}
