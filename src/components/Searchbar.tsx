import React, { Component } from "react";

interface SearchBoxProps {
	searchText: string;
	setSearchText: (params: any) => any;
}

const Searchbar: React.FC<SearchBoxProps> = ({ searchText, setSearchText }) => {
	const search = (e: any) => {
		if (e.target.value && e.target.value.length > 0) {
			setSearchText(e.target.value);
		} else {
			setSearchText("");
		}
	};

	return (
		<React.Fragment>
			<div className=" flex justify-center">
				<div className="relative flex w-96 items-stretch">
					<input
						type="text"
						className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
						placeholder="Search"
						name="search"
						aria-label="Search"
						onChange={(e) => search(e)}
						aria-describedby="button-addon1"
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Searchbar;
