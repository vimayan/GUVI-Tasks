 // Client ID and API key from the Developer Console
 var CLIENT_ID = '967259699602-a038dvo04vl3ol5b9aofdvsgaoc4mum6.apps.googleusercontent.com';

 // Array of API discovery doc URLs for APIs used by the quickstart
 var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

 // Authorization scopes required by the API. If using multiple scopes,
 // separated them with spaces.
 var SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

 var authorizeButton = document.getElementById('authorize-button');
 var signoutButton = document.getElementById('signout-button');

 var search = document.getElementById("search");
 var selectSearch =document.getElementById("selectSearch")

 var sign1 = document.getElementById("sign1");
 var sign2 = document.getElementById("sign2")

 var signout1 = document.getElementById("signout1");
 var signout2 = document.getElementById("signout2")


var content = document.getElementById("searchresult");

 /**
  *  On load, called to load the auth2 library and API client library.
  */
 function handleClientLoad() { gapi.load('client:auth2', initClient); }

 /**
  *  Initializes the API client library and sets up sign-in state
  *  listeners.
  */
 function initClient() {
                         window.gapi.client.init({
                         discoveryDocs: DISCOVERY_DOCS,
                         clientId: CLIENT_ID,
                         scope: SCOPES,
                         plugin_name: "YouTube clone" }) .then(function () {

                                                                   // Listen for sign-in state changes.
                                                                   gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                                                                   // Handle the initial sign-in state.
                                                                   updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

                                                                             signout1.onclick = handleSignoutClick;
                                                                             signout2.onclick = handleSignoutClick;
                                                                             sign1.onclick = handleAuthClick;
                                                                             sign2.onclick = handleAuthClick        });

                        }




 /**
  *  Called when the signed in status changes, to update the UI
  *  appropriately. After a sign-in, the API is called.
  */
 function updateSigninStatus(isSignedIn) {
                                     if (isSignedIn) {

                                                     sign1.classList.add('d-none');
                                                     sign2.classList.remove('d-sm-block');
                                                     signout1.classList.remove('d-none');
                                                     signout2.classList.add('d-sm-block');
                                     
                                                     } 
                                     else {

                                               sign1.classList.remove('d-none');
                                               sign2.classList.add('d-sm-block');
                                               signout1.classList.add('d-none');
                                               signout2.classList.remove('d-sm-block');
                                           }
                                       }

 /**
  *  Sign in the user upon button click.
  */
 function handleAuthClick(event) { gapi.auth2.getAuthInstance().signIn(); }
   
   

 /**
  *  Sign out the user upon button click.
  */
 function handleSignoutClick(event) {  gapi.auth2.getAuthInstance().signOut(); }


 function videoSearch() {
                 selectSearch.innerText = "video"
                 content.innerHTML="";

                 let  videoContent = {

                             "part": "snippet"
                             ,
                             "maxResults": 50,
                             "order": "viewCount",
                             "q":`${search.value}`,
                             "safeSearch": "moderate",
                             "type": [
                             "video"
                             ],
                             "videoDefinition": "standard",
                             "videoDuration": "any"       
                                                           };


                       if(gapi.auth2.getAuthInstance().isSignedIn.get()){
                         //content.innerHTML="";
                         return gapi.client.youtube.search.list(videoContent).then(function(response) {


                                                                                         // Handle the results here (response.result has the parsed body).

                                                                                           console.log(response);

                                                                                         let video =response.result.items;

                                                                                         video.forEach(element => {
                                                                                                                   let videos=element.id.videoId
                                                                                                                   content.innerHTML +=`   
                                                                                                                   <div class = "col-sm-3 col-lg-2">

                                                                                                                   <iframe width="100%" heigth ="auto" src="https://www.youtube.com/embed/${videos}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                                                                                                                  
                                                                                                                   </div> `    });


                                                                                               },function(err) { console.error("Execute error", err);   });
                         
                                                                        }
                           else(alert('please sign in'))




                         }



function playList() {

                     let playlistSearch = {
                               "part": "snippet"
                               ,
                               "maxResults": 8,
                               "q":`${search.value}`,
                               "safeSearch": "moderate",
                               "order": "rating",
                               "type": [
                                 "playlist"
                               ],
                              
                                }

                                 
                                
                                           
                     selectSearch.innerText = "playlist"


                               if(gapi.auth2.getAuthInstance().isSignedIn.get()){


                                               return gapi.client.youtube.search.list(playlistSearch).then(function(response) {

                                                                                                    // Handle the results here (response.result has the parsed body).
                                                                                                    console.log(response);

                                                                                                    let playlist =response.result.items;
                                                                                                    


                                                                                                    playlist.forEach(element => {

                                                                                                   
                                                                                                    execute();


                                                                                                                          
                                                                                                                          function execute() {

                                                                                                                                    let playlistContent = {       "part": ["snippet"],
                                                                                                                                                                  "maxResults": 3,
                                                                                                                                                                  "playlistId": `${element.id.playlistId}`       }  
                                                                                                                                                  
                                                                                                                                                  
                                                                                                                                                                              


                                                                                                                                                return gapi.client.youtube.playlistItems.list(playlistContent).then(function(response) {
                                                                                                                                                                                      
                                                                                                                                                                  // Handle the results here (response.result has the parsed body).
                                                                                                                                                                  console.log("Response", response);

                                                                                                                                                                  let playlistid =response.result.items;

                                                                                                                                                                  playlistid.forEach(element => {

                                                                                                                                                                  let videos=element.snippet.resourceId.videoId

                                                                                                                                                                  content.innerHTML +=`   
                                                                                                                                                                  <div class = "col-sm-4 col-lg-3">

                                                                                                                                                                  <iframe width="100%" heigth ="auto" src="https://www.youtube.com/embed/${videos}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                                                                                                                                                                  </div>`
                                                                                                                                                                  })
                                                                                                                                                                                    },function(err) { console.error("Execute error", err); });
            
 } 

                                                                                                                                              });
                                                                                                                                            
                                                                                                                                            })

                                                                                                                            
                                                                                 }
                                 else(alert('please sign in'))


                       }


 function getChannel() {
                         let channelSearch = { 

                                             'part': 'snippet,contentDetails,statistics',
                                             'forUsername': `${search.value}`

                                               }

                       selectSearch.innerText = "channel"

                       if(gapi.auth2.getAuthInstance().isSignedIn.get()){

                                             gapi.client.youtube.channels.list(channelSearch).then(function(response) {

                                                                                                                   var channel = response.result.items;
                                                                                                                   console.log(response);
                                                                                                                   // console.log(channel[0]);

                                                                                                                   if(channel){
                                                                                                                   content.innerHTML =` <div class = "col-8 col-sm-6 col-md-3"> <img width="100%" height="auto" src=${channel[0].snippet.thumbnails.default.url}>

                                                                                                                                       <ul class="list-group">
                                                                                                                                       <li class="list-group-item">${ channel[0].id}</li>
                                                                                                                                       <li class="list-group-item">Tittle:${channel[0].snippet.title}</li>
                                                                                                                                       <li class="list-group-item">views:${channel[0].statistics.viewCount}</li>

                                                                                                                                       <p>description:${channel[0].snippet.description}</p>
                                                                                                                                       <hr>
                                                                                                                                       <a  class="btn btn-info" target="-blank" href = "https://youtube.com/${channel[0].snippet.customUrl}">visit channel</a>
                                                                                                                                       </ul>
                                                                                                                                       </div> `
                                                                                       
                                                                                                                 }

                                                                                                                 else(alert('pls enter valid channel'))

                                                                                                             })
                                                                     }
                        else(alert('please sign in'))


                       }