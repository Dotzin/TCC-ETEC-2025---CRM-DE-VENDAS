"use client"

import React from 'react';
import { useState } from 'react';

const Page: React.FC = () => {
  const [Numero, SetNumero] = useState(0)
  return (
    <div>
      <h1>{Numero}</h1>
      <button onClick={() => {SetNumero(Numero+1)}}></button>
    </div>
  );
};

export default Page;
