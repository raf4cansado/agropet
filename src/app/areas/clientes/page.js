import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import DataGrid from '@/components/DataGrid'

export default function ConsultaCliente(props) {

    const estrutura = [
        {
            colums: [
                {
                    header: 'Codigo',
                    acessor: 'id',
                    tipo: 'text',
                    filtro: {
                        tipo: '',
                        acessor_filtro: ''
                    }
                },
                {
                    header: 'Nome',
                    acessor: 'nome',
                    tipo: 'text',
                    filtro: {
                        tipo: '',
                        acessor_filtro: ''
                    }
                },
                {
                    header: 'Numero',
                    acessor: 'numero',
                    tipo: 'text',
                    filtro: {
                        tipo: '',
                        acessor_filtro: ''
                    }
                }
            ]
        }
    ]

    const clientes = [
        { id: 1, nome: 'Rafael Correa', numero: '543' },
        { id: 2, nome: 'Correa', numero: '123154324331' },
        { id: 3, nome: 'teste Correa', numero: '12353421131' }]




    return (<>
        <Header />

        <h1 class="text-3xl">Consulta Clientes</h1>
        <div class="flex items-center justify-center h-screen">
            <DataGrid colums={estrutura[0].colums} data={clientes} />

        </div>


    </>)

}
