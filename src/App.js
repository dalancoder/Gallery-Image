

import Homepage from "./pages/Homepage";
import data from "./helper/data";


function App() {
 console.log(data);
  return (

    <div>
    <h1>Albums</h1>
      <Homepage data={data}/>
    </div>
  )
}

export default App;
