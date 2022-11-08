export function Card (props) {
    const colorName = props.colorName
    const colorCode = props.colorCode

    return (
        <div style={{backgroundColor: colorCode}}>
            <p>{colorName}</p>
            <strong>{colorCode}</strong>
        </div>
    )
}