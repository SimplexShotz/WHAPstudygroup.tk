
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

var ref = {
    users: database.ref("users")
};
