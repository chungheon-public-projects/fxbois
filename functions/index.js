const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


admin.initializeApp({
    //databaseURL: "http://localhost:5678"
    
})
    

exports.test = functions.https.onCall((data, context) => {
    console.log('Hello')
    return data
})

exports.insertloan = functions.https.onCall((data, context) => {
    const db = admin.firestore()    
    let loansRef = db.collection('loans')
    let newDoc = loansRef.doc() 
    return loansRef.add({
        tenor:data.tenor,
        amt: data.amt,
        interest: data.interest,
        borrower:'',
        lender:''
    }).then(saved => {
        return saved;
    }).catch(err => {
        return err
    });
 })

 exports.gettoploans = functions.https.onCall((data, context) =>  {
    const db = admin.firestore()
    let loansRef = db.collection('loans')

 })

 