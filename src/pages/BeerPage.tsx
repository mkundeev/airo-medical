import BeerPageCard from "../components/BeerPageCard/BeerPageCard";
import { useParams } from "react-router-dom";
import useBeerStore from "../store/beerStore";
import { Navigate } from "react-router-dom";

export default function BeerPage() {
  const { id } = useParams();
  const { recipes } = useBeerStore();
  const data = recipes.find((item) => item.id === Number(id));
  return <>{data ? <BeerPageCard recipe={data} /> : <Navigate to="/" />}</>;
}
