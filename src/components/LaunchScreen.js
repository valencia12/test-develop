import { useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import logo from '../assets/logo.png'
import FadeIn from 'react-fade-in';
import { reqResApi } from "../api/reqReq";
import { Login } from "./Login";
import "../style/home.css"
const override = css`
display: block;
margin: 0 auto;
`;
export const LaunchScreen = () => {
    const [done, setDone] = useState(undefined);    
    //Just to change the state while the promise DONE!
    const getDataTest = async () =>{
        try {
            const res = await reqResApi.get(`/posts/1`) 
            console.log(res)
            setDone(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(()=>{
            getDataTest()
        },1500)
        
    }, [])
return (
    <div className="container center box containerApp">
    {
    !done ? (
        <FadeIn transitionDuration='2000'>
            <div >
                <div className="row align-items-start">
                    <ClipLoader 
                    color={'#EC5056'} 
                    loading={done} 
                    size={70} 
                    css={override}/>
                </div>
                <div className="row align-items-start logo">
                    <img alt="nextia" src={logo} className="rounded float-right logo" />
                    <h8>Loading...</h8>
                </div>
            
            </div>
        </FadeIn>
    ):(
    <Login/>
    )
    }
    </div>
);
};
