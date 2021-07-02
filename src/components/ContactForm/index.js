import React, { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  let [fields, setFields] = useState({})

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const body = {
      'subject': `Form | devosku.com | ${form.getAttribute('name')}`,
      ...fields,
    };

    try {
      let response = await fetch('/.netlify/functions/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(fields),
      })
      console.log(response)
      //navigate(form.getAttribute('action'))
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <form
        className="contact-form"
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <div className="sender-info">
          <div className="name-field">
            <label htmlFor={'name'}>Your name</label>
            <input
              className="input"
              type={'text'}
              name={'name'}
              onChange={handleChange}
              id={'name'}
              required={true}
            />
          </div>
          <div className="email-field">
            <label htmlFor={'email'}>Email</label>
            <input
              className="input"
              type={'email'}
              name={'email'}
              onChange={handleChange}
              id={'email'}
              required={true}
            />
          </div>
        </div>
        <div className="message-field">
          <label htmlFor={'message'}>Message</label>
          <div className="control">
            <textarea
              className="textarea"
              name={'message'}
              onChange={handleChange}
              id={'message'}
              required={true}
            />
          </div>
        </div>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </>
  )
}
