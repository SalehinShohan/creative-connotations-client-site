import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import Container from "../components/Container";
import AllClasses from "./AllClasses";

const Classes = () => {
  useTitle("Classes");

  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        const approvedClass = data.filter(items => items.status === 'approved')
        setClassData(approvedClass);
      });
  }, []);


  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 p-24">
        {classData.map((cls) => <AllClasses
          key={cls._id}
          cls={cls}
        ></AllClasses> )}
      </div>
    </Container>
  );
};

export default Classes;
