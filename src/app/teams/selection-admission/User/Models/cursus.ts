export class Cursus {
    id_cursus?:number;
   constructor(
   public au_fin:string,
  public  au_debut:string,
 public moyenne:number,
 public credit:number,
 public mention:string,
 public session:string,
 public id_specialite:number,
 public note_pfe:number,
 public id_domaine:number,
 public id_etablissement:number,
 public id_niveau:number,
 public id_etudiant:number,
   ){}
}
