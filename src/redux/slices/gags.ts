import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GagTrack, TrackName, TRACK_NAMES, Gag, GagName, GAG_NAMES } from '../../types/gags'
import gagsjson from '../../data/gags.json'

export type GagCounts = Record<GagName, Gag>
export type GagTracks = Record<TrackName, GagTrack>

export type GagState = {
  maxGags: number;
  gags: GagCounts;
  tracks: GagTracks;
  selectedGag?: GagName;
}

const initialGagTracks: GagTracks = TRACK_NAMES.reduce((map, t) => {
  const trackGags = gagsjson.filter(({ track }) => track === t)
  return {
    ...map,
    [t]: {
      name: t,
      gagNames: trackGags.sort((a, b) => a.level - b.level).map(({name}) => name),
      unlocked: true,
      color: trackGags[0].color,
    }
  }
}, {} as GagTracks)

const initialGags: GagCounts = gagsjson.reduce((map, {track, name, level, max}) => ({
   ...map,
   [name as GagName]: {
      track: track as TrackName,
      level,
      name: name as GagName,
      max,
      count: 0,
      icon: `/assets/gag_icons/${track}/${name.replace(/[ $]/g, '_')}.webp`,
      unlocked: true
   }
  }), {} as Record<GagName, Gag>)

const initialState: GagState = {
  maxGags: 100,
  gags: initialGags,
  tracks: initialGagTracks,
  selectedGag: undefined,
}

export type ChangeGag = {
  gag: GagName,
  count: number;
}

export const gagSlice = createSlice({
  name: 'gagReducer',
  initialState,
  reducers: {
    useGag: (state, { payload }: PayloadAction<GagName>) => {
      if (state.gags[payload].count > 0) {
        state.gags[payload].count -= 1
      }
    },
    setGag: (state, { payload: { gag, count } }: PayloadAction<ChangeGag>) => {
      state.gags[gag].count = count
    },
    randomizeSelected: (state) => {
      const possibleGags = Object.values(state.gags).filter(g => g.unlocked && state.tracks[g.track].unlocked).map(g => g.name);
      const index = Math.floor(Math.random() * possibleGags.length)
      state.selectedGag = possibleGags[index];
    },
    clearSelected: (state) => {
      state.selectedGag = undefined;
    },
    toggleGag: (state, { payload }: PayloadAction<GagName>) => {
      state.gags[payload].unlocked = !state.gags[payload].unlocked
    },
    toggleTrack: (state, { payload }: PayloadAction<TrackName>) => {
      state.tracks[payload].unlocked = !state.tracks[payload].unlocked
    },
    resetGags: (state) => {
      const storedGags = localStorage.gagCounts as GagCounts ?? {}
      GAG_NAMES.forEach(gag => {state.gags[gag] = (storedGags[gag] ?? 0)})
    },
    saveGags: (state) => {
      const savedGags: Record<string, Gag> = {}
      GAG_NAMES.forEach(gag => {savedGags[gag] = state.gags[gag]})
      localStorage.gagCounts = savedGags
    },
  },
})

// Action creators are generated for each case reducer function
export const { useGag, setGag, toggleGag, toggleTrack, randomizeSelected, clearSelected, resetGags, saveGags } = gagSlice.actions

export default gagSlice.reducer