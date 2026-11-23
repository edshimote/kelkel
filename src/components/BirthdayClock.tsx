'use client';
import { useEffect, useState } from 'react';
import { birthday } from '@/data/site';
function getRemaining() {
  const ms = Math.max(0,(birthday.dateISO ? new Date(birthday.dateISO).getTime() : Date.now())-Date.now());
  return { days:Math.floor(ms/86400000),hours:Math.floor(ms/3600000)%24,minutes:Math.floor(ms/60000)%60,seconds:Math.floor(ms/1000)%60,done:ms===0 };
}
export default function BirthdayClock() {
  const [time,setTime]=useState<ReturnType<typeof getRemaining>|null>(null);
  useEffect(()=>{setTime(getRemaining());const timer=window.setInterval(()=>setTime(getRemaining()),1000);return()=>window.clearInterval(timer);},[]);
  if(!birthday.dateISO) return <span className="clock-done">✦ O seu dia passou, mas meu amor não tem data ♡ ✦</span>;
  if(!time) return <span className="clock-placeholder">{birthday.longDate}</span>;
  if(time.done) return <span className="clock-done">✦ Feliz aniversário atrasado, meu amor ♡ ✦</span>;
  return <div className="clock"><span>FALTAM</span>{[['dias',time.days],['horas',time.hours],['min',time.minutes],['seg',time.seconds]].map(([label,value])=><div className="clock-cell" key={label}><strong>{String(value).padStart(2,'0')}</strong><small>{label}</small></div>)}</div>;
}
