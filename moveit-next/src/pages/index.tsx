import Head from "next/head";
import { CompleteedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/experienceBar";
import { Profiler } from "../components/profile";

import styles from  '../style/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>     
      <ExperienceBar />
      <section>
        <div>
          <Profiler />
          <CompleteedChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
