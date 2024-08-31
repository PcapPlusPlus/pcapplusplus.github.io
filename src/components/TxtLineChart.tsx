// src/components/TxtLineChart.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Chart from 'react-google-charts';

interface TxtLineChartProps {
  txtUrl: string;
}

function TxtLineChart({ txtUrl }: TxtLineChartProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(txtUrl)
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: false,
          complete: (results) => {
            const parsedData = results.data
              .slice(1) // Skip header row
              .filter(
                (row) =>
                  row.length > 1 && row.some((cell) => cell.trim() !== '')
              ) // Filter out empty rows
              .map((row) => [
                row[0],
                parseFloat(row[1]),
                parseFloat(row[2]),
                parseFloat(row[3]),
                parseFloat(row[4])
              ]);
            setData([
              [
                'Commit',
                'BM_PcapFileRead',
                'BM_PcapFileWrite',
                'BM_PcapPacketParsing',
                'BM_PcapPacketGeneration'
              ],
              ...parsedData
            ]);
          }
        });
      });
  }, [txtUrl]);

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        hAxis: {
          title: 'Commit'
        },
        vAxis: {
          title: 'Execution Time per packet (ns)'
        },
        backgroundColor: 'transparent',
        legend: {
          position: 'bottom',
          textStyle: {
            fontSize: 10
          }
        }
      }}
    />
  );
}

export default TxtLineChart;
