const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Function for getting an access token using OAuth2
async function getAccessToken() {
  const oauth2Client = new OAuth2(
    process.env.clientId,
    process.env.secret,
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  await oauth2Client.setCredentials({
    refresh_token:process.env.refreshToken
  });

  try {
    const { tokens } = await oauth2Client.refreshAccessToken();
    if(tokens) return tokens.access_token;
  } catch (err) {
    console.error('Error refreshing access token:', err);
  }
}


module.exports=getAccessToken;