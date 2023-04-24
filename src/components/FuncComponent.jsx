import { useState } from "react"

function FunComponent() {
  const [value, setValue] = useState(100)

  return <div>Componente Funcional
    <p>
      <button onClick={ () => setValue(value - 1) }>-</button>{ value }
      <button onClick={ () => setValue(value + 1) }>+</button>
    </p>
  </div>
}

export default FunComponent