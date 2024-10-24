import styles from "./page.module.css";
import { DealItem } from "./ui-components/deal-item";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <DealItem name="Apple" price={1.99} />
          <DealItem name="Apple" price={1.99} />
          <DealItem name="Apple" price={1.99} />
      </main>
    </div>
  );
}
