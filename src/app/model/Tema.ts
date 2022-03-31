import { Postagem } from "./Postagem"

export class Tema{

    public id: number
    public descricao: string

    //importação
    public postagem: Postagem[]
}