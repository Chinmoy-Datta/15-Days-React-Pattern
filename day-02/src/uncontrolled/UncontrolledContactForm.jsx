import { useRef } from "react";

function UncontrolledContactForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
     e.preventDefault()
     const firstName = firstNameRef.current.value
     const lastName = lastNameRef.current.value
     const email = emailRef.current.value  
     const phoneNumber = phoneNumberRef.current.value 
     const address = addressRef.current.value 

     if(!firstName) {
        firstNameRef.current.focus()
        return
     }
     if(!lastName){
        lastNameRef.current.focus()
        return
     }
     if(!email){
        emailRef.current.focus()
        return
     }
     if(!phoneNumber) {
        phoneNumberRef.current.focus()
        return
     }
     if(!address){
        addressRef.current.focus()
        return 
     }

     console.log("Submitted value: ", {firstName, lastName, email, phoneNumber, address})

}

  return (
  <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        ref={firstNameRef}
        placeholder="First Name"
      />

      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        ref={lastNameRef}
        placeholder="Last Name"
      />
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        ref={emailRef}
        placeholder="Email"
      />
      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        ref={phoneNumberRef}
        placeholder="Phone Number"
      />

      <input
        className="border rounded-md px-3 py-1.5 my-2 text-sm w-64"
        type="text"
        ref={addressRef}
        placeholder="Address"
      />

      <button type="submit" className="bg-purple-500 text-white rounded-md px-3 py-1.5 my-2 w-64">
        Submit
      </button>
    </form>

)
}

export default UncontrolledContactForm;
