// import logo from './logo.svg';
import { useState } from 'react';

function Child({paramData, bringData}) {

    const [childData, setChildData] = useState("안녕하세요")
    const handleOnclick =()=>{
        bringData(childData);
    }
  
  return (
    <>
        {paramData}
        <button onClick={handleOnclick}>button</button>
      
    
    </>
  );
}

export default Child;