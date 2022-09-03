import Head from "next/head";
import Image from "next/image";
import StarRating from "../../component/StarRating";
import ProductStyle from "../../styles/Product.module.css";

export default function Product({ data }) {
  return (
    <div className="col-md-12 col-lg-12">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className={ProductStyle.productContainer}>
        <div className={`col-md-12 col-lg-11 ${ProductStyle.product}`}>
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <Image
                src={data.image}
                alt={data.title}
                width="450"
                height="450"
              />
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <h2>{data.title}</h2>
                </div>
                <div className="col-md-12 col-lg-4">
                  <StarRating rate={data.rating.rate} />
                </div>
                <div className="col-md-12 col-lg-12">
                  <h3 style={{ margin: 0 }}>{data.category}</h3>
                </div>
                <div className="col-md-12 col-lg-12">
                  <h3 style={{ margin: 0 }}>${data.price}</h3>
                </div>
                <div className="col-md-12 col-lg-12">
                  <h3>DESCRIPTION</h3>
                  <p>{data.description}</p>
                </div>
                <div className="col-md-12 col-lg-12">
                  <button className={ProductStyle.btn}>ADD TO CARD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
