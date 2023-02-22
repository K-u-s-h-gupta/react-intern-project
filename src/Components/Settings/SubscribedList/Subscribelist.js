import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context"
export default function Subscribelist(){
    const {book} = useContext(AppContext)
    const [booksItem, setbooksItem] = useState(JSON.parse(localStorage.getItem('book')))
    console.log(booksItem)
    return(
        <div>
            <h3>Subscribe Book</h3>
            {booksItem?.map(item=>(
                <div>{item.isSubscribe && <div className="book-card">
                <p>Book Name: {item.bookName}</p>
                <p>Publisher Name: {item.publisherName}</p>
                <p>Version: {item.version}</p>
                <p>ISBN: {item.isbn}</p>
                <p>Page: {item.page}</p>
                <p>Thumbnail: {item.thumbnail}</p>
                <p>Price: {item.price}</p>
            </div>}</div>
            ))}
        </div>
    )
}