import './card.scss'

export function Card (props) {
    const colorName = props.colorName
    const colorCode = props.colorCode

    return (
        <div className="color-card" style={{backgroundColor: colorCode}}>
            <p>{colorName}</p>
            <strong>{colorCode}</strong>
        </div>
    )
}