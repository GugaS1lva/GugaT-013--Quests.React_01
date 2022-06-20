function AlertButton({label}){
    return <button onClick={() => {alert(`A label desse botão é '${label}'!`)}}>&lt; Alertar &gt;</button>
}

export default AlertButton