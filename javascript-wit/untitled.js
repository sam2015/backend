// your code goes here


var messengerSend = require('messengerSend');
var firebase = require('firebase');
var lodge;

// ------------------------------------------------------------
// Actions

var actions = {
  send: send,
  fetchAbout: fetchAbout,
  fetchSeason: fetchSeason,
  fetchAccomodation: fetchAccomodation,
  fetchRoute: fetchRoute,
  tips: tips,
  booking: booking,
  provideList: provideList,
  provide_user_choice_specific_lodges: provide_user_choice_specific_lodges,
  provide_package_details_specific_to_lodge:provide_package_details_specific_to_lodge,
  packageDetails: packageDetails,
  fetchContactInfo: fetchContactInfo,
  cancel:cancel,
  providelist2: providelist2,
  show_pictures: show_pictures,
  NearbySpots: NearbySpots,
  makePayment:makePayment,
  ProvideTarrif:ProvideTarrif,
  provideItinerary:provideItinerary,
};

function send(request, response) {
  var message = {};
  if (response.text) { 
    message.text = response.text; 
  }
  if (response.quickreplies) {
    message.quick_replies = response.quickreplies.map(
      function(reply) {
        return {
          content_type: 'text',
          title: reply,
          payload: reply,
        };
      }
    )
  }
  messengerSend({
    recipient: {id: request.fbid},
    message: message,
  });
}

function sendText(request, text) {
  var message = {};
  if (text) { 
    message.text = text; 
  }
  
  messengerSend({
    recipient: {id: request.fbid},
    message: message,
  });
}


function fetchAbout(request){
  var context = request.context;
  var entities = request.entities;
  var lodgeName = firstEntityValue(entities, 'lodge');

    if(lodgeName){
    context['lodge']=lodgeName;
  }
    else{
      lodgeName = context['lodge'];
    }


  switch(lodgeName) {
    case "Bandipur safari lodge" :
    sendText(request,'Once the private hunting grounds of the maharaja, Bandipur is unapologetically wild terrain. Elephants roam in large herds, deer stare at you brazenly and peafowl flit in and out as they deem fit. Nestled at the foothills of the Nilgiris, Bandipur has had a long tryst with tigers.')
    break;

    case "Devbagh beach resort":
    sendText(request,'About Devbagh');
    break;

    case "Bheemeshwari Adventure and Nature Camp":
    sendText(request,'About Bheemeshwari');
    break;

    case "Kabini river lodge":
    sendText(request,"About Kabini");
    break;

    case "River tern lodge":
    sendText(request,"About River Tern");
    break;

    case "Phalguni River Lodge":
    sendText(request,"Phalguni");
    break;


    case "Hampi Heritage and Wilderness Resort":
    sendText(request,"Hampi");
    break;    

    case "Kyathadevara Gudi Wilderness Camp":
    sendText(request,"Kyathadevara");
    break;

    case "Sharavathi Adventure Camp":
    sendText(request,"Sharavathi");
    break;

    case "Om Beach Resort":
    sendText(request,"Om");
    break;

    case "Kali Adventure Camp":
    sendText(request,"Kali");
    break;

    case "Bhimgad Adventure Camp":
    sendText(request,"Bhimgad");
    break;

    case "Bannerghatta Nature Camp":
    sendText(request,"Bannerghatta");
    break;

    case "Blackbuck Resort":
    sendText(request,"Blackbuck");
    break;

    case "Galibore Nature Camp":
    sendText(request,"Galibore");
    break;

    case "Old Magazine House ":
    sendText(request,"Old Magazine");
    break;

    case "Dubare Elephant Camp":
    sendText(request,"Dubare");
    break;

    default:
    sendText(request,"Sorry, I didn't understand. PLease provide me Lodge name.Type 'help' if you are facing any issues.")
  }

  return context;

}

function fetchSeason(request){
  var context = request.context;
  var entities = request.entities;
  var lodgeName = firstEntityValue(entities, 'lodge');


  if(lodgeName){
    context['lodge']=lodgeName;
  }
    else{
      lodgeName = context['lodge'];
    }


  switch(lodgeName) {
    case "Bandipur safari lodge" :
    sendText(request,'Summers are the best time for wildlife sightings. But for bird-watchers, the winter months are a better bet, for November to January.')
    break;

        case "Devbagh beach resort":
    sendText(request,'About Devbagh');
    break;

    case "Bheemeshwari Adventure and Nature Camp":
    sendText(request,'About Bheemeshwari');
    break;

    case "Kabini river lodge":
    sendText(request,"About Kabini");
    break;

    case "River tern lodge":
    sendText(request,"About River Tern");
    break;

    case "Phalguni River Lodge":
    sendText(request,"Phalguni");
    break;


    case "Hampi Heritage and Wilderness Resort":
    sendText(request,"Hampi");
    break;    

    case "Kyathadevara Gudi Wilderness Camp":
    sendText(request,"Kyathadevara");
    break;

    case "Sharavathi Adventure Camp":
    sendText(request,"Sharavathi");
    break;

    case "Om Beach Resort":
    sendText(request,"Om");
    break;

    case "Kali Adventure Camp":
    sendText(request,"Kali");
    break;

    case "Bhimgad Adventure Camp":
    sendText(request,"Bhimgad");
    break;

    case "Bannerghatta Nature Camp":
    sendText(request,"Bannerghatta");
    break;

    case "Blackbuck Resort":
    sendText(request,"Blackbuck");
    break;

    case "Galibore Nature Camp":
    sendText(request,"Galibore");
    break;

    case "Old Magazine House ":
    sendText(request,"Old Magazine");
    break;

    case "Dubare Elephant Camp":
    sendText(request,"Dubare");
    break;

    default :
    sendText(request, "Sorry, I didn't understand. PLease provide me Lodge name.Type 'help' if you are facing any issues.")
    break;
  }
  return context;
}

function fetchAccomodation(request){
  var context = request.context;
  var entities = request.entities;
  var lodgeName = firstEntityValue(entities, 'lodge');


  if(lodgeName){
    context['lodge']=lodgeName;
  }
    else{
      lodgeName = context['lodge'];
    }


  switch(lodgeName) {
    case "Bandipur safari lodge" :
    sendText(request,'We have 12 cottages and 10 special cottages.')
    break;

        case "Devbagh beach resort":
    sendText(request,'About Devbagh');
    break;

    case "Bheemeshwari Adventure and Nature Camp":
    sendText(request,'About Bheemeshwari');
    break;

    case "Kabini river lodge":
    sendText(request,"About Kabini");
    break;

    case "River tern lodge":
    sendText(request,"About River Tern");
    break;

    case "Phalguni River Lodge":
    sendText(request,"Phalguni");
    break;


    case "Hampi Heritage and Wilderness Resort":
    sendText(request,"Hampi");
    break;    

    case "Kyathadevara Gudi Wilderness Camp":
    sendText(request,"Kyathadevara");
    break;

    case "Sharavathi Adventure Camp":
    sendText(request,"Sharavathi");
    break;

    case "Om Beach Resort":
    sendText(request,"Om");
    break;

    case "Kali Adventure Camp":
    sendText(request,"Kali");
    break;

    case "Bhimgad Adventure Camp":
    sendText(request,"Bhimgad");
    break;

    case "Bannerghatta Nature Camp":
    sendText(request,"Bannerghatta");
    break;

    case "Blackbuck Resort":
    sendText(request,"Blackbuck");
    break;

    case "Galibore Nature Camp":
    sendText(request,"Galibore");
    break;

    case "Old Magazine House ":
    sendText(request,"Old Magazine");
    break;

    case "Dubare Elephant Camp":
    sendText(request,"Dubare");
    break;

    default :
    sendText(request, "Sorry, I didn't understand. PLease provide me Lodge name.Type 'help' if you are facing any issues.")
    break;
  }
  return context;
}

function fetchRoute(request){
  var context = request.context;
  var entities = request.entities;
  var lodgeName = firstEntityValue(entities, 'lodge');


  if(lodgeName){
    context['lodge']=lodgeName;
  }
    else{
      lodgeName = context['lodge'];
    }


  switch(lodgeName) {
    case "Bandipur safari lodge" :
    sendText(request,'The nearest airport is Mysore (80 km), though very limited flights land there currently. Extremely good roads connect Bandipur to Bangalore (220 km), Mysore (80 km), Coimbatore (170 km) and Ooty (80 km)')
    break;

        case "Devbagh beach resort":
    sendText(request,'About Devbagh');
    break;

    case "Bheemeshwari Adventure and Nature Camp":
    sendText(request,'About Bheemeshwari');
    break;

    case "Kabini river lodge":
    sendText(request,"About Kabini");
    break;

    case "River tern lodge":
    sendText(request,"About River Tern");
    break;

    case "Phalguni River Lodge":
    sendText(request,"Phalguni");
    break;


    case "Hampi Heritage and Wilderness Resort":
    sendText(request,"Hampi");
    break;    

    case "Kyathadevara Gudi Wilderness Camp":
    sendText(request,"Kyathadevara");
    break;

    case "Sharavathi Adventure Camp":
    sendText(request,"Sharavathi");
    break;

    case "Om Beach Resort":
    sendText(request,"Om");
    break;

    case "Kali Adventure Camp":
    sendText(request,"Kali");
    break;

    case "Bhimgad Adventure Camp":
    sendText(request,"Bhimgad");
    break;

    case "Bannerghatta Nature Camp":
    sendText(request,"Bannerghatta");
    break;

    case "Blackbuck Resort":
    sendText(request,"Blackbuck");
    break;

    case "Galibore Nature Camp":
    sendText(request,"Galibore");
    break;

    case "Old Magazine House ":
    sendText(request,"Old Magazine");
    break;

    case "Dubare Elephant Camp":
    sendText(request,"Dubare");
    break;

    default :
    sendText(request, "Sorry, I didn't understand. PLease provide me Lodge name.Type 'help' if you are facing any issues.")
    break;
  }
  return context;


}

function fetchContactInfo(request){
  var context = request.context;
  var entities = request.entities;
  var lodgeName = firstEntityValue(entities, 'lodge');


  if(lodgeName){
    context['lodge']=lodgeName;
  }
    else{
      lodgeName = context['lodge'];
    }


  switch(lodgeName) {
    case "Bandipur safari lodge" :
    sendText(request,'Bandipur NationalPark,Angala Post, Gundlupet Taluk,Chamarajanagar District, Melukamanahalli (Mysore - Ooty Road) Around Mysore - 571 126 Karnataka, India \nManager: Miss Salma \nContact Number: 9449597880 \nLand-line: 08229-233001 \nEmail Id: info@junglelodges.com')
    break;

        case "Devbagh beach resort":
    sendText(request,'About Devbagh');
    break;

    case "Bheemeshwari Adventure and Nature Camp":
    sendText(request,'About Bheemeshwari');
    break;

    case "Kabini river lodge":
    sendText(request,"About Kabini");
    break;

    case "River tern lodge":
    sendText(request,"About River Tern");
    break;

    case "Phalguni River Lodge":
    sendText(request,"Phalguni");
    break;


    case "Hampi Heritage and Wilderness Resort":
    sendText(request,"Hampi");
    break;    

    case "Kyathadevara Gudi Wilderness Camp":
    sendText(request,"Kyathadevara");
    break;

    case "Sharavathi Adventure Camp":
    sendText(request,"Sharavathi");
    break;

    case "Om Beach Resort":
    sendText(request,"Om");
    break;

    case "Kali Adventure Camp":
    sendText(request,"Kali");
    break;

    case "Bhimgad Adventure Camp":
    sendText(request,"Bhimgad");
    break;

    case "Bannerghatta Nature Camp":
    sendText(request,"Bannerghatta");
    break;

    case "Blackbuck Resort":
    sendText(request,"Blackbuck");
    break;

    case "Galibore Nature Camp":
    sendText(request,"Galibore");
    break;

    case "Old Magazine House ":
    sendText(request,"Old Magazine");
    break;

    case "Dubare Elephant Camp":
    sendText(request,"Dubare");
    break;
    
    default :
    sendText(request, "Sorry, I didn't understand. PLease provide me Lodge name.Type 'help' if you are facing any issues.")
    break;
  }
  return context;


}

function booking(request)
{
  var context=request.context;
  var entities=request.entities;
  
  if(firstEntityValue(entities,'lodge')==null || firstEntityValue(entities,'userArrival')==null || firstEntityValue(entities,'user_choice')==null)
  {
    sendText(request,"Please provide all the details. (Eg: Book a jungle safari in bandipur for tomorrow.)")
  }  
  
  else
  {
    context['userArrival']=firstEntityValue(entities,'userArrival');
    context['user_choice']=firstEntityValue(entities,'user_choice');
    context['lodge']=firstEntityValue(entities,'lodge');
    
    context['booking']=true;
    sendText(request,"Booking confirmed for a "+context['user_choice']+" in "+context['lodge']+" on "+context['userArrival']+".");
  }
  return context;
}

function packageDetails(request)
{
  var context= request.context;
  var entities=request.entities;
  
  if(firstEntityValue(entities,'lodge')==null)
  {
    
    if(context['lodge']=="Bandipur safari lodge")
    {
      sendText(request,"Package Includes: Stay, Lunch, Dinner & Breakfast, Safari into Bandipur Tiger Reserve, Guided Nature Walk.Luxury tax (4,8 or 12%) on lodging, VAT (14.5%) on boarding, Service tax (15%) on 70% of basic and Forest entry charges");
    }
  
    else if(context['lodge']==null)
    {
      sendText(request,"Please provide the lodge as well. (Eg. package details for bandipur.)");
    }
    
    else
    {
      sendText(request,"Package information currently not available.");
    }
  
  }
  
  else
  {
    if(firstEntityValue(entities,'lodge')=="Bandipur safari lodge")
    {
      context['lodge']=firstEntityValue(entities,'lodge');
      sendText(request,"Package Includes: Stay, Lunch, Dinner & Breakfast, Safari into Bandipur Tiger Reserve, Guided Nature Walk.Luxury tax (4,8 or 12%) on lodging, VAT (14.5%) on boarding, Service tax (15%) on 70% of basic and Forest entry charges");
    }
  
    else
    {
      context['lodge']=firstEntityValue(entities,'lodge');
      sendText(request,"Package information currently not available.");
    }
    
  }
  
  
  return context;
}

function provide_package_details_specific_to_lodge(request)
{
  var context=request.context;
  var entities=request.entities;
  switch(firstEntityValue(entities,'lodge'))
  {
    case "Bandipur safari lodge":
      {
        var message="Package Includes: Stay, Lunch, Dinner & Breakfast, Safari into Bandipur Tiger Reserve, Guided Nature Walk.Luxury tax (4,8 or 12%) on lodging, VAT (14.5%) on boarding, Service tax (15%) on 70% of basic and Forest entry charges";
        sendText(request,message);
      }
    default:
    {
      var message="Package information currently not provided";
      sendText(request,message);
      
    }
  } 
  
  return context;
}

function choice_to_lodge(user_choice)
{
  if (user_choice=="Bird Watching") 
  {
    return "We provide "+user_choice+" at Bandipur, Galibore."
  }
  else
  {
    return "We provide "+user_choice+" at Blackbuck";
  }
}
function provide_user_choice_specific_lodges(request)
{
  var context=request.context;
  var entities=request.entities;
  var user_choice=firstEntityValue(entities,'user_choice');
  context['user_choice']=user_choice;
  var message=choice_to_lodge(user_choice);
  sendText(request,message);
  return context;
}

// provide list based on what user asked
function provideList(request)
{
  var context= request.context;
  var entities=request.entities;
  
  if(firstEntityValue(entities,'lodge')!=null && context['user_choice']==null)
  {
    context['lodge']=firstEntityValue(entities,'lodge');

    //provide information for specific lodge
    var lodge=firstEntityValue(entities,'lodge');
    
    var message=lodge+" provides Bird Watching, Nature Walk. "
    sendText(request,message);
   }
  
  
  
  return context;
}


//provide list based on the lodge in the context
function providelist2(request)

{

  var context=request.context;
  var entities=request.entities;

  if(context['lodge']!=null && firstEntityValue(entities,'lodge')==null)
  {
    var message=context['lodge']+" provides Bird Watching, Nature Walk. "
    sendText(request,message);
  }

  else
  {

   sendText(request,"We offer a lot of cool stuff like Nature walk, Bird Watching"); 
  }

  return context;


}

function tips(request)
{
  var context=request.context;
  var entities=request.entities;
  var lodgeName=firstEntityValue(entities, 'lodge'); 
  
  if(lodgeName!=null)
  {
    context['lodge']=lodgeName;
  } 
  
  if(context['lodge']!=null)
  {
    var message="There are a couple of things you should take care about-  1) Dress for comfort. Do avoid bright colours and stick to muted shades of green, black, grey and brown. The more you meld with the background, the better.  2)  Wear comfortable walking shoes.  3)  Avoid smoking - anything can start a forest fire.  4) You'll be spending a lot of time outdoors. Don't forget your hat, sunscreen, sunglasses, torch, etc.  5)  Avoid plastics. We're really trying to cut down on plastics.  6)  Don't put perfume while going to safari.  7)  PETS ARE STRICTLY  NOT ALLOWED.";
    sendText(request,message);
  }
  
  else
  {
    var message="Please provide us with the lodge name you wish to know about. (eg. tips about bandipur)"
    sendText(request,message);
  }
  
  return context;
}

function cancel(request)
{
  var context=request.context;
  var entities=request.entities;
  
  if(context['booking']==true)
  {
    sendText(request,"I have cancelled your previous booking. Also I am erasing all your preferences from my memory.");
    delete context['userArrival'];
    delete context['user_choice'];
    delete context['lodge'];
    delete context['booking'];
  }
  
  else
  {
    sendText(request,"Sorry but there is no booking from you.");
  }
  return context;
}


function show_pictures(request)
{
  var context=request.context;
  var entities=request.entities;

  sendText(request,"These are some of the pictures.");

  return context;
}

function NearbySpots(request)
{
  var context=request.context;
  var entities=request.entities;

   
  if(firstEntityValue(entities,'lodge')==null)
  {
  
    if(context['lodge']=="Bandipur safari lodge")
    {
      sendText(request,"The nearby spots are Ooty, Gopalaswamy Temple, Kabini River Lodge.");  
    }
    
    else if(context['lodge']==null)
    {
      sendText(request,"Please provide the lodge name as well. (Eg Nearby spots in Bandipur)");         
      
    }
    
    else
    {
      sendText(request,"Nearby Spots currently not available.");  
    }
  }
  
  else
  {
    var lodge=firstEntityValue(entities,'lodge');
    
    context['lodge']=lodge;
    if(lodge=="Bandipur safari lodge")
    {
      sendText(request,"The nearby spots are Ooty, Gopalaswamy Temple, Kabini River Lodge.");  
      
    }
    
    else if(lodge==null)
    {
      sendText(request,"Please provide the lodgge name as well. (Eg Nearby spots in Bnadipur)");         
      
    }
    
    else
    {
      sendText(request,"Nearby Spots currently not available.");  
    }
  }
  
  
  
  return context;
}



function makePayment(request)
{
  var context=request.context;
  var entities=request.entities;

sendText(request,"Bank Details Account Holder: Jungle Lodges & Resorts Ltd Branch:M G Road, Bangalore ICICI Bank Account No:000205015684 IFSC Code: ICIC0000002 Account Holder: Jungle Lodges & Resorts Ltd Branch:M G Road, Bangalore HDFC Bank Account No:00762050000434 IFSC Code: HDFC0000076 100% advance for confirmation. All request for cancellation of confirmed booking have to be received through email or in writing if booked at our office in Bangalore. 10% of the tariff, if cancelled two or more than two weeks before check in date/time. 50% of the tariff, if cancelled between 48hours to two weeks before check in date/time. No refund if cancelled less than 48hours before check in date/time. One postponement / Preponement is free if requested two or more than two weeks before check in date/time (Once postponed /preponed there is no further change or cancellation). 10% of the tariff, if requested between 48hours to two weeks before check in date/time. 50% of the tariff, if requested within 24hours to 48 hours before check in date/time.No modification, if requested within 24 hours to check in.");  
  return context;
}

function ProvideTarrif(request)
{
  var context=request.context;
  var entities=request.entities;

if(firstEntityValue(entities,'lodge')==null)
  {
  sendText(request,"Hello");
    if(context['lodge']=="Bandipur safari lodge")
    {
      sendText(request," For special cottgae : Rs 10,505(foreigner) and Rs 8,737(Indian). For cottgae : Rs 9813(foreigner) and rs 8,045(Indian). *Seasonal hike applicable on tarrif. 10% on tarrif hike on week-ends. Tariffs are per person per night on twin-sharing basis(For Single Occupancy 30% Extra).");  
    }
    
    else if(context['lodge']==null)
    {
      sendText(request,"Please provide the lodge name as well. (Eg tarrif plans for Bandipur)");         
      
    }
    
    else
    {
      sendText(request,"Tarrif currently not available.");  
    }
  }
  
  else
  {
    var lodge=firstEntityValue(entities,'lodge');
  
    context['lodge']=lodge;
    if(lodge=="Bandipur safari lodge")
    {
      sendText(request," For special cottgae : Rs 10,505(foreigner) and Rs 8,737(Indian). For cottgae : Rs 9813(foreigner) and rs 8,045(Indian). *Seasonal hike applicable on tarrif. 10% on tarrif hike on week-ends. Tariffs are per person per night on twin-sharing basis(For Single Occupancy 30% Extra).");  
      
    }
    
    else if(lodge==null)
    {
      sendText(request,"Please provide the lodge name as well. (Eg tarrif plans for Bandipur)");         
      
    }
    
    else
    {
      sendText(request,"Tarrif currently not available.");  
    }
  }
  
  return context;

}

function provideItinerary(request)
{
  var context=request.context;
  var entities=request.entities;

  if(firstEntityValue(entities,'lodge')==null)
  {
  
    if(context['lodge']=="Bandipur safari lodge")
    {
      sendText(request,"Day One12:30 Noon Check in 01:30 PM – 03:00 PM Freshen up and have the sumptuous lunch spread for you at the Gol Ghar. 03:15 PM Tea/ Coffee, leave for a jeep safari into the Bandipur Tiger Reserve. 03:30 PM – 06:45 PM Drive for a jeep safari into the Bandipur Tiger Reserve. 07:30 PM Wildlife film show at the conference hall 08:30 PM – 10:00 PM Buffet Dinner at the Golghar & Bonfire Day Two 05:30 AM Wake-up call, Tea Coffee 06:15 AM – 09:30 AM Drive into the Bandipur National Park 09:30 AM Get back to the lodge in time for freshening up and breakfast. 11:00 AM If you must leave, we look forward to your next visit to discover the yet unexplored secrets of these hills.");  
    }
    
    else if(context['lodge']==null)
    {
      sendText(request,"Please provide the lodge name as well. (Eg tarrif plans for Bandipur)");         
      
    }
    
    else
    {
      sendText(request,"Itinerary currently not available.");  
    }
  }
  
  else
  {
    var lodge=firstEntityValue(entities,'lodge');
  
    context['lodge']=lodge;
    if(lodge=="Bandipur safari lodge")
    {
      sendText(request,"Day One12:30 Noon Check in 01:30 PM – 03:00 PM Freshen up and have the sumptuous lunch spread for you at the Gol Ghar. 03:15 PM Tea/ Coffee, leave for a jeep safari into the Bandipur Tiger Reserve. 03:30 PM – 06:45 PM Drive for a jeep safari into the Bandipur Tiger Reserve. 07:30 PM Wildlife film show at the conference hall 08:30 PM – 10:00 PM Buffet Dinner at the Golghar & Bonfire Day Two 05:30 AM Wake-up call, Tea Coffee 06:15 AM – 09:30 AM Drive into the Bandipur National Park 09:30 AM Get back to the lodge in time for freshening up and breakfast. 11:00 AM If you must leave, we look forward to your next visit to discover the yet unexplored secrets of these hills.");  
      
    }
    
    else if(lodge==null)
    {
      sendText(request,"Please provide the lodge name as well. (Eg Itinerary for Bandipur)");         
      
    }
    
    else
    {
      sendText(request,"Itinerary currently not available.");  
    }
  }

  return context;
}

// ------------------------------------------------------------
// Helpers

function firstEntityValue(entities, name) {
  var val = entities && entities[name] &&
    Array.isArray(entities[name]) &&
    entities[name].length > 0 &&
    entities[name][0].value
  ;
  if (!val) {
    return null;
  }
  return typeof val === 'object' ? val.value : val;
}


