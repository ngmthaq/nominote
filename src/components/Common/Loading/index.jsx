const Loading = ({ open, isTransparent = false }) => {
  return (
    open &&
    (isTransparent ? (
      <div className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center"></div>
    ) : (
      <div className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center bg-opacity-10 bg-black">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    ))
  );
};

export default Loading;
