import {useState} from "react";
import {Card} from "./Card";

import './app.scss'

function App() {
    const [colors, setColors] = useState([])

    const [colorName, setColorName] = useState("")
    const [colorCode, setColorCode] = useState("")

    const [formError, setFormError] = useState(false)

  function addColor(event) {
      event.preventDefault()

      let color = {
          colorName: colorName,
          colorCode: colorCode
      }

      if (colorName.length < 3 || colorCode < 6) {
          setFormError(true)
          return
      }

      setFormError(false)

      setColors([...colors, color])

      setColorName("")
      setColorCode("")
  }

  return (
    <div className="App">
        <h1>ADICIONAR NOVA COR</h1>
        <form className={formError ? "form-error" : ""} onSubmit={event => addColor(event)}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    value={colorName}
                    placeholder="Digite o nome da cor"
                    onChange={event => setColorName(event.target.value)}
                    required="required"
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
                    required="required"
                />
            </fieldset>
            <button type="submit">ADICIONAR</button>
        </form>

        {formError ? (
            <span><strong>O formulário contém erro</strong></span>
            ) : null
        }

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