import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    'a': {
      Color: '#333'
    },
    'small': {
      Color: '#6F777B',
    },
    '.date' : {
      PaddingTop: '1rem',
      MarginBottom: '1rem !important',
    },
    'h1' : {
      MarginTop: '0 !important',
    },

    'p' : {
      MarginTop: '0.5rem',
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
