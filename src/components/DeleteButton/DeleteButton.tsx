import Button from "@mui/material/Button";
import useDeleteStore from "../../store/deleteStore";
import useBeerStore from "../../store/beerStore";
import * as Styled from "./DeleteButton.styled";

export default function DeleteButton() {
  const { selected, resetSelected } = useDeleteStore();
  const { removeRecipes } = useBeerStore();

  const handleDelete = () => {
    removeRecipes(selected);
    resetSelected();
  };
  return (
    <>
      {selected.length !== 0 && (
        <Styled.ButtonPostion>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Styled.ButtonPostion>
      )}
    </>
  );
}
