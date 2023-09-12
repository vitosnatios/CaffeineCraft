type Props = {
  children: string;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type='submit'
      className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
