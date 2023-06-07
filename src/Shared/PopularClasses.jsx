import { useEffect, useState } from "react";
import Container from "../components/Container";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <Container>
        <h2 className="text-center text-4xl font-semibold my-10">Our Popular Classes Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 rounded-xl">
        
        {classes.map((item) => (
          <div key={item.language}>
            <div className="card card-side bg-base-100 shadow-2xl">
              <figure>
                <img className="w-64 rounded-3xl"
                  src={item.img}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Language: {item.language}</h2>
                <p>Level: {item.level}</p>
                <p>Schedule: {item.schedule}</p>
                <p>Instructor: {item.instructor}</p>
                <p>Ppots Available: {item.spotsAvailable}</p>
                <p>Enrolled: {item.studentsEnrolled}</p>
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

export default PopularClasses;
