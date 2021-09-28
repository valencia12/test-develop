import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";

import Modal from "../components/Modal";
import Nav from "../components/Nav";
import "../style/home.css"
import Section from "../components/Section";
import SkeletonLoading from "../components/SkeletonLoading"

import { fetchBenevits } from "../store/middlewares/benevits.middleware";
import { fetchCards } from "../store/middlewares/cards.middleware";
import { LogoutThunk } from "../store/middlewares/auth.middleware"; 


export const Benevist = () => {
    const [showModal, setShowModal] = useState(false); 
    const dispatch = useDispatch();
    
    const {loaded} = useSelector(state => state.benevits)
   
    //For LogOut Change the status
    const handleLogout = () =>{
        dispatch(LogoutThunk()); 
    }
    
    useEffect(() => {
        dispatch(fetchBenevits());
        dispatch(fetchCards());
    }, []); 
    
    return (
    <div>
        {!loaded?(
           <SkeletonLoading/>
        ):(
            <>
            <Nav> 
                <button
                    className="btn btn-outline-danger"
                    onClick={() => setShowModal(true)}
                >
                    Log Out
                </button>
            </Nav>
            <div className="container center box">
            <Section/>
        
                <Modal
                    close={() => {
                    setShowModal(false);
                    }}
                    show={showModal}
                >
                <p>Está seguro que desea cerrar su sesión?</p>
                    <div>
                        <button className="btn btn-outline-success" onClick = {handleLogout}>Aceptar</button>
                        &nbsp;
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                    </div>
        </Modal>
            </div>
            </>
        )}
            
        </div>
    );
    
};