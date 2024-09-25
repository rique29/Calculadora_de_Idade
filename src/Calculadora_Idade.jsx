import React, { useState } from 'react';

function CalculadoraIdade() {
  const [anoNascimento, setAnoNascimento] = useState('');

  // Função para calcular a idade
  const calcularIdade = () => {
    if (!anoNascimento || !anoNascimento.trim()) return;

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - parseInt(anoNascimento);

    console.log("Resultado:", idade);

    return idade.toString();
  };

  return (
    <div className="calculator">
      <h2>Calculadora de Idade</h2>
      <input
        type="number"
        value={anoNascimento}
        onChange={(e) => setAnoNascimento(e.target.value)}
        placeholder="Ano de nascimento"
      />
      <button onClick={calcularIdade}>Descobrir Idade</button>
      {calcularIdade() && (
        <p>{calcularIdade()}</p>
      )}
    </div>
  );
}

export default CalculadoraIdade;