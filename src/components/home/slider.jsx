import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import ArrowLeft from '../../assets/icons/arrow-left.svg';
const SliderWeb = ({ bannerImg, imgBaseUrl2 }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);

  // برای جلوگیری از فراخوانی بیش از حد در هر حرکت موس
  const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = throttle((e) => {
    if (!isDragging) return;

    setCurrentX(e.clientX);
  }, 16); // مقدار 16ms برای استفاده از throttle و جلوگیری از فراخوانی زیاد تابع

  const handleMouseUp = () => {
    setIsDragging(false);
    const deltaX = currentX - startX;

    if (deltaX > 50) {
      if(carouselRef.current){
        carouselRef.current.prev(); // اسلاید قبلی

      }

    } else if (deltaX < -50) {
      if(carouselRef.current){

        carouselRef.current.next(); // اسلاید بعدی
      }

    }

    // ریست مقادیر
    setStartX(0);
    setCurrentX(0);
  };

  // جلوگیری از تغییر اسلاید هنگام کلیک روی دکمه‌ها
  const handleButtonClick = (e) => {
    e.stopPropagation(); // جلوگیری از پراپگیشن رویداد
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <Carousel
        ref={carouselRef}
        interval={10000}
        controls={false}
        indicators={bannerImg.filter((item) => item.useFor === 1).length > 1}
      >
        {bannerImg
          .filter((item) => item.useFor === 1)
          .sort((a, b) => a.number - b.number)
          .map((item, index) => (
            <Carousel.Item key={`${item.fileId}-${index}`}>
              {item.typeId == 2 ? (
                <div className="img-slider">
                  <video muted loop style={{ width: "100%" }}>
                    <source
                      src={`${imgBaseUrl2}io/${item.filePath}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                <img
                src={`${imgBaseUrl2}io/${item.filePath}`}
                className="img-slider"
                alt="بنر تبلیغاتی"
                width="1200"
                height="600"
                loading={index <= 2 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              
              )}

              {item.isDefault && (
                <Carousel.Caption>
                  <h3>
                    <span className="text-3xl font-bold">طبیعی باش</span>
                    <span className="text-xl font-medium">، با لذت بنوشید ...</span>
                  </h3>
                  <div className="d-flex align-items-center gap-2 mt-4">
                    <button
                      className="btn btn-primary d-flex align-items-center gap-2 text-sm py-2 text-sm	"
                      onClick={(e) => {
                        handleButtonClick(e);
                        window.location.href = "/shop";
                      }}// جلوگیری از تغییر اسلاید هنگام کلیک
                    >
                      فروشگاه
                    </button>
                    <button
                      className="btn btn-outline-primary d-flex align-items-center gap-2 text-sm py-2 text-sm	"
                      onClick={(e) => {
                        handleButtonClick(e); // جلوگیری از تغییر اسلاید هنگام کلیک
                        window.location.href = "/products";
                      }}
                    >
                      مشاهده محصولات
                      <img src={ArrowLeft} alt="" />
                    </button>
                  </div>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default SliderWeb;

