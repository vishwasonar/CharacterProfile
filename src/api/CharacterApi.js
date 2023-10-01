import axios from "axios";
import { apiEndPoint } from "../settings/config";

export const characterApi = async (params) => {

	let queryparams = [];
	if (params.name.length) {
		queryparams = [...queryparams, `name=${params.name}`];
	}
	if (params.status.length) {
		queryparams = [...queryparams, `status=${params.status}`];
	}
	if (params.species) {
		queryparams = [...queryparams, `species=${params.species}`];
	}

	if (params.gender) {
		queryparams = [...queryparams, `gender=${params.gender}`];
	}

	if (params.page) {
		queryparams = [...queryparams, `page=${params.page}`];
	}

	
	const { data } = await axios.get(
		`${apiEndPoint.characters}?${queryparams.join("&")}`
	);
	
	return data;
};
