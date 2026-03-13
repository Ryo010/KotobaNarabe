import React, { useState } from "react";
import { fetchChart } from "../services/resourcesApi";

const useResources = () => {
  const [kanaChart, setKanaChart] = useState({});
  
  const handleChartFetch = async () => {
    const data = await fetchChart();
    setKanaChart(data);
  }
  
  handleChartFetch();
  return kanaChart;
}

export default useResources;