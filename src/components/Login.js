import FadeIn from 'react-fade-in';
import { Formik } from "formik";
import logo from '../assets/logo.png'
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import Modal from './Modal';
import { authentication } from '../store/middlewares/auth.middleware';


export const Login = () => {
 const [showModal, setShowModal] = useState(false); 
 const [showModalError, setshowModalError] = useState(false); 
 const [disable, setdisable] = useState(true) 
 const dispatch = useDispatch();
 const [demail, setdemail] = useState("")
 const [dpassword, setdpassword] = useState("")
 const [errosAuth, seterrors] = useState("")
const history = useHistory();
 const user = useSelector(state => state.auth); 
 //const [length, setlength] = useState(false)

    useEffect(() => {
        if (user) { 
            history.push("/Benevist"); 
        }
    }, [user]); 

    
return (
    <>
    <FadeIn transitionDuration='1500'>
        <div className="container p-5" title="dummyButton">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={(values) =>{

                    const errors = {};

                    if (!values.email) errors.email = "Required";
                        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        errors.email = "Invalid email address";
                    
                    if (!values.email) errors.password = "Required";
                        else if (`${values.password}`.length < 2)
                        errors.password = "Password must be larger than 8 characters";
                        

                    if(values.email !== "" && values.password !== ""){
                        setdisable(false)

                    }else{
                        setdisable(true)

                    }
                    if (values.email!=="" && values.password !== "") {
                        setdemail(values.email)
                        setdpassword(values.password)
                    }

                    
                    return errors
                }}
                onSubmit={async (values, {resetForm}) =>{
                    console.log("Hola")   
                  try {
                        await axios.post(`https://prueba-api.nextia.mx/api/v1/login`,{
                        "user":{
                            "email": demail,
                            "password": dpassword
                        }
                        }); 
                        setShowModal(true) 
                        dispatch(authentication(demail, dpassword));
                        
                    } catch (error) {
                        console.log(error)
                        seterrors(error.response.data.error)
                        setshowModalError(true)
                    }
                    
                    
                }}
                
            >
            {(props) =>{
                const{
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    isSubmitting
                } = props;
            return(
                <div className="container">
                    <form className="lob" onSubmit={handleSubmit}>
                        <img src={logo} width="125" alt="" />
                        <div className="mb-3">
                            <label for="Email" 
                                className="form-label">Email:</label>
                            <input type="email" 
                                className="form-control" 
                                placeholder="Email"
                                invalid={errors.email && touched.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}/>
                        </div>
                        <div className="mb-3">
                            <label for="password" 
                                className="form-label">Password:</label>
                            <input type="password" 
                                className="form-control" 
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="password"/>
                            <FadeIn transitionDuration={1200}>
                            {showModalError && 
                             <>
                             <p className="benevitlError">{errosAuth}</p>
                             </>
                             }
                             </FadeIn>
                            
                        </div>
                        <button disabled={disable} 
                                type="isSubmitting" 
                                onClick={isSubmitting}
                                className="btn btn-primary"
                                >Log In</button>
                    </form>
                </div>
                )
                }
            }
            </Formik>
        </div>
        <Modal
            show={showModal}
        >
            <p>Bienvenido</p>
               
        </Modal>
        
    </FadeIn>
    </>
  );
};