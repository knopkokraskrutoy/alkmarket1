import { Card, Button } from "antd"

const { Meta } = Card

const ProductCard: React.FC = () => (
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
    <Meta title="Name" />
    <h3 style={{ color: "gray", textDecoration: 'none' }}>price ₽</h3>
    <Button block>В корзину</Button>
  </Card>
)

export default ProductCard
