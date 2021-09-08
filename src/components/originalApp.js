import React, {useState, useEffect, useRef} from 'react'
import 'antd/dist/antd.css'
import {Button, Input} from 'antd'
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"



const App = ()=> {
  const [counter, setCounter] = useState(0)
    const add = ()=> {
      setCounter(counter + 1)
    }
    const minus = ()=> {
      if (counter <= 0) {
        setCounter(word.length - 1)
      } else {
        setCounter(counter - 1)
      }
    }
  
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)
    // useEffect - responsible for the time(secs) counting
    useEffect(()=>{
      setInterval(()=>{
        setSecs((el)=>el + 1)
      }, 1000)
    }, [])
  
    // this useEffect is responsible for the transition of the counter and images attached to the counter
    useEffect(()=>{
      setInterval(()=>{
        setCounter((el)=>el + 1)
      }, 3000)
    }, [])
  
    const [word, setWord] = useState(["Colin said that his name means peoples's victory",
      "Miracle's best quote is, Life is beautiful",
      "Mr Joe's best quote is I am a success", "Mr Confident is saying that he is coding"])
  
    const [text, setText] = useState(" ")
  
    const addQuote = ()=>{
      setWord([...word, text])
      setText("")
    }
  
    const [loadImage, setLoadImage] = 
    useState([img1, img2, img3, img4])
  
    const color1 = ["black", "gray", "gray", "gray"]
    const color2 = ["gray", "black", "gray", "gray"]
    const color3 = ["gray", "gray", "black", "gray"]
    const color4 = ["gray", "gray", "gray", "black"]
  
    const myRef1 = useRef()
    const myRef2 = useRef()
    const myRef3 = useRef()
    const myRef4 = useRef()
  
    useEffect(()=>{
      myRef1.current.style.backgroundColor = color1[counter % color1.length]
      myRef1.current.style.transition = "all 400ms"
    }, [counter])
    useEffect(()=>{
      myRef2.current.style.backgroundColor = color2[counter % color2.length]
      myRef2.current.style.transition = "all 400ms"
    }, [counter])
    useEffect(()=>{
      myRef3.current.style.backgroundColor = color3[counter % color3.length]
      myRef3.current.style.transition = "all 400ms"
    }, [counter])
    useEffect(()=>{
      myRef4.current.style.backgroundColor = color4[counter % color4.length]
      myRef4.current.style.transition = "all 400ms"
    }, [counter])
  
    return (
      
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center"
      }}>
        
      <div style={{
         marginTop: "20px",
          width: "100%",
          // height: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {mins}mins : {secs%60}secs
        </div>
  
        <div style={{
          width: "100%",
          // height: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>{counter}</div>
  
        <div style={{
          marginTop: "100px",
          width: "100%",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
          width: "60%",
          height: "60vh",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Input placeholder="Enter your favorite QUOTE"
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}/><Button onClick={addQuote}>Add</Button>
        </div>
          
        <div style={{
        marginTop: "50px"
        }}>
          <img style={{
            width: "300px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px"
          }} src={loadImage[counter % loadImage.length]}/>
        </div>
  
        <div style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
            <div style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
            
          <Button type='primary' danger onClick={minus}>-</Button>
          <div style={{
            width: "60%",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // textAlign: "center"
          }}>
            {word[counter%word.length]}
          </div>
          <Button type='primary' onClick={add}>+</Button>
        </div>
        </div>
        <div style={{
            display: "flex",
            marginTop: "30px",
          }}>
            <div 
            ref = {myRef1}
            style={{
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            // backgroundColor: "black",
            margin: "0 5px"
            }}/>
            <div 
            ref = {myRef2}
            style={{
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            // backgroundColor: "black",
            margin: "0 5px"
            }}/>
            <div 
            ref = {myRef3}
            style={{
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            // backgroundColor: "black",
            margin: "0 5px"
            }}/>
            <div 
            ref = {myRef4}
            style={{
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            // backgroundColor: "black",
            margin: "0 5px"
            }}/>
          </div>
        </div>
        
        
      </div>
      
    )
}

      

export default App

