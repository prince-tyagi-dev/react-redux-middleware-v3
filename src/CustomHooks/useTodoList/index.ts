import { useEffect, useState } from "react";

const useTotoList = (url: string): any[] => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setList(data));

    console.info("data: ", list);
  }, [url]);

  return list;
};

export default useTotoList;
