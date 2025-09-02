const Container = ({
  children,
  className = "",
  maxWidth = "7xl",
  noPadding = false,
}) => {
  const paddingClass = noPadding ? "" : "px-4 sm:px-6 lg:px-8";

  return (
    <div
      className={`container max-w-${maxWidth} mx-auto ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
