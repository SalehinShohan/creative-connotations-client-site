import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import Container from "../components/Container";

const Instructors = () => {
  useTitle("Instructors");

  const [instData, setInstData] = useState([]);

  useEffect(() => {
    fetch("instData.json")
      .then((res) => res.json())
      .then((data) => {
        setInstData(data);
      });
  }, []);
  return (
    <Container>
      <div className="p-24">
        {instData.map((data) => (
          <div key={data.name}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img className="w-60 rounded-xl"
                  src={data.image}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {data.name}</h2>
                <p>{data.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Instructors;
