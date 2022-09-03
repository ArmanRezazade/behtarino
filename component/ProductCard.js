import Image from "next/image";
import Link from "next/link";
import ProductCardStyle from "../styles/ProductCard.module.css";

const ProductCard = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <Link href={`products/${data.id}`}>
        <div className={ProductCardStyle.card}>
          <Image src={data.image} alt={data.title} width="100" height="100" />
          <h4>{data.title}</h4>
          <h5>${data.price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
