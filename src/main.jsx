import React,{useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import gsap from 'gsap';
import './styles.css';

const frames=[
['01','Threshold','https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85'],
['02','Rain Notes','https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=85'],
['03','Copper Hour','https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85'],
['04','Afterlight','https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=85']
];

function App(){
 const root=useRef(null);
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const ctx=gsap.context(()=>{
    gsap.from('.eyebrow,.hero h1,.hero-copy',{y:28,opacity:0,duration:1.1,stagger:.12,ease:'power3.out'});
    gsap.from('.hero-image',{scale:1.08,opacity:0,duration:1.5,ease:'power2.out'});
    gsap.utils.toArray('.frame').forEach((el,i)=>gsap.from(el,{y:48,opacity:0,duration:.9,delay:.08*i,scrollTrigger:undefined}));
  },root);
  return()=>ctx.revert();
 },[]);
 return <main ref={root}>
  <section className="hero">
   <div className="hero-image" aria-hidden="true"/>
   <div className="veil"/>
   <nav><span>CMA / 031</span><span>Indian wedding field archive</span></nav>
   <div className="hero-content"><p className="eyebrow">Monsoon residue · copper light · quiet ritual</p><h1>Copper<br/><em>Monsoon</em><br/>Archive</h1><p className="hero-copy">A wedding remembered in weather: rain on stone, marigold pigment, brass reflections and the still seconds between ceremonies.</p></div>
   <div className="scroll-mark">SCROLL TO ENTER ↓</div>
  </section>

  <section className="manifesto"><p>Not a timeline.</p><h2>A collection of <em>temperature, touch</em> and afterlight.</h2><p className="small">Four photographic chapters map the ceremony through atmosphere rather than chronology.</p></section>

  <section className="gallery" aria-label="Wedding archive chapters">{frames.map(([n,t,img])=><article className="frame" key={n}><div className="photo"><img src={img} alt={`${t} wedding editorial photograph`} loading="lazy"/></div><div className="meta"><span>{n}</span><h3>{t}</h3><p>{n==='01'?'A doorway, held open by rain.':n==='02'?'Portraits softened by wet air.':n==='03'?'Brass, skin and marigold at dusk.':'The night keeps what the ceremony leaves behind.'}</p></div></article>)}</section>

  <section className="closing"><span>FIELD NOTE / 19:42</span><h2>When the rain stopped,<br/>the courtyard kept shining.</h2><p>Project Factory 031 · Copper Monsoon Archive</p></section>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>);
