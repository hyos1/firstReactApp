function Movie({coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>제목: {title}</h2>
      <p>{summary}</p>
      <ul>
        장르:{" "}
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
