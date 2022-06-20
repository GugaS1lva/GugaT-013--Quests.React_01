function TextStyler({children}){
    const insertedText = children

    return <div style={{color: 'red'}}>{insertedText}</div>
}

export default TextStyler