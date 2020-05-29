import React from "react"

const FormPage = () => {
  return (
    <form
      class="form"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBuMaTcF8MHJaezI_0cDs90vT4vhPohsqwFvqZ_DHZzXwc1w/formResponse"
    >
      <label>Email</label>
      <input name="entry.1668672865" type="email" />

      <label>Company Name</label>
      <input name="entry.2126836333" type="text" />

      <label>Requested By</label>
      <input name="entry.1708748880" type="test" required />

      <input type="submit" value="Send" />
    </form>
  )
}

export default FormPage
