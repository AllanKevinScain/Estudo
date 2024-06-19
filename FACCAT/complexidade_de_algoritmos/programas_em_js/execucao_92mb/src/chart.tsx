import ReactECharts from "echarts-for-react";

interface ChartInterface {
  title: string;
  mergeSort: string[];
  quickSort: string[];
  heapSort: string[];
  countingSort: string[];
  radixSort: string[];
  bucketSort: string[];
}

export const Chart: React.FC<ChartInterface> = (props) => {
  const {
    title,
    quickSort = [],
    mergeSort = [],
    heapSort = [],
    countingSort = [],
    radixSort = [],
    bucketSort = [],
  } = props;

  const option = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: [
        "MergeSort",
        "QuickSort",
        "HeapSort",
        "CountingSort",
        "RadixSort",
        "BucketSort",
      ],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "MergeSort",
          "QuickSort",
          "HeapSort",
          "CountingSort",
          "RadixSort",
          "BucketSort",
        ],
      },
    ],
    xAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "QuickSort",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: quickSort,
      },
      {
        name: "MergeSort",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: mergeSort,
      },
      {
        name: "HeapSort",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: heapSort,
      },
      {
        name: "CountingSort",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: countingSort,
      },
      {
        name: "RadixSort",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: radixSort,
      },
      {
        name: "BucketSort",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: bucketSort,
      },
    ],
  };

  return <ReactECharts option={option} />;
};
