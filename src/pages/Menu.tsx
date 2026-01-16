import { IonApp, IonBadge, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Menu.css';
import { arrowBack } from 'ionicons/icons';

const Menu: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            
        </IonContent>
    </IonPage>
    );
}

export default Menu;