import React, { Component } from "react"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button,
} from "reactstrap"

// Carousel images
import img2 from "assets/images/slider/img2.jpg"
import img3 from "assets/images/slider/img3.jpg"
import img4 from "assets/images/slider/img4.jpg"

const items = [
    {
        src: img2,
        altText: "HySportx offers a user-friendly experience, making it as straightforward as it can be. To an English speaker, it will feel as clear and intuitive as a critical thinker at Cambridge University.",
        caption: "HySportx - Iconic Landing Page for a Sports and Fitness Platform",
    },
    {
        src: img4,
        altText: "HySportx offers a user-friendly experience, making it as straightforward as it can be. To an English speaker, it will feel as clear and intuitive as a critical thinker at Cambridge University.",
        caption: "HySportx - Iconic Landing Page for a Sports and Fitness Platform",

    },
    {
        src: img3,
        altText: "HySportx offers a user-friendly experience, making it as straightforward as it can be. To an English speaker, it will feel as clear and intuitive as a critical thinker at Cambridge University.",
        caption: "HySportx - Iconic Landing Page for a Sports and Fitness Platform",
    },
]

class SlideMain extends Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
    }

    onExiting() {
        this.animating = true
    }

    onExited() {
        this.animating = false
    }

    next() {
        if (this.animating) return
        const nextIndex =
            this.state.activeIndex === items.length - 1
                ? 0
                : this.state.activeIndex + 1
        this.setState({ activeIndex: nextIndex })
    }

    previous() {
        if (this.animating) return
        const nextIndex =
            this.state.activeIndex === 0
                ? items.length - 1
                : this.state.activeIndex - 1
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex(newIndex) {
        if (this.animating) return
        this.setState({ activeIndex: newIndex })
    }
    

    render() {
        const { activeIndex } = this.state

        const slides = items.map((item,key) => {
            return (

                <CarouselItem onExiting={this.onExiting}onExited={this.onExited}className="custom-tag"key={key}>
                    <img src={item.src} alt={item.altText} className="d-block img-fluid w-100 carousel-image" />  
                    <CarouselCaption captionHeader={item.caption} captionText="" className="content-tag pb-5 mb-5 fs-1 fw-2 text-start" />
                    <CarouselCaption captionText={item.altText} className="content-tag text-light text-start" />
                    <CarouselControl direction="prev" directionText="Show" onClickHandler={this.previous}/>
                    <div className="carousel-button-container pt-4 text-end">
                        <Button color="success"  size="lg" className="text-light bg-opacity-75">Learn More</Button>
                    </div>

                </CarouselItem>
            )
        })

        return (
            <React.Fragment>
                <style>
                    {`.custom-tag {
                        
                        height: 700px;
                        background: black;
                    }
                    @media (max-width: 768px) {
                        .custom-tag {
                          height: auto;
                        }
                      }
                      @media (max-width: 968px) {
                        .custom-tag {
                          height: auto; 
                        }
                      }
                 
                    
                    .carousel-button-container {
                        position: absolute;
                        bottom: 25%;
                        left: 35%;
                        transform: translateX(-50%);
                    }
                    
                    .content-tag{
                        width:500px;
                        position: absolute;
                        left: 130px;
                        bottom: 25%;
                        background: #0000002e;
                        padding: 10px 20px
                        
                    }
                    `}
                </style>

                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                // dark={true}
                >

                    <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={this.goToIndex}
                    />



                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={this.previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={this.next}
                    />
                </Carousel>
            </React.Fragment>
        )
    }
}

export default SlideMain
