export class Master{
  constructor(
  public  nom:string,
  public  id_departement:number,
  public  seuil_admission:number,
  public  seuil_admis_attente:number,
  public  date_fin_master: string,
  public  id_etablissement:number,
  public id_admin_master?:number
  ){}
  }