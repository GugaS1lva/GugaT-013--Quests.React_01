function TextStyler({children}){
    const insertedText = children
    const capslookText = insertedText.toUpperCase()

    return <div style={{color: 'red'}}>{capslookText}</div>
}

export default TextStyler