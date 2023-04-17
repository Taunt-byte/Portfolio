import Jobs from "./jobs/page";
import Resumo from "./resumo/page"
import React from 'react';

export default function Home() {
  return (
    <main>
      <Resumo></Resumo>
      <Jobs></Jobs>
    </main>
  )
}
