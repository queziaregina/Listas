import './Listas.css'

export function Listas(){
    return(
        <section>
            <h2>Estados brasileiros</h2>
            <ol start={7}>
                <li>São Paulo</li>
                <li>Rio de janeiro</li>
                <li>Mato grosso</li>
                <li>Sergipe</li>
                <li>Santa Catarina</li>
                <li>Salvador</li>
                <li>Rio Grande do Sul</li>
                <li>Amazonas</li>
            </ol>
        </section>
    )
}