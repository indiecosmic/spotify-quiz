'use strict';

import Configuration from './configuration';
import axios from 'axios';
import { SampleData, Player } from './api';

const initOptions = {
    baseURL: Configuration.spaConfig.apiBaseUrl
}

const axiosInstance = axios.create(initOptions);

const httpService = {
    get: (url, data, options) => {
        let axiosOptions = {
            ...options,
            ...{
                method: 'get',
                url: url,
                params: data
            }
        }
        return axiosInstance(axiosOptions)
    },
    post: (url, data, options) => {
        let axiosOpt = {
            ...options,
            ...{
                method: 'post',
                url: url,
                data: data
            }
        }
        return axiosInstance(axiosOpt)
    }
}

const Api = {
    sampleData: new SampleData(httpService),
    player: new Player()
}

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDfMvW44Kt3UfvpVvT07Yg4bZD27QRi_VihmHF0YWkFfkZ2zm5GkCbCOwSTM96J56u3aKFJKaxkj4CBNS3_jEYzoJjd2kRi-kmIGdqovlpiGK-JrdWOlflKoleiv_nQd8oIgPfdTAfPDpnhJUYdRGjzjmSZDOsAQcrFYKc';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
    Api.player.init(player);
  };

export default Api;