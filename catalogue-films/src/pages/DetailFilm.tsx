import { useParams } from "react-router-dom";

export default function DetailFilm() {
  const { id } = useParams();
  return <p>Détail du film : {id}</p>;
}