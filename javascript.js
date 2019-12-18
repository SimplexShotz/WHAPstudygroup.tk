
// Enable "stuck" when a sticky gets stuck using an intersection observer:
if (!('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
    document.getElementsByClassName("header-sticky")[0].toggleAttribute("stuck");
} else {
  const observer = new IntersectionObserver(
    ([e]) => e.target.toggleAttribute("stuck", e.intersectionRatio < 1),
    {threshold: [1]}
  );
  observer.observe(document.getElementsByClassName("header-sticky")[0]);
}

// Add / remove class functions
function removeClass(cl) {
  for (var i = 0; i < document.getElementsByClassName(cl).length; i++) {
    document.getElementsByClassName(cl)[i].classList.remove(cl);
    i--;
  }
}
function addClass(cl, el) {
  if (el) {
    el.classList.add(cl);
  }
}

// Firebase setup
var firebaseConfig = {
    apiKey: "AIzaSyAp2aDCkaCC_xBXTg6pCYUrOTrGs-Vp9m0",
    authDomain: "whapstudygroup-tk.firebaseapp.com",
    databaseURL: "https://whapstudygroup-tk.firebaseio.com",
    projectId: "whapstudygroup-tk",
    storageBucket: "whapstudygroup-tk.appspot.com",
    messagingSenderId: "355483882198",
    appId: "1:355483882198:web:1169b59a73e574db936f77",
    measurementId: "G-GS0VGS30PD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if (document.getElementById("form1-alert")) {
      if (user.metadata.lastSignInTime === user.metadata.creationTime && document.getElementById("name-display")) {
        user.updateProfile({
          displayName: document.getElementById("name-display").value
        }).then(function() {
          document.getElementById("form1-alert").innerHTML += "<div class='alert-success'>Sign up successful! You are now logged in as \"" + user.email + "\".</div>";
        }).catch(function(error) {
          var errorCode = error.code;
          document.getElementById("form1-alert").innerHTML += "<div class='alert-error'>Something went wrong. Contact the developer at \"mail@WHAPstudygroup.tk\". \nThe error code is \"" + errorCode + "\".</div>";
        });
      } else { document.getElementById("form1-alert").innerHTML += "<div class='alert-success'>Login successful! You are now logged in as \"" + user.email + "\".</div>"; }
    }
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // console.log(user);
    // ...
  } else {
    // alert("SIGNED OUT");
    // User is signed out.
    // ...
  }
});
