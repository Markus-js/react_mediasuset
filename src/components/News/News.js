import React, { Fragment } from "react";

const News = ({ news }) => {
  console.log(news.title);
  return (
    <section>
      {news &&
        news.map((e) => {
          return (
            <div className="card">
              <figure>
                <img src={e.image} alt={e.title} />
              </figure>
            </div>
          );
        })}
    </section>
  );
};

export default News;
