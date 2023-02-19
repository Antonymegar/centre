// // import { ATVoice } from "./auth";
// // import { credentials } from '../util';
//  const credentials = {
//     apiKey: 'd638e8ea747271a87611054f55451bfc7d42dba64d76b922dc06efa7e00d0979',
//     username: 'megar',
// }
// const { VoiceHelper } = require('../utils/IVR_helpers');
// // Initialize the SDK
// const AfricasTalking = require('africastalking')(credentials);

// // Get the SMS service
// const sms = AfricasTalking.SMS;

// let AT_apiKey = process.env.AT_APP_APIKEY,
//     AT_username = process.env.AT_APP_USERNAME,
//     AT_virtualNumber = process.env.AT_VIRTUAL_NUMBER,
//     APP_URL = process.env.APP_URL;

//  const ATVoice = new VoiceHelper({
//     AT_apiKey,
//     AT_username,
//     AT_virtualNumber,
// });



// exports.Ed =(req, res) =>{
//     let callActions,
//     responseAction,
//     done= false,
//     pressedKey = req.body.dtmfDigits
//     let callerNumber= req.body.callerNumber;
//     if(pressedKey === 'undefined'){
//         res.end();
//     }
//     if(!isNaN(pressedKey)){
//         pressedKey= Number(pressedKey);
//         console.log(`Pressed ${pressedKey}`);
//     if(pressedKey ==1 ){
//         let callRepresentativeName= ATVoice.genrateATclientName({
//             firstName:'browser1',
//         })
//         callActions = ATVoice.converseViaBrowser({
//             role: 'CUSTOMER_TO_VCC',
//             lastRegisteredClient: callRepresentativeName,
//              customerNumber: callerNumber,
//             });
//             done = true;
//         }
//         else if (pressedKey == 2){
//             callActions = ATVoice.makeCall({
//                 textPrompt: `You will recieve a text message shortly.Press the hash key to confirm`,
//                 finishOnkey: '#',
//                 timeout:7,
//             })
//             function sendMessage() {
//                 const options = {
//                     // Set the numbers you want to send to in international format
//                     to: [`+${callerNumber}`],
//                     // Set your message
//                     message: "Heres the link  ",
                    
//                 }
            
//                 // That’s it, hit send and we’ll take care of the rest
//                 sms.send(options)
//                     .then(console.log)
//                     .catch(console.log);
//             }
            
//             sendMessage();
//             done = true;
//         }
//     responseAction = `<?xml version="1.0" encoding="UTF-8"?><Response>${callActions}</Response>`;
//     return res.send(responseAction);
//     }
//     }