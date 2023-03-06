import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from '../../../assets/products/watch-prod-3.webp';

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Products..." />
        <MdClose onClick={()=>setShowSearch(false)}/>
      </div>
      {/* i will do the resulted stuffed  */}
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt="searched-item" />
                    </div>
                    <div className="product-details">
                        <span className="name">Product Name</span>
                        <span className="desc">Product Descrip</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Search;
