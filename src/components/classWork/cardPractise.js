import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
// import CancelIcon from '@material-ui/icons/Cancel'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import moment from 'moment'


const CardPractise = () => {
    const [quote, setQuote] = useState([
        {
            id: 1,
            name: "Martins",
            myQuote: "No man climbs a tree with his hands in his pocket",
            time: Date.now(),
            avatar: img1,
        },
        {
            id: 2,
            name: "Peter",
            myQuote: "Lets practise our codes 10 times a day",
            time: Date.now(),
            avatar: img2
        },
        {
            id: 3,
            name: "Pedro",
            myQuote: "What you sow is what yoy reap",
            time: Date.now(),
            avatar: img3,
        },
        {
            id: 4,
            name: "Empress",
            myQuote: "Life is full of ups and downs, but in all, we stay strong",
            time: Date.now(),
            avatar: img4
        }
    ]);

    const [name, setName] = useState("")

    const [newQuote, setNewQuote] = useState("")
    
    const [image, setImage] = useState(null)
    
    const uploadImage = (e)=>{
        const file = e.target.files[0]
        const saveImage = URL.createObjectURL(file)
        setImage(saveImage)
    }
    
    const addItems = ()=>{
        const newID = quote.length + 1
        const newData = {
            id: newID,
            name,
            myQuote: newQuote,
            time: Date.now(),
            avatar: image,
        }
        setQuote([...quote, newData])
    }
    
    const deleteItem = (id)=>{
        const removeItem = quote.filter((el)=>
        el.id !== id)
        setQuote(removeItem)
    }

    useEffect(()=>{
        const saveItem = JSON.parse(localStorage.getItem("storage"))
        setQuote(saveItem)
    }, [])

    useEffect(()=>{
        localStorage.setItem("storage", JSON.stringify(quote))
    }, [quote])

    return (
        <Container>
            <InputsContainer>
                <DisplayHolder>
                    {image ? <Display src={image}/> : null}
                    
                    <InputsValue>
                        <MyInputs 
                        // placeholder="Name"
                        type="file"
                        onChange={uploadImage}/>
                        <MyInputs 
                        placeholder="Name"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}/>
                        <MyInputsArea 
                        placeholder="Quote"
                        value={newQuote}
                        onChange={(e)=>{
                            setNewQuote(e.target.value)
                        }}/>
                        {image ? <MyButton 
                            type="primary"
                            danger
                            onClick={()=>{
                            console.log(name, image, newQuote)
                            addItems();
                            setName("");
                            setQuote("");
                            }}>Add
                        </MyButton> : null}
                        
                    </InputsValue>
                    
                </DisplayHolder>
            </InputsContainer>
            <Wrapper>
                {quote.map(({id,name,myQuote,time,avatar})=>(
                    <Card key={id}>
                        <TopBox>
                            <Cancel 
                            onClick={()=>{
                                deleteItem(id)
                                console.log("I have been deleted ooo...")
                            }}>X</Cancel>
                            <Image src={avatar}/>
                        </TopBox>
                        <InnerBox>
                            <Name>{name}</Name>
                            <Quote>{myQuote}</Quote>
                            <Time>{moment(time).fromNow()}</Time>
                        </InnerBox>
                    </Card>
                ))}
                
            </Wrapper>
        </Container>
    )
}

export default CardPractise

const Container = styled.div`
    background-color: #22272e;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    color: white;
    font-family: Poppins;
    padding-top: 60px
`
const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0
`
const DisplayHolder = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    flex-wrap: wrap
`
const Display = styled.img`
    width: 250px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
    background-color: white;
    object-fit: cover;
    box-shadow: rgb(255 54 50 / 69%) 0px 16px 30px -10px,
    rgb (0 0 0 / 13%) 0px 16px 10px -10px

`
const InputsValue = styled.div`
    width: 300px
`
const MyInputs = styled(Input)`
    margin: 10px 0
`
const MyInputsArea = styled(TextArea)`
    margin: 10px 0;
    height: 60px;
    resize: none
`
const MyButton = styled(Button)`
    width: 180px;
    height: 20px;
    margin: 10px 0;
    font-weight: bold;
    text-transform: uppercase;
    :hover {
        cursor: pointer
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center
`
const Card = styled.div`
    height: 350px;
    width: 250px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    transition: all 350ms;
    transform: scale(1);

    :hover{
        border: 1px solid lightgray;
        transform: scale(1.01);
    }

`
const TopBox = styled.div`
    height: 100px;
    border-bottom: 1px solid gray;
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: center
`
const Cancel = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transform: scale(1);
    transition: all 350ms;
    opacity: 0.7;
    margin-right: 10px;
    margin-top: 10px;
    position: absolute;
    right: 0;

    :hover{
        transform: scale(1.2);
        cursor: pointer;
        opacity: 1
    }
`
const Image = styled.img`
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 50%;
    margin-top: 50px;
    border: 4px solid white;
    object-fit: cover;
    right: 0
`
const InnerBox = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px
`
const Name = styled.div`
    margin-bottom: 50px;
    font-weight: bold
`
const Quote = styled.div`
    font-size: 14px;
    text-align: center;
    width: 70%;
    flex: 1
`
const Time = styled.div`
    font-size: 10px;
    padding-bottom: 10px;
    font-weight: bold
`
