import React from 'react';

import { setPage } from '../Items/actions';
import { useDispatch } from 'react-redux';
import { setFilter } from './actions';
//Slider и Button
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//Router
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '60%',
  },
  button: {
    marginTop: '20px',
    padding: '0',
  },
});

function valuetext(value) {
  return `${value}`;
}

const Filter = React.memo(function Filter() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [value, setValue] = React.useState([0, 1500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function delay(callback, ms) {
    var timer = 0;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }

  let a = delay((e) => {
    dispatch(setPage(1));
    dispatch(setFilter({ name: e, priceFrom: value[0], priceTo: value[1] }));
  }, 500);

  const input1Change = (e) => {
    a(e.target.value);
  };

  return (
    <div className='filter'>
      <div className='filter__search'>
        <p>Search: </p>
        <form action=''>
          <input id='input' type='search' onChange={input1Change} />
          <i className='fa fa-search'></i>
        </form>
      </div>
      <div className='filter__prise'>
        <p>Prise: </p>
        <div className={classes.root}>
          <Typography id='range-slider' gutterBottom>
            От {value[0]} до {value[1]}
          </Typography>
          <Slider
            max={3000}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
            getAriaValueText={valuetext}
          />
        </div>
      </div>
      <Button className={classes.button} variant='contained' color='secondary'>
        <Link to={'/addUser'} className='open_modal'>
          Добавить товар
        </Link>
      </Button>
    </div>
  );
});

export default Filter;
