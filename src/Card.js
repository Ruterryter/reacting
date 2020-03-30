import React, { useState } from 'react'
import { CardClicked } from './Cardclicked'


export const Card = ({
  title,
  subtitle,
  buttonText,
  emoji,
  primary,
  secondary,
  titleColor,
  subtitleColor,
  buttonColor,
  buttonTextColor,
}) => {

  const [clicked, setClicked] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    setClicked(true)
  }

  return (
    <>
      {(!clicked) ?

        <section className="card">

          <div className="top" style={{ backgroundColor: primary }}>
            <h1 style={{ color: titleColor }}>{title}</h1>
            <span className="emoji" role="img" aria-label="emoji">
              {emoji}
            </span>
          </div>

          <div className="bottom" style={{ backgroundColor: secondary }}>
            <h2 style={{ color: subtitleColor }}>{subtitle}</h2>

            <button type="submit" onClick={submitHandler}
              style={{
                backgroundColor: buttonColor,
                color: buttonTextColor
              }}>
              {buttonText}
            </button>

          </div>

        </section >

        :

        <CardClicked
          title={title}
          emoji={emoji}
          primary={primary}
          secondary={secondary}
          titleColor={titleColor}
        />

      }

    </>

  )
}
