"use client";
import AllProductsGrid from "@/components/all-products/AllProductsGrid";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";
import { TProductItem } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";

export default function Products() {
  const [data, setData] = useState<TProductItem[]>([]);
  const [filteredData, setFilteredData] = useState<TProductItem[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setData(data.data);
      setFilteredData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value.toLowerCase();

    const filteredProducts = data.filter((product) =>
      product.brand.toLowerCase().includes(filterValue)
    );
    setFilteredData(filteredProducts);
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <Header>Trending Products</Header>
        <label className="form-control w-full max-w-xs mb-10">
          <div className="label">
            <span className="label-text">Filter By Brand</span>
          </div>
          <select
            className="select select-bordered"
            onChange={handleFilterChange}
          >
            <option value="">All Brands</option>
            <option value={"apple"}>Apple</option>
            <option value={"samsung"}>Samsung</option>
            <option value={"oppo"}>Oppo</option>
            <option value={"google Pixel"}>Google Pixel</option>
            <option value={"xiaomi"}>Xiaomi</option>
            <option value={"onePlus"}>OnePlus</option>
          </select>
        </label>{" "}
      </div>

      <AllProductsGrid items={filteredData} />
    </Container>
  );
}
