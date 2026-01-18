import { IonApp, IonBadge, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Classes.css';
import { arrowBack, calculatorOutline, bookOutline, languageOutline, chevronForward } from 'ionicons/icons';

const Classes: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonButton slot='start' routerLink='/menu'>
                    <IonIcon icon={arrowBack}></IonIcon>
                </IonButton>
                <IonTitle>Materias</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen style={{'--background' : '#f5f5f5'}}>
            <IonCard style={{marginTop: '20px', marginLeft: '5%', marginRight: '5%'}}>
                <IonItem style={{display: 'flex', flexDirection: 'row'}}>
                    <IonIcon icon={bookOutline} style={{backgroundColor: 'lightBlue', padding: '5px', borderRadius: '20px', color: 'white'}}></IonIcon>
                    <IonLabel style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <IonText style={{paddingLeft: '15px'}}>Computación</IonText>
                        <IonButton fill='clear' color='medium'>
                            <IonIcon icon={chevronForward}></IonIcon>
                        </IonButton>
                    </IonLabel>
                </IonItem>
            </IonCard>
            <IonCard style={{marginTop: '15px', marginLeft: '5%', marginRight: '5%'}}>
                <IonItem>
                    <IonIcon icon={calculatorOutline} style={{backgroundColor: 'lightBlue', padding: '5px', borderRadius: '20px', color: 'white'}}></IonIcon>
                    <IonLabel style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <IonText style={{paddingLeft: '15px'}}>Física</IonText>
                        <IonButton fill='clear' color='medium'>
                            <IonIcon icon={chevronForward}></IonIcon>
                        </IonButton>
                    </IonLabel>
                </IonItem>
            </IonCard>
            <IonCard style={{marginTop: '15px', marginLeft: '5%', marginRight: '5%'}}> 
                <IonItem>
                    <IonIcon icon={languageOutline} style={{backgroundColor: 'lightBlue', padding: '5px', borderRadius: '20px', color: 'white'}}></IonIcon>
                    <IonLabel style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <IonText style={{paddingLeft: '15px'}}>Inglés</IonText>
                        <IonButton fill='clear' color='medium'>
                            <IonIcon icon={chevronForward}></IonIcon>
                        </IonButton>
                    </IonLabel>
                </IonItem>
            </IonCard>
        </IonContent>
    </IonPage>
    );
}

export default Classes;