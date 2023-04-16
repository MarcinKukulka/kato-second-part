import { useEffect, useState } from 'react';
import WeatherTable from './WeatherTable';

export type DataTypes = {
	dt_txt: string;
	main: { temp: number; humidity: number };
};

type WeatherServiceProps = {
	appid: string;
};

const initialTown = 'London';

const WeatherService = ({ appid }: WeatherServiceProps) => {
	const [data, setData] = useState<DataTypes[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const [town, setTown] = useState(initialTown);

	useEffect(() => {
		const getData = async () => {
			try {
				setError(null);
				setLoading(true);
				const data = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=${appid}&units=metric`
				);

				const res = await data.json();
				const { list } = res;

				setData(list);
				setLoading(false);
			} catch (error) {
				if (error instanceof Error) setError(error.message);

				setData([]);
				setLoading(false);
			}
		};
		getData();

		const interval = setInterval(() => {
			getData();
		}, 10000);
		return () => clearInterval(interval);
	}, [town]);

	const displayError = (
		<div className="mt-6 flex justify-center">
			<p className="text-red-800 text-2xl">{error}</p>
		</div>
	);

	const load = (
		<div className="mt-6 flex justify-center">
			<p>Loading data...</p>
		</div>
	);

	return (
		<main className="grid place-content-center">
			<div className="flex flex-col mt-10">
				<select
					title="Town"
					onChange={e => {
						setTown(e.target.value);
					}}
					className="bg-black text-white p-4 pr-10 text-2xl"
				>
					<option value="London">London</option>
					<option value="München">München</option>
				</select>
				<WeatherTable data={data} />
				{loading && load}
				{error && displayError}
			</div>
		</main>
	);
};

export default WeatherService;
