function UncontrolledContactFormNoRef() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())

        console.log("Form Data: ", data)

        alert(`Hello ${data.firstName}, your email is ${data.email}`)
    }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="firstName"
        placeholder="First Name"
      />

      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
      />

      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        name="address"
        placeholder="Address"
      />

      <button
        type="submit"
        className="bg-purple-500 text-white rounded-md px-3 py-1.5 my-2 w-64"
      >
        Submit
      </button>
    </form>
  );
}

export default UncontrolledContactFormNoRef;
