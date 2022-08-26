export class User {
    id?: number;
    nome?: string = "";
    dataNascimento?: string = "";
    email?: string = "";
    cpf?: string;
  
      static fromJson(jsonData: any): User {
          return Object.assign(new User(), jsonData);
      }
  }
  