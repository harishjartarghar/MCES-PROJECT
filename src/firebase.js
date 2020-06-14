import firbase from 'firebase';




const firebaseConfig = {
    apiKey: "AIzaSyDq74WJiZ8OVk_u8O6xSqRkO7r91s7vkYM",
    authDomain: "react-mces.firebaseapp.com",
    databaseURL: "https://react-mces.firebaseio.com",
    projectId: "react-mces",
    storageBucket: "react-mces.appspot.com",
    messagingSenderId: "424747853935",
    appId: "1:424747853935:web:45251be24d82a0102b459a",
    measurementId: "G-6KX0Q7SLBV"
  };

  firbase.initializeApp(firebaseConfig);
  export default firbase;