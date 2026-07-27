import styles from "./Create_Post.module.css";

export default function CreatePost() {
  return (
    <div className={styles.container}>
      <form className={styles.postForm}>
        <input className={styles.input} name="username" placeholder="Username" />
        <input className={styles.input} name="title" placeholder="Title" />
        <input className={styles.input} name="shortDescription" placeholder="Short Description" />
        <textarea className={styles.textarea} name="content" placeholder="Content" />

        <button className={styles.button}>Create Post</button>
      </form>
    </div>
  );
}