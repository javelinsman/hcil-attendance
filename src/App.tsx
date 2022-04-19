import { Box, Grid, Heading } from "grommet";
import React from "react";
import "./App.css";
import { Student, students } from "./students";

const StudentContainer: React.FC<{ student: Student }> = ({ student }) => {
  const { id, engname } = student;
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <Grid
      rows={["1fr", "auto"]}
      style={{ border: isChecked ? "5px solid black" : undefined }}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      <img
        src={`./asset/${id || "anon"}.jpg`}
        style={{
          minWidth: 0,
          width: "100%",
          borderRadius: "50%",
        }}
      />
      <p>{engname}</p>
    </Grid>
  );
};

function App() {
  return (
    <div className="App">
      <Box style={{ backgroundColor: "rgb(189, 223, 147)" }}>
        <Heading level="2" textAlign="start" margin={{ left: "small" }}>
          출석부
        </Heading>
      </Box>
      <Box pad="medium" style={{ backgroundColor: "rgb(189, 223, 147)" }}>
        <Box
          pad="medium"
          style={{
            border: "1px solid white",
            borderWidth: "10px",
            borderStyle: "dotted",
          }}
        >
          <Grid
            columns={new Array(6).fill(0).map((_) => "1fr")}
            gap="medium"
            className="cont"
          >
            {students.map((student) => (
              <StudentContainer student={student} />
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default App;
