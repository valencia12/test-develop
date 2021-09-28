
import React, { useEffect, useState } from "react"; 
import { useSelector} from "react-redux";
import Cards from "./Cards/Cards"

const Section = (props) => {
    const {benevits, loaded} = useSelector((state) => state.benevits);
  const cardsState = useSelector((state) => state.cards);
    const [sections , setSections] = useState([])


    useEffect(() => {

        console.log("LOADED + " +loaded)
        if (!loaded) {
          return; 
        }

        const sections = cardsState.cards.reduce((previusValues, actualCard) => {
          let cardsLocked = benevits.locked.filter((value) => value.wallet.name === actualCard.name);
          let cardsUnlocked = benevits.unlocked.filter((value) => value.wallet.name === actualCard.name); 
        //array as object
          const newObject = {
              section: actualCard.name,
              cardsLocked, 
              cardsUnlocked
          }
    
          return [
              ...previusValues,
              newObject
          ]
        }, []);

        setSections(sections); 

    }, [loaded]); 
    //console.log(sections);
    
    return <>
        {sections.map(s => {

            let isThereCardsUnlocked = s.cardsUnlocked.length === 0;

            return (
              <fieldset style={{ margin: "10px" }}>
                <legend>{s.section} </legend>
                {!isThereCardsUnlocked && <div className="cards benevit" style={{ margin: "10px" }}>
                  <Cards cards={s.cardsUnlocked} />
                </div>}
                <div className="cards benevitl" style={{ margin: "10px" }}>
                  <Cards cards={s.cardsLocked} button />
                </div>
                
              </fieldset>
            );
        }) }
    </>
}

export default Section;
