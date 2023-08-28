import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { GagTrack as GagTrackType } from "../types/gags"
import GagTrack from "./GagTrack"
import { clearSelected, randomizeSelected } from "../redux/slices/gags"
import rouletteEffect from "../util/rouletteEffect"

export default function GagInterface() {
  const tracks = useSelector(({ gagState: gags }: RootState) => Object.values<GagTrackType>(gags.tracks) )
  const dispatch = useDispatch()
  const onRandomize = () => rouletteEffect(() => { dispatch(randomizeSelected()) })
  const onClear = () => dispatch(clearSelected())
  return (
    <div>
      {tracks.map(track => <GagTrack track={track} key={track.name}/>)}
      <button className="menu-button w-48 m-4" onClick={onRandomize}>Randomize!</button>
      <button className="menu-button w-48 m-4" onClick={onClear}>Clear</button>
    </div>
  )
}