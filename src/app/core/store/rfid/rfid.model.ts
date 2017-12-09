import { Song } from "../songs/song.model";

export interface RFIDObject {
    id: string;
    payload: RFIDTrackList;
}

export interface RFIDTrackList {
    shuffle?: boolean;
    tracks: Song[];
}

export const RFIDTrackListInitialState: RFIDTrackList = {
    shuffle: false,
    tracks: []
}

export type RFIDMode = 'get' | 'set';