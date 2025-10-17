import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div style={{
      display: "grid",
      gap: 20,
      padding: "40px",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh"
    }}>
      <Card>
        <h2>REACT</h2>
        <p>React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components that make code easier to maintain and scale. With its virtual DOM and efficient rendering, React provides fast performance and a smooth user experience..</p>
      </Card>

      <Card>
        <img
          src="https://www.shutterstock.com/image-photo/close-senior-hands-giving-small-260nw-1080904208.jpg"
          alt="sample"
          style={{ width: "100%", borderRadius: 6 }}
        />
        <small>NATURE</small>
      </Card>

      <Card>
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>Click me</button>
      </Card>
    </div>
  );
}
