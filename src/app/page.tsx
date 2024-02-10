import styles from "./page.module.css";
import reactCourse from './course.json';

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {reactCourse.lessons.map((lesson) => (
          <li key={lesson.name}>
            <h2>{lesson.title}</h2>
            <p>{lesson.shortSummary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
