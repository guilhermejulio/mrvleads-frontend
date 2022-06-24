import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Container } from "./styles";
import Lead from "../Lead";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LeadsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", '&.MuiTabs-indicator': { backgroundColor: "#FB9E04"} }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab sx={{ fontWeight: 600, '&.Mui-selected': { color: "#FB9E04"} }} label="Invited" {...a11yProps(0)} />
            <Tab sx={{ fontWeight: 600, '&.Mui-selected': { color: "#FB9E04"} }} label="Accepted" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Lead />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Nothing here...
        </TabPanel>
      </Box>
    </Container>
  );
}
