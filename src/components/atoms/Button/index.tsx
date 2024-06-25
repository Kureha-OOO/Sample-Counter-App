interface ButtonProps {
	/**
		* What background color to use
		*/
	bgColor?: 'red' | 'blue' | 'green' | 'gray';
	/**
	 * How large should the button be?
	 */
	size?: 'sm' | 'md' | 'lg';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	bgColor = 'gray',
	size = 'md',
	label,
	...props
}: ButtonProps) => {
	return (
		<button
			type="button"
			className={[
				'text-white',
				'rounded-md',
				size === "sm" && 'px-2 py-1 text-xs',
				size === "md" && 'px-4 py-2 text-base',
				size === "lg" && 'px-8 py-4 text-xl',
				bgColor === "red" && 'bg-red-500 hover:bg-red-600',
				bgColor === "blue" && 'bg-blue-500 hover:bg-blue-600',
				bgColor === "green" && 'bg-green-500 hover:bg-green-600',
				bgColor === "gray" && 'bg-gray-500 hover:bg-gray-600',
			].join(' ')}
			{...props}
		>
			{label}
		</button>
	);
};
