import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Creative Connotations`;
  }, [title]);
};

export default useTitle;
