import React, {useState, useEffect} from "react"


import "./classWorkCSS.css"
const ClassWork = ()=> {

    const [result, setResult] = useState(0)
    const rand = (min, max)=>{
        const myValue = Math.floor(Math.random() * (max - min + 1)) + min
        setResult(myValue)
    }

    useEffect(()=>{
        setInterval(()=>{
            rand(0, 5)
        }, 3000)
    }, [])

    const [click, setClick] = useState(0)

    return (
        <div className="mainbody">
            <div className="maincard">
                <div className="firstpart">
                    <h1>CodeLab</h1>
                    <p><em>my first game build</em></p>
                </div>
                <div className="secondpart">
                    <div className="secondholder">
                        <div className="secondone">
                            <div onClick={()=>{
                                setClick(0)
                                console.log(click)
                            }} className="miniboxes">0</div>
                            <div onClick={
                                ()=>{
                                    setClick(1)
                                    console.log(click)
                                }
                            } className="miniboxes">1</div>
                            <div onClick={()=>{
                                setClick(2)
                                console.log(click)
                            }} className="miniboxes">2</div>
                        </div>
                        <div><h1>Me</h1></div>
                    </div>
                    <div className="secondholder">
                        <div className="secondone"></div>
                        <div><h1>Computer</h1></div>
                    </div>
                </div>
                <div className="result">
                    <h1>{result}</h1>
                </div>

                <div className="display">
                    {click === result? <div style={{
                        color: "greenyellow"
                    }}>You are right</div> : <div style={{
                        color: "red"
                    }}> You are wrong </div>}
                </div>

                
            </div>
        </div>
    )
    
}

export default ClassWork