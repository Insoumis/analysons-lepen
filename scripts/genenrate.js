const path   = require('path')
const fs     = require('fs')
const Hjson  = require('hjson')
const marked = require('marked')

const THEMES = path.join(__dirname, '..', 'themes')
const OUTPUT = path.join(__dirname, '..', 'src', 'themes.json')
const TOMD   = ['intro', 'fn', 'fi', 'aec']

const result = {}

const themes = fs
  .readdirSync(THEMES)
  .filter(fName => fName.slice(-6) === '.hjson')
  .map((fName) => {
    const slug = fName.slice(0, -6)

    const file = fs.readFileSync(path.join(THEMES, fName)).toString()

    const theme = Hjson.parse(file)

    // add slug
    theme.slug = slug

    // convert markdown to html
    TOMD.forEach((key) => {
      if (theme.hasOwnProperty(key)) {
        theme[key] = marked(theme[key], { breaks: true })
          .trim()
          .slice(3, -4) // remove <p></p>
      }
    })

    return theme
  })
  .map((theme, _, arr) => {
    if (theme.parent) {
      const parent = arr.find(t => t.slug === theme.parent)

      theme.relatives = parent.subs
    }

    return theme
  })
  .forEach((theme) => {
    result[theme.slug] = theme
  })

fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2))
