import React from "react";
import GenderFilter from "./Filters/Gender";
import SpeciesFilter from "./Filters/Species";
import StatusFilter from "./Filters/Status";

interface FilterProps {
	status: string;
	setStatus: (params: any) => any;
	gender: string;
	setGender: (params: any) => any;
	species: string;
	setSpecies: (params: any) => any;
}

export const Filterbox: React.FC<FilterProps> = ({
	status,
	gender,
	species,
	setStatus,
	setGender,
	setSpecies,
}) => {
	return (
		<div>
			<div className="flex justify-between">
				<StatusFilter status={status} setStatus={setStatus} />
				<GenderFilter gender={gender} setGender={setGender} />
				<SpeciesFilter species={species} setSpecies={setSpecies} />
			</div>
		</div>
	);
};
