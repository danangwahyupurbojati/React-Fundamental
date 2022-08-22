import React from 'react';
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const params = useParams();
    console.log('params', params);
  return (
    <div>
        <h3>Detail Page</h3>
        <p>{params.idProduct}</p>
    </div>
  )
}

export default DetailPage