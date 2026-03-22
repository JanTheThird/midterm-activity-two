import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

// Regex email validation
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!isValidEmail(form.email)) newErrors.email = "Invalid email";
    if (!form.course) newErrors.course = "Course is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      navigate("/home"); // redirect after submission
    }
  };

  const isValid = Object.keys(validateForm()).length === 0;

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <div>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.name}</p>
      </div>

      <div>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.email}</p>
      </div>

      <div>
        <input name="course" placeholder="Course" value={form.course} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.course}</p>
      </div>

      <button type="submit" disabled={!isValid}>Submit</button>
    </Form>
  );
}

export default StudentForm;