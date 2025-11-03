import { useState, useEffect } from "react"

type AuthCarouselProps = {
    images: string[]
    autoSlide: boolean
    autoSlideInterval?: number
}

export default function AuthCarousel({ images, autoSlide = false, autoSlideInterval = 3000, }: AuthCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const prev = () =>
        setCurrentImageIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () =>
        setCurrentImageIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="auth-carousel">
            <div className="auth-carousel-imgs" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <img src={img} alt="carousel image" key={index} />
                ))}
            </div>

            {images.length!==1 && <div className="auth-carousel-controls">
                <button onClick={prev} className="auth-carousel-btn">
                    <span>&#9664;</span>
                </button>
                <div className="auth-carousel-indicators">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`auth-carousel-dot ${currentImageIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentImageIndex(index)} 
                        />
                    ))}
                </div>
                <button onClick={next} className="auth-carousel-btn">
                    <span>&#9654;</span>
                </button>
            </div>}

        </div>
    )
}