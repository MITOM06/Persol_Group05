// src/components/CompareContext.js
import React, { createContext, useContext, useState } from 'react';

// Tạo Context
const CompareContext = createContext();

// Provider để quản lý danh sách sản phẩm so sánh
export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]); // Danh sách sản phẩm so sánh

  const addToCompare = (product) => {
    setCompareList((prev) => [...prev, product]); // Thêm sản phẩm vào danh sách so sánh
  };

  const removeFromCompare = (productId) => {
    setCompareList((prev) => prev.filter((product) => product.id !== productId)); // Xóa sản phẩm khỏi danh sách so sánh
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

// Hook custom để sử dụng context
export const useCompare = () => useContext(CompareContext);
