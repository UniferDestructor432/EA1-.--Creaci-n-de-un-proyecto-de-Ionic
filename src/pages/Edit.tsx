import { IonApp, IonBadge, IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Edit.css';
import { arrowBack, checkbox, checkboxOutline, expand } from 'ionicons/icons';

const Edit: React.FC = () => {
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar color='primary'>
                <IonButton slot='start' routerLink='/home'>
                    <IonIcon icon={arrowBack}></IonIcon>
                </IonButton>
                <IonTitle>Editar</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen style={{'--background' : '#f5f5f5'}}>
            <IonTitle style={{textAlign: 'center', paddingTop: '60px', fontSize: '25px', fontWeight: 'bolder'}}>Hola, Johan</IonTitle>
            <IonText style={{display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '15px', fontWeight: '300', fontSize: '20px'}}>Edita los campos necesarios</IonText>
        
            <IonCard style={{marginLeft: '15%', marginRight: '15%'}}>
                <IonItem lines="none" style={{height: '40px'}}>
                    <IonText style={{paddingLeft: '10px', fontSize: '15px'}}>Nombre</IonText>
                </IonItem>
                <IonItem lines='none' style={{margin: 'none', paddingBottom: '10px'}}>
                    <IonInput style={{'--background' : '#f5f5f5', marginLeft : '10px', marginRight: '10px', textAlign: 'center'}}></IonInput>
                </IonItem>
                <IonItem lines="none" style={{height: '40px'}}>
                    <IonText style={{paddingLeft: '10px', fontSize: '15px'}}>Grupo</IonText>
                </IonItem>
                <IonItem lines='none' style={{margin: 'none', paddingBottom: '10px'}}>
                    <IonInput style={{'--background' : '#f5f5f5', marginLeft : '10px', marginRight: '10px', textAlign: 'center'}}></IonInput>
                </IonItem>
                <IonItem lines="none" style={{height: '40px'}}>
                    <IonText style={{paddingLeft: '10px', fontSize: '15px'}}>Materias</IonText>
                </IonItem>
                <IonItem lines='none' style={{margin: 'none', paddingBottom: '10px'}}>
                    <IonInput style={{'--background' : '#f5f5f5', marginLeft : '10px', marginRight: '10px', textAlign: 'center'}}></IonInput>
                </IonItem>
                <IonItem lines="inset">
                    <IonCheckbox style={{marginLeft: '10px'}}></IonCheckbox>
                    <IonLabel style={{fontSize: '17.77px'}}>Acepto los cambios</IonLabel>
                </IonItem>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px', marginRight: '10px', marginTop: '30px', marginBottom: '30px'}}>
                    <IonButton routerLink='/home' expand="block" style={{paddingLeft: '10px', paddingRight: '10px', textTransform: "none"}}>Guardar cambios</IonButton>
                </div>
            </IonCard>
        </IonContent>
    </IonPage>
    );
}

export default Edit;