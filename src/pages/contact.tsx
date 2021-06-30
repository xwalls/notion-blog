import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/jxavierpp',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/xwalls',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/jxavierpp/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:jxavierpp1@gmail.com?subject=Hi',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Xavier Paredes - Computer Scientist @{' '}
          <ExtLink href="https://github.com/IslasGECI/">IslasGECI</ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
