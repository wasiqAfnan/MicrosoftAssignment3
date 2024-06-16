import React from 'react';

const Home = () => {
    let myDetails = {
        name: "Wasiq Afnan Ansari",
        role:"Frontend Developer",
        college:"IGNOU",
        course: "BCA",
        passYear: 2024
    }
    return (
        <div className='detailsDiv'>
            {/* Rendering Dynamic content */}
            <p>Hey👋 I am {myDetails.name}, have passed {myDetails.course} from {myDetails.college} in the year {myDetails.passYear}. I am a {myDetails.role}.</p>
        </div>
    )
}

export default Home;