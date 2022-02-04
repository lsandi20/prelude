import styles from './BottomNavbar.module.css'
import Image from 'next/image'
import homelineicon from './icon/home/line.png'
import billlineicon from './icon/bill/line.png'
import notificationlineicon from './icon/notification/line.png'
import accountlineicon from './icon/account/line.png'


export default function BottomNavbar() {
  return (
    <div className={styles.bottomNavbar}>
      <div className={styles.menuBar}>
        <div className={styles.menuBarIcon}>
          <Image src={homelineicon} />
        </div>
        <div className={styles.menuBarText}>
          Beranda
        </div>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.menuBarIcon}>
          <Image src={billlineicon} />
        </div>
        <div className={styles.menuBarText}>Donasi Anda</div>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.menuBarIcon}>
          <Image src={notificationlineicon} />
        </div>
        <div className={styles.menuBarText}>Notifikasi</div>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.menuBarIcon}>
          <Image src={accountlineicon} />
        </div>
        <div className={styles.menuBarText}>Akun</div>
      </div>
    </div>
  )
}
