import react from "react";
import "./section2.css"
const Section2=()=>{
    return(
    <div className="section2">
        <div className="sec2">
            <div className="sec2-head">
                <div className="top-head">
                <a href="">The most searched cars</a>
                </div>
                <div className="bottom-head">
                    <div className="car-brand">
                        <a href="">SUV</a>
                    </div>
                    <div className="car-brand">
                        <a href="">Hatchback</a>
                    </div>
                    <div className="car-brand">
                        <a href="">Sedan</a>
                    </div>
                    <div className="car-brand">
                        <a href="">NUV</a>
                    </div>
                    <div className="car-brand">
                        <a href="">Luxury</a>
                    </div>
                </div>
            </div>
            <div className="top-contant">
            <div className="car-contant">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300" alt="" />
                <div className="car-name"><a href="">Toyota Fortuner</a></div>
                <div className="car-price"><a href="">₹33.43 - 51.44 Lakh*</a></div>
                <div className="sub-button">
                    <button>Check January Offers</button>
            </div>
            </div>
            <div className="car-contant">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300" alt="" />
                <div className="car-name"><a href="">Mahindra Scorpio N</a></div>
                <div className="car-price"><a href="">₹13.85 - 24.54 Lakh*</a></div>
                <div className="sub-button">
                <button>Check January Offers</button>
            </div>
            </div>
            <div className="car-contant">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-300" alt="" />
                <div className="car-name"><a href="">Hyundai Creta</a></div>
                <div className="car-price"><a href="">₹11 - 20.30 Lakh*</a></div>
                <div className="sub-button">
                <button>Check January Offers</button>
            </div>
            </div>
            <div className="car-contant">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?tr=w-300" alt="" />
                <div className="car-name"><a href="">Mahindra Thar ROXX</a></div>
                <div className="car-price"><a href="">₹12.99 - 22.49 Lakh</a></div>
                <div className="sub-button">
                <button>Check January Offers</button>
            </div>
            </div>
            </div>
            <div className="a">View All SUV Cars <span>&gt;</span></div>
        </div>
    </div>
    )
}
export default Section2;