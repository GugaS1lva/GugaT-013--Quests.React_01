import TextStyler from "./components/textstyler/textstyler"
import AlertButton from "./components/alertbutton/alertbutton"

function Home(){
    return (
        <>
            <h3>Quest 01 &gt;&gt;&gt; Utilizando o componente TextStyler que basicamente estiliza seu próprio filho, modificando a cor e a caixa alta dele. 
                <br/>Quest 02 &gt;&gt;&gt; Utilizando um botão que dispara um alerta mostrando sua própria label.
            </h3>

            <br/>
            <br/>

            <TextStyler text="Texto vermelho e com letras maiúscolas." />
            <br/>
            <AlertButton label="Baixar CV"/>
        </>
    )
}

export default Home