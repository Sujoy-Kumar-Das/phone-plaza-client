import AllProductsTable from "@/components/dashboard/all-products/AllProductsTable";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default async function AllProducts() {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <div className=" px-5">
        <Header>All Products</Header>
        <AllProductsTable items={data.data} />
      </div>
    </Container>
  );
}
