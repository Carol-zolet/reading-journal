import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Reading Journal
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/livros">
          Livros
        </Button>
        <Button color="inherit" component={Link} to="/sobre">
          Sobre
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
