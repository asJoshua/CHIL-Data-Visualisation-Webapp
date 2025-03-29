import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

// Define the expected props for the component
interface CryoeggGraphProps {
  measurement: string,
  startDate: Date,
  endDate: Date,
  stroke: string
}

const CryoeggGraph: React.FC<CryoeggGraphProps> = ({ measurement, startDate, endDate, stroke}) => {
  const [data, setData] = useState<any[]>([]); // Adjust type based on your API response

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
    
        // Fetch data from the backend
        const response = await axios.get(`chil/api/data/cryoegg/list/`);
        console.log("API Response:", response.data); // Log full API response
    
        // Process and filter data
        const filteredData = response.data
          .map((item: any) => {
            console.log("Raw item:", item); // Debugging
    
            let parsedDate;
    
            // Ensure timestamp is correctly converted
            if (item.timestamp === undefined) {
              console.warn("Missing timestamp:", item); // Log missing timestamp
              return null; // Skip this item if timestamp is missing
            }
    
            // Parse the timestamp (ISO 8601 format)
            parsedDate = new Date(item.timestamp); // No need to handle Unix timestamp, ISO string works
    
            console.log("Parsed Date:", parsedDate);
    
            return parsedDate && !isNaN(parsedDate.getTime()) // Ensure valid date
              ? { timestamp: parsedDate, sensor_value: item[measurement] ?? null }
              : null;
          })
          .filter((item: any) => item !== null) // Remove invalid entries
          .filter((item: any) => {
            console.log("Checking range:", item.timestamp, startDate, endDate);
    
            // Convert timestamps to milliseconds before comparison
            return (
              item.timestamp.getTime() >= startDate.getTime() &&
              item.timestamp.getTime() <= endDate.getTime()
            );
          });
    
        // Sort the filtered data by timestamp (ascending order)
        const sortedData = filteredData.sort((a: any, b: any) => a.timestamp - b.timestamp);
    
        console.log("Sorted Data:", sortedData);
    
        // Update the state with filtered and sorted data
        setData(sortedData);
    
        if (sortedData.length === 0) {
          console.warn("No data available for the selected range.");
        }
    
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };    
  
    fetchData();
  }, [measurement, startDate, endDate, stroke]); // Re

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        {/* XAxis to display date, set the domain explicitly to start and end date */}
        <XAxis 
          dataKey="timestamp"
          domain={[startDate.getTime(), endDate.getTime()]} // Explicitly set the domain
          tickFormatter={(timestamp: number) => new Date(timestamp).toLocaleDateString()}
          label={{
            value: "Time",
            position: "insideBottomRight",
            offset: -10,
            fontSize: 14,
          }}// Format ticks
        />
        <YAxis 
        label={{
          value: measurement, // Use dynamic measurement name for the Y-axis label
          angle: -90,
          position: "center",
          offset: -30,
          fontSize: 14,
        }}/>
        <Tooltip />
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

export default CryoeggGraph;
