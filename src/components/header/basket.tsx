import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Basket: React.FC = (props) => {
    return (
      <Link
        to={"#"}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "72px",
          alignItems: "flex-start",
          marginTop: "32px",
        }}
      >
        <Badge size="small" count={5} style={{ marginRight: "8px" }}>
          <ShoppingCartOutlined
            style={{ color: "#fff", fontSize: "32px", marginLeft: "8px" }}
          />
          <h4 style={{ marginTop: "0px", color: "#cfcfcf", fontWeight: "300" }}>
            Корзина
          </h4>
        </Badge>
      </Link>
    )
}
export default Basket
