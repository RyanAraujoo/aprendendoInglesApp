export class Coracao {   
    constructor(
        public cheio: Boolean = true,
        public urlCoracaoCheio: String = "../../assets/coracao_cheio.png",
        public  urlCoracaoVazio: String = "../../assets/coracao_vazio.png"
        ) {}

    definirCoracao(): String {
        if (this.cheio) { 
            return this.urlCoracaoCheio
        } else { 
            return this.urlCoracaoVazio 
        }  
    }
}