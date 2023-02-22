import "./Booklist.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { AppContext } from "../../Context";
import { useContext, useEffect } from "react";
export default function BookForm() {
  const {
        book,
        setBook,
        publishName,
        setpublishName,
        versionName,
        setversionName,
        bookName,
        setBookName,
        isbn,
        setisbn,
        page,
        setpage,
        thumbnail,
        setThumbnail,
        price,
        setPrice,
        isSubscribe,
        setisSubscribe
  } = useContext(AppContext);

  // function handleBook(e) {
  //   // const {name,value} = e.target;
  // }
  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      bookName: bookName,
      publisherName: publishName,
      version: versionName,
      isbn: isbn,
      page:page,
      thumbnail:thumbnail,
      price:price,
      isSubscribe:isSubscribe
    };
    setBook([...book, newBook]);
  }
  localStorage.setItem("book", JSON.stringify(book));
  return (
    <Popup
      trigger={
        <button className="add-book">
          <i class="fa-solid fa-plus"></i> Add Book
        </button>
      }
      modal
    >
      <div>
        <form className="book-form" onSubmit={handleSubmit}>
          <label>Book Name:</label>
          <input
            type="text"
            placeholder="Book name"
            onChange={(e) => setBookName(e.target.value)}
            name="bookName"
            value={bookName}
          />
          <label>Publisher Name:</label>
          <input
            type="text"
            placeholder="Publisher name"
            onChange={(e) => setpublishName(e.target.value)}
            name="publisherName"
            value={publishName}
          />
          <label>Version/Edition:</label>
          <input
            type="text"
            placeholder="Version/Edition"
            onChange={(e) => setversionName(e.target.value)}
            name="version"
            value={versionName}
          />
          <label>ISBN No.:</label>
          <input
            type="text"
            placeholder="ISBN no."
            onChange={(e) => setisbn(e.target.value)}
            name="isbn"
            value={isbn}
          />
          <label>Number of pages:</label>
          <input
            type="number"
            placeholder="Number of pages"
            onChange={(e) => setpage(e.target.value)}
            name="page"
            value={page}
          />
          <label>Thumbnail:</label>
          <input
            type="url"
            placeholder="Thumbnail"
            onChange={(e) => setThumbnail(e.target.value)}
            name="thumbnail"
            value={thumbnail}
          />
          <label>Price(in $):</label>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            value={price}
          />
          <button className="submit">
            Submit
          </button>
        </form>
      </div>
    </Popup>
  );
}
