import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

//import Images
import img2 from "assets/images/slider/img2.jpg"
import img3 from "assets/images/slider/img3.jpg"
import img4 from "assets/images/slider/img4.jpg"

const LeftSlideCompetition = () => {
    return (
        <React.Fragment>
            <UncontrolledCarousel
                interval={4000}
                indicators={false}
                items={[
                    {
                        altText: " ",
                        caption: " ",
                        key: 1,
                        src: img2,
                    },
                    {
                        altText: " ",
                        caption: " ",
                        key: 2,
                        src: img3,
                    },
                    {
                        altText: " ",
                        caption: " ",
                        key: 3,
                        src: img4,
                    },
                ]}
            />
        </React.Fragment>
    );
}

export default LeftSlideCompetition;