import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState, useEffect } from "react";
function App() {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [sites, setSites] = useState(() => {
    const stored = localStorage.getItem("sites");
    return stored ? JSON.parse(stored) : [];
  });

  function handleAddSite(site) {
    setSites((sites) => [...sites, site]);
  }
  function handleDeleteSite(id) {
    setSites((sites) => sites.filter((_, index) => index !== id));
  }

  useEffect(() => {
    localStorage.setItem("sites", JSON.stringify(sites));
  }, [sites]);

  return (
    <div className="App">
      <div className="container p-5">
        <Header />
        <Form
          siteName={siteName}
          siteUrl={siteUrl}
          setSiteName={setSiteName}
          setSiteUrl={setSiteUrl}
          onAddSite={handleAddSite}
        />
        <Table sites={sites} onDeleteSite={handleDeleteSite} />
      </div>
    </div>
  );
}

export default App;
