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
    const db = admin.firestore()    
    let loansRef = db.collection('loans')
    loansRef = loansRef.doc()
    loansRef.set({
        tenor:data.tenor,
        amt: data.amt,
        interest: data.interest    
    }).then(function(){
        console.log(loansRef);
    }).catch(err => {
        return err
    });
 })