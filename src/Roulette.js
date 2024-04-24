import React, { useState, useEffect, useRef  } from "react";
import { Wheel } from "react-custom-roulette";
import logo from './logo-1.png';
import Alert from 'react-popup-alert'
import Popup from 'react-popup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import ToastContainer from 'react-bootstrap/ToastContainer';



const Roulette = ({ data }) => {
  const [alert, setAlert] = useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);
  const [res, setRes] = useState("false");
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [show, setShow] = useState(false);


  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  const onCloseAlert= () => {
    setAlert({
      type: '',
      text: '',
      show: false
    })
    console.log("ai");
  }

  
  const onShowAlert = () => {
    setAlert({
      type: "warning",
      text: res,
      show: true
    })
  }

  return (
    <>
 
    <div className="fixd">
    <div className="pop">
        <Toast style={{backgroundColor:'#37ab9b'}} onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body ><div className="bb">{res}</div></Toast.Body>
        </Toast>
        </div>
      </div>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[.6]}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["#ccc"]}
          outerBorderWidth={[5]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={[20]}
          backgroundColors={[
            "#662d91",
            "#838bc5",
            "#37ab9b",
            "#315e85",
            "#662d91",
            "#838bc5",
            "#37ab9b",
            "#315e85",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
            if(prizeNumber==0||prizeNumber==4)
            {
            console.log(prizeNumber+" Spin Again");
            setRes("Spin Again");
            }
            if(prizeNumber==1||prizeNumber==5)
            {
            console.log(prizeNumber+" Curiosity" );
            setRes("Curiosity");
            }
            if(prizeNumber==2||prizeNumber==6)
            {
            console.log(prizeNumber+"You Win!!" );
            setRes("You Win!!");
            }
            if(prizeNumber==3||prizeNumber==7)
            {
            console.log(prizeNumber+" Challenge" );
            setRes("Challenge");
          }
         // setShow(true)
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
        <img src={logo} className="logocol" alt="Logo" />
        </button>
      </div>
      <br />
    </>
  );
};

export default Roulette;
