import Footer from "../../../../components/navigation/Footer";
import Layout from "../../../../hocs/layouts/Layout";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import {  useMode } from "./theme";

function Cliente() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <Layout>
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                </main>
            </div>
            <Footer />
        </ThemeProvider>
    </Layout>
  );
}

export default Cliente;