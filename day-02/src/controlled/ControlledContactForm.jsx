import { useState, useRef } from "react";

function ControlledContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const addressRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.firstName) {
      firstNameRef.current.focus();
      return
      
    }

    if (!form.lastName) {
      lastNameRef.current.focus();
      return
    }
    if (!form.email.includes("@")) {
      emailRef.current.focus();
      return
    }
    if (!form.phoneNumber) {
      phoneNumberRef.current.focus();
      return
    }
    if (!form.address) {
      addressRef.current.focus();
      return
    }

    console.log("Submitted data: ", form);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="firstName"
        ref={firstNameRef}
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />

      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="lastName"
        ref={lastNameRef}
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="email"
        ref={emailRef}
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="phoneNumber"
        ref={phoneNumberRef}
        value={form.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />

      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="address"
        ref={addressRef}
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <button type="submit" className="bg-purple-500 text-white rounded-md px-3 py-1.5 my-2 w-64">
        Submit
      </button>
    </form>
  );
}

export default ControlledContactForm;
