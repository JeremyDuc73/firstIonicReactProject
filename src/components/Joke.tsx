import {useState} from "react";
import axios from "axios";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";

export function Joke() {

    const [joke, setJoke] = useState("")
    function fetchOneJoke(){
        axios.get("https://api.chucknorris.io/jokes/random")
            .then(response =>{
                setJoke(response.data.value)
                console.log(joke)
            })
    }

    return (
        <>
            <IonButton onClick={fetchOneJoke} >FETCH JOKE</IonButton>
            <IonCard>
                <IonCardContent>{joke}</IonCardContent>
            </IonCard>
        </>
    );
}