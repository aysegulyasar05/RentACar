import { useEffect, useState } from "react";
import CustomFilter from "../CustomFilter";
import Hero from "../Hero";
import SearchBar from "../SearchBar";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { fuels, transmission, years } from "../constants";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    //api istegi
    fetchCars(paramsObj)
      //istek basarili olursa state aktar
      .then((data: CarType[]) => {
        setCars(data);
      })
      //istek basarisiz olursa
      .catch(() => setIsError(true));
  }, [params]);

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Discover</p>
        </div>
        {/* Filtreleme alani */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='Fuel Type'options={fuels}/>
            <CustomFilter title='Production Year'options={years}/>
            <CustomFilter title='Transmission' options={transmission}/>
          </div>
        </div>
      </div>

      {/* arabalari listelme */}
      {isError && (
        <div className="home__error-container">
          <h2>ERROR!!</h2>
        </div>
      )}
      {/* //araba gelmediyse ve hata varsa veya sayisi bir den azsa */}
      {!cars ? (
        <div className="home__error-container">
          <h2> Loading...</h2>
        </div>
      ) : cars.length < 1 ? (
        <div>
          <h2>No matching cars</h2>
        </div>
      ) : (
        <section>
          <div className="home__cars-wrapper">
            {cars.map((item, i) => (
              <Card key={i} car={item} />
            ))}
          </div>
          <ShowMore />
        </section>
      )}
    </div>
  );
};

export default MainPage;
