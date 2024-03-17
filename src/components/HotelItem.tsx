import { useState } from 'react';
import { formatDate } from '../utils/formatDate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import type { Hotel } from '../App';
import Loading from './common/Loading';
import Button from './common/Button';
import Stars from './Stars';
import Reviews from './Reviews';

type HotelItemProps = {
    hotel: Hotel;
};

function HotelItem({ hotel }: HotelItemProps) {
    const [showReviews, setShowReviews] = useState(false);

    const toggleReviews = () => {
        setShowReviews((prevState) => !prevState);
    };

    const {
        sys,
        name,
        description,
        city,
        country,
        rating,
        price,
        startDate,
        endDate,
        imagesCollection: {
            items: [firstImage],
        },
    } = hotel;

    if (!hotel) return <Loading />;

    return (
        <div className="hotel-item-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <img
                    src={firstImage.url}
                    alt={firstImage.title}
                    title={firstImage.title}
                    className="h-full w-full md:col-span-2"
                />

                <div className=" relative p-5 md:col-span-3 md:p-8">
                    <h2>{name}</h2>
                    <p>
                        {city} - {country}
                    </p>
                    <p className="hyphen-auto my-4 line-clamp-6">
                        {documentToPlainTextString(description.json)}
                    </p>

                    <div className="absolute right-5 top-5">
                        <Stars rating={rating} />
                    </div>
                    <div className="flex flex-row-reverse justify-between">
                        <div className="text-right">
                            <p className="text-2xl font-semibold">
                                {price.value} {price.symbol}
                            </p>
                            <small>
                                {formatDate(startDate)} - {formatDate(endDate)}
                            </small>
                        </div>
                        <div className="my-auto">
                            <Button
                                label={
                                    showReviews
                                        ? 'Hide reviews'
                                        : 'Show reviews'
                                }
                                onClick={toggleReviews}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showReviews ? <Reviews hotelId={sys.id} /> : null}
        </div>
    );
}
export default HotelItem;
