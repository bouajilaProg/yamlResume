#let ICONS = (
  location: (path: "icons/location.svg", size: 10pt),
  email:    (path: "icons/mail.svg",     size: 9pt),
  tel:      (path: "icons/phone.svg",    size: 9pt),
  website:  (path: "icons/website.svg",  size: 10pt),
  github:   (path: "icons/github.svg",   size: 11pt),
  linkedin: (path: "icons/linkedin.svg", size: 11pt),
)

#let icon(name) = {
  if name in ICONS {
    let icon = ICONS.at(name)
    box(
      baseline: 25%,
      image(
        icon.path,
        width: icon.size,
        height: icon.size,
      )
    )
  } else {
    ""
  }
}

