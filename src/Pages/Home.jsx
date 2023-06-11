import useTitle from "../Hooks/useTitle";
import Activites from "../Shared/Activites/Activites";
import Banner from "../Shared/Banner/Banner";
import PopularClasses from "../Shared/PopularClasses";
import PopularInstructors from "../Shared/PopularInstructors";
import StudentReview from "./StudentReview";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Activites></Activites>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <StudentReview></StudentReview>
        </div>
    );
};

export default Home;