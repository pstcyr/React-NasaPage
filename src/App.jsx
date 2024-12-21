import Main from './components/Main'
import SideBar from './components/SideBar'
import {useState} from 'react'


function App() {
const [modelOpen, setModelOpen] = useState(false);


const handleModelOpen = () => {
  console.log("handleModelOpenYUUUU");
  setModelOpen(true);
};


  return (
    <>
      <Main handleModelOpen={handleModelOpen}></Main>
      <SideBar modelOpen={modelOpen} />

    </>
  )
}

export default App
