import { createContext } from "react";
import { useState } from "react";
const AppContext = createContext();

function AppContextProvider(props) {
  const [book, setBook] = useState([
    //     {
    //     bookName:'kush',
    //     publisherName:'sdasd',
    //     version:'asfaf',
    //     isbn:'asfasf',
    //     page:0,
    //     thumbnail:'http://adfaf.com',
    //     price:0
    // }
  ]);
  const [bookName, setBookName] = useState("");
  const [publishName, setpublishName] = useState("");
  const [versionName, setversionName] = useState("");
  const [isbn, setisbn] = useState("");
  const [page, setpage] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);
  const [isSubscribe, setisSubscribe] = useState(false);


  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
