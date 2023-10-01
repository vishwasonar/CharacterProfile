import React, { Component } from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: (params: any) => any;
	// nextPage: number;
	// setNextPage: (params: any) => any;
	// previousPage: number;
	// setPreviousPage: (params: any) => any;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	setCurrentPage,
	// nextPage,
	// setNextPage,
	// previousPage,
	// setPreviousPage,
}) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	const changeNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const changePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const changePage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
			<div className="hidden sm:block">
				<span className="text-sm text-gray-700">
					Page {currentPage} of {totalPages}
				</span>
			</div>
			<div className="flex-1 flex justify-between sm:justify-end">
				<button
					onClick={() => changePreviousPage()}
					// disabled={currentPage === 1}
					className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Previous
				</button>
				<div>
					{pageNumbers.map((page) => (
						// <button
						// 	key={page}
						// 	onClick={() => changePage(page)}
						// 	// className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
						// 	// 	currentPage === page
						// 	// 		? "text-indigo-500 bg-indigo-50"
						// 	// 		: "text-gray-700 hover:bg-gray-50"
						// 	// }`}
						// >
						// 	{page}
						// </button>
						<button
							key={page + 1}
							className={`${
								page + 1 === currentPage
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-gray-600"
							} px-1 py-1 rounded`}
							onClick={() => changePage(page + 1)}
						>
							{page}
						</button>
					))}
				</div>
				<button
					onClick={() => changeNextPage()}
					// disabled={currentPage === totalPages}
					className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Next
				</button>
			</div>
		</nav>
	);
};

export default Pagination;
