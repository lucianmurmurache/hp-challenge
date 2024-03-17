function Stars({ rating }: StarsProps) {
    const goldStars = rating;

    return (
        <div className="flex flex-row" title={`${goldStars} stars`}>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    style={{ color: index < goldStars ? '#6a3460' : 'gray' }}
                >
                    ★
                    <span className="sr-only">{`${goldStars} star rating`}</span>
                </span>
            ))}
        </div>
    );
}

export default Stars;
