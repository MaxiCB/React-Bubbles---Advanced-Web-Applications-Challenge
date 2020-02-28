import React, { useState, useEffect } from "react";

// Components
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from "../utils/axiosWithAuth"

const BubblePage = props => {

  const [colorList, setColorList ] = useState([]);

  const fetchColors = () => {
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => {
      console.log(res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchColors();
  }, [])

  return (
    <>
      <ColorList colors={colorList} fetch={fetchColors}/>
      <Bubbles colors={colorList}/>
    </>
  );
};

export default BubblePage