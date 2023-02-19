// const credentials = {
//     apiKey: 'd638e8ea747271a87611054f55451bfc7d42dba64d76b922dc06efa7e00d0979',
//     username: 'megar',
// }
// // Initialize the SDK
// const AfricasTalking = require('africastalking')(credentials);

// // Get the SMS service
// const sms = AfricasTalking.SMS;

// const { VoiceHelper } = require('../utils/IVR_helpers');

// let AT_apiKey = process.env.AT_APP_APIKEY,
//     AT_username = process.env.AT_APP_USERNAME,
//     AT_virtualNumber = process.env.AT_VIRTUAL_NUMBER,
//     APP_URL = process.env.APP_URL;

//  const ATVoice = new VoiceHelper({
//     AT_apiKey,
//     AT_username,
//     AT_virtualNumber,
// });

// exports.Em=(req, res)=>{
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
//     onsole.log(`Passed other`);
//             callActions = ATVoice.linkCustomerToOfflineAgent({
//             offline_phone: '+254773841221',
//             });
//         done = true;
//     }
//     if (!done) {
//         callActions = ATVoice.saySomething({
//             speech: 'Sorry, you did not press 1 nor 2. Goodbye.',
//         });
//     }

//     console.log(`[post]: for survey`);
//     console.log({
//         dialed: pressedKey,
//     });
//     responseAction = `<?xml version="1.0" encoding="UTF-8"?><Response>${callActions}</Response>`;
//     return res.send(responseAction);
//  }