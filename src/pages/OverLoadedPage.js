import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import React from 'react';

const urls1 = [
  'http://i1.wallbox.ru/wallpapers/main2/201719/gorod-doma-sumerki.jpg',
  'https://www.zastavki.com/pictures/originals/2021Nature___Mountains_Tall_green_fir_trees_are_reflected_in_the_lake_against_the_background_of_mountains_154658_.jpg',
  'https://i.pinimg.com/originals/0d/0c/da/0d0cda50d82a825d602ad45547112b0d.jpg',
];

const urls2 = [
  'https://sneg.top/uploads/posts/2023-03/1678572700_sneg-top-p-sbornik-oboev-dlya-rabochego-stola-priroda-1.jpg',
  'https://img.goodfon.ru/original/2880x1800/e/21/maroon-lake-ozero-gory-derevya.jpg',
  'https://w.forfun.com/fetch/f6/f6344ac128b14d56675be186a789d8d1.jpeg',
]

function OverLoadedPage() {
  const [url, setUrl] = React.useState(['first', 'first', 'first'])

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
          <IonTitle>OverLoadedPage</IonTitle>
          <ul>
            {url.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    onLoad={() => {
                      const arr = url
                      arr[index] = item === 'first' ? 'second' : 'first'
                      setUrl([...arr])
                    }}
                    alt={`${index}`}
                    src={item === 'first' ? urls1[index] : urls2[index]}
                    width={600}
                  />
                </li>
              )
            })}
          </ul>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default OverLoadedPage;