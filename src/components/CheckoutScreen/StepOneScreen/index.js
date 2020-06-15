import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';
import Layout from "../../../uikit/layout";
import Header from "../../../uikit/header";
import Footer from "../../../uikit/footer";
import ButtonCostum from "../../../uikit/button"
import { Card, Button, Row, Col } from 'react-bootstrap';
import { SEMBAKO } from '../../../image'
import {
  Link, useLocation 
} from "react-router-dom";

function ListItem({ data, handleAddQuanty, handleLessQuanty }) {
  return (
    <div>
        {data.map(item =>
          <Card className="text-center"  key={item.id}>
            <Card.Header>{item.title}</Card.Header>
            <Card.Img variant="top" src={SEMBAKO} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.title}
              </Card.Text>

              <Row>
                <Col><Button variant="danger" onClick={() => handleLessQuanty(item)}> - </Button></Col>
                <Col> {item.quanty} </Col>
                <Col><Button variant="primary" onClick={() => handleAddQuanty(item)}> + </Button></Col>
              </Row>
              
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        )}
    </div>
  )
}

function CheckoutStepOne() {
  const products = useStoreState(state => state.products)
  const fetchProduct = useStoreActions(actions => actions.fetchProduct)
  const addQuantyProduct = useStoreActions(actions => actions.addQuanty)
  const lessQuantyProduct = useStoreActions(actions => actions.lessQuanty)

  const location = useLocation();

  useEffect(() => {
    const prevPage = location.state && location.state.prevPage
    if (prevPage !== 'CheckoutStepTwo'){ 
      fetchProduct();
    }
  }, []);

  const handleAddQuanty = (item) => {
    addQuantyProduct(item)
  }

  const handleLessQuanty = (item) => {
    lessQuantyProduct(item)
  }

  const Quanty = () => {
    let sum = 0
    products.filter(product => {
      if (product.quanty > 0) sum = sum + product.quanty 
      return sum
    })
    return sum
  }

  const title = "Product";

  return (
    <Layout
      title="Checkout Step One"
      navigation={{
        component: <Header variant="detail" title={title} />
      }}
      footer={{
        component: 
        <Footer>
          <Row>
            <Col>
              <Link to={`/CheckoutStepTwo`}>
                <ButtonCostum typeVarian={"success"} titleButton={"Checkout"}/>
              </Link>
            </Col>
            <Col> Total Qty : <Quanty /> </Col>
          </Row>
        </Footer>
      }}
    >
     <ListItem data={products} handleAddQuanty={handleAddQuanty} handleLessQuanty={handleLessQuanty}/>
    </Layout>
  );
}

export default CheckoutStepOne;
