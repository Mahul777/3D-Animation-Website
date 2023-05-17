import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewr from "./components/WebgiViewr";
import { useRef } from "react";
import Loader from "./components/Loader";
function App() {
  const webgiViewerRef =useRef();
  const contentRef = useRef();

  const handlePreview =()=>{
    webgiViewerRef.current.triggerPreview();
  }
  return (
    <div className="App">
      <Loader/>
      <div ref ={contentRef} id="content">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection  triggerPreview ={handlePreview}/>
      </div>     
      <WebgiViewr contentRef={contentRef} ref ={webgiViewerRef}/>
    </div>
  );
}

export default App;
