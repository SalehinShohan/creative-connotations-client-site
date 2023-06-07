import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import Container from "../components/Container";

const Classes = () => {
  useTitle("Classes");

  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("classesData.json")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
      });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 p-24">
        {classData.map((cls) => (
          <div key={cls.name}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={cls.image}
                  alt=""
                  className="rounded-xl w-96 h-80"
                />
              </figure>
              <div className="card-body items-start text-center">
                <h2 className="card-title text-white">Course: {cls.name}</h2>
                <p>Instructor: {cls.instructor}</p>
                <p>Available Seats: {cls.availableSeats}</p>
                <p>Price: {cls.price} BDT</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
