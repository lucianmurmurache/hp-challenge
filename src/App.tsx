import { useHotelsQuery } from './hooks/useHotelsQuery';
import HotelItem from './components/HotelItem';
function App() {
    /* 
  TODO: add button to load 5 items
  render 5 items as per the mockups in pdf
  load more button, onClick => load 5 more
  
  */

    const { loading, error, hotels, limit, loadMoreHotels } = useHotelsQuery();

    const handleLoadMore = () => {
        loadMoreHotels();
    };

    if (loading && !hotels.length)
        return (
            <p>Loading... {/* TODO: add loading comp (maybe animation?) */}</p>
        );

    if (error) return <p>Error {/* TODO: add error handler or component */}</p>;
    return (
        <div className="grid place-items-center">
            <h1>Holiday Pirates Challenge</h1>

            {hotels.map((hotel: Hotel, index: number) => (
                <HotelItem key={index} hotel={hotel} />
            ))}
            {hotels.length < limit ? (
                <div className="grid min-h-40 place-items-center">
                    <button onClick={handleLoadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load Hotels'}
                        {/* TODO: use reusable button here */}
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default App;

type Hotel = {
    name: string;
    description: string;
};
