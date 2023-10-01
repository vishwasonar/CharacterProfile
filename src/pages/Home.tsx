import React, { useEffect, useState } from "react";
import { characterApi } from "../api/CharacterApi";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const Home: React.FC = () => {
	const [characterData, setCharacterData] = useState<any>([]);
	const [error, setError] = useState<any>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [searchText, setSearchText] = useState<any>("");
	const [status, setStatus] = useState<string>("");
	const [gender, setGender] = useState<string>("");
	const [species, setSpecies] = useState<string>("");

	const getCharacterData = async () => {
		try {
			const data = await characterApi({
				name: searchText,
				status: status,
				gender: gender,
				species: species,
				page: currentPage,
			});
			setTotalPages(data?.info?.pages);
			setCharacterData(data?.results);
		} catch (error) {
			setCharacterData([]);
			setError(error);
		}
	};

	useEffect(() => {
		getCharacterData();
	}, [
		searchText,
		currentPage,
		totalPages,
		status,
		gender,
		species,
		currentPage,
	]);

	return (
		<div className="h-screen">
			<div className="flex flex-col justify-center">
				<div className="w-full sticky top-0">
					<Navbar
						searchText={searchText}
						setSearchText={setSearchText}
						status={status}
						gender={gender}
						species={species}
						setStatus={setStatus}
						setGender={setGender}
						setSpecies={setSpecies}
					/>
				</div>
				<div className="w-full">
					<Cards characters={characterData} />
				</div>
				{/* <Filterbox /> */}
				{/* <div>
			</div> */}
				<footer className="sticky bottom-0">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</footer>
			</div>
		</div>
	);
};

export default Home;
