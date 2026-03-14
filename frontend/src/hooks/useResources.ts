import { useEffect, useState } from "react";
import { fetchChart } from "../services/resourcesApi";
import type { kanaChart } from "../types/quiz.types";

const useResources = () => {
  const [kanaChart, setKanaChart] = useState<kanaChart>({} as kanaChart);
  
  useEffect(() => {
    const getChart = async () => {
      const chartData = await fetchChart();
      setKanaChart(chartData);
    };

    getChart();
  }, []);

  return kanaChart;
};

export default useResources;