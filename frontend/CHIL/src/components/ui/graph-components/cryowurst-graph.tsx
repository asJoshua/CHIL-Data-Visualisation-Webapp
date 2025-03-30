import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

interface CryowurstGraphProps {
  graphName: string,
  measurement: string,
  startDate: Date,
  endDate: Date,
  stroke: string
}

const CryowurstGraph: React.FC<CryowurstGraphProps> = ({ measurement, startDate, endDate, stroke}) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(`chil/api/data/cryowurst/list/`);
        console.log(response.data); // Log the API response
        const filteredData = response.data
          .map((item: any) => {
    
            let parsedDate;
    
            parsedDate = new Date(item.timestamp);
        
            return parsedDate && !isNaN(parsedDate.getTime()) // Ensure valid date
              ? { timestamp: parsedDate, sensor_value: item[measurement] ?? null }
              : null;
          })
          .filter((item: any) => {    
            return (
              item.timestamp.getTime() >= startDate.getTime() &&
              item.timestamp.getTime() <= endDate.getTime()
            );
          });
    
        const sortedData = filteredData.sort((a: any, b: any) => a.timestamp - b.timestamp);
        
        setData(sortedData);
    
        if (sortedData.length === 0) {
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
          tick={{ fontSize: 10}}
          label={{
            value: "time",
            position: "insideBottomRight",
            offset: 0,
            fontSize: 16,
            fill: "black"
          }}
        />
        <YAxis 
        tick={{ fontSize: 12,}}
        label={{
          value: measurement,
          angle: -90,
          position: "center",
          fontSize: 16,
          dx: -20,
          fill: "black"
        }}/>
        <Tooltip 
        contentStyle={{
          color: 'blue'
        }}/>
        <Legend/>
        <Line 
          type="monotone" 
          dataKey="sensor_value" 
          stroke={stroke}
          dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryowurstGraph;
