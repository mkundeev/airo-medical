import React from "react";
import { useNavigate } from "react-router-dom";
import { TRecipe } from "../../types/types";
import useDeleteStore from "../../store/deleteStore";
import * as Styled from "./RecipeItem.styled";

interface IProps {
  recipe: TRecipe;
}

export default function RecipeItem({ recipe }: IProps) {
  const { selected, toggleSelected } = useDeleteStore();
  const navigate = useNavigate();

  const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleSelected(recipe.id);
  };

  const handleClick = () => {
    navigate(`/beer/${recipe.id}`);
  };
  return (
    <Styled.RecipeCard
      active={selected.includes(recipe.id)}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      <Styled.Content>
        <h2>{recipe.name}</h2>
        <Styled.Image src={recipe.image_url} alt={recipe.name} />
        <Styled.Description>
          <Styled.DescriptionTitel>Description:</Styled.DescriptionTitel>
          <p>{recipe.description}</p>
        </Styled.Description>
      </Styled.Content>
    </Styled.RecipeCard>
  );
}
