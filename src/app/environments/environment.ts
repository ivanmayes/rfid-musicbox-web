export const environment = {
	production: false,
	youtubeAPIKey: 'AIzaSyB41MomupoaLtgaIkTN-HvtiUyHeF64Y7E',
	socket: {
		server: 'http://' + window.location.hostname + ':3000',
		namespace: 'rfid',
		heartbeatInterval: 5000
	},
	mopidy: {
		server: 'ws://' + window.location.hostname + ':6680/mopidy/ws/'
	}
};