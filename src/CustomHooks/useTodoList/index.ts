import { useEffect, useState } from "react";

const useTotoList = (url: string): any[] => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.info("data: ", data);
        setList(data);
      });
  }, [url]);

  return list;
};

export default useTotoList;
