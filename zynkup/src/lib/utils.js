import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import animationData from "@/assets/lottie-json"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
   "bg-[#a259ff33] text-[#c084fc] border-[1px] border-[#a259ff33]",
  "bg-[#a3ff0044] text-[#ccff00] border-[1px] border-[#a3ff0044]",
  "bg-[#00ffff22] text-[#00f7ff] border-[1px] border-[#00ffff22]",
  "bg-[#ff990044] text-[#ffaa33] border-[1px] border-[#ff990044]",
  "bg-[#38bdf833] text-[#60cdff] border-[1px] border-[#38bdf833]"
]


export const getColor = (color) => {
  if(color >=0 && color < colors.length){
    return colors[color]
  }
  return colors[0]
}

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
}