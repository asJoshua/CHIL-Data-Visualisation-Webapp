import AccordionSummary from "@mui/material/AccordionSummary";
import { Accordion } from "../accordion/accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "../box/box";
import { IconButton } from "../button/icon-button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import DatasetIcon from "@mui/icons-material/Dataset";
import { LineGraph } from "../lineGraph/lineGraph";
import { GraphConfig } from "../lineGraph/graphConfigObject";

const CollapsibleGraphContainer = (props: { graphConfig: GraphConfig }) => {
  const graphInfo = props.graphConfig;

  return (
    <Accordion className="size-full">
      <AccordionSummary expandIcon={<ArrowDropDownIcon />} id="panel2-header">
        <Box className="flex flex-row align-middle justify-between size-full">
          <Typography color="black" component="span" align="center">
            {graphInfo.graphName}
          </Typography>
          <Box>
            <IconButton>
              <DatasetIcon />
            </IconButton>
            <IconButton>
              <DownloadIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <LineGraph
          titleText={graphInfo.graphName}
          datasets={graphInfo.dataSets}
          labels={graphInfo.dateLabels}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export { CollapsibleGraphContainer };
