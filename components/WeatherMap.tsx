'use client';
import {useEffect,useState} from 'react';
import dynamic from 'next/dynamic';
const MapView=dynamic(()=>import('./MapView'),{ssr:false});
const layers=[['temperature_2m','Température'],['precipitation','Précipitations'],['cloud_cover','Nuages'],['wind_speed_10m','Vent'],['relative_humidity_2m','Humidité'],['surface_pressure','Pression']];
export default function WeatherMap(){const [layer,setLayer]=useState('temperature_2m');return <div className="panel"><div className="layerbar">{layers.map(([id,label])=><button key={id} onClick={()=>setLayer(id)} className={'layer '+(layer===id?'active':'')}>{label}</button>)}</div><MapView layer={layer}/></div>}
