import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = ({ to, replace }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  }, []);

  return <></>;
};

export default memo(Navigate);
