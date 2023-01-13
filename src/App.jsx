import './App.css'
import Client from './components/client/Client'

const App = () => {

  const clients = [{
    id: 1,
    ativo: true,
    razao_social: 'Maicon',
    nome_fantasia: 'Maicon',
    tipo_f_j: 'Fisica',
    cpf_cnpj: '118.791.619-66',
    rg: '',
    ie: '',
  }]

  const clientStreet = [{
    id: 1,
    id_client: 1,
    endereco: 'Av Parana',
    bairro: 'centro',
    numero: 1215,
    ibge: 11250135,
    cep: '86870-000',
  }]

  const clientAnydesk = [{
    id: 1,
    id_client: 1,
    address_anydesk: 791169123,
    isServer: true,
  }, {
    id: 2,
    id_client: 1,
    address_anydesk: 619660520,
    isServer: false,
  }
  ]

  const systemClientInfo = [{
    id: 1,
    id_client: 1,
    ip_server: '192.168.0.110',
    quant_pc: 2,
    use_retaguarda: 'false',
    system_version_retaguarda: '',
    use_pdv: 'false',
    system_version_pdv: '',
    use_dsplus: 'true',
    system_version_dsplus: '12-02-2023',
    system_version_api_dsplus: '24-01-2023',
    value_monthly_payment: '120.00',
  }]

  return (
    <div>
      <Client />
    </div>
  )
}

export default App
