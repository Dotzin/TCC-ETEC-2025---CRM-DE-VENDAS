import React from "react";

const LoginRSide = () => {
    return (
        <div className='flex-1 flex flex-col justify-center items-center bg-[#D9D9D9] p-6'>
            <h1 className='font-bold text-[30px] mb-6'>Login</h1>
            <form className='flex flex-col items-start' action="">
                <label htmlFor="usuario" className="text-[1.5rem] mb-2">Usuário</label>
                <input
                    type="text"
                    id="usuario"
                    className='bg-white h-[2.5rem] w-[20rem] mb-4 px-2 rounded'
                />

                <label htmlFor="senha" className="text-[1.5rem] mb-2">Senha</label>
                <input
                    type="password"
                    id="senha"
                    className='bg-white w-[20rem] h-[2.5rem] mb-4 px-2 rounded'
                />

                <div className='flex justify-between w-full mb-4 text-sm'>
                    <label className='flex items-center'>
                        <input type="checkbox" id="LembreDeMim" className='mr-2' />
                        Lembre de Mim
                    </label>
                    <span className='text-blue-600 hover:underline cursor-pointer'>Esqueci minha senha</span>
                </div>

                <button
                    type="submit"
                    className='w-full text-center bg-black text-white py-2 rounded hover:bg-gray-800 transition'
                >
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default LoginRSide;
