"use client";
import {useEffect,useRef,useState} from "react";
export default function MagicAtmosphere({label,locale}){
 const canvas=useRef(null),[enabled,setEnabled]=useState(false);
 useEffect(()=>{document.documentElement.lang=locale;const media=matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setEnabled(!media.matches);update();media.addEventListener("change",update);return()=>media.removeEventListener("change",update);},[locale]);
 useEffect(()=>{
 document.documentElement.dataset.magic=enabled?"on":"off";window.dispatchEvent(new CustomEvent("forsaken:motion",{detail:{enabled}}));if(!enabled)return;
 const el=canvas.current,ctx=el.getContext("2d");if(!ctx)return;
 let width=0,height=0,frame=0,last=0;
 const motes=Array.from({length:36},(_,i)=>({x:(i*.618033)%1,y:(i*.38197)%1,r:.6+(i%4)*.4,speed:.004+(i%5)*.001,phase:i*1.7}));
 function resize(){width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,1.5);el.width=width*dpr;el.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
 function draw(time){frame=requestAnimationFrame(draw);if(time-last<32)return;last=time;ctx.clearRect(0,0,width,height);const t=time/1000;for(const m of motes){const x=(m.x+Math.sin(t*.16+m.phase)*.018)*width,y=((m.y-t*m.speed)%1+1)%1*height,a=.18+(Math.sin(t*.7+m.phase)+1)*.22;ctx.shadowBlur=12;ctx.shadowColor="#efd68a";ctx.fillStyle=`rgba(243,213,136,${a})`;ctx.beginPath();ctx.arc(x,y,m.r,0,Math.PI*2);ctx.fill();}}
 function visibility(){cancelAnimationFrame(frame);if(!document.hidden)frame=requestAnimationFrame(draw);}
 resize();frame=requestAnimationFrame(draw);addEventListener("resize",resize);document.addEventListener("visibilitychange",visibility);
 return()=>{cancelAnimationFrame(frame);removeEventListener("resize",resize);document.removeEventListener("visibilitychange",visibility);ctx.clearRect(0,0,width,height);};
 },[enabled]);
 return <><canvas className="magic-canvas" ref={canvas} aria-hidden="true"/><button className="motion-toggle" aria-pressed={enabled} onClick={()=>setEnabled(!enabled)} title={label}><span aria-hidden="true">{enabled?"Ⅱ":"▷"}</span><span>{label}</span></button></>;
}

