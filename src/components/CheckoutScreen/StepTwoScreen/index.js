import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';
import Layout from "../../../uikit/layout";
import Header from "../../../uikit/header";
import Footer from "../../../uikit/footer";
import ButtonCostum from "../../../uikit/button"
import { Card, Button, Row, Col } from 'react-bootstrap';
import { SEMBAKO } from '../../../image'
import {
  useHistory
} from "react-router-dom";

function ListItem({ data }) {
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
                <Col> {item.quanty} </Col>
              </Row>
              
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        )}
    </div>
  )
}

function filterData(products) {
  const result = products.filter(product => product.quanty > 0);
  return result;
}

function CheckoutStepTwo() {
  const [data, setData] = useState([]) 
  
  const products = useStoreState(state => state.products)

  const history = useHistory()

  useEffect(() => {
    setData(filterData(products))
  }, []);

  const goBack = () => {
    history.push(
      {
        pathname: 'CheckoutStepOne', 
        state: {
          prevPage: 'CheckoutStepTwo'
        }
      }
    )
  }

  const buy = () => {
    history.goBack()
  }

  const Quanty = () => {
    let sum = 0
    products.filter(product => {
      if (product.quanty > 0) sum = sum + product.quanty 
      return sum
    })
    return sum
  }
  
  const title = "Checkout";

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
              <Col> <ButtonCostum press={goBack} typeVarian={"danger"} titleButton={"Back"}/> </Col>
              <Col> <ButtonCostum press={buy} typeVarian={"warning"} titleButton={"Buy"}/> </Col>
              <Col> Total Qty : <Quanty /> </Col>
            </Row>
        </Footer>
      }}
    >
     <ListItem data={data} />
    </Layout>
  );
}

export default CheckoutStepTwo;
