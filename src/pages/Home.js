import {React, useState} from 'react'

export default function Home() {
    const [planet, setPlanet] = useState("")
    const [weight, setWeight] = useState(0.0)
    const [calculatedWeight, setCalculatedWeight] = useState(0.0)
    let counter = 0;
    function slideshow() {
        let astro = document.getElementById("astronaut-pic");
        let mars = document.getElementById("mars-pic");
        let rocket = document.getElementById("rocket-pic");
        astro.style.display = "none"
        mars.style.display = "none"
        rocket.style.display = "none"
        counter++
        console.log(counter)
        if (counter > 3) {
            counter = 1
            astro.style.display = "block";
        } else if (counter === 1) {
            astro.style.display = "block";
        } else if (counter === 2) {
            mars.style.display = "block";
        } else if (counter === 3) {
            rocket.style.display = "block";
        } 
        setTimeout(slideshow, 6000);
    }

    function calculateWeight(dplanet) {
        console.log("calculating weight")
        switch(dplanet) {
            case "venus" :
                setCalculatedWeight(weight*1.1);
                break;
            case "mars" :
                setCalculatedWeight(weight*1.1);
                break;
            case "jupiter" :
                setCalculatedWeight(weight*1.1);
                break;
            case "saturn" :
                setCalculatedWeight(weight*1.1);
                break;
            case "uranus" :
                setCalculatedWeight(weight*1.1);
                break;
            case "neptune" :
                setCalculatedWeight(weight*1.1);
                break;
            case "black hole" :
                setCalculatedWeight(weight*1400000);
                break;
            default:
                setCalculatedWeight(weight);
        }
    }

    return (
        <div className="main" id="main">
            <div className="carousel-container">        
                <div className="pics-container">
                    <img className="home-pic" id="astronaut-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/AS15-88-11866_-_Apollo_15_flag%2C_rover%2C_LM%2C_Irwin_-_restoration1.jpg/1200px-AS15-88-11866_-_Apollo_15_flag%2C_rover%2C_LM%2C_Irwin_-_restoration1.jpg"/>
                </div>
                <div className="pics-container">
                    <img className="home-pic" id="mars-pic" src="data:image/jpeg;base64,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"/>
                </div>
                <div className="pics-container">
                    <img className="home-pic" id="rocket-pic" src="data:image/jpeg;base64,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"/>
                </div>
            </div>
            <div className="intro-container">
                <div className="intro-content">
                    <div className="main-title">
                        <h1>EXPLORE</h1>
                    </div>
                    <p>The universe is waiting for you... </p>
                </div>
                <div className="intro-content">
                    <div className="main-title">
                        <h1>IMAGINE</h1>
                    </div>
                    <p>Anything is possible... </p>
                </div>
                <div className="intro-content">
                    <div className="main-title">
                        <h1>WONDER</h1>
                    </div>
                    <p>So many unanswered questions... </p>
                </div>
                <div className="secondary-intro-content">
                    <table>
                        <tbody>
                            <tr>
                                <th>Planet Name</th>
                                <th>Diameter Size</th> 
                                <th>Distance from Earth</th>
                            </tr>
                            <tr>
                                <td>Mercury</td>
                                <td>.7</td>
                                <td>57,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Venus</td>
                                <td>.7</td>
                                <td>108,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Earth</td>
                                <td>.7</td>
                                <td>149,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Mars</td>
                                <td>.7</td>
                                <td>227,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Jupiter</td>
                                <td>.7</td>
                                <td>778,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Saturn</td>
                                <td>.7</td>
                                <td>1,438,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Uranus</td>
                                <td>.7</td>
                                <td>2,871,000,000 km</td>
                            </tr>
                            <tr>
                                <td>Neptune</td>
                                <td>.7</td>
                                <td>4,495,000,000 km</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="weight-section">
                        <div className="weight-input">
                            <label htmlFor="weight-input">Weight in kg: </label>
                            <input type="text" id="weight-input" name="weight-input" placeholder="eg. 73.5" onChange={(e)=>setWeight(e.target.value)}/>
                                <select onChange={(e)=> {
                                    const selectedPlanet = e.target.value;
                                    setPlanet(e.target.value);
                                    if (weight) {
                                        calculateWeight(e.target.value)
                                        console.log(e.target.value, weight)
                                    }
                                    }}>
                                    <option value="venus" >Venus</option>
                                    <option value="mars" >Mars</option>
                                    <option value="jupiter" >Jupiter</option>
                                    <option value="saturn" >Saturn</option>
                                    <option value="uranus" >Uranus</option>
                                    <option value="neptune" >Neptune</option>
                                    <option value="black hole" >Black Hole</option>
                                </select>
                        </div>
                            
                        <div className="weight-results">
                            <p>You would weigh {calculatedWeight}kgs on {planet}</p>
                        </div>
                            
                    </div>
                </div>
            </div>
            {window.onload = (e) => slideshow()}
        </div>
    )
}
