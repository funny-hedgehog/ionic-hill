import {Route, Link} from 'react-router-dom';
import {IonContent, IonItem, IonLabel, IonList, IonPage, setupIonicReact} from "@ionic/react";
import {IonRouterOutlet, IonRouterLink } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/react/css/core.css';
import './App.css';
import Simple1Page from "./pages/Simple1Page";
import Simple2Page from "./pages/Simple2Page";
import OverLoadedPage from "./pages/OverLoadedPage";
import NotFoundPage from "./pages/NotFoundPage";

setupIonicReact();

function App() {
  return (
    <>
      <IonRouterOutlet>
        <Route path="/" component={Simple1Page} exact={true} />
        <Route path="/simple2" component={Simple2Page} exact={true} />
        <Route path="/overloaded" component={OverLoadedPage} exact={true} />

        <Route component={NotFoundPage} />
      </IonRouterOutlet>
    </>
  );
}

export default App;
