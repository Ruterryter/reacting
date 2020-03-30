import React from "react";

export const CardClicked = ({
  title,
  emoji,
  primary,
  secondary,
  titleColor
}) => {
  return (
    <article className="card card-clicked">
      <section className="top" style={{ background: primary }}>
        <h1 style={{ color: titleColor }}>{title}</h1>
      </section>
      <section className="bottom" style={{ background: secondary }}>
        <span className="emoji" role="img" aria-label="emoji">
          {emoji}
        </span>
      </section>
    </article>
  );
};