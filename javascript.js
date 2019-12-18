
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

var ref = {
    users: database.ref("users")
};
var database = firebase.database();

// actionCodeSettings object for signing up and logging in
var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: 'https://www.whapstudygroup.tk/index.html',
  // This must be true.
  handleCodeInApp: true//,
//   iOS: {
//     bundleId: 'com.example.ios'
//   },
//   android: {
//     packageName: 'com.example.android',
//     installApp: true,
//     minimumVersion: '12'
//   },
//   dynamicLinkDomain: 'example.page.link'
};
