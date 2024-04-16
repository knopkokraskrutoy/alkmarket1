import cls from "../content.module.scss"
import BasketList from "./BasketList"

const BasketPage: React.FC = () => {


  return (
    <div className={cls.basket}>
      <h1>Корзина</h1>
      <div>
        <div className={cls.basket__header}>


        </div>
        <div>
          <BasketList></BasketList>
        </div>
      </div>
    </div>
  )
}

export default BasketPage
