import Image from 'next/image'
import styles from './index.module.scss'
import Images from '@/constants/images'

type StepProps = {
  image: string,
  title: string,
  description: string,
  variant?: string
}
export default function HorizontalCard(props: StepProps) {
  return (
    <div className={styles.card}>
      <Image src={Images[props?.image]} height={80} width={80} alt='Step' />
      <div>
        <div className={styles.title} data-fontsize={props?.variant}>{props?.title}</div>
        <p className={styles.description}>{props?.description}</p>
      </div>
    </div>
  )
}