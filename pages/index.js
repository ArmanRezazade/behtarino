import ProductCard from "../component/ProductCard";

export default function Home({ data }) {
  return (
    <div className="row">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return { props: { data } };
}
