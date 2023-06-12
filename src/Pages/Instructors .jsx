import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import Container from "../components/Container";

const Instructors = () => {
  useTitle("Instructors");

  const [instData, setInstData] = useState([]);

  useEffect(() => {
    fetch("https://creative-connotations-server-site.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const polularclasses = data.filter(items => items.role === 'instructor')
        setInstData(polularclasses);
      });
  }, []);
  return (
    <Container className="mt-10">
      <div className="p-24">
        {instData.map((data) => (
          <div key={data.name}>
            <div className="card card-side bg-base-100 shadow-xl mb-10">
              <figure>
                <img className="w-60 rounded-xl"
                  src={data.img}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {data.name}</h2>
                <p>{data.email}</p>
                <p>Enrolled: {data.studentsEnrolled}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Instructors;
