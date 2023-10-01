import React, { useState } from "react";

interface StatusProps {
	status: string;
	setStatus: (param: any) => any;
}

const Status: React.FC<StatusProps> = ({ status, setStatus }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const setStatusFilter = (e: any) => {
		if (e.target.id !== "clear") {
			setStatus(e.target.id);
		} else {
			setStatus("");
		}
	};

	return (
		<>
			<div className="relative inline-block text-left pr-4">
				<div>
					<button
						type="button"
						className="inline-flex capitalize w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						id="menu-button"
						aria-expanded="true"
						onClick={handleToggle}
						aria-haspopup="true"
					>
						{status ? status : "Status"}
						<svg
							className="-mr-1 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				{isOpen && (
					<div
						className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						// tabIndex="-1"
					>
						<div className="py-1" role="none">
							<p
								className="text-gray-700 block px-4 cursor-pointer py-2 text-sm"
								role="menuitem"
								onClick={(e) => setStatusFilter(e)}
								id="Alive"
							>
								Alive
							</p>
							<p
								className="text-gray-700 block px-4 cursor-pointer py-2 text-sm"
								role="menuitem"
								onClick={(e) => setStatusFilter(e)}
								id="Dead"
							>
								Dead
							</p>
							<p
								className="text-gray-700 block px-4 cursor-pointer py-2 text-sm"
								role="menuitem"
								onClick={(e) => setStatusFilter(e)}
								id="unknown"
							>
								Unknown
							</p>
							<p
								className="text-gray-700 block px-4 cursor-pointer py-2 text-sm"
								role="menuitem"
								onClick={(e) => setStatusFilter(e)}
								id="clear"
							>
								Clear
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
export default Status;
