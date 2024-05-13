import "./styles.css";
import DraggeableForm from "./DraggeableForm";
import YoutubeBackground from "react-youtube-background";
import { useEffect, useState } from "react";
import config from "./config.json";

export default function App() {

  const [showCard, setshowCard] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [cardConfig, setCardConfig] = useState({});
  const [content, setContent] = useState({});
  const [checked, setChecked] = useState(null);
  const [reveal, setReveal] = useState(false);
  const [showACorrect, setShowACorrect] = useState(false);

  const cardAction = (type) => {
    const cardStyle = config.filter((item) => item.type === type);
    setCardConfig(cardStyle[0]);
    if (cardStyle[0].content) {
      setContent(cardStyle[0].content[0][Math.floor(Math.random() * cardStyle[0].content[0].length)])
      setshowCard(true)
    }
    if (cardStyle[0].type == 'you_win') {
      setshowCard(true)
    }
  }

  useEffect(() => {
    if (showCard) {
      setTimeout(() => {
        setShowAnimation(true)
      }, 500);
    }
  }, [showCard]);

  return (
    <>


      {/*     <YoutubeBackground
        videoId={"t0dMXyqMeTw"}
        aspectRatio={"16:9"}
        overlay={"rgba(0,0,0,.4)"}
        className={"video"}
        nocookie={
          "www.youtube-nocookie.com"
        }
      >
        <div className="centered-div">
          <div className="App">
            <DraggeableForm onFinish={(type) => cardAction(type)} />
          </div>
        </div>
      </YoutubeBackground > */}


      <div className="main-container">
        <video src="/Tv_Hd 1.mp4" >
        </video>
        <div className="centered-div">
          <div className="App">
            <DraggeableForm onFinish={(type) => cardAction(type)} />
          </div>
        </div>
      </div>
      {showCard && <div className={`cardInfo ${showAnimation ? 'show' : ''}`} style={{ backgroundColor: cardConfig.color }}>
        <img src="/White_logo-03.png" className="logo" alt="Logo" />
        <button
          className="closeButton"
          onClick={() => {
            setshowCard(false)
            setCardConfig({})
            setShowAnimation(false)
            setReveal(false)
            setChecked(null);
            setShowACorrect(false);
          }}></button>
        <div className="card-content">
          {cardConfig && content && cardConfig.type == "you_win" && (
            <img src="/winner.gif" alt="winner.gif" className="card-content-winner" style={{ width: '100%', height: '100%' }} />
          )}
          {cardConfig && content && cardConfig.type == "curiosity" && (
            <h2>{content.answer}</h2>
          )}
          {cardConfig && content && cardConfig.type == "challenge" && (
            <div className="card-content-questions">
              {!reveal && (
                <>
                  <h1>{content.question}</h1>
                  {content.options.map((item, key) => {
                    return (<div className={`item ${key == content.correct && showACorrect ? 'correct' : ''}`} key={key}>
                      <input type="radio" id={`radio-${key}`} name="fav_language" value={key} checked={checked === key} onChange={() => setChecked(key)} />
                      <label htmlFor={`radio-${key}`}>{item}</label><br></br>
                    </div>)
                  })}
                  <button className="card-content-button" style={{ opacity: showACorrect ? 0 : 1 }} onClick={() => {
                    setShowACorrect(true);
                    setTimeout(() => {
                      setReveal(true)
                    }, 3000);
                  }}>Revelar Respostas</button>
                </>
              )}
              {reveal && (
                <div className="card-content-reveal">
                  <h2>{content.answer}</h2>
                </div>
              )}
            </div>
          )}
        </div>
        <h3>Feira de Emprego IPVC - 2024</h3>
      </div>
      }
    </>

  );
}
