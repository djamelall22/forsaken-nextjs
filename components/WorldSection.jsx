import Image from "next/image";
export default function WorldSection({copy,title,subtitle}){
 const places=[copy.items[1],{...copy.items[3],image:"castle-enchanted.png"},copy.items[2]];
 return <section className="world section-wrap" id="univers"><h2 className="ruled-title">{title}</h2><p className="world-intro">{subtitle}</p><div className="world-grid">{places.map(place=><figure className="world-card" key={place.image}><Image src={`/assets/${place.image}`} alt={place.alt} fill sizes="(max-width:600px) 90vw, 33vw"/><figcaption>{place.name}</figcaption></figure>)}</div></section>;
}


