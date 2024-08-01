import css from "./LoadMoreBtn.module.css"
export default function LoadMoreBtn({onLoadMore, loading}) {
    return (
        <div className={css.loading}>
            {loading ? ( 
                <button className={css.button} disabled >
                    <span>Loading...</span>
                </button>
                ) : (
                    <button className={css.button} onClick={onLoadMore}>Load more</button>
                ) }
        </div>
    )
    
}