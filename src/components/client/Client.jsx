import { Divider } from '@mui/material'
import './client.css'
import SearchClients from './SearchClients'

const Client = () => {
    return (
        <main>
            <header id="header-container">
                <h2 variant="h2" className="title">Clientes</h2>
                <p variant="h4" className="description-text">
                    Cadastre, altere e consulte informações sobre os clientes.
                </p>
                <Divider />
            </header>
            <SearchClients />
            <section id="clients-container">Selecione seus clientes</section>
            <footer id="footer-container">Escolha o que fazer a seguir</footer>
        </main>
    )
}

export default Client