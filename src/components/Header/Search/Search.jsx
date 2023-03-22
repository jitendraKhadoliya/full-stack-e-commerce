import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  // * here i will create state to collect the data from input tag
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const onChangeFunction = (e) => {
    setQuery(e.target.value);
  };
  // * Fetching the data with filters
  // contain will check product title is matching with query or not
  let { data } = useFetch(
    `/api/products?populate=*&[filters][title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          value={query}
          onChange={onChangeFunction}
          autoFocus
          placeholder="Search For Products..."
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      {/* i will do the resulted stuffed  */}
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                {/* because fetching data directly */}
                {/* process.env.REACT_APP_DEV_URL + */}
                <img
                  src={item.attributes.img.data[0].attributes.url}
                  alt="searched-item"
                />
              </div>
              <div className="product-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default Search;
