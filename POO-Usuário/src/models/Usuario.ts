export class Usuario {
  #nome: string;
  #idade: number;
  #senha: string;

  constructor(nome: string, idade: number, senha: string = '123456') {
    this.#nome = nome;
    this.#idade = idade;
    this.#senha = senha;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.#nome} e tenho ${this.#idade} anos.`;
  }

  verificarSenha(senha: string): boolean {
    return this.#senha === senha;
  }

  redefinirSenha(senhaAtual: string, novaSenha: string): boolean {
    if (this.verificarSenha(senhaAtual)) {
      this.#senha = novaSenha;
      return true;
    }
    return false;
  }
}