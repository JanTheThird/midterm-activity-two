import { Link } from "react-router-dom";

function StudentList() {
  const students = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Ben" }
  ];

  return (
    <div>
      <h2>Students</h2>
      {students.map(s => (
        <div key={s.id}>
          <Link to={`/student/${s.id}`}>{s.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default StudentList;