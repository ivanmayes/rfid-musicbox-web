export interface Ref {
    uri: string;
    name: string;
    type: string;
}

export interface TlTrack {
    tlid: number;
    track: Track;
}

export interface Track {
    uri: string;
    name: string;
    artists: Artist[];
    album: Album;
    composers: Artist[];
    performers: Artist[];
    genre: string;
    track_no: number;
    disc_no: number;
    date: string;
    length: number;
    bitrate: number;
    comment: string;
    musicbrainz_id: string;
    last_modified: string;
}

export interface Artist {
    uri: string; //artist URI
    name: string; //artist name
    sortname: string; //artist name for sorting
    musicbrainz_id: string; //MusicBrainz ID
}

export interface Album {
    uri: string; //album URI
    name: string; //album name
    artists: Artist[]; //album artists
    num_tracks: number; //number of tracks in album
    num_discs: number; //number of discs in album
    date: string; //album release date: YYYY or YYYY-MM-DD;
    musicbrainz_id: string; //MusicBrainz ID
    images: string[]; //album image URIs
}

export interface Playlist {
    uri: string; //playlist URI
    name: string; //playlist name
    tracks: Track[]; //playlist’s tracks
    last_modified: number; //playlist’s modification time in milliseconds since Unix epoch
}

export interface TrackListSettings {
    random: boolean;
    repeat: boolean;
}

export type Events = 
    'mute_changed' |
    'on_event' |
    'options_changed' |
    'playback_state_changed' |
    'playlist_changed' |
    'playlist_deleted' |
    'playlists_loaded' |
    'seeked' |
    'stream_title_changed' |
    'track_playback_ended' |
    'track_playback_paused' |
    'track_playback_resumed' |
    'track_playback_started' |
    'event:tracklistChanged' |
    'event:playbackStateChanged';
