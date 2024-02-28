import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  List,
  ListItemIcon,
  ListItem,
} from '@material-ui/core';

//Ícones
import DeleteIcon from '@material-ui/icons/Delete'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const useStyles = makeStyles((theme) => ({
  btnNovo: {
    textTransform: 'capitalize',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '10px 15px 30px 0 rgba(35, 38, 90, 0.06)',
    height: '33px',
    width: '110px',
    fontSize: '13px',
  },
  boxWhite: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '20px 25px 40px 0 rgba(35, 38, 90, 0.06)',
    flexFlow: 'row wrap',
    padding: '2% 3% 2% 3%',
  },
  borderHead: {
    borderBottom: 'solid 3px #00d054',
  },
  table: {
    width: '100%'
  },
  text: {
    fontWeight: 600,
    color: '#5A5773',
  },
  results: {
    opacity: '0.8'
  },
  data: {
    backgroundColor: '#fff',
    border: 'none',
    height: '33px',
    borderRadius: '15px',
    color: '#545773',
    fontWeight: 600,
    fontFamily: 'Inter'

  },
  tituloModalNovo: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#5A5773',
    padding: '25px',
  },
  labelInputsModal: {
    color: 'rgba(90, 87, 115, 0.79)',
  },
  tituloDeleteModal: {
    color: '#5A5773',
    fontSize: '26px',
  },
  botoesGrid: {
    margin: '20px auto 20px auto',
  },
}));


// Design da Tabela
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: '20px',
  },
  body: {
    fontSize: 14,
    border: 'none',
    paddingTop: '15px',
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//Inicio da tabela -------------------------------
const Cliente = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setData(response)
      });
  }, []);

  /* 
    function addUser(newUser) {
  
      setData([...data, newUser]);
  
    } 
  */

  return (
    <Grid>
      <TableContainer>
        <Table className={classes.table}>
          {/* Titulos */}
          <TableHead>
            <TableRow className={classes.borderHead}>
              <StyledTableCell className={classes.text}>
                <List >
                  <ListItem >
                    <Typography
                      variant='p'
                      className={classes.text}>
                      Nome
                    </Typography>
                    <ListItemIcon>
                      {<ImportExportIcon fontSize='small' style={{ opacity: 0.5 }} />}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </StyledTableCell>

              <StyledTableCell className={classes.text}>
                <List >
                  <ListItem >
                    <Typography
                      variant='p'
                      className={classes.text}>
                      Franquia
                    </Typography>
                    <ListItemIcon>
                      {<ImportExportIcon fontSize='small' style={{ opacity: 0.5 }} />}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </StyledTableCell>

              <StyledTableCell className={classes.text}>
                <List >
                  <ListItem >
                    <Typography
                      variant='p'
                      className={classes.text}
                    >
                      Cidade
                    </Typography>
                    <ListItemIcon>
                      {<ImportExportIcon fontSize='small' style={{ opacity: 0.5 }} />}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </StyledTableCell>

              <StyledTableCell className={classes.text}>
                <List >
                  <ListItem >
                    <Typography
                      variant='p'
                      className={classes.text}>
                      Data Inclusão
                    </Typography>
                    <ListItemIcon>
                      {<ImportExportIcon fontSize='small' style={{ opacity: 0.5 }} />}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </StyledTableCell>

              <StyledTableCell className={classes.text}>
                <List >
                  <ListItem >
                    <Typography
                      variant='p'
                      className={classes.text}>
                      Plano
                    </Typography>
                    <ListItemIcon>
                      {<ImportExportIcon fontSize='small' style={{ opacity: 0.5 }} />}
                    </ListItemIcon>
                  </ListItem>
                </List>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          {/* Células da tabela*/}
          <TableBody>
            {data.map((row) => (
              <StyledTableRow>
                <StyledTableCell className={classes.text}>
                  {row.nome}
                </StyledTableCell>
                <StyledTableCell className={classes.results}>
                  {row.titulo}
                </StyledTableCell>
                <StyledTableCell className={classes.results}>
                  {row.cidade}
                </StyledTableCell>
                <StyledTableCell className={classes.results}>
                  {row.createdAt}
                </StyledTableCell>
                <StyledTableCell className={classes.results}>
                  {row.tipocliente_idtipocliente}
                </StyledTableCell>

                <Grid container justify='center'
                  style={{ paddingTop: '5px', opacity: '0.7', flexWrap: 'nowrap' }}
                >
                  <IconButton >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                  <Link to="/editarCliente">
                    <IconButton >
                      <CreateOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Link>
                  <IconButton >
                    <DeleteIcon onClick={handleClickOpen5} fontSize="small" />
                  </IconButton>
                </Grid>

              </StyledTableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Grid>
  )
}

export default Cliente;
