import React, { Component } from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: (params: any) => any;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	setCurrentPage,
}) => {
	const changePage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const renderPageNumbers = () => {
		const pages = [];
		const range = 5;
		let start = currentPage - Math.floor(range / 2);
		start = Math.max(1, start);
		const end = Math.min(start + range - 1, totalPages);

		if (start > 1) {
			pages.push(
				<button
					key={1}
					className="bg-blue-500 text-white px-3 ml-2	 py-1 rounded"
					onClick={() => changePage(1)}
				>
					1
				</button>
			);
			if (start > 2) {
				pages.push(
					<span key="ellipsis" className="mx-2">
						...
					</span>
				);
			}
		}

		for (let i = start; i <= end; i++) {
			pages.push(
				<button
					key={i}
					className={`${
						i === currentPage
							? "bg-blue-500 text-gray px-3 ml-2 py-1 rounded"
							: "bg-gray-200 text-gray-600 px-3 ml-2 py-1 rounded"
					} px-2 py-1 rounded`}
					onClick={() => changePage(i)}
				>
					{i}
				</button>
			);
		}

		if (end < totalPages) {
			if (end < totalPages - 1) {
				pages.push(
					<span key="ellipsis" className="mx-2">
						...
					</span>
				);
			}
			pages.push(
				<button
					key={totalPages}
					className="bg-blue-500 text-white px-2 py-1 rounded"
					onClick={() => changePage(totalPages)}
				>
					{totalPages}
				</button>
			);
		}

		return pages;
	};

	return (
		<nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
			<div className="hidden sm:block">
				<span className="text-sm text-gray-700">
					Page {currentPage} of {totalPages}
				</span>
			</div>
			<div className="flex-1 flex justify-between sm:justify-end">
				<div className="">{renderPageNumbers()}</div>
			</div>
		</nav>
	);
};

export default Pagination;
