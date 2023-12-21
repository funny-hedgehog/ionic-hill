import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel} from "@ionic/react";


function Simple1Page() {
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
          <IonTitle>Simple1Page</IonTitle>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default Simple1Page;