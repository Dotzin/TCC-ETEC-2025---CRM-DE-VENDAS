import React from "react";

const LoginRSide =()=>{
    return(
        <div className='flex-1 justify-items-center content-center bg-[#D9D9D9] '>
            <h1 className='font-bold text-[30px]'>Login</h1>
            <form action="">
                <h3 className="text text-[1.5rem] mb-2">Usuario</h3>
                <input type="text" className='bg-white h-[2.5rem] w-[20rem]'/>
                <h3 className="text text-[1.5rem] mb-2">Senha</h3>
                <input type="text" className='bg-white w-[20rem] h-[2.5rem] ' />
                <div className='flex justify-between mt-1'>
                    <div>
                        <input type="checkbox" name="LembreDeMim" id="LembreDeMim" className=''/><span className='ml-2'>Lembre de Mim</span>
                    </div>
                    <span className='mb-2'>Esqueci Minha Senha</span>
                </div>
                <div className='w-full flex justify-center bg-black text-white h-15 content-center'>Entrar</div>
            </form>
        </div>
    )
}

export default LoginRSide