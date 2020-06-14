import React, { useEffect } from "react";
// import Flex from "../../uikit/flex";
import styled from "styled-components";
// import Image from "../../uikit/image";
import './splashScreen.css';
import { Link } from "react-router-dom";

// const ImageWrapper = styled(Flex)`
//   flex: 1;
//   position: relative;
// `;

function SplashScreen() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ImageWrapper justifyContent="center" alignItems="center">
          <Image source={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7e7d0c6-8bc7-42f8-b532-2b9a7ac7b59e/dcer0s0-4ddd0125-4050-44f2-b875-6bc187575c5a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3ZTdkMGM2LThiYzctNDJmOC1iNTMyLTJiOWE3YWM3YjU5ZVwvZGNlcjBzMC00ZGRkMDEyNS00MDUwLTQ0ZjItYjg3NS02YmMxODc1NzVjNWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mNoPzvw7WUZeb9O5YFkKcTerKdXgIas452PV_w9b9WE"} width={"70%"}/>
        </ImageWrapper> */}
        <Link to={"/CheckoutStepOne"}>
          <p
            className="App-link"
          >
            Next SplashScreen
          </p>
        </Link>
      </header>
    </div>
  );
}

export default SplashScreen;
