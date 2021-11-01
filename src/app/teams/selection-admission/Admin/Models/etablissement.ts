export class Establishment{
   public id_etablissement?:number;
    constructor(
    public  libelle:string,
    public  code_postale:string,
    public  rue:string,
    public  ville:number,
    public  gouvernorat_adresse:number,
  
    public code_etablissement:string,
    public site_web:string,
    public logo:string,
    ){}
  
  }