import { DataTypes } from './WeatherService';

type WeatherTableProps = {
	data: DataTypes[];
};

const WeatherTable = ({ data }: WeatherTableProps) => {
	return (
		<div className="flex flex-col mt-5">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full text-center text-sm font-light">
							<thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
								<tr>
									<th scope="col" className=" px-6 py-4">
										Date
									</th>
									<th scope="col" className=" px-6 py-4">
										Temp
									</th>
									<th scope="col" className=" px-6 py-4">
										Humidity
									</th>
								</tr>
							</thead>
							<tbody>
								{data &&
									data.map(({ dt_txt, main: { temp, humidity } }) => (
										<tr
											key={dt_txt}
											className="border-b dark:border-neutral-500"
										>
											<td className="whitespace-nowrap  px-6 py-4">{dt_txt}</td>
											<td className="whitespace-nowrap  px-6 py-4">
												{temp} &#8451;
											</td>
											<td className="whitespace-nowrap  px-6 py-4">
												{humidity} %
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherTable;
