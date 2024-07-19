import { useState } from 'react'

function Home() {
  return (
    <div>
      <h2>
        Home <Contador />
      </h2>
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1)

  function aumentarContador() {
    setContador(contador + 1)
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={aumentarContador}>Adicionar</button>
    </div>
  )
}

export default Home
