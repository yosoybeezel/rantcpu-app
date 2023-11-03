import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {


  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}></div>
      </header>

      <div className={styles.mainDiv}>
        <span className={styles.btnConnectContainer}><button id="btnConnect" className={styles.btnConnect} >Connect</button></span>
        <div className={styles.rewardsContainer}>

          <div className={styles.reward} >
            <span className={styles.rewardsTitle}>Founders Token Reward</span>
            <div className={styles.rewardImage}></div>
            <div className={styles.btnRewards}>CLAIMED</div>
          </div>
          <div className={styles.reward}>
            <span className={styles.rewardsTitle}>Bounty Block Reward</span>
            <div className={styles.rewardImage}></div>
            <div className={styles.btnRewards}>CLAIMED</div>
          </div>
          <div className={styles.reward}>
            <span className={styles.rewardsTitle}>Daily Login Reward</span>
            <div className={styles.rewardImage}></div>
            <div className={styles.btnRewards}>CLAIM</div>
          </div>

        </div>
      </div>
      <div id="connectWindowContainer" className={styles.connectWindowContainer}>
        <div className={styles.connectWindow}>
          <span className={styles.btnCloseContainer}>Connect Wallet
            <div id="btnCloseWindow" className={styles.btnCloseWindow}>
              x
            </div>
          </span>
          <div></div>
          <span className="btnWallets"><div className="icon iconMetaMask"></div>MetaMask
            
          </span>
          <span className="btnWallets"><div className="icon iconWalletConnect"></div>WalletConnect
            
          </span>
          <span className="btnWallets cancel">Cancel</span>
        </div>
      </div>
    </main>
  )
}
