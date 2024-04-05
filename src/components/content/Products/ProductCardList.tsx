import ProductCard from "./ProductCard"
import cls from "../content.module.scss"

const ProductCardList: React.FC = () => {
  return (
    <div className={cls.card__list}>
          <ProductCard card={{ name: "Вино", price: "1000$" }} />
          <ProductCard card={{ name: "Коньяк", price: "500$" }} />
          <ProductCard card={{ name: "Водка", price: "300$" }} />
          <ProductCard card={{ name: "Самогон", price: "700$" }} />
          <ProductCard card={{ name: "Кальвадос", price: "800$" }} />
          <ProductCard card={{ name: "Пиво", price: "100$" }} />
          <ProductCard card={{ name: "Виски", price: "1500$" }} />
          <ProductCard card={{ name: "Мартини", price: "1200$" }} />
          <ProductCard card={{ name: "Пьяный квас", price: "99999$" }} />
          <ProductCard card={{ name: "Бруско 150мг", price: "10$" }} />
          
        </div>
  )

}

export default ProductCardList
