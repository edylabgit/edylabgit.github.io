<html>
    
<head>
    
</head>
<body>
    token <p id="token"></p>
    pesan <p id="pesan"></p>
<script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js"></script>
    <script>
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEW8lD6lBN55lQofxvmkw0mrUkr5PnN6Y",
    authDomain: "labpushnotification-635f2.firebaseapp.com",
    databaseURL: "https://labpushnotification-635f2.firebaseio.com",
    projectId: "labpushnotification-635f2",
    storageBucket: "labpushnotification-635f2.appspot.com",
    messagingSenderId: "30840845333",
    appId: "1:30840845333:web:5c9ed07b3d93856f5dca1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  let token;
  messaging.getToken().then((token)=>{
      if(token){
          console.log(token);
          document.querySelector('#token').innerHTML = token;
      }else{
          console.log('tidak mendapatkan token');
      }
  }).catch((err)=>{
      console.log('gagal '+err);
  })

  messaging.onMessage((payload) => {
    console.log(payload);
    document.querySelector('#pesan').innerHTML = JSON.stringify(payload);
  });
  
</script>

</body>
</html>