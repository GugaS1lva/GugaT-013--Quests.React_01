function TextStyler({children}){
    const insertedText = children.toUpperCase()

    return <div style={{color: 'red'}}>{insertedText}</div>
}

export default TextStyler