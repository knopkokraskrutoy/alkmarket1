import ProductCard from "./ProductCard"
import cls from "../content.module.scss"

export type ItemsType = {
  name: string
  price: string
}

const ProductCardList: React.FC = () => {
  const items: ItemsType[] = [
    { name: "Вино", price: "1000$" },
    { name: "Коньяк", price: "500$" },
    { name: "Водка", price: "300$" },
    { name: "Самогон", price: "700$" },
    { name: "Кальвадос", price: "800$" },
    { name: "Пиво", price: "100$" },
    { name: "Виски", price: "1500$" },
    { name: "Мартини", price: "1200$" },
    { name: "Пьяный квас", price: "99999$" },
    { name: "Бруско 150мг", price: "10$" },
  ]
  
  return (
    <div className={cls.card__list}>
      {
        items.map((item, index) => <ProductCard key={index} card={item} />)
      }
    </div>
  )
}

export default ProductCardList
