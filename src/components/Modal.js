import React from 'react'
import ReactDOM from 'react-dom'
import useWindow from '../Hooks/useWindows';
import FadeIn from 'react-fade-in';


function BackDrop(props) {
    return <div 
        onClick={props.close}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: '100%', 
            height: '100%', 
            display: 'grid',
            placeItems: 'center'
      }}
    > 
        {props.children}
    </div>
}

        
export default function Modal(props) {

    const {isMobile } = useWindow(); 

    return (
      <>
        {props.show
          ? ReactDOM.createPortal(
              <BackDrop close={props.close}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  style={{
                    width: isMobile ? "100%" : "40%",
                    height: "40%",
                    backgroundColor: "#ffffff",
                    borderRadius: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <FadeIn>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      {props.children}
                    </div>
                  </FadeIn>
                </div>
              </BackDrop>,

              document.getElementById("Modal")
            )
          : null}
      </>
    );
}
