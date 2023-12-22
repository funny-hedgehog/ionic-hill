import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import React from 'react';

const urls1 = [
  'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
];

const urls2 = [
  'https://wallbox.ru/wallpapers/main2/201717/nebo-dereva-ozero-gory-les-vodoem.jpg',
]

const map = {
  'first': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
  'second': 'https://wallbox.ru/wallpapers/main2/201717/nebo-dereva-ozero-gory-les-vodoem.jpg',
}

function OverLoadedPage() {
  const [url, setUrl] = React.useState('first')
  const [photosSize, setPhotosSize] = React.useState(0)
  const [arraySize, setArraySize] = React.useState(0)

  const imgRef = React.useRef();

  React.useEffect(() => {
    console.log('imgRef', imgRef.current.alt)
    imgRef.current.onload = function() {
      if (url === 'first') {
        setUrl('second')
        setPhotosSize(state => state = photosSize + 1.1)
      } else {
        setUrl('first')
        setPhotosSize(state => state = photosSize + 1.1)
      }
    };
  }, [url])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => setArraySize(s => s += 135))
      .catch((e) => console.log(`Error ${e}`))
  }, [arraySize]);

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
          <h2>Объём загруженного массива - {Math.round(arraySize / 1000)} MB</h2>
          <h2>Объём загруженных фотографий  - {Math.round(photosSize)} MB</h2>
          <img
            ref={imgRef}
            style={{opacity: 0}}
            alt={url}
            src={map[url]}
            width={600}
          />
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default OverLoadedPage;