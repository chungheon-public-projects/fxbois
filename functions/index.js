const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios')
const base64 = require('base-64');
const fetch = require('node-fetch')

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
        interest: parseInt(data.interest.replace('%','')),
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

 exports.registerMambu = functions.https.onCall((data, context) => {
    let dataSend = {
        
        firstName: data.firstName,
        lastName: data.lastName,
        preferredLanguage: "ENGLISH",
        notes: "Enjoys playing RPG",
        assignedBranchKey: "8a8e878e71c7a4d70171ca4ae85f108b",
        
        idDocuments: [
            {
                identificationDocumentTemplateKey: "8a8e867271bd280c0171bf7e4ec71b01",
                issuingAuthority: "Immigration Authority of Singapore",
                documentType: "NRIC/Passport Number",
                validUntil: "2021-09-12",
                documentId: "S9812345A"
            }
        ],
        addresses: [],
       
        
    }

    const headers = {
        'Content-Type':'application/json',
        'Accept':'application/vnd.mambu.v2+json',
        'Authorization' : 'Basic ' + base64.encode('Team7' + ":" + 'pass130ACE19C8')
      };
      
    
      
      fetch('https://razerhackathon.sandbox.mambu.com/api/clients',
      {
        method: 'POST',
        body: JSON.stringify(dataSend),
        headers: headers
      })
      .then(res => {return res.json()})
      .then(body => {
        const db = admin.firestore()    
        let userDB = db.collection('users')
        const newUser = userDB.doc(body.id)
        return newUser.set({            
            firstName: body.firstName,
            lastName: body.lastName,
            mambuID: body.encodedKey
        })
        console.log(body)
          
      }).catch(err => {console.log(err)})
    // /console.log(JSON.stringify(dataSend))
/* 
     return axios({
        method: 'post',
        url: 'https://razerhackathon.sandbox.mambu.com/api/clients',
        data: dataSend,
        auth: {
            username: 'Team7',
            password: 'pass130ACE19C8'
        },
        headers: {
            'Accept': 'application/vnd.mambu.v2+json',
            'Content-Type': 'application/json',            
            'Connection': 'keep-alive'
        }, 
        withCredentials: true           
        }).then(resp => {
          return resp.statusCode
      }).catch(err => {
          console.log(err)
          return err
        })  */

        /* var options = {
            method: 'POST',
            uri: 'https://razerhackathon.sandbox.mambu.com/api/clients',
            body: {
                dataSend
            },
            auth: {
                user: 'Team7',
                pass: 'pass130ACE19C8'
            },
            headers: {
                'Accept': 'application/vnd.mambu.v2+json',
                'Content-Type': 'application/json',            
                'Connection': 'keep-alive'
            },
            json: true // Automatically stringifies the body to JSON
        }
         
        return rp(options)
            .then(parsedBody => {
                return parsedBody
            })
            .catch(err => {
                return err
            }); */
       
})

 