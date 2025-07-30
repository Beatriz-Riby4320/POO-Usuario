import { Usuario } from './models/Usuario';
import { useState } from 'react';

function App() {
  const usuario = new Usuario('Lucas', 28, '123456');

  const [senha, setSenha] = useState('');
  const [senhaCorreta, setSenhaCorreta] = useState<boolean | null>(null);
  const [tentativas, setTentativas] = useState(0);
  const [mostrarRedefinir, setMostrarRedefinir] = useState(false);

  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [redefinicaoSucesso, setRedefinicaoSucesso] = useState<boolean | null>(null);

  const verificar = () => {
    const resultado = usuario.verificarSenha(senha);
    setSenhaCorreta(resultado);

    if (!resultado) {
      const novasTentativas = tentativas + 1;
      setTentativas(novasTentativas);

      if (novasTentativas >= 3) {
        setMostrarRedefinir(true);
      }
    } else {
      setTentativas(0); // reseta tentativas se acertar
      setMostrarRedefinir(false); // oculta redefinir
    }
  };

  const redefinir = () => {
    const sucesso = usuario.redefinirSenha(senhaAtual, novaSenha);
    setRedefinicaoSucesso(sucesso);
    if (sucesso) {
      setMostrarRedefinir(false);
      setTentativas(0);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>

      <h2>🔐 Verificar Senha</h2>
      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={verificar} style={{ marginLeft: '1rem' }}>
        Verificar
      </button>
      {senhaCorreta !== null && (
        <p>Senha {senhaCorreta ? 'correta' : 'incorreta'}!</p>
      )}
      <p>Tentativas: {tentativas}</p>

      {mostrarRedefinir && (
        <>
          <h2 style={{ marginTop: '2rem' }}>🔄 Redefinir Senha</h2>
          <input
            type="password"
            placeholder="Senha atual"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            style={{ display: 'block', marginBottom: '1rem' }}
          />
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            style={{ display: 'block', marginBottom: '1rem' }}
          />
          <button onClick={redefinir}>Redefinir Senha</button>
          {redefinicaoSucesso !== null && (
            <p>
              {redefinicaoSucesso
                ? '✅ Senha redefinida com sucesso!'
                : '❌ Senha atual incorreta. Não foi possível redefinir.'}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default App;

