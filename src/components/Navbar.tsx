import React, { Component } from "react";
import { Filterbox } from "./Filterbox";
import Searchbar from "./Searchbar";

interface NavbarProps {
	searchText: string;
	setSearchText: (params: any) => any;
	status: string;
	setStatus: (params: any) => any;
	gender: string;
	setGender: (params: any) => any;
	species: string;
	setSpecies: (params: any) => any;
}

const Navbar: React.FC<NavbarProps> = ({
	searchText,
	setSearchText,
	status,
	gender,
	species,
	setStatus,
	setGender,
	setSpecies,
}) => {
	return (
		<div className="flex flex-wrap w-full justify-between bg-gray-100 items-center p-2">
			<div>
				<p className="font-bold text-lg">Rick & Morty</p>
			</div>
			<div>
				<Filterbox
					status={status}
					gender={gender}
					species={species}
					setStatus={setStatus}
					setGender={setGender}
					setSpecies={setSpecies}
				/>
			</div>
			<div>
				<Searchbar
					searchText={searchText}
					setSearchText={setSearchText}
				/>
			</div>
		</div>
	);
};

export default Navbar;
