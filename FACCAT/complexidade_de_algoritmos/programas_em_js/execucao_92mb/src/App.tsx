/* eslint-disable @typescript-eslint/no-explicit-any */
import data from "../dados/dados.json";
import { Chart } from "./chart";

export default function App() {
  const entries = Object.values(data);

  return (
    <div className="flex flex-col bg-slate-200 gap-4">
      <Chart
        title={`Grafico de tempo de execução de algoritmos`}
        quickSort={entries[0]}
        mergeSort={entries[1]}
        heapSort={entries[2]}
        countingSort={entries[3]}
        radixSort={entries[4]}
        bucketSort={entries[5]}
      />
    </div>
  );
}
