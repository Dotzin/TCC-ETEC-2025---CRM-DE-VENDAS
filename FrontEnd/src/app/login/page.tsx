// page.tsx
import React from 'react';
import LoginLSide from "./Components/LoginLSide";
import LoginRSide from "./Components/LoginRSide";


const Page: React.FC = () => {
  return (
    <div className='flex w-screen h-screen'>
      <LoginLSide/>
         <LoginRSide/>
    </div>
  );
};

export default Page;
