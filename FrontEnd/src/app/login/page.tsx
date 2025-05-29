// page.tsx
import React from 'react';
import { Monda } from 'next/font/google'

const monda = Monda({
  variable: '--font-monda'
})

const Page: React.FC = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex-1 justify-items-center content-center bg-[#811D1D]'> 
        <h1 className='font-bold text-[3rem]'>Bem Vindo!</h1>
        <h2>Faça seu login para acessar</h2>
        <div className='w-[450px] h-[450px] bg-white m-3.5'></div>
      </div>
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
    </div>
  );
};

export default Page;
