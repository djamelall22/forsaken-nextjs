"use client";
import {useRef,useState} from "react";
const clips=[{src:"/assets/mage-spell.mp4",poster:"/assets/battle.jpg"},{src:"/assets/victory.mp4",poster:"/assets/victory.jpg"}];
export default function GameplaySection({copy,design}){
 const [active,setActive]=useState(0),[started,setStarted]=useState(false),video=useRef(null);
 async function play(){setStarted(true);try{await video.current?.play();}catch{video.current?.focus();}}
 return <section className="gameplay section-wrap" id="gameplay"><div className="gameplay-media"><div className="gilded-frame">
 <video ref={video} key={active} src={clips[active].src} poster={clips[active].poster} controls={started} playsInline preload="none" aria-label={copy.videoLabel}/>
 {!started&&<button className="video-cover" onClick={play} aria-label={design.watch}><span className="play-symbol" aria-hidden="true">▶</span></button>}</div>
 <div className="clip-switch" role="group" aria-label={copy.videoLabel}>{copy.clipButtons.map((label,i)=><button key={label} aria-pressed={active===i} onClick={()=>{setActive(i);setStarted(false)}}>{label}</button>)}</div></div>
 <div className="gameplay-copy"><h2>{design.combat}</h2><div className="ornament" aria-hidden="true"/><p>{design.combatBody}</p><button className="watch-button" onClick={play}><span aria-hidden="true">▶</span>{design.watch}</button></div></section>;
}

