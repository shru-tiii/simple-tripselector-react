import "./App.css";
import Triplist from './components/Triplist';
import data from './data';
import { useState } from 'react';

function App() {
  const [tours,settour] = useState(data);
  // console.log(tours);
  function refreshHandler(){
    settour(data);
  }
  function removetour(id){
    console.log("click hua");
    const newtours = tours.filter(tour=> tour.id !== id) //jo id hatani hai uska === aaega baki ka nhi
    settour(newtours);
    
  }
  if(tours.length === 0){
    return(
      <div className="fixed inset-0 flex items-center justify-center">
        <div>
          <p className="text-center text-lg font-bold">No More Tours!!</p>
          <button className="button-12 mt-2 ml-[3px]" onClick={refreshHandler}>Refresh Page</button>
        </div>
      </div>
    )
  }   
else{
  return (
    <div className="m-4">
      <Triplist tours={tours} removetour={removetour} />
    </div>
  );
}
}

export default App;
