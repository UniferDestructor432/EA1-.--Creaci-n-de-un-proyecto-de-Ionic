import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
        <h1>Mi Perfil</h1>
        <IonItem> {/* Elemento tipo fila */}
          <IonLabel> {/* Texto que se muestra dentro de un IonItem */}
            <strong>Nombre: </strong><span>Johan</span>
          </IonLabel>
        </IonItem>
        <IonItem> {/* Elemento tipo fila */}
          <IonLabel> {/* Texto que se muestra dentro de un IonItem */}
            <strong>Grupo: </strong><span>6°C</span>
          </IonLabel>
        </IonItem>
        <IonItem> {/* Elemento tipo fila */}
          <IonLabel> {/* Texto que se muestra dentro de un IonItem */}
            <strong>Materia: </strong><span>DAMM</span>
          </IonLabel>
        </IonItem>
        <IonItem> {/* Elemento tipo fila */}
          <IonLabel> {/* Texto que se muestra dentro de un IonItem */}
            <strong>Correo: </strong><span>14125@portalcedi.edu.mx</span>
          </IonLabel>
        </IonItem>
        <IonItem> {/* Elemento tipo fila */}
          <IonLabel> {/* Texto que se muestra dentro de un IonItem */}
            <strong>Descripción: </strong><span>Como parte de esta materia de creación de apps, he aprendido el día de hoy acerca del uso de los labels ION como IonContent, IonLabel, IonHeader, o IonPage para estructurar una app.</span>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
