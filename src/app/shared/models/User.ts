import { SexoEnum } from "./SexoEnum";

export class User {
    id?: number;
    nome?: string = "";
    dataNascimento?: Date;
    sexo?: SexoEnum;
    email?: string = "";
    password?: string = "";
    cpf?: string;
  
      static fromJson(jsonData: any): User {
          return Object.assign(new User(), jsonData);
      }
  }
  