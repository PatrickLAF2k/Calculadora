import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Principal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p1/2127696-flat-lay-minimal-work-space-top-view-office-desk-with-computer-keyboard-clipboard-and-coffee-cup-on-white-color-background-with-copy-space-vector-illustration-gratis-vetor.jpg");
  background-size: cover;
  background-position: center;
  gap: 2rem;
`;

const Entrada = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 5rem;
    height: 2rem;
    border-radius: 6%;
  }
`;

const Botao = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 20%;
    gap: 1rem;
    font-size: 1.5rem;
  }
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const caputurarPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };
  const caputurarSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };
  const somar = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtrair = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const dividir = () => {
    setResultado(primeiroValor / segundoValor);
  };
  const limpar = () => {
    setResultado("");
    setPrimeiroValor("");
    setSegundoValor("");
  };
  return (
    <Principal>
      <GlobalStyle />
      <h1>Calculadora</h1>
      <Entrada>
        <input
          type="number"
          onChange={caputurarPrimeiroValor}
          value={primeiroValor}
        />
        <input
          type="number"
          onChange={caputurarSegundoValor}
          value={segundoValor}
        />
      </Entrada>
      <Botao>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
        <button onClick={limpar}>C</button>
      </Botao>

      <h2>Resultado: {resultado}</h2>
    </Principal>
  );
}
