import React, { useEffect, useState } from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import Button from '../Button'
import logo1 from '../../img/contact-form-logo-1.svg'
import logo2 from '../../img/contact-form-logo-2.svg'
import logo3 from '../../img/contact-form-logo-3.svg'
import logo4 from '../../img/contact-form-logo-4.svg'

const apiUrl = 'https://lo8ms5rgu5.execute-api.eu-north-1.amazonaws.com/devoskuContactForm'

function createDefaultFields() {
  return {
    name: '',
    email: '',
    message: '',
    answer: 'not a logo',
  }
}

export default function ContactForm() {
  const theme = useTheme()
  const classes = useStyles({ theme })

  let [submitted, setSubmitted] = useState(false)
  let [submitting, setSubmitting] = useState(false)
  let [fields, setFields] = useState(createDefaultFields())
  let [error, setError] = useState('')

  useEffect(() => {
    if (!submitting) {
      setFields(createDefaultFields())
    }
  }, [submitting])

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(false)
    setError(false)
    setSubmitting(true)
    try {
      await fetch(apiUrl, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      setSubmitted(true)
    } catch (error) {
      setError(error.message)
    }
    setSubmitting(false)
  }
  return (
    <>
      <form
        className={classes.contactForm}
        name="contact"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="hiddenField" onChange={handleChange}/>
          </label>
        </div>

        <fieldset className={classes.senderInfo}>
          <div className={classes.field}>
            <label htmlFor={'name'}>Your name</label>
            <input
              className="input"
              type={'text'}
              name={'name'}
              onChange={handleChange}
              id={'name'}
              required
              value={fields.name}
            />
          </div>

          <div className={classes.field}>
            <label htmlFor={'email'}>Your email</label>
            <input
              className="input"
              type={'email'}
              name={'email'}
              onChange={handleChange}
              id={'email'}
              required
              value={fields.email}
            />
          </div>
        </fieldset>

        <div className={classes.field}>
          <label htmlFor={'message'}>Message</label>
          <div className="control">
            <textarea
              className="textarea"
              name={'message'}
              onChange={handleChange}
              id={'message'}
              required
              value={fields.message}
            />
          </div>
        </div>

        <fieldset className={`${classes.field} ${classes.securityAnswers}`}>
          <legend>Prove that you are not a bot and select the logo of the site</legend>
          <label className={fields.answer === 'not a logo' ? classes.selectedAnswer : ''}>
            <input
              type="radio"
              name="answer"
              value="not a logo"
              onChange={handleChange}
              checked= {fields.answer === 'not a logo'}
            />
            <img src={logo1} alt="not a logo"/>
          </label>
          <label className={fields.answer === 'real logo' ? classes.selectedAnswer : ''}>
            <input
              type="radio"
              name="answer"
              value="real logo"
              onChange={handleChange}
              checked= {fields.answer === 'real logo'}
            />
            <img src={logo2} alt="real logo"/>
          </label>
          <label className={fields.answer === 'false logo' ? classes.selectedAnswer : ''}>
            <input
              type="radio"
              name="answer"
              value="false logo"
              onChange={handleChange}
              checked= {fields.answer === 'false logo'}
            />
            <img src={logo3} alt="false logo"/>
          </label>
          <label className={fields.answer === 'silly logo' ? classes.selectedAnswer : ''}>
            <input
              type="radio"
              name="answer"
              value="silly logo"
              onChange={handleChange}
              checked= {fields.answer === 'silly logo'}
            />
            <img src={logo4} alt="silly logo"/>
          </label>
        </fieldset>

        {submitted && 
          <div className={classes.submittedBox}>
            <p>Your message has been submitted.</p>
          </div>
        }

        {error &&
          <div className={classes.errorBox}>
            <p>Oops.. Error occurred while trying to deliver your message.</p>
            <p>Send me mail to <a href="mailto: oskari@devosku.com">oskari@devosku.com</a>.</p>
          </div>
        }

        <Button type="submit" disabled={submitting} loading={submitting}>Send</Button>
      </form>
    </>
  )
}
