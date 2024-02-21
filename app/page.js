import Counter from "@/components/Counter";
import styles from "./page.module.css";
import Number from "@/components/Number";
import Counter2 from './../components/Counter2';

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Next - Redux ToolKit</h1>
    <Counter/>
    <Counter2/>
    <Number/>
    </main>
  );
}
