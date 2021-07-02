import React, { useEffect, useState } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./News.module.scss";
function News() {
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
    <section>
      <h2>NYHEDER</h2>
      <div className={classes.grid_container}>
        {news &&
          news.map((e) => {
            return (
              <div className={classes.card}>
                <figure>
                  <img src={e.image} alt={e.title} />
                </figure>
                <div className={classes.content}>
                  <h3>{e.title}</h3>
                  <p>{e.teaser}</p>
                  <button>LÆS MERE</button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default News;
