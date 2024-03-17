import { useState } from 'react';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

function HotelItem({ hotel }: HotelItemProps) {
    const [showReviews, setShowReviews] = useState(false);

    const toggleReviews = () => {
        setShowReviews((prevState) => !prevState);
    };

    const { name, description } = hotel;

    if (!hotel) return <>Loading...</>;

    return (
        <div className="hotel-item-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className=" relative p-5 md:col-span-3 md:p-8">
                    <h2>{name}</h2>

                    <p className="hyphen-auto my-4 line-clamp-6">
                        {documentToPlainTextString(description)} {/* WIP */}
                    </p>
                </div>
                <button onClick={toggleReviews}>
                    {showReviews ? 'Hide reviews' : 'Show reviews'}
                </button>
            </div>
        </div>
    );
}
export default HotelItem;

type HotelInfo = {
    name: string;
    description: string;
};

type HotelItemProps = {
    hotel: HotelInfo;
};
