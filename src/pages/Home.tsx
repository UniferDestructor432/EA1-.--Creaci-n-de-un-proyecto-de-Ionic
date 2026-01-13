import { IonBadge, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {peopleOutline, mailOutline, schoolOutline} from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/*<IonContent fullscreen>
        <div id="container">
          <h1>Mi Perfil</h1>
          <div className='fileContent'>
            <strong>Nombre: </strong>
            <input type='text' className='Text' placeholder='Tu nombre aquí'></input>
          </div>
          
          <div className='fileContent'>
            <strong>Grupo: </strong>
            <input type='text' className='Text' placeholder='Tu grupo aquí'></input>
          </div>
          
          <div className='fileContent'>
            <strong>Materia: </strong>
            <input type='text' className='Text' placeholder='Tu materia aquí'></input>
          </div>
          
          <div className='fileContent'>
            <strong>Correo: </strong>
            <input type='email' className='Text' placeholder='tucorreo@ejemplo.com'></input>
          </div>
          
          <div className='fileContent'>
            <strong>Descripción:</strong>
            <input type='text' className='Text' placeholder='Esta es una breve descripción sobre mí y mi primer proyecto en React'></input>
          </div>
        </div>
      </IonContent>*/}

      <IonContent fullscreen>
        <IonTitle style={{textAlign: 'center', color: 'black',fontWeight: 'bolder', fontSize: '30px', paddingTop: '30px', paddingBottom: '20px'}}>Mi primer proyecto</IonTitle>
        <IonCard style={{borderRadius: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjT9coLhuSOYCNtfegZnTDfGgz5BhEQyCkQ&s" style={{width: '150px', height: '150px', alignSelf: 'center'}}></IonImg>
          <IonTitle style={{color: 'black', fontSize: '25px', fontWeight: 'bolder', paddingTop: '10px'}}>Johan Corona</IonTitle>
          <IonLabel style={{fontSize: '16px'}}>Estudiante</IonLabel>
          </div>
          <IonItem lines="none"> {/* Elemento tipo fila */}
            <IonIcon icon={peopleOutline} style={{paddingRight: '25px'}}></IonIcon>
            <IonLabel  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> {/* Texto que se muestra dentro de un IonItem */}
              <span>Grupo </span>
              <IonBadge color={'primary'}>6°C</IonBadge>
            </IonLabel>
          </IonItem>
          <IonItem lines="none"> {/* Elemento tipo fila */}
            <IonIcon icon={schoolOutline} style={{paddingRight: '25px'}}></IonIcon>
            <IonLabel style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>  {/* Texto que se muestra dentro de un IonItem */}
              <span>Materia </span>
              <IonBadge color={'secondary'}>DAMM</IonBadge>
            </IonLabel>
          </IonItem>
          <IonItem lines="none"> {/* Elemento tipo fila */}
            <IonIcon icon={mailOutline} style={{paddingRight: '25px'}}></IonIcon>
            <IonLabel style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>  {/* Texto que se muestra dentro de un IonItem */}
              <span>Correo </span>
              <IonBadge color={"tertiary"}>14125@portalcedi.edu.mx</IonBadge>
            </IonLabel>
          </IonItem>
          <IonItem lines="none"> {/* Elemento tipo fila */}
            <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}> {/* Texto que se muestra dentro de un IonItem */}
              Soy un estudiante de programación y estoy aprendiendo a crear aplicaciones móviles con Ionic y React. Me gusta la tecnología robótica y el desarrollo de software.
            </IonText>
          </IonItem>
          <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px', marginRight: '15px'}}>
            <IonButton expand='block' color={"primary"}>
              EDITAR PERFIL
            </IonButton>

            <IonButton expand='block' color={"primary"} fill='outline' style={{paddingBottom: '15px'}}>
              VER MÁS INFORMACIÓN
            </IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
