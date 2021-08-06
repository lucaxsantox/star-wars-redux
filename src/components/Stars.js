import React from 'react';
import logo from '../assets/image/star1.png';
import logo2 from '../assets/image/star2.png';
import logo3 from '../assets/image/star3.png';
import logo4 from '../assets/image/star4.png';
import logo5 from '../assets/image/star5.png';
import logo6 from '../assets/image/star6.png';
import logo7 from '../assets/image/star7.png';
import logo8 from '../assets/image/star8.png';




function Stars() {
  return (
    <>
    <div className="star star1">
    <img src={logo} />
    </div>
        <div className="star star2">
        <img src={logo2} />
        </div>
            <div className="star star3">
            <img src={logo3} />
            </div>
                <div className="star star4">
                <img src={logo4} />
                </div>
                    <div className="star star5">
                    <img src={logo5} />
                    </div>
                        <div className="star star6">
                        <img src={logo6} />
                        </div>
                            <div className="star star7">
                            <img src={logo7} />
                            </div>
                                <div className="star star8">
                                <img src={logo8} />
    </div>
    

    </>
  );
}

export default Stars;