import { useState, useEffect } from "react";
import axios from "axios";


const Comics = ({}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchComics = async (event) => {
      try {
        const response = await axios.get(`http://localhost:4000/comics`);
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);

      } catch (error) {
        console.log(error.response); 
      }
    };
    fetchComics();
  }, []);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <section className="info-section">
        {data.results.map((comic, index) => {

        const thumbnail = `${comic.thumbnail.path}.jpg`;

        return (
           <div key={index} className="info-card">
            <h3>{comic.title}</h3>

            <img className="thumbnail" 
              style={{ height: "200px" }}
              src={thumbnail} alt=""></img>
      
              <p className="info-description-text">{comic.description}</p>
              <p>{comic.id}</p>
           </div>
        );
      })}
      </section>

    </div>
  );
};

export default Comics;