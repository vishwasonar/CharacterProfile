import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "./Images";

interface CardComponentProps {
	characters: any;
}

const Cards: React.FC<CardComponentProps> = ({ characters }) => {
	const navigate = useNavigate();

	const redirectToDetailPage = (id: number) => {
		navigate(`/${id}`);
	};

	return (
		<div>
			<div className="flex flex-wrap justify-center mt-5">
				{characters?.length ? (
					characters.map((item: any, key: number) => {
						return (
							<div
								key={item?.id}
								className="p-4 max-w-sm cursor-pointer"
								onClick={() => redirectToDetailPage(item?.id)}
							>
								<div className="flex h-full shadow-lg border p-5 flex-col">
									<Images image={item?.image} />
									<div className="flex flex-col justify-between flex-grow mb-5">
										<div className="leading-relaxed text-base text-white flex justify-between items-center">
											<p className="text-black font-bold text-lg text-center mt-5">
												{item?.name}
											</p>
											<h2
												className={
													item?.status === "unknown"
														? "text-yellow-700 mt-5 rounded-2xl font-bold text-lg capitalize"
														: item?.status ===
														  "Alive"
														? "text-green-800  mt-5 rounded-2xl font-bold text-lg "
														: item?.status ===
														  "Dead"
														? "text-red-800  mt-5 rounded-2xl font-bold text-lg"
														: ""
												}
											>
												{item?.status}
											</h2>
										</div>
									</div>
									<hr />
									<div className="flex justify-between mt-5">
										<div>
											<p>Last Location:</p>
											<p className="text-black">
												{item?.location?.name}
											</p>
										</div>
										<div>
											<p>Episodes</p>
											<p className="text-black text-right">
												{item?.episode?.length}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div
						className="flex items-center h-96 justify-center container"
						style={{ height: "80vh" }}
					>
						<div>
							<h1 className="text-2xl font-bold">
								No Data Found
							</h1>
						</div>
						<></>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cards;
