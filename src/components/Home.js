import React from 'react'
import Link from 'next/link'

const Home = (props) => {

    return (
        <>
            <h2>
                <Link href='/areas/clientes'>Go to Clientes</Link>

            </h2>
            <h2>
                <Link href='/areas/produtos'>Go to Produtos</Link>

            </h2>
            <h2>

                <Link href='/areas/fornecedor'>Go to Fornecedor</Link>
            </h2>
            <h2>

                <Link href='/areas/servicos'>Go to Serviços</Link>
            </h2>
        </>

    )
}

export default Home
