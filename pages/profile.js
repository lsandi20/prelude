import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Profile.module.css'
import BottomNavbar from '../components/BottomNavbar'

export default function Profile() {
  return (
    <div className={styles.basecontainer}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>

          <div className={styles.appBarContainer}>
            <Image src="/leftarrow.png" width="24px" height="24px" layout="fixed" />
            <div className={styles.appBarText}>
              Akun
            </div>
            <Image src="/rightaction.png" width="40px" height="47px" layout="fixed" />
          </div>
          <div className={styles.separator}></div>

          <div className={styles.profileSummaryContainer}>
            <div className={styles.profileSummaryItem}>

              <Image src="/profilepic.png" width="64px" height="64px" layout="fixed" />
              <div className={styles.profileSummaryItemTextContainer}>
                <div className={styles.profileSummaryItemText}>
                  Fulan bin Fulan
                </div>
                <div className={styles.profileSummaryItemEmail}>
                  <div className={styles.profileSummaryItemEmailText}>
                    fulan.fulan@gmail.com
                  </div>
                </div>
                <div className={styles.profileSummaryItemPhoto}>
                  <div className={styles.profileSummaryItemPhotoIcon}>
                    <Image src="/edit.png" width="12px" height="12px" />
                  </div>
                  <div className={styles.profileSummaryItemPhotoText}>
                    Unggah Foto
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.titleText}>
              Informasi Umum
            </div>
          </div>

          <div className={styles.inputContainer}>
            <input className={styles.textInput} type="text" placeholder="Fulan bin Fulan" />
            <input className={styles.textInput} type="text" placeholder="Fulan123" />
            <input className={styles.textInput} type="text" placeholder="Caringin Regency 2 Blok A3, Desa Sayang, Kec. Jatingato" />
          </div>

          <div className={styles.titleContainer}>
            <div className={styles.titleText}>
              Keamanan
            </div>
          </div>

          <div className={styles.inputContainer}>
            <input className={styles.textInput} type="text" placeholder="fulan.fulan@gmail.com" />
            <input className={styles.textInput} type="text" placeholder="851-2345-6789" />
            <input className={styles.textInput} type="text" placeholder="Password" />
          </div>
        </main>

        <footer className={styles.footer}>
          <BottomNavbar />
        </footer>
      </div>
    </div>
  )
}
