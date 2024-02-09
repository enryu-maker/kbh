import React from "react";
import Index from "./Navigation/Index"
import ReactGA from 'react-ga';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Oval } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { getAbout, getBanner, getCommunityInfo, getHeaderLogo, getCommunity, getCompany, getGallery, getHomeProduct, getProducts, getMiniAbout } from "./Store/actions";
ReactGA.initialize('UA-192891018-1');
export default function App() {
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getCompany(setLoading))
    dispatch(getBanner(setLoading))
    dispatch(getGallery(setLoading))
    dispatch(getCommunity(setLoading))
    dispatch(getAbout(setLoading))
    dispatch(getProducts(setLoading))
    dispatch(getHomeProduct(setLoading))
    dispatch(getHeaderLogo(setLoading))
    dispatch(getMiniAbout(setLoading))
    dispatch(getCommunityInfo(setLoading))

  }, [dispatch])
  if (!loading) {
    return (
      <div>
        <Header />
        <Index />
        <Footer />
      </div>
    )
  }
  else {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <Oval
          height={50}
          width={50}
          color="#215037"
        />
      </div>
    )
  }
}