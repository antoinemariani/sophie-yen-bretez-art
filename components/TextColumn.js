import styles from '@/styles/text-column.module.scss';

export default function TextColumn({
  imgPosition,
  title,
  poem,
  size,
  technique,
  date,
}) {
  const splitText = poem
    .split('\n')
    .map((str, index) => <p key={index}>{str}</p>);

  return (
    <div
      className={
        imgPosition === 'right'
          ? styles.text_column_reverse
          : styles.text_column
      }
    >
      <span className="material-symbols-rounded">close</span>
      <div className={styles.content}>
        <span className={styles.poem}>{poem ? splitText : <p>{title}</p>}</span>
        <span className={styles.details}>
          <p className={styles.detail_regular}>{size}</p>
          <p className={styles.detail_regular}>{technique}</p>
          <p className={styles.detail_italic}>{date}</p>
        </span>
      </div>
    </div>
  );
}
