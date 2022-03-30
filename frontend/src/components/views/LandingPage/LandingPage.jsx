import React from 'react'
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      Landingpage

      <Link to="/main">
        <button>메인 화면으로</button>
      </Link>

    </div>
    
  )
}

export default Landingpage