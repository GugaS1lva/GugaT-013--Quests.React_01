function TextStyler({children}){
    if (!children) null

    return <div style={{color: 'red'}}>{children.toUpperCase()}</div>
}

export default TextStyler