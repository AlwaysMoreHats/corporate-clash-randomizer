import { useDispatch, useSelector } from "react-redux";
import { GagTrack as GagTrackType } from "../types/gags"
import { RootState } from "../redux/store";
import { toggleTrack } from "../redux/slices/gags";
import Gag from "./Gag";

type Props = {
  track: GagTrackType;
}

const colorClasses = {
  'Toon-Up': 'from-toonup to-toonup/60',
  'Trap': 'from-trap to-trap/60',
  'Lure': 'from-lure to-lure/60',
  'Throw': 'from-throw to-throw/60',
  'Squirt': 'from-squirt to-squirt/60',
  'Zap': 'from-zap to-zap/60',
  'Sound': 'from-sound to-sound/60',
  'Drop': 'from-drop to-drop/60',
}

export default function GagTrack({ track: { name, gagNames, unlocked } }: Props) {
  const gags = useSelector(({ gagState }: RootState) => gagNames.map(gagName => gagState.gags[gagName]))
  const dispatch = useDispatch();
  const onClick = () => { dispatch(toggleTrack(name)) }
  const colorClass = unlocked ? colorClasses[name] : `${colorClasses[name]} opacity-50`
  return (
    <div className={`bg-gradient-to-b ${colorClass} flex h-20 items-center mb-2 p-2 rounded-xl`}>
      <div className="w-48 flex">
        <button className="bg-gradient-to-b to-[#006EB9]/70 from-[#0098FD]/70 ml-2" onClick={onClick}>{unlocked ? '🔓' : '🔒' }</button>
        <div className="text-2xl ml-4 font-bold flex items-center">{name}</div>
      </div>
      {gags.map(gag => <Gag gag={gag} disabled={!unlocked} key={gag.name}/>)}
    </div>
  )
}