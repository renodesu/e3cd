const Link = ({ href, text }) => (
  <a
    className="link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >{text}</a>
)

export default Link
