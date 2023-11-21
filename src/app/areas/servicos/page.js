import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function ConsultaServicos(props) {

    return (<>
        <Header />

        <div class="flex items-center justify-center h-screen">
            <h1 class="text-3xl">Consulta Serviços</h1>
            <Link href='/'>Home</Link>

        </div>

    </>)

}
