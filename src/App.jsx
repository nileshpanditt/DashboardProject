import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CloudWidget from "./components/CloudWidget";
import RiskWidget from "./components/RiskWidget";
import ImageWidget from "./components/ImageWidget";

const App = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, type: "cloud" },
    { id: 2, type: "risk" }
  ]);
  const [filter, setFilter] = useState("Last 2 days");

  const addWidget = () => {
    setWidgets([...widgets, { id: Date.now(), type: "empty" }]);
  };

  const updateWidgetType = (id, newType) => {
    setWidgets(
      widgets.map((w) => (w.id === id ? { ...w, type: newType } : w))
    );
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter((w) => w.id !== id));
  };

  const renderWidget = (type) => {
    switch (type) {
      case "cloud":
        return <CloudWidget />;
      case "risk":
        return <RiskWidget />;
      case "image":
        return <ImageWidget />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>CNAPP Dashboard</h2>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>Last 2 days</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <button className="add-widget" onClick={addWidget}>
            + Add Widget
          </button>
        </div>
      </div>

      <div className="grid-container">
        {widgets.map((widget) => (
          <Card
            key={widget.id}
            type={widget.type}
            title={
              widget.type === "cloud"
                ? "Cloud Accounts"
                : widget.type === "risk"
                ? "Risk Assessment"
                : widget.type === "image"
                ? "Image Vulnerabilities"
                : "New Widget"
            }
            onTypeChange={(type) => updateWidgetType(widget.id, type)}
            onRemove={() => removeWidget(widget.id)}
          >
            {renderWidget(widget.type)}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
