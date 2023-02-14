import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import agustinmuller from "../../../Utils/Images/podcast/podcast series all/agustin muller3.jpeg";
import agustinmuller2 from "../../../Utils/Images/podcast/podcast series all/agustin muller2.jpeg";
import agustinmuller3 from "../../../Utils/Images/podcast/podcast series all/agustin muller.jpeg";
import andetrois6 from "../../../Utils/Images/podcast/podcast series all/ande trois6.jpeg";
import andetrois2 from "../../../Utils/Images/podcast/podcast series all/ande trois2.jpeg";
import andetrois4 from "../../../Utils/Images/podcast/podcast series all/ande trois4.jpeg";
import andresumana3 from "../../../Utils/Images/podcast/podcast series all/andres umana3.jpeg";
import andresumana2 from "../../../Utils/Images/podcast/podcast series all/andres umana2.jpeg";
import andresumana from "../../../Utils/Images/podcast/podcast series all/andres umana.jpeg";
import badskoba4 from "../../../Utils/Images/podcast/podcast series all/badskoba4.jpeg";
import badskoba2 from "../../../Utils/Images/podcast/podcast series all/badskoba2.jpeg";
import badskoba3 from "../../../Utils/Images/podcast/podcast series all/badskoba3.jpeg";
import baus3 from "../../../Utils/Images/podcast/podcast series all/baus3.jpeg";
import baus from "../../../Utils/Images/podcast/podcast series all/baus.jpeg";
import baus2 from "../../../Utils/Images/podcast/podcast series all/baus2.jpeg";
import bendtsen3 from "../../../Utils/Images/podcast/podcast series all/bendtsen3.jpeg";
import bendtsen2 from "../../../Utils/Images/podcast/podcast series all/bendtsen2.jpeg";
import bendtsen from "../../../Utils/Images/podcast/podcast series all/bendtsen.jpeg";
import brucezalcer from "../../../Utils/Images/podcast/podcast series all/bruce zalcer.jpeg";
import brucezalcer3 from "../../../Utils/Images/podcast/podcast series all/bruce zalcer3.jpeg";
import brucezalcer2 from "../../../Utils/Images/podcast/podcast series all/bruce zalcer2.jpeg";
import camilavillegas from "../../../Utils/Images/podcast/podcast series all/camila villegas.jpeg";
import camilavillegas2 from "../../../Utils/Images/podcast/podcast series all/camila villegas2.jpeg";
import camilavillegas3 from "../../../Utils/Images/podcast/podcast series all/camila villegas3.jpeg";

import "./PodcastC.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PodcastC = () => {
  return (
    <div className="Podcast">
      <div className="Podcast-Container">
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/146-agustin-muller"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={agustinmuller}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/146-agustin-muller"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={agustinmuller2}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/146-agustin-muller"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={agustinmuller3}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/131-ande-trois"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={andetrois6}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/131-ande-trois"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={andetrois2}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/131-ande-trois"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={andetrois4}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/138-andres-umana"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={andresumana3}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/138-andres-umana"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={andresumana2}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/138-andres-umana"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={andresumana}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/129-badskova"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={badskoba4}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/129-badskova"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={badskoba2}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/129-badskova"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={badskoba3}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/baus"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={baus3}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/baus"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={baus}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/baus"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={baus2}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/145-bendtsen"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={bendtsen3}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/145-bendtsen"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={bendtsen2}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/145-bendtsen"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={bendtsen}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/bruce-zalcer"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={brucezalcer}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/bruce-zalcer"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={brucezalcer3}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/bruce-zalcer"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={brucezalcer2}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="Podcast-Container_List"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/144-camila-villegas"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={camilavillegas}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/144-camila-villegas"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={camilavillegas2}
              ></img>
            </a>
          </SwiperSlide>
          <SwiperSlide className="Podcast-Container_List--Card">
            <a
              href="https://soundcloud.com/underground-uy/144-camila-villegas"
              target="_blank"
            >
              <img
                className="Podcast-Container_List--Card__img"
                src={camilavillegas3}
              ></img>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PodcastC;
