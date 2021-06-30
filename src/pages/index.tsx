import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>My Personal Blog</h1>
        <h2>Learn. Share Knowladge. Receive Feedback. Repeat.</h2>

        <div className="explanation"></div>
      </div>
    </>
  )
}
