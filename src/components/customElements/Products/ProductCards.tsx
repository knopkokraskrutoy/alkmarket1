import React from "react"
import { Card, Button } from "antd"

const { Meta } = Card

const ProductCards: React.FC = () => (
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
    <Meta title="price ₽" />
    <h3 style={{ color: "#2e2e2e", textDecoration: "none" }}>Name</h3>
    <Button>В корзину</Button>
  </Card>
)

export default ProductCards
