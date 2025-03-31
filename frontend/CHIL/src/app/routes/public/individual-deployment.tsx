import React, { useEffect, useState } from "react";
import { VariableLayout } from "@/components/layouts/variable-layout";
import { DeploymentTopBar } from "@/features/individual-deployment/deployment-top-bar";
import { useParams } from "react-router-dom";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@/components/ui/box/box";
import { CollapsibleGraphContainer } from "@/components/ui/collapsible-graph-container/collapsible-graph-container";
import { GraphConfig } from "@/components/ui/lineGraph/graphConfigObject";

const IndividualDeploymentsRoot = (): React.JSX.Element => {
  const { id } = useParams<"id">();
  const [graphItems, setGraphItems] = useState<GraphConfig[]>([]);
  const [graphKeys, setGraphKeys] = useState<string[]>([]);

  useEffect(() => {
    const storedGraphItems: GraphConfig[] = [];
    const storedKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("graph")) {
        continue;
      }
      const value = localStorage.getItem(key);
      if (!value) {
        continue;
      }
      try {
        const parsedValue = JSON.parse(value);
        if (parsedValue.deploymentId == id) {
          storedKeys.push(key);
          storedGraphItems.push(parsedValue);
        }
      } catch (error) {
        console.error("Error parsing value for key:", key, error);
      }
    }
    setGraphKeys(storedKeys);
    setGraphItems(storedGraphItems);
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <VariableLayout>
        <Box className="flex flex-col gap-y-4 flex-wrap justify-center px-80 py-10">
          <DeploymentTopBar deployment_id={Number(id)} />
          <Box className="flex flex-col gap-y-4 flex-wrap justify-center content-center">
            {graphItems.map((graphItem, index) => (
              <CollapsibleGraphContainer
                key={index}
                graphConfig={graphItem}
                graphKey={graphKeys[index]}
              ></CollapsibleGraphContainer>
            ))}
          </Box>
        </Box>
      </VariableLayout>
    </ThemeProvider>
  );
};

export { IndividualDeploymentsRoot };
