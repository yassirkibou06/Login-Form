// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import CardForm from './CardCourses';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';


const SlideEvent = () => {
    return (
        <div className="px-20 relative">
            <Swiper
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    1000: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    }
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination-course',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='w-fit'>
                    <CardForm />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <CardForm />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <CardForm />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <CardForm />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <CardForm />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <CardForm />
                </SwiperSlide>
            </Swiper>
            <button className="prev">
                <ArrowLeftIcon width={15} height={15} cursor={"pointer"} />
            </button>
            <button className="next">
                <ArrowRightIcon width={15} height={15} cursor={"pointer"} />
            </button>
            <div className="custom-pagination-container-course">
                <div className="custom-pagination-course"></div>
            </div>
        </div >
    );
};

export default SlideEvent;
