import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'Github', link: 'https://github.com/xwalls' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} My Personal Blog</title>
        <meta
          name="description"
          content="Learn. Share Knowladge. Receive Feedback. Repeat."
        />
        <meta name="og:title" content="My Personal Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@jxavierpp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
