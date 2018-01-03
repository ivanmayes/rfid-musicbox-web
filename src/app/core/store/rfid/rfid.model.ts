import { Song } from "../songs/song.model";

export interface RFIDObject {
    id: string;
    payload: RFIDTrackList;
}

export interface RFIDTrackList {
    tracks: Song[];
    shuffle?: boolean;
    loop?: boolean;
    title?: string;
}

export const RFIDTrackListInitialState: RFIDTrackList = {
    shuffle: false,
    loop: false,
    tracks: []
}

export type RFIDMode = 'get' | 'set';