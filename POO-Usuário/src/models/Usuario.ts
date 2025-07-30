// Exemplo de classe com atributos e métodos
export class Usuario {
  nome: string;// Atributo para armazenar o nome do usuário
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;// Atribui o nome passado como parâmetro ao atributo nome
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}//Até aqui é a classe Usuario que define um usuário com nome e idade, e um método para apresentar o usuário.