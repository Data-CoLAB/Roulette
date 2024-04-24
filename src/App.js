import "./styles.css";
import DraggeableForm from "./DraggeableForm";
import YoutubeBackground from 'react-youtube-background';

export default function App() {
  return (
    
    <YoutubeBackground
  videoId={"t0dMXyqMeTw"}                /* default -> null */
  aspectRatio={"16:9"}            /* default -> "16:9" */
  overlay={"rgba(0,0,0,.4)"}                /* default -> null | e.g. "rgba(0,0,0,.4)" */
  nocookie={"www.youtube-nocookie.com"}                 /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
 
>
  { 
    <div
    style={{
        position: 'relative', left: '50%', top: '50%',
        transform: 'translate(-50%, 8%)'
    }}
    >
    <div className="centered-div">
  <div className="App">
      <DraggeableForm />
    </div>
    </div>
    </div>}
</YoutubeBackground>
  
  );
}
