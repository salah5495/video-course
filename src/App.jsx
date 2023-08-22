import React from "react";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <ReactPlayer
        // height="240px"
        // width="480"
        controls
        url="https://youtu.be/gyMwXuJrbJQ?si=DGUeeJ9_RBMlfiNf"
        onReady={() => console.log("onReady call back")}
        onStart={() => console.log("onStart call back")}
        onPause={() => console.log("onPause call back")}
        onEnded={() => console.log("onEnded call back")}
        onError={() => console.log("onError call back")}
      />
    </div>
  );
}
export default App;
