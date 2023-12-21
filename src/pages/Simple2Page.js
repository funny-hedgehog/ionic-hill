import {
  IonButton,
  IonDatetime,
  IonTitle,
  IonHeader,
  IonPage,
  IonToolbar,
  IonContent,
  IonList,
  IonItem, IonLabel
} from '@ionic/react';

function Simple2Page() {
  return (
    <IonPage>
      <IonHeader>
        <IonList>
          <IonItem routerLink="/">
            <IonLabel>simple1</IonLabel>
          </IonItem>
          <IonItem routerLink="/simple2">
            <IonLabel>simple2</IonLabel>
          </IonItem>
          <IonItem routerLink="/overloaded">
            <IonLabel>overloaded</IonLabel>
          </IonItem>
        </IonList>
      </IonHeader>

      <IonContent>
        <IonToolbar>
          <IonTitle>Simple2Page</IonTitle>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default Simple2Page;