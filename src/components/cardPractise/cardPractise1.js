import React, {useState, useEffect,Fragment} from 'react'
import "../myCSS.css"
import img5 from "../../img/1.jpg"
import img6 from "../../img/2.jpg"
import img7 from "../../img/3.jpg"
import img8 from "../../img/4.jpg"
import { Button, Input } from 'antd'


const CardPractise = ()=>{
    const [text, setText] = useState("")
    const [showImage, setShowImage] = useState("")
    const [myData, setMyData] = useState([
        {
            id: 1,
            title: "I Love Simple Codes",
            icon : "NO",
            time : "3secs ago",
            img : img5
        },
        {
            id: 1,
            title: "I Love Hard Codes",
            icon : "MN",
            time : "5secs ago",
            img : img6
        },
        {
            id: 1,
            title: "I Love Soft Codes",
            icon : "JS",
            time : "7secs ago",
            img : img7
        },
        {
            id: 1,
            title: "I Love My Codes",
            icon : "RC",
            time : "9secs ago",
            img : img8
        },
    ])
    const [r, setR] = useState(24)
    const loadImage = (e)=>{
        const file = e.target.files[0]
        const readImage = URL.createObjectURL(file)
        setShowImage(readImage)
    }

    return (
        <div className="inputContainer">
            <div className="inputLayout">
                <div className="input24">
                    <Input className="input"
                    // type={}
                    onChange={loadImage}/>
                    <Input className="input"
                    placeholder="Enter the value"
                    value={text}
                    onChange={(e)=>{
                        setText(e.target.value)
                    }}/>
                    <Button className="inputButton"
                    type="primary"
                    danger>Add
                    </Button>
                </div>
                <div className="inputImage">
                    <img src={showImage}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                        objectFit: "cover"
                    }}/>
                </div>
            </div>
            
        </div>
        
    )     
}

export default CardPractise