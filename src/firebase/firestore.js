import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBEeYBWh1YLhmyWs7o3UriKowuGDBrN5WU",
    authDomain: "project-memo-17a70.firebaseapp.com",
    databaseURL: "https://project-memo-17a70.firebaseio.com",
    projectId: "project-memo-17a70",
    storageBucket: "project-memo-17a70.appspot.com",
    messagingSenderId: "774245133492",
    appId: "1:774245133492:web:8bc71c5e0f5825f95a7be1"
}

const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore