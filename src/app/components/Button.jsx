const Button = ({ text, outline = false, padding = "px-6 py-3" }) => {
  return (
    <button
      className={`
        ${padding} 
        rounded-full cursor-pointer font-medium transition-all duration-300 text-sm
        ${
          outline
            ? "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            : "bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl"
        } 
      `}
    >
      {text}
    </button>
  );
};

export default Button;
