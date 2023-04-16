import WeatherService from '@/components/WeatherService';

const appid = '8f10f258089d98f582072568e1022d6e';

export default function Home() {
	return <WeatherService appid={appid} />;
}
