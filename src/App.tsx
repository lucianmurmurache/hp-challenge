import { useHotelsQuery } from './hooks/useHotelsQuery';

import type { Document } from '@contentful/rich-text-types';

import HotelItem from './components/HotelItem';
import Button from './components/common/Button';
import Loading from './components/common/Loading';
import ErrorMessage from './components/common/ErrorMessage';

export type Hotel = {
    sys: {
        id: string;
    };
    name: string;
    description: {
        json: Document;
    };
    rating: number;
    city: string;
    country: string;
    price: {
        value: string;
        symbol: string;
    };
    imagesCollection: {
        items: Array<{
            url: string;
            title: string;
        }>;
    };
    startDate: string;
    endDate: string;
};

function App() {
    const { loading, error, hotels, limit, loadMoreHotels } = useHotelsQuery();

    const handleLoadMore = () => {
        loadMoreHotels();
    };

    if (loading && !hotels.length) return <Loading />;

    if (error) return <ErrorMessage />;

    return (
        <div className="mx-auto max-w-full p-3 md:max-w-5xl">
            <h1 className="text-pirate my-5">Holiday Pirates</h1>
            {hotels.map((hotel: Hotel, index: number) => (
                <HotelItem key={index} hotel={hotel} />
            ))}
            {hotels.length < limit ? (
                <div className="grid min-h-40 place-items-center">
                    <Button
                        label={loading ? 'Loading...' : 'Load Hotels'}
                        onClick={handleLoadMore}
                        disabled={loading}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default App;
