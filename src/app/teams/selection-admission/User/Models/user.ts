export class User {
  constructor(
  public  email: string,
  public  password: string,
  public  nom: string,
  public  prenom: string,
  public  age: number,
  public  cin: number,
  public  sexe: String,
  public  num_passport: string,
  public  date_naissance: string,//2002-02-02 
  public  code_postale: string,
  public  rue: string,
  public  ville: string,
  public  id_role: number,
  public  gouvernorat_adresse: string,
  public  pays: string,
  public gouvern_naissance:string,
  public id_situation_professionnel:number
  ) {}
  
}
