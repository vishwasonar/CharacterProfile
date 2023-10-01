import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CharacterDetail from "../components/CharacterDetail";
import { apiEndPoint } from "../settings/config";

const DetailPage: React.FC = () => {
	const { id } = useParams();
	const [characterDetail, setCharacterDetail] = useState<any>([]);

	const getCharacterDetail = async () => {
		try {
			const { data } = await axios.get(`${apiEndPoint.characters}/${id}`);
			setCharacterDetail(data);
		} catch (error) {
			return error;
		}
	};

	useEffect(() => {
		getCharacterDetail();
	}, []);

	return (
		<div>
			<CharacterDetail characterData={characterDetail} />
		</div>
	);
};

export default DetailPage;
