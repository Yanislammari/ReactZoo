import { useState } from 'react';
import './Billets.css'
import { Billet } from '../models/billet';
import Navbar from '../components/Navbar/Navbar';

function Billets(){
  const [billets,setBillets] = useState<Billet[]>([])

  return(
    <div style={{ paddingTop: "70px" }}>
      <Navbar />
      Billets
    </div>
  )
}

export default Billets;