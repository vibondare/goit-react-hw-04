import css from "./ImageCard.module.css";

export default function ImageCard({ data, onClick }) {
  return (
    <div onClick={() => onClick(data)} id={data.id}>
      <img src={data.urls.small} className={css.image} alt={data.alt_description} />
    </div>
  );
}
