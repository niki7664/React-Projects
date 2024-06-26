import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
let {
  onSent,
  recentPrompt,
  showResult,
  loading,
  resultData,
  setInput,
  input,
} = useContext(Context);
 
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=""/>
      </div>

      <div className="main-container">

        {!showResult?(
        <>
          <div className="greet">
            <p><span>Hello,Niki.</span></p>
            <p>How can I help you today?</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Settle a debate: how should you store bread?</p>
              <img src={assets.bulb_icon} alt=""/>
            </div>
            <div className="card">
              <p>Give me phrases to learn a new language</p>
              <img src={assets.compass_icon} alt=""/>
            </div>
            <div className="card">
              <p>Write a thank you note to my colleague</p>
              <img src={assets.message_icon} alt=""/>
            </div>
            <div className="card">
              <p>Give me phrases to learn a new language</p>
              <img src={assets.code_icon} alt=""/>
            </div>
          </div>
        </>
       ) :(
        <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt=""/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt=""/>
              {loading
              ?(<div className='loader'>
                <hr/>
                <hr/>
                <hr/>
              </div>
             ) :(
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
            </div>
        </div>)}
       

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here"/>
            <div>
              <img src={assets.gallery_icon} alt=""/>
              <img src={assets.mic_icon} alt=""/>
              <img onClick={() => {onSent();}} src={assets.send_icon} alt=""/>
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses.<a href="https://support.google.com/gemini/answer/13594961?visit_id=638481591069937799-4079527195&p=privacy_notice&rd=1#privacy_notice">Your privacy and Gemini Apps</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main;