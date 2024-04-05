import { Card, Button } from "antd"
import cls from "../content.module.scss"

const { Meta } = Card

const ProductCard: React.FC = props => (
  <Card
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
    <Button block>В корзину</Button>
  </Card>
)

export default ProductCard
