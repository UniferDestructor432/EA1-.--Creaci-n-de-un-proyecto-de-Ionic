import { IonApp, IonBadge, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Classes.css';

const Classes: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonTitle>Materias</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            
        </IonContent>
    </IonPage>
    );
}

export default Classes;