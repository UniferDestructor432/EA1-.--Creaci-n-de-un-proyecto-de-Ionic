import { IonApp, IonBadge, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Edit.css';
import { arrowBack } from 'ionicons/icons';

const Edit: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonButton slot='start' routerLink='/'>
                    <IonIcon icon={arrowBack}></IonIcon>
                </IonButton>
                <IonTitle>Editar</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonTitle style={{textAlign: 'center', paddingTop: '60px', fontSize: '25px', fontWeight: 'bolder'}}>Hola, Johan Corona</IonTitle>
            <IonText style={{display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '15px', fontWeight: '300'}}>Edita los campos necesarios</IonText>
        
            <IonCard style={{marginLeft: '150px', marginRight: '150px'}}>
                <IonItem>
                    <IonText style={{paddingLeft: '10px'}}>Johan Corona González</IonText>
                </IonItem>
                <IonItem>
                    <IonText style={{paddingLeft: '10px'}}>6°C</IonText>
                </IonItem>
                <IonItem>
                    <IonText style={{paddingLeft: '10px'}}>Computación</IonText>
                </IonItem>
            </IonCard>
        </IonContent>
    </IonPage>
    );
}

export default Edit;