import BasketCard from "./BasketCard"
import cls from "../content.module.scss"
import { useState } from "react"
import { Button } from "antd"

export type ItemsType = {
  name: string
  price: number
}

const BasketList: React.FC = () => {


  const items: ItemsType[] = [
    { name: "Вино", price: 1000 },
    { name: "Коньяк", price: 500 },
    { name: "Водка", price: 300 },
    { name: "Самогон", price: 700 },
    { name: "Кальвадос", price: 800 },
    { name: "Пиво", price: 100 },
    { name: "Пьяный квас", price: 99999 },
    { name: "Бруско 150мг", price: 10 },
  ]

  return (
    <div className={cls.basket__list}>
      {items.slice(0).map((item, index) => (
        <BasketCard key={index} card={item} />
      ))}
    </div>
  )
}

export default BasketList
