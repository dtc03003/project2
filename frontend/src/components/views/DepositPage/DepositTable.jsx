import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "transparent",
        display: "flex",
        height: 624,
        alignItems: "center",
        justifyContent: "start",
        paddingLeft: "35vh",
        // minHeight:'500px',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          style={{
            fontSize: "3.7vh",
            backgroundColor: "rgb(143, 203, 255)",
            minHeight: "10vh",
            maxWidth: "75vh",
            fontWeight: "bold",
          }}
          label="우리아이를 위한"
          {...a11yProps(0)}
        />
        <Tab
          style={{
            fontSize: "3.7vh",
            backgroundColor: "rgb(143, 203, 255)",
            minHeight: "10vh",
            maxWidth: "75vh",
            fontWeight: "bold",
          }}
          label="주택마련을 위한"
          {...a11yProps(1)}
        />
        <Tab
          style={{
            fontSize: "3.7vh",
            backgroundColor: "rgb(143, 203, 255)",
            minHeight: "10vh",
            maxWidth: "75vh",
            fontWeight: "bold",
          }}
          label="노후대비를 위한"
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            fontWeight: "bold",
          }}
        >
          {" "}
          #Youth 우리 아이의 미래를 위한 준비
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            내 아이를 위한 280일 적금| 최고 연 2.5% (12개월)
          </Button>
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-Youth 어린이 자율 통장{" "}
          </Button>
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-Youth 적금 | 최고 연 2.3% (12개월)
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            fontWeight: "bold",
          }}
        >
          {" "}
          #직장인 재테크과 내집 마련의 꿈을 위해
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            주택청약종합저축 | 최고 연 2.5% (24개월)
          </Button>
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-월 복리 첫 재테크 예금| 최고 연 1.9% (12개월){" "}
          </Button>
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-마이핏 통장| 연 1.5%, 출금·이체 수수료 면제
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            fontWeight: "bold",
          }}
        >
          {" "}
          #골든라이프 노후를 편안하고 든든하게
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-골든라이프연금우대적금|최고 연 2.15% (12개월)
          </Button>
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-골든라이프연금우대예금|최고 연 1.7% (12개월)
          </Button>
          <Button
            style={{
              fontSize: "3.7vh",
              minHeight: "10vh",
              maxWidth: "100vh",
              color: "darkblue",
            }}
          >
            S-UP월 복리 목돈 정기예금
          </Button>
        </div>
      </TabPanel>
    </Box>
  );
}
