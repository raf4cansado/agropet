import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function ConsultaProduto(props) {

    return (<>
        <Header />

        <div class="flex items-center justify-center h-screen">
            <h1 class="text-3xl">Consulta Produtos</h1>
            <Link href='/'>Home</Link>

        </div>


    </>)

}
