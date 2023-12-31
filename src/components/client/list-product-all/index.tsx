import ItemProductComponent from '@/components/item-product';
import { ListProductAllProps } from './type';

export default function ListProductAll(props: ListProductAllProps) {
  const { products } = props;
  return (
    <section className="container">
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ItemProductComponent key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
