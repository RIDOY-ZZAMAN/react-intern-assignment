import React from "react";
import Card from "react-credit-cards";
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide"
import "swiper/swiper-bundle.min.css";
import { effect } from "swiper/modules/effect-cards/effect-cards";
import { EffectCards } from "swiper";
import './Card.css'


export default class SupportedCards extends React.Component {
    render() {
        return (
            <div className="App-cards">
                <h2 className="text-center">Card Stacking</h2>
                <div className="App-cards-list">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Card

                            name="John Smith"
                            number="5555 4444 3333 1111"
                            expiry="10/20"
                            cvc="737"
                        /></SwiperSlide>
                        <SwiperSlide>   <Card
                            name="John Smith"
                            number="4111 1111 1111 1111"
                            expiry="10/20"
                            cvc="737"
                        /></SwiperSlide>
                        <SwiperSlide>    <Card
                            name="John Smith"
                            number="3700 0000 0000 002"
                            expiry="10/20"
                            cvc="737"
                        /></SwiperSlide>
                        <SwiperSlide>
                            <Card
                                name="John Smith"
                                number="3600 666633 3344"
                                expiry="10/20"
                                cvc="737"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                name="John Smith"
                                number="6011 6011 6011 6611"
                                expiry="10/20"
                                cvc="737"
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                name="John Smith"
                                number="5066 9911 1111 1118"
                                expiry="10/20"
                                cvc="737"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                name="John Smith"
                                number="6250 9460 0000 0016"
                                expiry="10/20"
                                cvc="737"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                name="John Smith"
                                number="6062 8288 8866 6688"
                                expiry="10/20"
                                cvc="737"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                name="John Smith"
                                number="**** **** **** 7048"
                                expiry="10/20"
                                cvc="737"
                                preview={true}
                                issuer="visa"
                            />
                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>
        );
    }
}
