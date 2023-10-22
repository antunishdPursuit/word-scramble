import imgJennifer from "../assets/Jennifer Einstein_2022.jpg";
import imgDennys from "../assets/DennysAntunish2.jpg"
import imgKenti from "../assets/Kenti.jpg"
import './About.css'


function About() {
  return (
    <div className="about about-container">
        <div className="about about-application">
            <div className="about-heading">About This Application</div>
                <p>This word unscramble was created as part of Pursuit's Hackathon Palooza 2023. </p>
        </div>
            <div className="about-heading">About the Developers</div>
            <p>Dennys, Jennifer, and Kenti are Pursuit fellows in the 9.6. The Pursuit Fellowship is a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate. Project-based curriculum provides hands-on experience with JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data Structures, Algorithms, sprints, Agile, code reviews, and pair programming.</p>

        <div className="about about-developers">
            <div className="about about-Dennys about-dev">
                <img src={imgDennys} alt="Dennys Antunish headshot" className="about-headshot"/>
                <div className="about-devinfo">
                    <a className="about-name-url" href="https://github.com/antunishdPursuit">Dennys Antunish</a>
                    <p>Entering the computer field in 2017, Dennys is is especially excited about the developing use of Artificial Intelligence.</p>
                </div>
            </div>
            <div className="about about-Jennifer about-dev">
                <img src={imgJennifer} className="about-headshot" alt="Jennifer Einstein headshot" />
                <div className="about-devinfo">
                    <a className="about-name-url" href="https://github.com/JenniferEinstein">Jennifer Einstein</a>
                    <p className="about-devinfo">Jennifer's first class was called "I Speak Basic to my Apple." Since then, after a time away from ComputerWorld, she has returned and is learning the ins and outs of coding from the teachers at Pursuit. </p>
                </div>
            </div>
            <div className="about about-Kenti about-dev">
                <img src={imgKenti} className="about-headshot" alt="Ray Kenti headshot" />
                <div className="about-devinfo">
                    <a className="about-name-url" href="https://github.com/pulse99r">Ray "Kenti" Johnson</a>
                    <p className="about-devinfo">Kenti was the lead developer on this project. A graduate of Udacity's NanoDegree program (August 2022) focusing on Front End Web Development, Kenti is also a professional Jazz Giutarist and Music Educator and strive to create web development projects that benefit people in the music industry, especially in the area of music education and educating children.
                    </p>
                </div>
            </div>
</div>
        
    </div>
 )
}

export default About