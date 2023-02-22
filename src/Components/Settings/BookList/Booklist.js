import "./Booklist.css"
import BookForm from "./BookForm"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context"
export default function Booklist(){
    const {book,setisSubscribe,setBook} = useContext(AppContext)
    // console.log(JSON.parse(localStorage.getItem('book'))|| book[0])
    const [booksItem, setbooksItem] = useState(JSON.parse(localStorage.getItem('book')))
    console.log(booksItem)
    useEffect(()=>{
        setbooksItem(JSON.parse(localStorage.getItem('book')))
    },[book])

    return(
        <>
        <div className="book-list">
            <h3>Books List</h3>
            <BookForm/>
        </div>
            <div className="card">
            {booksItem?.map(item=>(
                <div className="book-card">
                    <p>Book Name: {item.bookName}</p>
                    <p>Publisher Name: {item.publisherName}</p>
                    <p>Version: {item.version}</p>
                    <p>ISBN: {item.isbn}</p>
                    <p>Page: {item.page}</p>
                    <p>Thumbnail: {item.thumbnail}</p>
                    <p>Price: {item.price}</p>
                    <button onClick={()=>setBook([{...item, isSubscribe:true}])}>Subscribe</button>
                </div>
            ))}
            </div>
            </>
    )
}