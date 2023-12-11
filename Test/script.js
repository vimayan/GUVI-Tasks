const menu_button = document.getElementById("sidebarToggleTop");
const side_bar = document.getElementById("side_bar");
const modal = document.getElementById("staticBackdrop");
const logout = document.getElementById("logout");
const history = document.getElementById("history");
const dropdown_playlist = document.getElementById("dropdown_playlist");
const show_more_ = document.getElementById("more");
const show_less = document.getElementById("less");
const dropdown_subscription = document.getElementById("dropdown_subscription");
const channel_container = document.getElementById("channel_container");
const profile = document.getElementById("profile");
const input_search = document.getElementById("search_1");
const input_search1 = document.getElementById("search_2");

input_search.onkeydown = function (e) {
  if (e.key === "Enter") e.preventDefault();
};
input_search1.onkeydown = function (e) {
  if (e.key === "Enter") e.preventDefault();
};

const home_video_container = document.getElementById("home_video_container");
const you_video_container = document.getElementById("you_video_container");
const playlist_video_container = document.getElementById(
  "playlist_video_container"
);
const subscription_video_container = document.getElementById(
  "subscription_video_container"
);

menu_button.onclick = function () {
  side_bar.classList.toggle("sidebar");
};
const show_more = () => {
  dropdown_playlist.classList.toggle("d-none");
  show_more_.classList.toggle("d-none");
  show_less.classList.toggle("d-none");
};

const show_more_subscription = () => {
  dropdown_subscription.classList.toggle("subscription");
  document.getElementById("show_more_subscription").classList.toggle("d-none");
  document.getElementById("show_less_subscription").classList.toggle("d-none");
};
// Client ID and API key from the Developer Console
const CLIENT_ID =
"493740273166-2dgnjdfg5vfjhd4r2d574sd4lg4j37sj.apps.googleusercontent.com";
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
];

// Authorization scopes required by the API. If using multiple scopes,
// separated them with spaces.
//var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
const SCOPES =
  "https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner";

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
  const authInstance = gapi.auth2.getAuthInstance();
  const isSignedIn = authInstance.isSignedIn.get();
  if (isSignedIn) {
    // If already signed in, show the modal
    modal.classList.remove("show");
  } else {
    // If not signed in, initiate sign-in process
    authInstance.signIn().then(
      () => {
        // Handle successful sign-in
        modal.classList.remove("show");
        getChannel();
        fillHome();
        getPlaylist();
        getSubscription();
      },
      (error) => {
        // Handle sign-in error
        console.error("Sign-in error:", error);
      }
    );
  }
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
  modal.classList.add("show");
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  window.gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES,
      plugin_name: "YouTube clone",
    })
    .then(function () {
      // Listen for sign-in state changes.
      const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

      if (isSignedIn) {
        modal.classList.remove("show");
        getChannel();
        fillHome();
        getPlaylist();
        getSubscription();
      } else {
        modal.classList.add("show");
      }
    })
    .catch((err) => {
      modal.classList.add("show");
      console.log(err);
    });
}

const search = (name, video_container) => {
  const search_input = name === "search" ? input_search : input_search1;
  if (video_container === "home_video_container") {
    home_video_container.innerHTML = `<div> </div>`;
    video_search(search_input, home_video_container);
    play_list_search(search_input, home_video_container);
    channel_search(search_input, home_video_container);
  } else if (video_container === "you_video_container") {
    you_video_container.innerHTML = `<div> </div>`;
    video_search(search_input, you_video_container);
    play_list_search(search_input, you_video_container);
    channel_search(search_input, you_video_container);
  } else if (video_container === "playlist_video_container") {
    playlist_video_container.innerHTML = `<div> </div>`;
    video_search(search_input, playlist_video_container);
    play_list_search(search_input, playlist_video_container);
    channel_search(search_input, playlist_video_container);
  } else if (video_container === "subscription_video_container") {
    subscription_video_container.innerHTML = `<div> </div>`;
    video_search(search_input, subscription_video_container);
    play_list_search(search_input, subscription_video_container);
    channel_search(search_input, subscription_video_container);
  }
};

const fillHome = () => {
  home_video_container ? (home_video_container.innerHTML = `<div> </div>`) : "";
  if (home_video_container) {
    const request = gapi.client.youtube.videos.list({
      part: ["snippet,contentDetails"],
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "US",
    });
    request.execute(
      function (response) {
        response.items.map((element) => {
          let video = element.id;
          if (home_video_container) {
            home_video_container.innerHTML += `<div class="col-xs col-sm-6 col-md-6 col-lg-4">
            <div class="card bg-black">
            <div class="card-img-top col rounded-2">
            <iframe width='100%' src="https://www.youtube.com/embed/${video}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
              <div class="card-body  text-light">
                <div class="d-flex align-items-top justify-content-around">
                  <div class="d-flex flex-column align-items-start">
                    <b class="card-text overflow-hidden">
                      ${element.snippet.title}</b>
                    <div class="d-flex flex-column">
                      <span>${element.snippet.channelTitle}</span>
                      <span>views</span>
                    </div>
                  </div>
                  <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>`;
          }
        });
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
  }
};

const getHistory = () => {
  console.log("this is api object", gapi.client.youtube);
  const params = {
    part: "contentDetails",
    mine: true,
  };
  const request = gapi.client.youtube.channels.list(params);
  request.execute(function (response) {
    const channelId =
      response.result.items[0].contentDetails.relatedPlaylists.uploads;
    // Use the channel ID to get the watch history
    const historyRequest = gapi.client.youtube.playlistItems.list({
      part: ["snippet,contentDetails"],
      channelId: channelId,
      maxResults: 25,
    });
    // .then((res)=>console.log(res.result.items))
    historyRequest.execute(function (historyResponse) {
      const videos = historyResponse;
      console.log(videos);
      // Process the list of watched videos (videos array)
      // videos.forEach((element, index) => {
      //   const { id } = element;

      //   console.log(element);

      //   history.innerHTML += `   <div class="accordion accordion-flush" id="accordionFlushExample">
      //                               <div class="accordion-item">
      //                               <h2 class="accordion-header" id="flush-headingOne">
      //                               <button class="accordion-button collapsed "
      //                                type="button" data-bs-toggle="collapse"
      //                                data-bs-target="#flush-collapse${index}"
      //                                aria-expanded="false"
      //                                aria-controls="flush-collapse${index}">
      //                               ${element.snippet.localized.title} - ${element.contentDetails.itemCount}

      //                               </button>
      //                               </h2>
      //                               <div id="flush-collapse${index}"
      //                               class="accordion-collapse collapse"
      //                               aria-labelledby="flush-heading${index}"
      //                               data-bs-parent="#accordionFlushExample">
      //                               <div class="accordion-body container" > <div class="row mx-0  gap-1 justify-content-center " id = "myVideos${index}">  </div><span class="btn btn-sm btn-success float-end fs-6" onclick ="addVideoToPlaylist('${id}')"> upload video</span> </div>
      //                               </div>
      //                               </div>
      //                              </div> `;
      // });

      // videos.forEach((element, index) => {
      //   execute();

      //   function execute() {
      //     let playlistContent = {
      //       part: ["snippet"],

      //       playlistId: `${element.id}`,
      //       maxResults: 1,
      //     };

      //     var myVideos = document.getElementById(`myVideos${index}`);

      //     return gapi.client.youtube.playlistItems.list(playlistContent).then(
      //       function (response) {
      //         // console.log(myVideos);

      //         // console.log("Response", response);

      //         let playlistid = response.result.items;
      //         //console.log(playlistid);

      //         playlistid.forEach((element) => {
      //           let videos = element.snippet.resourceId.videoId;
      //           // console.log(videos);
      //           myVideos.innerHTML += `
      //                                 <div class = "col-sm-4 col-md-3 col-lg-2">

      //                                 <iframe width="100%" heigth ="auto"
      //                                 src="https://www.youtube.com/embed/${videos}"
      //                                 frameborder="0" allow="autoplay"
      //                                  allowfullscreen></iframe>
      //                                 </div>`;
      //         });
      //       },
      //       function (err) {
      //         console.error("Execute error", err);
      //       }
      //     );
      //   }
      // });
    });
  });
};
const getPlaylist = () => {
  const params = {
    part: "contentDetails",
    mine: true,
  };
  const request = gapi.client.youtube.channels.list(params);
  request.execute(function (response) {
    const channelId = response?.result.items[0].id;
    const playlistsRequest = gapi.client.youtube.playlists.list({
      part: "snippet",
      channelId: channelId,
      maxResults: 50, // Adjust the number of results as needed
    });

    playlistsRequest.execute(function (playlistsResponse) {
      const playlists = playlistsResponse.result.items;
      // Process the list of playlists (playlists array)
      playlists.map((ele) => {
        dropdown_playlist.innerHTML += `<li class='nav-item'><a href="playlist.html" class="text-decoration-none">
        <img src="./images/playlist.png" width="25px" alt="..." />
        <span class="ms-3 text-light">${ele?.snippet.localized["title"]}</span>
      </a></li>
        `;
      });
    });
  });
};
const getSubscription = () => {
  const request = gapi.client.youtube.channels.list({
    part: "contentDetails",
    mine: true,
  });
  request.execute(function (response) {
    if (response.code == 403) {
      alert("gapi call limit exceded, pls use your client id");
    } else {
      const channelId = response.result.items[0].id;

      // Use the channel ID to get the user's subscriptions
      const subscriptionsRequest = gapi.client.youtube.subscriptions.list({
        part: "snippet",
        channelId: channelId,
        maxResults: 50, // Adjust the number of results as needed
      });

      subscriptionsRequest.execute(function (subscriptionsResponse) {
        const subscriptions = subscriptionsResponse.result.items;

        // Process the list of subscriptions (subscriptions array)

        subscriptions.map((ele) => {
          dropdown_subscription.innerHTML += `<li class='nav-item px-0'> <div class='d-flex text-start overflow-hidden mx-0 px-0' style={height:'30px'}> 
          <img src='${ele.snippet.thumbnails.default.url}' class='rounded-circle' width='25px' height='25px'>
          <span class='overflow-hidden text-nowrap ms-2'> ${ele.snippet.title}</span>
          <div/>
          <li/>`;
        });

        get_latest_video__on_subscription(subscriptions);
      });
    }
  });
};
const getChannel = () => {
  if (channel_container) {
    const request = gapi.client.youtube.channels.list({
      part: ["contentDetails", "snippet"],
      mine: true,
    });
    request.execute(function (response) {
      const channel = response?.items[0].snippet;
      profile.src = `${channel.thumbnails.high.url}`;

      if (channel_container)
        channel_container.innerHTML = `<div class="d-flex gap-3 text-light ">
<div class=''> 
<img src="${channel.thumbnails.high.url}" class='rounded-circle' width='150px' height:'150px' alt="...">
</div>
<div class="col d-flex flex-column text-start">
  <h1 >${channel.title}</h1>
  <span class ='text-white-50 ms-1'>${channel.customUrl}</span>
  <p class ='text-white-50 mt-2 ms-1 '>More about this channel <b>></b></p>
  <div>
  <div class='d-flex flex-wrap gap-2'>  <span class="badge rounded-pill p-2 fs-6"> customise channel</span> <span class="badge rounded-pill p-2 fs-6"> manage  
      videos</span>
      <div/>
  </div>
</div>

</div>
`;
    });
  }
};

const get_latest_video__on_subscription = (subscriptions) => {
  subscription_video_container
    ? (subscription_video_container.innerHTML = `<div> </div>`)
    : "";

  subscriptions.forEach(function (subscription) {
    const subscriptionChannelId = subscription.snippet.resourceId.channelId;
    // Use the subscription channel ID to get the latest video
    const latestVideoRequest = gapi.client.youtube.search.list({
      part: "snippet",
      channelId: subscriptionChannelId,
      order: "date",
      type: "video",
      maxResults: 1,
    });

    latestVideoRequest.execute(function (latestVideoResponse) {
      const latestVideo = latestVideoResponse.result.items[0].snippet;
      const video = latestVideoResponse.result.items[0].id.videoId;
      if (subscription_video_container)
        subscription_video_container.innerHTML += `         <div class="col-xs col-sm-6 col-md-6 col-lg-4">
        <div class="card bg-black">
        <div class="card-img-top col rounded-2">
        <iframe  width="100%" src="https://www.youtube.com/embed/${video}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
       </div>
          <div class="card-body  text-light">
            <div class="d-flex align-items-top justify-content-around">
              <img src="${subscription.snippet.thumbnails.default.url}" class="mb-auto rounded-circle" width="40px" alt="...">
              <div class="d-flex flex-column align-items-start">
                <b class="card-text overflow-hidden">
                  ${latestVideo.title}</b>

                <div class="d-flex flex-column">
                  <span>${subscription.snippet.title}</span>
                  <span>views</span>
                </div>

              </div>
              <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
          `;
    });
  });
};

function addVideoToPlaylist(currentid) {
  console.log(currentid);
  // var details = {
  //   videoId: "GZG9G5txtaE",
  //   kind: 'youtube#video'
  // }
  // if (startPos != undefined) {
  //   details['startAt'] = startPos;
  // }
  // if (endPos != undefined) {
  //   details['endAt'] = endPos;
  // }
  // var request = gapi.client.youtube.playlistItems.insert({
  //   part: 'snippet',
  //   resource: {
  //     snippet: {
  //       playlistId: `${currentid}`,
  //       resourceId: details
  //     }
  //   }
  // });
  // request.execute(function(response) {
  //   // $('#status').html('<pre>' + JSON.stringify(response.result) + '</pre>');
  //   console.log(response);
  // });
}

function video_search(search, content) {
  let videoContent = {
    part: "snippet",
    maxResults: 50,
    order: "viewCount",
    q: `${search.value}`,
    safeSearch: "moderate",
    type: ["video"],
    videoDefinition: "standard",
    videoDuration: "any",
  };

  if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
    //content.innerHTML="";
    return gapi.client.youtube.search.list(videoContent).then(
      function (response) {
        // Handle the results here (response.result has the parsed body).

        let video = response.result.items;

        video.forEach((element) => {
          let videos = element.id.videoId;
          content.innerHTML += `<div class="col-xs col-sm-6 col-md-6 col-lg-4">
          <div class="card bg-black">
          <div class="card-img-top col rounded-2">
          <iframe  width="100%" height ="auto" src="https://www.youtube.com/embed/${videos}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
          </div>
            <div class="card-body  text-light">
              <div class="d-flex align-items-top justify-content-around">
                <div class="d-flex flex-column align-items-start">
                  <b class="card-text overflow-hidden">
                    ${element.snippet.title}</b>
                  <div class="d-flex flex-column">
                    <span>${element.snippet.channelTitle}</span>
                    <span>views</span>
                  </div>
                </div>
                <div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>`;
        });
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
  } else alert("please sign in");
}

function play_list_search(search, content) {
  let playlistSearch = {
    part: "snippet",
    maxResults: 8,
    q: `${search.value}`,
    safeSearch: "moderate",
    order: "rating",
    type: ["playlist"],
  };

  if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
    return gapi.client.youtube.search
      .list(playlistSearch)
      .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log(response);

        let playlist = response.result.items;

        playlist.forEach((element) => {
          execute();

          function execute() {
            let playlistContent = {
              part: ["snippet"],
              maxResults: 3,
              playlistId: `${element.id.playlistId}`,
            };

            return gapi.client.youtube.playlistItems.list(playlistContent).then(
              function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);

                let playlistid = response.result.items;

                playlistid.forEach((element) => {
                  let video = element.snippet.resourceId.videoId;

                  content.innerHTML += ` <div class="col-xs col-sm-6 col-md-6 col-lg-4">
                  <div class="card bg-black">
                  <div class="card-img-top col rounded-2">
                  <iframe  width="100%" height ="auto" src="https://www.youtube.com/embed/${video}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                  </div>
                    <div class="card-body  text-light">
                      <div class="d-flex align-items-top justify-content-around">
                        <div class="d-flex flex-column align-items-start">
                          <b class="card-text overflow-hidden">
                            ${element.snippet.title}</b>
                          <div class="d-flex flex-column">
                            <span>${element.snippet.channelTitle}</span>
                            <span>views</span>
                          </div>
                        </div>
                        <div>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>`;
                });
              },
              function (err) {
                console.error("Execute error", err);
              }
            );
          }
        });
      });
  } else alert("please sign in");
}

function channel_search(search, content) {
  let channelSearch = {
    part: "snippet,contentDetails,statistics",
    forUsername: `${search.value}`,
  };

  if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
    gapi.client.youtube.channels.list(channelSearch).then(function (response) {
      var channel = response.result.items;

      if (channel) {
        content.innerHTML = ` <div class = "col-xs col-sm-6 col-md-6 col-lg-4">
                                <img width="100%" 
                                height="auto" 
                                src=${channel[0].snippet.thumbnails.default.url}>
                                <ul class="list-group">
                                <li class="list-group-item">${channel[0].id}</li>
                                <li class="list-group-item">
                                Tittle:${channel[0].snippet.title}</li>
                                <li class="list-group-item">
                                views:${channel[0].statistics.viewCount}</li>
                                <p>description:${channel[0].snippet.description}</p>
                                <hr>
                                <a  class="btn btn-info" target="-blank" 
                                href = "https://youtube.com/${channel[0].snippet.customUrl}">
                                visit channel
                                </a>
                                </ul>
                              </div> `;
      }
    });
  } else alert("please sign in");
}
