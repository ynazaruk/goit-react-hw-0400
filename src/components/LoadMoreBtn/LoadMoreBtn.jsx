export default function LoadMoreBtn({loading}) {
    return (
        <div>
            {loading ? ( 
                <button disabled>
                    <span>Loading...</span>
                </button>) : (
                    <button onClick={onLoadMore}>Loaf more</button>
                ) }
        </div>
    )
    
}