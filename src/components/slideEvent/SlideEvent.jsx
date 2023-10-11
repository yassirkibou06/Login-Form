// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import CardForm from './CardEvent';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';


const SlideEvent = () => {
    return (
        <>
            <div className='flex items-center justify-between mb-2 px-20'>
                <h2 className='font-bold text-4xl'><span className='text-blue-600'>Upcoming</span> Events</h2>
                <a className='font-medium text-sm flex items-center gap-2 hover:text-blue-500' href="/">See More<ArrowRightIcon /></a>
            </div>
            <p className="text-sm px-20 mb-8">Upcoming Education Events to feed your brain.</p>
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
                        el: '.custom-pagination',
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
                <div className="custom-pagination-container">
                    <div className="custom-pagination"></div>
                </div>
            </div >
        </>
    );
};

export default SlideEvent;
