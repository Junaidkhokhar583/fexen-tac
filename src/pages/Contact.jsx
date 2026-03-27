import { useState } from "react";
import Input from "../components/Input";
import { Button } from "../components/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "message", type: "text", placeholder: "Your Message" },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-xl ">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
            />
          ))}

          <Button type="submit" text="Send Message"/>
        </form>
      </div>
    </div>
  );
}