import Card from './Card';
import "./RoadHeader.css";



import React, { useState } from 'react';
 import PriceRange from './Range'

function RoadHeader() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const clearFilters = () => {
    setSelectedType('');
    setSelectedCategory('');
    setSelectedArtist('');
  };

  return (
    <div className="main">
      <div className="container">
        <ul className="rmheader">
          <button id="button" onClick={toggleFilter}>
            Advanced filter <img src="./Filter.svg" alt="" />
          </button>
          <li><img src="./Burn.svg" alt="Featured" /> Featured</li>
          <li><img src="./All category.svg" alt="all items" /> All items</li>
          <li><img src="./ion_book.svg" alt="Read" /> Read</li>
          <li><img src="/Vector1.svg" alt="" /> Product</li>
          <li><img src="/Button (2).png" alt="" /></li>
        </ul>
      </div>

      <div className="full">
        {isFilterVisible && (
          <div className="right m-5">
            <div>
              <div className="filter d-flex">
                <span className="text-white">Applied Filter</span>
                <span className="clear" onClick={clearFilters}>
                  Clear All
                </span>
              </div>

              {/* Display applied filters */}
              <div className="applied-filters">
                {selectedType && <div>{selectedType} <span  onClick={() => setSelectedType('')  }> <i className="fa-solid fa-xmark"></i> </span></div>}
                {selectedCategory && <div>{selectedCategory} <span  onClick={() => setSelectedCategory('')}><i className="fa-solid fa-xmark"></i></span></div>}
                {selectedArtist && <div>{selectedArtist} <span  onClick={() => setSelectedArtist('')}><i className="fa-solid fa-xmark"></i></span></div>}
              </div>
            </div>

            <div>
              <PriceRange />
            </div>

            {/* Type Filter */}
            <div>
              <label htmlFor="type">Type</label>
              <select
                className="d-block"
                name="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Free">Free</option>
                <option value="Featured">Featured</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category">Category</label>
              <select
                className="d-block"
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Free">Free</option>
                <option value="Featured">Featured</option>
              </select>
            </div>

            {/* Artist Filter */}
            <div>
              <label htmlFor="artist">Artist</label>
              <select
                className="d-block"
                name="artist"
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
              >
                <option value="">Select Artist</option>
                <option value="Free">Free</option>
                <option value="Featured">Featured</option>
              </select>
            </div>
          </div>
          
        )}

<div className="d-flex flex-wrap">
             <Card />
            <Card/>
            <Card/>
            
            </div>
           
            
            </div>
       </div>
   
  );
}

export default RoadHeader;
