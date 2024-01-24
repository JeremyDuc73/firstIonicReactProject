import {Haptics} from "@capacitor/haptics";
import {IonButton} from "@ionic/react";
import {Motion} from "@capacitor/motion";

export function Things() {

    const hapticsVibrate = async () => {
        await Haptics.vibrate()
    }

    return (
        <>
            <IonButton onClick={hapticsVibrate}>VIBRATION</IonButton>
        </>
    );
}