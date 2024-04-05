import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import { Link } from 'react-router-dom'

const Basket: React.FC = (props) => {
    return (
      <Link
        to={"#"}
        style={{ 
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Badge size="small" count={5} style={{ display: "flex", flexDirection: "column", marginRight: "8px"  }}>
          <ShoppingCartOutlined
            style={{ color: "#fff", fontSize: "32px", marginLeft: "8px" }}
          />
          <p className="text" style={{ color: "#fff", margin: 0}}>
            Корзина
          </p>
        </Badge>
      </Link>
    )
}
export default Basket
