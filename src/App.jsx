import {useState} from "react";
import {Card} from "./Card";

function App() {
    const [colors, setColors] = useState([])

    const [colorName, setColorName] = useState("")
    const [colorCode, setColorCode] = useState("")

  function addColor(event) {
      event.preventDefault()

      let color = {
          colorName: colorName,
          colorCode: colorCode
      }
      setColors([...colors, color])

      setColorName("")
      setColorCode("")

      console.log(colors)
  }

  return (
    <div className="App">
        <h1>ADICIONAR NOVA COR</h1>
        <form onSubmit={event => addColor(event)}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    value={colorName}
                    placeholder="Digite o nome da cor"
                    onChange={event => setColorName(event.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="color">Cor</label>
                <input
                    type="text"
                    id="color"
                    value={colorCode}
                    placeholder="Digite o valor hexadecimal"
                    onChange={event => setColorCode(event.target.value)}
                />
            </fieldset>
            <button type="submit">ADICIONAR</button>
        </form>
        <section>
            <h1>CORES FAVORITAS</h1>
            {
                colors.map((color, index) => {
                    return (
                        <Card key={index} colorName={color.colorName} colorCode={color.colorCode} />
                    )
                })
            }
        </section>
    </div>
  )
}

export default App