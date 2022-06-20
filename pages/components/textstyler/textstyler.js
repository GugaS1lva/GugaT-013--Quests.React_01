function TextStyler({children}){
    if (!children){
        return null
    }

    return <div style={{color: 'red'}}>{children.toUpperCase()}</div>
}

export default TextStyler