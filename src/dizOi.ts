class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOi(): string {
        return `Olá ${this.nome}`;
    }
}