import React, {useState, useEffect, useRef} from 'react'
import Hand0 from "./0.png"
import Hand1 from "./1.png"
import Hand2 from "./2.png"
import Hand3 from "./3.png"
import Hand4 from "./4.png"
import Hand5 from "./5.png"
import Trophy from "./trophy.png"

const UiCard = () => {

    const [player, setPlayer] = useState(null);


    const [computer, setComputer] = useState(0);

    const getRand = (min, max)=> {
        const randNUm = Math.floor(Math.random() * (max - min + 1)) + min;
        setComputer(randNUm)
    }

    useEffect( ()=> {
        setInterval(() => {
            getRand(0, 5)
        }, 3000);
    }, []);

    const myRef = useRef()

    useEffect( ()=> {
            myRef.current = computer;        
    },[computer]);



    return(
        <div className= "mainContainer">
            <div className="heading">CODELAB</div>
            <div className=" caption">My first game Build</div>
            <div className="contentHolder">
                <div className="meContainer">
                    <div className="meCard">
                            <img src={Hand0} className="containerBoxesHolder" 
                            onClick={() => {
                            setPlayer(0)
                            }}
                            />
                            <img src={Hand1} className="containerBoxesHolder"
                            onClick={() => {
                            setPlayer(1)
                            }}/>
                            <img src={Hand2} className="containerBoxesHolder"
                            onClick={() => {
                            setPlayer(2)
                            }}/>
                            <img src={Hand3} className="containerBoxesHolder"
                            onClick={() => {
                            setPlayer(3)
                            }}/>
                            <img src={Hand4} className="containerBoxesHolder"
                            onClick={() => {
                            setPlayer(4)
                            }}/>

                            <img src={Hand5} className="containerBoxesHolder"
                            onClick={() => {
                            setPlayer(5)
                            }}/>

                    </div>
                    <div className="meText">Me</div>
                </div>
                <div className="compContainer">
                    <div className="compCard">
                    <div className="containerBoxesHolder">{
                        myRef.current === 0 ? <img src={Hand0} className="containerBoxesHolder" /> : 
                        myRef.current === 1 ? <img src={Hand1} className="containerBoxesHolder" /> : 
                        myRef.current === 2 ? <img src={Hand2} className="containerBoxesHolder" /> : 
                        myRef.current === 3 ? <img src={Hand3} className="containerBoxesHolder" /> : 
                        myRef.current === 4 ? <img src={Hand4} className="containerBoxesHolder" /> : 
                        myRef.current === 5 ? <img src={Hand5} className="containerBoxesHolder" /> : null 
                     }</div>

                    </div>
                    <div className= "compText">Computer</div>
                </div>
            </div>
            <div className="result">Result</div>
            <div className=" resultContainer">
                
                <div className="output">
                    {player === computer ? <div>Wow... You're Right </div> : 
                     player !== computer ? <div>hmm... You're Wrong </div> : 
                     player === null ?  <div> Null </div> : null}
            
                </div>
                <div className="output">
                    { player === computer ? <img src={Trophy}/> : null}
                </div>
            </div>               

        </div>


    )
}

export default UiCard
