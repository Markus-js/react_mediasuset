import React, { useEffect, useState } from "react";
import { fetch2api } from "../../helpers/helper";
import News from "./News";
function NewsList() {
  const [news, setNews] = useState(null);

  const getEventData = async () => {
    const url = `https://api.mediehuset.net/mediesuset/news`;
    const result = await fetch2api(url);

    setNews(result?.items);
  };
  useEffect(() => {
    getEventData();
  }, []);

  console.log(news);
  return (
    <div>
      {news &&
        news.map((e) => {
          return (
            <div className="card">
              <figure>
                <img src={e.image} alt={e. title} />
              </figure>
            </div>
          );
        })}
    </div>
  );
}    

export default NewsList;
