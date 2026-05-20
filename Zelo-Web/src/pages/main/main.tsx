import './main.css'
import {userLogin} from "./mockPerfil"
export default function Main(){

    return(
        <div>
            <section className='dataPerson'>
                Bem Vindo {userLogin.nome}
            </section>
        </div>
    )
}