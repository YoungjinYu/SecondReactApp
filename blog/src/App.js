import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [title,setTitle] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  const [date,setDate] = useState(['2월 17일 발행', '2월 18일 발행', '2월 19일 발행']);
  const [like, setLike] = useState(0);
  const [mode, setMode] = useState(null);
  let content = null;
     
  if(mode == "FIRST"){
    content = <Modal title={title[0]} date={date[0]}/>
  }
  else if (mode == "SECONDE"){
    content = <Modal title={title[1]} date={date[1]}/>
  }
  else if (mode == "THIRD"){
    content = <Modal title={title[2]} date={date[2]}/>
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>
          개발 Blog
        </div>
      </div>

      <div className="list">
         <h3 onClick={()=>{
           setMode("FIRST")
         }}>{title[0]} <span onClick={()=>{
            setLike(like+1) 
            }}>👍</span> {like} </h3>
         <p>{date[0]}</p>
         <hr/>
      </div>

      <div className="list">
         <h3 onClick={(event)=>{
            setMode("SECONDE");
         }} >{title[1]}</h3>
         <p>{date[1]}</p>
         <hr/>
      </div>

      <div className="list">
         <h3 onClick={()=>{
           setMode("THIRD");
         }}>{title[2]}</h3>
         <p>{date[2]}</p>
         <hr/>
      </div>

      {content}

      <button className="button" onClick={()=>{
        setMode(null);
      }}>상세 초기화</button>
     
    </div>

  );
}

function Modal(props)
{
    return (
      <div className="modal">
        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </div>
    )  
}

export default App;
