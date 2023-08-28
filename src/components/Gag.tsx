import { useDispatch, useSelector } from "react-redux";
import { toggleGag } from "../redux/slices/gags";
import { Gag as GagType } from "../types/gags"
import { RootState } from "../redux/store";

type Props = {
  gag: GagType;
  disabled: boolean;
}

export default function Gag({ gag, disabled }: Props) {
  const isGagAvailable = gag.unlocked && !disabled
  const opacity = isGagAvailable ? 'opacity-100' : 'opacity-50'
  const buttonColor = isGagAvailable ? 'menu-button' : 'bg-[#3A463A]'
  const isSelected = useSelector(({ gagState }: RootState) => gagState.selectedGag === gag.name)
  const color = isSelected ? 'menu-button-highlight' : buttonColor
  const dispatch = useDispatch()
  const onClick = () => { dispatch(toggleGag(gag.name)) }
  return (
    <button className={`h-16 w-24 ml-2 ${color} inline-flex items-center justify-center ${opacity}`} onClick={onClick}>
      <img className="max-w-full max-h-full" src={gag.icon} />
    </button>
  )
}