import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';
import { IVirtualEconomyCard } from '../../sections/Virtual/types';

// Swiper modules
SwiperCore.use([Pagination]);

type ICardProps = {
  card: IVirtualEconomyCard;
}

type IMobileSwiperProps = {
  cards: IVirtualEconomyCard[];
}

function Card({ card }: ICardProps) {
  return (
    <CardWrapper>
      <TitleWrapper>
        <TitleNumber>{card.number}</TitleNumber>
        <TitleName>{card.title}</TitleName>
      </TitleWrapper>
      <ImageWrapper>
        <Image src={card.imageUrl} alt={`${card.title} card`} layout="fill" />
      </ImageWrapper>
      <DescriptionText>{card.description}</DescriptionText>
    </CardWrapper>
  )
}

export function MobileSwiper({ cards }: IMobileSwiperProps) {
  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
      >
        {cards?.map(card => (
          <SwiperSlide key={card.number}>
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
}
 

const SwiperWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  margin-right: -24px;
  overflow-x: visible;
  overflow-y: visible;
  position: relative;

  .swiper {
    // Override default swiper position to use our wrapper as relative
    position: unset;
  }

  .swiper-pagination {
    bottom: -20px;
    left: -4px;
    position: absolute;
    width: auto;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.cta.primary};
    border-radius: 0;
    height: 2px;
    width: 16px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 740px;
  width: 300px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

const TitleNumber = styled.div`
  flex-direction: column;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const TitleName = styled.div`
  font-weight: normal;
`;

const ImageWrapper = styled.div`
  height: 336px;
  position: relative;
  width: 300px;
`;

const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(4, 0)};
`;