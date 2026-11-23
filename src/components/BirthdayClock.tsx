import { birthday } from '@/data/site';

export default function BirthdayClock() {
  return <span className="clock-done">✦ {birthday.sender} & {birthday.name} · nosso infinito ♡ ✦</span>;
}
