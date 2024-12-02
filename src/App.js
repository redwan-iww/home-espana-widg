import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useZohoInit } from "./hook/useZohoInit";
import { zohoApi } from "./zohoApi";

const parentContainerStyle = {
  borderTop: "1px solid #BABABA",
  minHeight: "calc(100vh - 1px)",
  p: "1em",
};

function App() {
  const { module, recordId } = useZohoInit();
  const [initPageContent, setInitPageContent] = React.useState(
    <CircularProgress />
  );
  React.useEffect(() => {
    const fetchData = async () => {
      const { data: resp } = await zohoApi.record.getRecordsFromRelatedList({
        module,
        recordId: recordId?.[0],
        RelatedListAPI: "Update_Logs",
      });
      console.log({ resp });
    };
    if (module && recordId?.[0]) {
      fetchData();
    }
  }, [module, recordId?.[0]]);
  return (
    <Box sx={parentContainerStyle}>
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {initPageContent}
      </span>
    </Box>
  );
}

export default App;
