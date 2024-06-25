interface HeaderProps {
	title: string;
	bgColor?: 'white' | 'gray' | 'blue'
}

export const Header = ({
	title = 'Header',
	bgColor = 'white',
}: HeaderProps) => {
	return (
		<div className="flex flex-col w-screen border-b border-black">
			<header className={[
				'text-2xl', 
				'font-bold',
				'h-16',
				'text-black',
				'flex',
				'items-center',
				'justify-center',
				bgColor === "blue" && 'bg-blue-500',
				bgColor === "white" && 'bg-white',
				bgColor === "gray" && 'bg-gray-500',
			].join(' ')}>
				<h1>{title}</h1>
			</header>
		</div>
	);
};

