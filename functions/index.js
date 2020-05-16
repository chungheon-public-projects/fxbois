const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp({
    databaseURL: "http://localhost:5678"
})

exports.test = functions.https.onCall((data, context) => {
    console.log('Hello')
    return data
})

exports.insertloan = functions.https.onCall((data, context) => {
   

    const db = admin.database()    
    let loansRef = db.ref('fxbois-razer/loans/')
    var newKey = loansRef.push().key
    loansRef = loansRef.child(newKey)
    loansRef.set({
        tenor:data.tenor,
        amt: data.amt,
        interest: data.interest    
    }).then(function(){
        console.log(newKey);
    }).catch(err => {
        return err
    });
 })