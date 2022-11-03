import { Jornada } from "./Jornada";

 
export class Usuario{
    
    public idUsuario!: number;
    public nome!: string;
    public telefone!: string;
    public dataNascimento!: string;
    public email!: string;
    public senha!: string;
    public flag_profissional_saude!: boolean;
    public documento_identificacao!: string;
    public jornadas!: Jornada[];
    public imagem!: string;
}