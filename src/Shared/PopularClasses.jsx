import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import Container from "../components/Container";
import SelectRow from "./SelectRow";

const PopularClasses = () => {
  useTitle("Classes");

  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        const polularclasses = data.filter(
          (items) => items.studentsEnrolled > 0
        );
        setClassData(polularclasses);
      });
  }, []);

  return (
    <Container>
      <div>
        <h2 className="text-3xl text-center font-serif font-bold mt-24 mb-5">
          Our Popular Classes
        </h2>
        <p className="text-center font-serif">Unlock Your Potential with Popular Classes!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 mb-20">
        {classData.map((cls) => (
          <SelectRow key={cls._id} cls={cls}></SelectRow>
        ))}
      </div>
    </Container>
  );
};

export default PopularClasses;
