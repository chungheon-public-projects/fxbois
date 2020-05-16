const functions = require('firebase-functions');
var rp = require('request-promise');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.test = functions.https.onCall((data, context) => {
    console.log('Hello')
    return data
})

exports.kyc = functions.https.onCall((data, context) => {
    var options = {
        method: 'POST',
        uri: "https://niw1itg937.execute-api.ap-southeast-1.amazonaws.com/Prod/verify",
        body: {
            base64image: data.image
        },
        headers: {
            'Content-Type': 'application/json',
            'x-api-key' : 'jFgDThXeKFhusXOm2mXI'
        },
        json: true
    }
    console.log('Hello')
    console.log('options: ', options)
    return rp(options).then((body) => {
        console.log(body)
        return body
    })
})