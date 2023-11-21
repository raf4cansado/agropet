'use client'

import React, { useState } from 'react';
import Modal from 'react-modal';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link'

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="text-2xl">
                    <FiMenu />
                </button>

                <h1 className=" text-2xl ml-4">Minha Página
                    <Link href='/' />
                </h1>
            </div>

            {/* Modal */}

            <div className={` top-0 left-0  bg-gray-800 text-white p-2`}>
        

                {isSidebarOpen && (
                    <nav className="mt-4">
                        <ul>
                            <li>
                                <Link href='/areas/clientes'>Go to Clientes</Link>

                            </li>
                            <li>
                                <Link href='/areas/produtos'>Go to Produtos</Link>

                            </li>
                            <li>
                                <Link href='/areas/fornecedor'>Go to Fornecedor</Link>

                            </li>
                            <li>
                                <Link href='/areas/servicos'>Go to Serviços</Link>


                            </li>
                        </ul>
                    </nav>
                )}
            </div>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"

            >
                <div className="flex flex-col items-center">
                    <nav>
                        <ul className="text-white">
                            <li>
                                <Link href='/areas/clientes'>Go to Clientes</Link>

                            </li>
                            <li>
                                <Link href='/areas/produtos'>Go to Produtos</Link>

                            </li>
                            <li>
                                <Link href='/areas/fornecedor'>Go to Fornecedor</Link>

                            </li>
                            <li>
                                <Link href='/areas/servicos'>Go to Serviços</Link>


                            </li>
                        </ul>
                    </nav>
                </div>
            </Modal> */}
        </header>



    );
};

export default Header;