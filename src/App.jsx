import Main from './components/Main'
import {useState, useEffect} from 'react'


function App() {
  const [modelOpen, setModelOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAPIData(){ //async allows the use of await within the function, enabling asynchronous operations like fetching data.
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod?api_key=' + NASA_KEY;
      try {
        const res =  await fetch(url); //Sends an HTTP GET request to the NASA API using the fetch function. await ensures the code waits for the response before moving on.
        const apiData = await res.json(); //Parses the response (res) as JSON using the .json() method.await ensures the parsing completes before storing the data.
        // JSON or Javascript Object Notation. Standard format for storing and exchange data that's both human-readable and machine parseable.
        setData(apiData); //Stores the parsed data in the state variable data.
        console.log('DATA\n', apiData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPIData();

  }, []); // this empty array is a dependency array, it means that this effect will only run once when the component mounts. If the array is empty it will run once it loads.


  const handleModelOpen = () => {
    if (modelOpen){
      setModelOpen(false);
    } else {
      setModelOpen(true);
    }

  };


    return (
      <>
        {data ? (<Main modelOpen = {modelOpen} data = {data} handleModelOpen={handleModelOpen}></Main>) : (
          <div></div>
        )}
      </>
    )
}

export default App
