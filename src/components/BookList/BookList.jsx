import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const BookList = ({ books = [], onDelete }) => {
  const navigate = useNavigate();

  return (
    <Paper data-testid="book-list-container" sx={{ padding: 2 }}>
      {books.length === 0 ? (
        <Typography align="center">Nenhum livro cadastrado</Typography>
      ) : (
        <List>
          {books.map((book) => (
            <ListItem
              key={book.id}
              divider
              secondaryAction={
                <Grid
                  container
                  spacing={1}
                  justifyContent="flex-end"
                  sx={{ width: "auto" }}
                >
                  <Grid item>
                    <IconButton
                      edge="end"
                      aria-label={`editar livro ${book.titulo}`}
                      onClick={() => navigate(`/livros/editar/${book.id}`)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      edge="end"
                      aria-label={`deletar livro ${book.titulo}`}
                      onClick={() => onDelete(book.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              }
            >
              <ListItemText
                primary={`${book.titulo} — ${book.autor}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      Gênero:
                    </Typography>{" "}
                    {book.genero} <br />
                    <Typography component="span" variant="body2">
                      Data de leitura:
                    </Typography>{" "}
                    {book.dataLeitura}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default BookList;

