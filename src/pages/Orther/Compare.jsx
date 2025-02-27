import React, { useState, useEffect } from 'react';
import "../../styles/Orther/compare.css";
import Navbarp from "../../components/Navbarp";
import Logop from "../../components/Logop";
const ComparePage = (props) => {
  const {
    SunglassesDetail, EyeglassesDetail, SaleDetail, GucciSunglasses,
    GucciEyeGlassesDetails, GucciSaleProductDetails, GucciNewProductDetails,
    RaybanNewProductsDetails, RaybanSunglassesDetails, RaybanSaleDetails,
    RaybanEyeGlassesDetails, saleproduct, newproducts, eyewearProducts, products
  } = props;

  // Gộp tất cả sản phẩm vào một mảng
  const allProducts = [
    ...GucciSunglasses, ...GucciEyeGlassesDetails, ...GucciSaleProductDetails,
    ...GucciNewProductDetails, ...RaybanNewProductsDetails, ...RaybanSunglassesDetails,
    ...RaybanSaleDetails, ...RaybanEyeGlassesDetails, ...saleproduct, ...newproducts,
    ...eyewearProducts, ...products
  ];

  const [selectedProduct1, setSelectedProduct1] = useState(null);
  const [selectedProduct2, setSelectedProduct2] = useState(null);
  const [showModal, setShowModal] = useState(null); // null, 'left', or 'right'
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQueryLeft, setSearchQueryLeft] = useState(''); // Tìm kiếm cho Product 1y
  const [searchQueryRight, setSearchQueryRight] = useState(''); // Tìm kiếm cho Product 2
  const productsPerPage = 5;

  const handleSelectProduct = (product, side) => {
    if (side === 'left') {
      setSelectedProduct1(product);
    } else if (side === 'right') {
      setSelectedProduct2(product);
    }
    setShowModal(null); // Close the modal after selecting the product
  };

  const handleDeselectProduct = (side) => {
    if (side === 'left') {
      setSelectedProduct1(null);
    } else if (side === 'right') {
      setSelectedProduct2(null);
    }
    setShowModal(null); // Close the modal after deselecting the product
  };

  const resetSelection = () => {
    setSelectedProduct1(null);
    setSelectedProduct2(null);
  };

  // Lọc sản phẩm dựa trên tìm kiếm cho mỗi sản phẩm
  const filteredProductsLeft = allProducts.filter(product => {
    const search = searchQueryLeft.toLowerCase();
    return (
      product.name.toLowerCase().includes(search) ||
      (product.price && product.price.toString().includes(search)) ||
      (product.brand && product.brand.toLowerCase().includes(search)) ||
      (product.category && product.category.toLowerCase().includes(search)) ||
      (product.description && product.description.toLowerCase().includes(search))
    );
  });

  const filteredProductsRight = allProducts.filter(product => {
    const search = searchQueryRight.toLowerCase();
    return (
      product.name.toLowerCase().includes(search) ||
      (product.price && product.price.toString().includes(search)) ||
      (product.brand && product.brand.toLowerCase().includes(search)) ||
      (product.category && product.category.toLowerCase().includes(search)) ||
      (product.description && product.description.toLowerCase().includes(search))
    );
  });

  // Điều chỉnh số trang khi có thay đổi tìm kiếm
  useEffect(() => {
    // Khi kết quả tìm kiếm thay đổi hoặc tìm kiếm bị xóa, đặt lại trang về 1
    setCurrentPage(1);
  }, [searchQueryLeft, searchQueryRight]);

  // Tính toán phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Lấy sản phẩm của trang hiện tại cho cả hai bên
  const currentProductsLeft = filteredProductsLeft.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentProductsRight = filteredProductsRight.slice(indexOfFirstProduct, indexOfLastProduct);

  const generatePagination = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(Math.max(filteredProductsLeft.length, filteredProductsRight.length) / productsPerPage);
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  // Hàm xử lý thay đổi tìm kiếm
  const handleSearchChange = (e, side) => {
    const searchValue = e.target.value;
    if (side === 'left') {
      setSearchQueryLeft(searchValue);
    } else if (side === 'right') {
      setSearchQueryRight(searchValue);
    }

    // Khi xóa từ khóa, reset lại trang đầu tiên
    if (searchValue === '') {
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      <div className="compare-page-container">
        <h1 className="compare-page-title">Product Comparison</h1>

        <div className="compare-selection-container">
          <div className="compare-left-section">
            <h3>Select Product 1</h3>
            <button onClick={() => setShowModal('left')} className="compare-select-btn">
              {selectedProduct1 ? selectedProduct1.name : 'Select Product'}
            </button>
          </div>
          <div className="compare-right-section">
            <h3>Select Product 2</h3>
            <button onClick={() => setShowModal('right')} className="compare-select-btn">
              {selectedProduct2 ? selectedProduct2.name : 'Select Product'}
            </button>
          </div>
        </div>

        {/* Hiển thị dòng chữ "NO PRODUCTS SELECTED" khi không có sản phẩm nào được chọn */}
        {!selectedProduct1 && !selectedProduct2 && (
          <div className="no-product-selected">
            <p>NO PRODUCTS SELECTED</p>
          </div>
        )}

        {/* Modal for selecting product */}
        {showModal && (
          <div className="compare-modal">
            <div className="compare-modal-overlay" onClick={() => setShowModal(null)} />
            <div className="compare-modal-content">
              <h3>Select Product for {showModal === 'left' ? 'Left' : 'Right'} Side</h3>

              {/* Search input inside modal */}
              <div className="compare-search-container">
                <input
                  type="text"
                  className="compare-search-input"
                  placeholder="Search products..."
                  value={showModal === 'left' ? searchQueryLeft : searchQueryRight}
                  onChange={(e) => handleSearchChange(e, showModal)} // Update search query
                  onFocus={() => setCurrentPage(1)} // Reset to page 1 when focusing
                />
              </div>

              <table className="compare-modal-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {(showModal === 'left' ? currentProductsLeft : currentProductsRight).map((product) => (
                    <tr key={product.id}>
                      <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <button onClick={() => {
                          if (showModal === 'left') {
                            if (selectedProduct1?.id === product.id) {
                              handleDeselectProduct('left');
                            } else {
                              handleSelectProduct(product, 'left');
                            }
                          }
                          if (showModal === 'right') {
                            if (selectedProduct2?.id === product.id) {
                              handleDeselectProduct('right');
                            } else {
                              handleSelectProduct(product, 'right');
                            }
                          }
                        }} className="compare-select-btn">
                          {showModal === 'left' ? (
                            selectedProduct1?.id === product.id ? 'Deselect' : 'Select'
                          ) : null}

                          {showModal === 'right' ? (
                            selectedProduct2?.id === product.id ? 'Deselect' : 'Select'
                          ) : null}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination for the modal */}
              <div className="compare-modal-pagination">
                <button
                  className="compare-page-btn"
                  onClick={() => setCurrentPage(currentPage - 1)} // Go to the previous page
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>

                {generatePagination().map((pageNumber, index) => (
                  pageNumber === '...' ? (
                    <span key={index} className="compare-page-btn">...</span>
                  ) : (
                    <button
                      key={index}
                      className={`compare-page-btn ${currentPage === pageNumber ? 'active' : ''}`}
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  )
                ))}

                <button
                  className="compare-page-btn"
                  onClick={() => setCurrentPage(currentPage + 1)} // Go to the next page
                  disabled={currentPage === Math.ceil(Math.max(filteredProductsLeft.length, filteredProductsRight.length) / productsPerPage)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Comparison */}
        {selectedProduct1 && selectedProduct2 && (
          <div className="compare-comparison-table">
            <h3 className="compare-comparison-title">Compare selected products:</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>{selectedProduct1.name}</th>
                  <th>{selectedProduct2.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Image</td>
                  <td><img src={selectedProduct1.image} alt={selectedProduct1.name} style={{ width: '50px' }} /></td>
                  <td><img src={selectedProduct2.image} alt={selectedProduct2.name} style={{ width: '50px' }} /></td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{selectedProduct1.price}</td>
                  <td>{selectedProduct2.price}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{selectedProduct1.description}</td>
                  <td>{selectedProduct2.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {(selectedProduct1 || selectedProduct2) && (
          <div>
            <button className="compare-reset-btn" onClick={resetSelection}>Reset</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ComparePage;
