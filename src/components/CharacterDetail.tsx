import React from "react";
import { useNavigate } from "react-router";

interface CharacterDetailProp {
	characterData: any;
}

const CharacterDetail: React.FC<CharacterDetailProp> = ({ characterData }) => {
	const navigate = useNavigate();

	const openEpisodeLink = (link: any) => {
		window.open(link, "_blank");
	};

	const goToHome = () => {
		navigate("/");
	};

	return (
		<section className="text-gray-700 body-font overflow-hiddenflex items-center bg-white">
			<div className="container px-5 py-20 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap ">
					<img
						alt="ecommerce"
						className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
						src={characterData?.image}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<div className="flex justify-between">
							<h2 className="text-xl title-font text-gray-500 tracking-widest">
								{`#${characterData?.id}`}
							</h2>
							<p
								onClick={() => goToHome()}
								className="cursor-pointer underline text-gray-500"
							>
								{"< Go Back"}
							</p>
						</div>
						<div className="flex justify-between mt-5">
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
								{characterData?.name}
							</h1>
							<span className="text-gray-600">
								<p
									className={
										characterData?.status === "unknown"
											? "text-white bg-yellow-500 pl-5 pr-5 rounded-2xl font-bold text-lg capitalize"
											: characterData?.status === "Alive"
											? "text-white bg-green-700 pl-5 pr-5 rounded-2xl font-bold text-lg "
											: characterData?.status === "Dead"
											? "text-white bg-red-700 pl-5 pr-5 rounded-2xl font-bold text-lg"
											: ""
									}
								>
									{characterData?.status}
								</p>
							</span>
						</div>
						<p className="mt-3">
							<span className="font-bold">Gender:</span>{" "}
							{characterData?.gender}
							{}
						</p>
						<p className="mt-3">
							<span className="font-bold">Species:</span>{" "}
							{characterData?.species}
						</p>
						<p className="mt-3">
							<span className="font-bold">Origin: </span>{" "}
							{characterData?.origin?.name}
						</p>

						<ul className="list-inside episode-list mt-3">
							{characterData?.episode?.map(
								(item: any, index: number) => {
									return (
										<li
											key={index}
											className="text-blue-500 cursor-pointer mt-2"
											onClick={() => {
												openEpisodeLink(item);
											}}
										>
											{item}
										</li>
									);
								}
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CharacterDetail;
