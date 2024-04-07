import { Card, Button } from "antd"
import { useState } from "react"
import cls from "../content.module.scss"

const { Meta } = Card

const ProductCard: React.FC = props => {
  const [inCart, setInCart] = useState(false)

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setInCart(!inCart)
    event.stopPropagation()
  }

  const handleCardClick = () => {
    console.log("клик на карточку")
  }

  return (
    <Card
      onClick={handleCardClick}
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614584821_10-p-vino-na-belom-fone-11.png"
        />
      }
    >
      <Meta title={props.card.name} />
      <h3 className={cls.card__price}>{props.card.price}</h3>
      <Button
        block
        className={cls.card__btn}
        onClick={handleButtonClick}
        style={{
          backgroundColor: inCart ? "#1677ff" : "",
          color: inCart ? "#fff" : "",
        }}
      >
        {inCart ? "В корзине" : "В корзину"}
      </Button>
    </Card>
  )
}

export default ProductCard
