import { TRecipe } from "../../types/types";
import * as Styled from "./BeerPageCard.styled";
interface IProps {
  recipe: TRecipe;
}
export default function BeerPageCard({ recipe }: IProps) {
  return (
    <Styled.Card>
      <Styled.Content>
        <h2>{recipe.name}</h2>
        <div>
          <Styled.Bold>Description:</Styled.Bold>
          <p>{recipe.description}</p>
        </div>
        <p>
          <Styled.Bold>Tagline: </Styled.Bold>
          <span>{recipe.tagline}</span>
        </p>

        <p>
          <Styled.Bold>First brewed: </Styled.Bold>
          <span>{recipe.first_brewed}</span>
        </p>

        <div>
          <table>
            <thead>
              <tr>
                <th>Malt name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.malt.map((malt, index) => (
                <tr key={index}>
                  <td>{malt.name}</td>
                  <td>{`${malt.amount.value} ${malt.amount.unit}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Hop name</th>
                <th>Amount</th>
                <th>When to add</th>
                <th>Atribute</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.hops.map((hop, index) => (
                <tr key={index}>
                  <td>{hop.name}</td>
                  <td>{`${hop.amount.value} ${hop.amount.unit}`}</td>
                  <td>{hop.add}</td>
                  <td>{hop.attribute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Styled.Bold>Food paring:</Styled.Bold>
          <ul>
            {recipe.food_pairing.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      </Styled.Content>
      <img src={recipe.image_url} alt={recipe.name} />
    </Styled.Card>
  );
}
