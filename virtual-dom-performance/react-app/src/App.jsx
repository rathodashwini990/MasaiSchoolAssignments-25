import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Original Title");
  const [domUpdates, setDomUpdates] = useState(0);

  const handleReactUpdate = () => {
    setTitle(`Updated by React - ${Date.now()}`);
    setDomUpdates((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{title}</h1>
      <p>DOM Updates: {domUpdates}</p>
      <button onClick={handleReactUpdate}>Change Title (React)</button>
    </div>
  );
}