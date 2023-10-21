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
            <div className="about about-Dennys about-developer">
                <img src={imgDennys} alt="Dennys Antunish headshot" className="about-headshot"/>
                <div className="about-devinfo">
                    <h2>Dennys Antunish</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div className="about about-Jennifer about-developer">
                <h2>Jennifer Einstein</h2>
                <img src={imgJennifer} className="about-headshot" alt="Jennifer Einstein headshot" />
                <p className="about-devinfo">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="about about-Kenti about-developer">
                <h2>Ray Kenti</h2>
                <img src={imgKenti} className="about-headshot" alt="Ray Kenti headshot" />
                <p className="about-devinfo">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
</div>
        
    </div>
  )
}

export default About