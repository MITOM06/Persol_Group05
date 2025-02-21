import React, { useState, useEffect } from 'react';
import comparecss from "../styles/compare.css";

const ComparePage = ({
  SunglassesDetail, EyeglassesDetail, SaleDetail, GucciSunglasses,
  GucciEyeGlassesDetails, GucciSaleProductDetails, GucciNewProductDetails,
  RaybanNewProductsDetails, RaybanSunglassesDetails, RaybanSaleDetails,
  RaybanEyeGlassesDetails, saleproduct, newproducts, eyewearProducts, products
}) => {
  const allProducts = [
    ...GucciSunglasses, ...GucciEyeGlassesDetails, ...GucciSaleProductDetails,
    ...GucciNewProductDetails, ...RaybanNewProductsDetails, ...RaybanSunglassesDetails,
    ...RaybanSaleDetails, ...RaybanEyeGlassesDetails, ...saleproduct, ...newproducts,
    ...eyewearProducts, ...products
  ];
  
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const handleSelectProduct = (product) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(product)) {
        return prevSelected.filter(p => p !== product); // Deselect the product
      } else if (prevSelected.length < 2) {
        return [...prevSelected, product]; // Add the product if less than 2 selected
      } else {
        return [product, prevSelected[1]]; // Replace the oldest selected product if more than 2 selected
      }
    });
  };

  const resetSelection = () => {
    setSelectedProducts([]); // Clear selected products
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(allProducts.length / productsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const generatePagination = () => {
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    const pageNumbers = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 4);  // Start from 4 pages before currentPage, but not less than 1
      const endPage = Math.min(totalPages, currentPage + 5); // End at 5 pages after currentPage, but not more than totalPages

      if (startPage > 1) pageNumbers.push(1); // Add first page
      if (startPage > 2) pageNumbers.push('...'); // Add "..." before the first range

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) pageNumbers.push('...'); // Add "..." after the last range
      if (endPage < totalPages) pageNumbers.push(totalPages); // Add last page
    }

    return pageNumbers;
  };

  useEffect(() => {
    setSelectedProducts((prevSelected) => {
      return prevSelected.filter(product =>
        currentProducts.some(p => p.id === product.id)
      );
    });
  }, [currentPage, currentProducts]);

  return (
    <div className="compare-page-container">
      <h1 className="compare-page-title">Compare Page</h1>

      <button className="compare-toggle-btn" onClick={toggleTable}>
        {showTable ? 'Hide Product List' : 'Show Product List'}
      </button>

      {showTable && (
        <div className="compare-product-list-container">
          <table className="compare-product-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Choose to compare</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => handleSelectProduct(product)} className="compare-select-btn">
                      {selectedProducts.includes(product) ? 'Deselect' : 'Select to Compare'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="compare-pagination">
            {/* Previous Page Button */}
            <button
              className="compare-page-btn"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {/* Page Numbers */}
            {generatePagination().map((pageNumber, index) => (
              <button
                key={index}
                className={`compare-page-btn ${currentPage === pageNumber ? 'active' : ''}`}
                onClick={() => {
                  if (pageNumber !== '...') {
                    paginate(pageNumber);
                  }
                }}
              >
                {pageNumber}
              </button>
            ))}

            {/* Next Page Button */}
            <button
              className="compare-page-btn"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(allProducts.length / productsPerPage)}
            >
              &gt;
            </button>
          </div>
        </div>
      )}

      {selectedProducts.length === 2 && (
        <div className="compare-comparison-table">
          <h3 className="compare-comparison-title">Compare selected products:</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                {selectedProducts.map((product) => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>
                    <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                  </td>
                ))}
              </tr>
              <tr>
                <td>Price</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>{product.price}</td>
                ))}
              </tr>
              <tr>
                <td>Description</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>{product.description}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedProducts.length > 0 && (
        <div>
          <button className="compare-reset-btn" onClick={resetSelection}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
