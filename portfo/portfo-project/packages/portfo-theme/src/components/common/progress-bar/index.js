import React from "react";
import { connect } from "frontity";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];

function App() {
  return (
    <div className="App">
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      ))}
    </div>
  );
}

export default connect(testData);
