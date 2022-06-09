import { forwardRef, useContext, useEffect, useState } from "react";
import { deleteRepo, getRepos } from "../../assets/api/api";
import { Info, MainContainer } from "./CardStyle";
import CircularProgress from "@mui/material/CircularProgress";
import { StateContext } from "../../assets/global/state";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Card() {
  const [repos, setRepos] = useState();
  const { search, setSearch } = useContext(StateContext);
  const [id, setId] = useState()
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setId(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getRepos(setRepos);
  }, []);

  useEffect(() => {
    getRepos(setRepos);
  }, [repos]);

  const deleteItem = () => {
    deleteRepo(id, setRepos);
    setOpen(false);
  };

  return (
    <>
      {!repos ? (
        <CircularProgress />
      ) : (
        <>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Excluir o repositório selecionado?"}</DialogTitle>
            <DialogActions>
              <Button onClick={()=>handleClose()}>Cancelar</Button>
              <Button onClick={()=>deleteItem()}>Excluir</Button>
            </DialogActions>
          </Dialog>
          {repos.map((repo) => {
            if (search === "") {
              return (
                <MainContainer key={repo.id}>
                  <Info href={repo.html_url} target="blank">
                    <p id="user">{repo.login}</p>
                    <p id="repo">{repo.name}</p>
                  </Info>
                  <button id={repo.id} onClick={() => handleClickOpen(repo.id)}>
                    X
                  </button>
                </MainContainer>
              );
            } else {
              if (
                repo.name.toUpperCase().includes(search.toUpperCase()) ||
                repo.login.toUpperCase().includes(search.toUpperCase()) ||
                repo.html_url.toUpperCase().includes(search.toUpperCase())
              ) {
                return (
                  <MainContainer key={repo.id}>
                    <Info href={repo.html_url} target="blank">
                      <p id="user">{repo.login}</p>
                      <p id="repo">{repo.name}</p>
                    </Info>
                    <button id={repo.id} onClick={() => handleClickOpen(repo.id)}>
                      X
                    </button>
                  </MainContainer>
                );
              }
            }
          })}
        </>
      )}
    </>
  );
}
