import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import Container from "../components/Container";

const Classes = () => {
  useTitle("Classes");

  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
      });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 p-24">
        {classData.map((cls) => (
          <div key={cls._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={cls.img} alt="" className="rounded-xl w-96 h-80" />
              </figure>
              <p className="bg-slate-900 text-white absolute right-0 mr-11 mt-12 px-2 rounded-lg">
                {cls.price} BDT
              </p>
              <div className="card-body items-start text-center">
                <h2 className="card-title text-white">
                  Course: {cls.language}
                </h2>
                <p>Instructor: {cls.instructor}</p>
                <p>Available Seats: {cls.availableSeats}</p>

                <div className="card-actions">
                  <button className="btn btn-sm btn-accent">Select</button>
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
