import imgJennifer from "../assets/Jennifer Einstein_2022.jpg";
import imgDennys from "../assets/DennysAntunish2.jpg"
import imgKenti from "../assets/Kenti.jpg"
import './About.css'


function About() {
  return (
    <div className="about about-container">
        <div className="about about-application">
            <h1>About This Application</h1>
                This word unscramble was created as part of Pursuit's Hackathonpalooza 2023.
        </div>
        <h1>About the Developers</h1>
        <div className="about about-developers">
            <div className="about about-Dennys about-dev">
                <img src={imgDennys} alt="Dennys Antunish headshot" className="about-headshot"/>
                <div className="about-devinfo">
                    <a className="about-name-url" href="https://github.com/antunishdPursuit">Dennys Antunish</a>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div className="about about-Jennifer about-dev">
                <img src={imgJennifer} className="about-headshot" alt="Jennifer Einstein headshot" />
                <div className="about-devinfo">
                    <a className="about-name-url" href="https://github.com/JenniferEinstein">Jennifer Einstein</a>
                    <p className="about-devinfo">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

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