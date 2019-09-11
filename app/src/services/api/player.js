"use strict";

export default class Player {
  init({ _options: { getOAuthToken, id } }) {
    this.getOAuthToken = getOAuthToken;
    this.id = id;
  }
  play(uri) {
    this.getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${this.id}`, {
        method: "PUT",
        body: JSON.stringify({ uris: [uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`
        }
      });
    });
  }
}
