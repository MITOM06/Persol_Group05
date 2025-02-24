import React from 'react';
import RaybanSaleProduct from "../../data/Rayban/Sale/sale.json"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbarr from "../../components/Navbarr";
import Logor from "../../components/Logoray";
import Rating from 'react-rating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/Rayban/homepage.css";
const RaybanSaleHomePage = () => {
  const [star, setStar] = useState(RaybanSaleProduct.star);

  const handleRatingChange = (newStar) => {
    setStar(newStar);

  };
  return (
    <>
      <Logor />
      <p></p>
      <Navbarr />
      <p></p>

      <div className='back-page'>
        <Link to={`/RaybanHomePage`} className='btn-back-page'>Back to Home</Link>
        <div className='btn-back-page'> / </div>
        <Link to={`/RaybanSaleProduct`} className='btn-back-page'>Sale Product</Link>
      </div>

      <h1>Sale Products</h1>

      <table className='RaybanHomePage'>

        {RaybanSaleProduct.map((SaleProduct) => (
          <tr key={SaleProduct.id}> {/*giúp React nhận diện từng phần tử trong danh sách là duy nhất dựa trên*/}
            <th>
              {/* Sử dụng hình ảnh từ thư mục public */}
              <div class="rayban-image-container">

                <div className='rayban-hover-image'>
                  <Link to={`/RaybanSaleProduct/${SaleProduct.id}`}> {/* chèn giá trị vào trong chuỗi*/}
                    <img src={SaleProduct.image} style={{ width: '300px', height: 'auto', borderRadius: '30px' }} className='rayban-hover-image' /> {/**gọi hàm và truyền product.id vào tham số productId*/}
                  </Link>
                  <div className='rayban-newproduct'>SALE</div>
                </div>
              </div>

              <div className='rayban-text'>
                <div>{SaleProduct.name}</div>
                <div style={{ color: '#555555', textDecoration: 'line-through' }}>{SaleProduct.oldprice}</div>
                <div style={{ color: 'red' }}>{SaleProduct.price}</div>
              </div>
              <Rating
                initialRating={SaleProduct.star} // Cài đặt số sao ban đầu từ dữ liệu sản phẩm
                onChange={handleRatingChange} // Hàm xử lý khi thay đổi đánh giá
                emptySymbol="fa fa-star-o" // Sao trống
                fullSymbol="fa fa-star" // Sao đầy đủ
              />
              <p>Current Rating: {SaleProduct.star}-star</p>




            </th>
          </tr>
        ))}
      </table>

    </>
  );
};

export default RaybanSaleHomePage;