import { IonApp, IonBadge, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Menu.css';
import { bookOutline, personCircleOutline, briefcaseOutline, man } from 'ionicons/icons';

const Menu: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonTitle style={{textAlign: 'center', fontWeight: 'bolder', paddingTop: '35px', paddingBottom: '20px', fontSize: '20px'}}>Selecciona una opción</IonTitle>
            <IonGrid style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '15%', marginRight: '15%', gap: '20px'}}>
                <IonRow style={{gap: '20px'}}>
                    <IonCol style={{height: '140px'}}>
                        <IonButton color='medium' fill='clear' routerLink="/classes" style={{fontSize: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor : '#f5f5f5', paddingTop: '0px', paddingBottom: '0px', borderRadius: '15px', height: '100%', textTransform: "none"}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <IonIcon color='primary' icon={bookOutline} size="large" style={{paddingBottom: '10px'}}></IonIcon>
                                <IonLabel color='dark' style={{fontWeight: 'bold'}}>Materias</IonLabel>
                            </div>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton color='medium' fill='clear' style={{fontSize: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor : '#f5f5f5', paddingTop: '0px', paddingBottom: '0px', borderRadius: '15px', height: '100%', textTransform: "none"}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <IonIcon color='primary' icon={briefcaseOutline} size="large" style={{paddingBottom: '10px'}}></IonIcon>
                                <IonLabel color='dark' style={{fontWeight: 'bold'}}>Proyectos</IonLabel>    
                            </div>
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow style={{gap: '20px'}}>
                    <IonCol style={{height: '140px'}}>
                        <IonButton color='primary' fill='clear' routerLink="/home" style={{fontSize: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor : '#f5f5f5', paddingTop: '0px', paddingBottom: '0px', borderRadius: '15px', height: '100%', textTransform: "none"}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <IonIcon color='first' icon={personCircleOutline} size="large" style={{paddingBottom: '10px'}}></IonIcon>
                                <IonLabel color='dark' style={{fontWeight: 'bold'}}>Perfil</IonLabel>
                            </div>
                        </IonButton>
                    </IonCol>
                    <IonCol>

                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
    );
}

export default Menu;