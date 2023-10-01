import React from "react";

interface ImageComponentProps {
	image: any;
}

const Images: React.FC<ImageComponentProps> = ({ image }) => {
	return (
		<div className="flex items-center justify-center">
			<img src={image} />
		</div>
	);
};

export default Images;
