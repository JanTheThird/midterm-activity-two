import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const students = [
    { id: 1, name: "Ana", course: "IT" },
    { id: 2, name: "Ben", course: "CS" }
  ];

  const student = students.find(s => s.id == id);
  if (!student) return <h2>Student not found</h2>;

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentDetails;