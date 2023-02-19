// 'use strict';
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
// exports.generateToken= async(req, res)=>{
//     console.log({
//         route:'/capability-token',
//         body: req.body,
//     });
//     let clientname= req.body.clientname || 'county';
//      let callRepresentativeName = ATVoice.genrateATclientName({
//         isForInitialization: true,
//         firstName:clientname,
//      })
//      const ct =await ATVoice.generateCapabilityToken({
//         callRepresentativeName,
//      });
//      ct.status == 'successful'
//      ? res.json({...ct.data})
//      : res.json({ failed:true});
// }
// exports.callBack = async(req, res)=>{
//     try{
//         let clientDialedNumber= req.body.clientDialedNumber;
//         let callActions, responseAction, redirectUrl, lastRegisteredClient;
//         let callerNumber=    req.body.callerNumber;
//         let destinationNumber = req.body.destinationNumber; 
//       if(clientDialedNumber){

//         if(clientDialedNumber === AT_virtualNumber){

//         }else {
//             // Browser wants to make a call to a customer  number
//           callActions = ATVoice.converseViaBrowser({
//             role:'VCC_TO_CUSTOMER',
//             customerNumber: clientDialedNumber,
//           })
//         }
//       }
//       else {
//         // Here call is incoming from a  customer to county call centre
//        // Lead Customer to call centre 
//        callActions = ATVoice.makeCall({
//        textPrompt: `Welcome to county call centre.Press 1 For assistance in Education Department.Press 2  For assistance in Agriculture Department.Press 3 For Banditry theft.After selecting your option, press the hash key`,
//        finishOnkey: '#',
//        timeout:7,
//        callbackUrl:`${APP_URL}/incoming`,
//     }) ;
//     }
//     responseAction =`<?xml version="1.0" encoding="UTF-8"?><Response>${callActions}</Response>`;
//     console.log({ responseAction});
//     return res.send(responseAction); 
// }catch (error) {
//     console.error({error});
//     return res.sendStatus(500);
// }
// }
// exports.inCall=(req, res) =>{
//     let callActions,
//     responseAction,
//     done= false,
//     pressedKey = req.body.dtmfDigits
//     // currentStep = req.params.whichStep;
 
//  if(pressedKey === 'undefined'){
//     res.end();
//  }
//  if(!isNaN(pressedKey)){
//     pressedKey = Number(pressedKey);
//     console.log(`pressed ${pressedKey}`);
//     if( pressedKey == 1){
//         callActions = ATVoice.makeCall({
//             textPrompt: `Welcome to Education department.Press 1 For Bursary Information.Press 2 For Bursary application.After selecting your option, press the hash key`,
//             finishOnkey: '#',
//             timeout:7,
//             callbackUrl:`${APP_URL}/incoming/optionEd`,
//         });
//         done = true;
//     }
//     else if (pressedKey == 2) {
//         callActions = ATVoice.makeCall({
//             textPrompt: `Welcome to Agriculture Department.Press 1 For Fertilizer dispatch areas.Press 2 For Fertilizer application.After selecting your option, press the hash key`,
//             finishOnkey: '#',
//             timeout:7,
//             callbackUrl:`${APP_URL}/incoming/optionAgric`,
//         });
//         done = true;
//     }

//     else if (pressedKey == 3 ){
//         callActions = ATVoice.makeCall({
//             textPrompt: `Press 1 to talk to agent due to attacks.After selecting your option, press the hash key`,
//             finishOnkey: '#',
//             timeout:7,
//             callbackUrl:`${APP_URL}/incoming/Emergency`,
//         });
//         done = true;
//     }
//     responseAction = `<?xml version="1.0" encoding="UTF-8"?><Response>${callActions}</Response>`;
//     return res.send(responseAction);
//  }
 
// }




