import { useEffect, useState } from "react";
import Container from "../components/Container";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <Container>
      <h2 className="text-center text-4xl font-semibold my-10">
        Our Popular Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 rounded-xl">
        {instructors.map((instructor) => (
          <div key={instructor.name}>
            <div className="card w-96 h-full bg-base-100 shadow-2xl">
              <figure className="px-10 pt-10">
                <img
                  src={instructor.image}
                  alt="Shoes"
                  className="rounded-xl w-full h-60"
                />
              </figure>
              <div className="card-body items-start text-center">
                <h2 className="card-title">Name: {instructor.name}</h2>
                <p>Language: {instructor.language}</p>
                <p className="text-start">Bio: {instructor.bio}</p>
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

export default PopularInstructors;
