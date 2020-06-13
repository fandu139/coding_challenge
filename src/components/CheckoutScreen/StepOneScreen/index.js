import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Flex from "../../uikit/flex";
// import PokemonSmallCard from "../../uikit/smallCard";
import Layout from "../../../uikit/layout";
import Header from "../../../uikit/header";
import Footer from "../../../uikit/footer";
// import IFRender from "../../lib/ifrender";
import ButtonCostum from "../../../uikit/button"
// import Loading from "../../uikit/loading"
// import Filter from "./filter"
// import { queryGQL } from "../../config/schema"

// function ListCard({ data }) {
//   return data.map(item => {
//     return (
//       <PokemonSmallCard
//         key={item.id}
//         id={item.id}
//         image={item.image}
//         imageAlt={item.name}
//         title={item.name}
//         fastAttack={item.attacks}
//         specialAttack={item.attacks}
//         maxHP={item.maxHP}
//         maxCP={item.maxCP}
//         classification={item.classification}
//         resistant={item.resistant}
//         weaknesses={item.weaknesses}
//         types={item.types}
//       />
//     );
//   });
// }

// function getData({page, setData, setDataFilter, setCategory}) {
//   const totalData = page * 10;
//   axios({
//     url: "https://graphql-pokemon.now.sh/",
//     method: "post",
//     data: {
//       query: queryGQL(totalData)
//     }
//   }).then(result => {
//     setData(result.data.data.pokemons);
//     setDataFilter(result.data.data.pokemons)
//   });
// }

function CheckoutStepOne() {
  const [data, setData] = useState('')

  const title = "Navigator";

  return (
    <Layout
      title="Checkout Step One"
      navigation={{
        component: <Header variant="detail" title={title} />
      }}
      footer={{
        component: 
        <Footer>
          <ButtonCostum typeVarian={"success"} titleButton={"checkout"}/>
        </Footer>
      }}
    >
     Checkout Step One
    </Layout>
  );
}

export default CheckoutStepOne;
