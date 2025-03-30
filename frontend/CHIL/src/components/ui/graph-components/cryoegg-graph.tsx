import React, { useEffect, useState } from "react";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import axios from "axios";

// Define types for the response data
interface CryoeggData {
  timestamp: string;
  [key: string]: unknown; // This allows any property in addition to timestamp, which is expected to be a string
}

interface CryoeggGraphProps {
  graphName: string;
  measurement: string;
  startDate: Date;
  endDate: Date;
  stroke: string;
}

const CryoeggGraph: React.FC<CryoeggGraphProps> = ({ measurement, startDate, endDate, stroke }) => {
  const [data, setData] = useState<{ timestamp: Date; sensor_value: number | null }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CryoeggData[]>('chil/api/data/cryoegg/list/');
        
        const filteredData = response.data
          .map((item) => {
            const parsedDate = new Date(item.timestamp);

            return parsedDate && !isNaN(parsedDate.getTime())
              ? { timestamp: parsedDate, sensor_value: item[measurement] ?? null }
              : null;
          })
          .filter((item): item is { timestamp: Date; sensor_value: number | null } => item !== null)
          .filter((item) => item.timestamp.getTime() >= startDate.getTime() && item.timestamp.getTime() <= endDate.getTime())
          .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime()); // Sort by timestamp

        setData(filteredData);

        if (filteredData.length === 0) {
          console.warn("No data available for the selected range.");
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [measurement, startDate, endDate, stroke]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis
          dataKey="timestamp"
          domain={[startDate.getTime(), endDate.getTime()]}
          tickFormatter={(timestamp: number) => new Date(timestamp).toLocaleDateString()}
          tick={{ fontSize: 10 }}
          label={{
            value: "time",
            position: "insideBottomRight",
            offset: 0,
            fontSize: 16,
            fill: "black",
          }}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          label={{
            value: measurement,
            angle: -90,
            position: "center",
            fontSize: 16,
            dx: -20,
            fill: "black",
          }}
        />
        <Tooltip contentStyle={{ color: "blue" }} />
        <Legend />
        <Line type="monotone" dataKey="sensor_value" stroke={stroke} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryoeggGraph;
