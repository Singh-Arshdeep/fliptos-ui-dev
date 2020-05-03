import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

const bookCat = [
    { id: 1, title: 'Self Help'},
    { id: 2, title: 'Bio'},
    { id: 3, title: 'Sience Fiction'},
    { id: 4, title: 'Romance Novel'},
    { id: 5, title: 'History'},
    { id: 6, title: 'Thrilled'}
]

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    rootContainer: {
        marginLeft : '10%'
    }
  }));

function Filter() {
    const classes = useStyles();

    return(
        <div className={classes.rootContainer}> 
           <form className={classes.root} noValidate autoComplete="off">
                <TextField id="bookName" label="Book Name" variant="outlined" />
                <br />
                <TextField id="bookAuthor" label="Author Name" variant="outlined" />
                <Autocomplete
                id="bookCat"
                options={bookCat}
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Book Category" variant="outlined" />}
                />
                <Button variant="contained" color="primary">
                    Search
                </Button>
            </form>

            
                
            

        </div>
    )
}



export default Filter;