import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const SliderFeedback = () => {
    return ( 
        <Swiper
        modules={[ Pagination ]}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
      </Swiper>
    );
}
 
export default SliderFeedback;