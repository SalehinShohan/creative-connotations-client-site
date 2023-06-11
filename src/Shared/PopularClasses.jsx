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
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 p-24">
        {classData.map((cls) => <SelectRow
          key={cls._id}
          cls={cls}
        ></SelectRow> )}
      </div>
    </Container>
  );
};

export default PopularClasses;
