import React from 'react';
import Link from 'next/link'

const DataGrid = (props) => {
    const { colums, data } = props

    //Estrutura 
    let estrutura = [
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

    return (
        <>
            <div class="flex items-center justify-center h-screen">
                <div>
                    <table>
                        <thead>
                            <tr>

                                {
                                    colums.map(x => {
                                        return (
                                            <th key={x.id}>{x.header}</th>
                                        )
                                    })
                                }
                            </tr>

                        </thead>
                        <tbody>
                            {
                                clientes.map(x => {
                                    return (
                                        <tr key={x.id}>
                                            <td>{x.id}</td>
                                            <td>{x.nome}</td>
                                            <td>{x.numero}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
                {/* <Link href='/'>Home</Link> */}

            </div>
        </>
    );


}



export default DataGrid;