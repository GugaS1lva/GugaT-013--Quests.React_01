// function TextStyler({children}){
//     const insertedText = children.toUpperCase()

//     return <div style={{color: 'red'}}>{insertedText}</div>
// }

// export default TextStyler

function TextStyler(props){

    return <div style={{color: 'red'}}>{props.text.toUpperCase()}</div>
}

export default TextStyler