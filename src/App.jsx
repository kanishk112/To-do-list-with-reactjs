import React, { useState } from 'react';
import Dolist from './Dolist';

function App() {
  const[inputList,setInputlist]=useState("");
  const[items,setItems]=useState([]);

  const itmeEvent=(event)=>{
    setInputlist(event.target.value);
  }

  const listOfitems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
    setInputlist('');
  }

  const deleteItems=(id)=>{
    console.log("delete");
    setItems((oldItems)=>{
      return oldItems.filter((arritem,index)=>{
            return index!==id;
      })
    })
}

  return (
    <>
    <div className="main_div">
    <div className="center_div">
     <br/>
     <h1>To Do list</h1>
     <br/>
     <input type="text" placeholder="Add an Item..." value={inputList} onChange={itmeEvent}/>
     <button onClick={listOfitems}> + </button>
     <ol>
       {/* <li> {inputList} </li> */}
       {items.map((itemval,index)=>{
        return<Dolist key={index} id={index} text={itemval} onSelect={deleteItems} />;
       })}
     </ol>
    </div>
    </div>
    </>
  );
};

export default App;
