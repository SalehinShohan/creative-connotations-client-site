import Banner from "../Shared/Banner/Banner";
import PopularClasses from "../Shared/PopularClasses";
import PopularInstructors from "../Shared/PopularInstructors";
import StudentReview from "./StudentReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <StudentReview></StudentReview>
        </div>
    );
};

export default Home;