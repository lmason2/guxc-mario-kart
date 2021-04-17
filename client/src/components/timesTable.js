import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, times) {
    times.sort(function(a, b) {
        var time1 = a.time, time2 = b.time
        // Compare the 2 dates
        if (time1 < time2) return -1;
        if (time1 > time2) return 1;
        return 0;
    });
    const topTimeObj = times[0];
    const topTime = topTimeObj.time;
    const topName = topTimeObj.playerName;
    const topCharacter = topTimeObj.character;
    return {
        name,
        topTime,
        topName,
        topCharacter,
        times
    };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell >{row.topTime}</TableCell>
        <TableCell >{row.topName}</TableCell>
        <TableCell >{row.topCharacter}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Times
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Character</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.times.map((time) => (
                    <TableRow key={time.playerName}>
                      <TableCell component="th" scope="row">
                        {time.playerName}
                      </TableCell>
                      <TableCell align="right">{time.time}</TableCell>
                      <TableCell align="right">
                        {time.character}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    topTime: PropTypes.number.isRequired,
    topName: PropTypes.string.isRequired,
    topCharacter: PropTypes.string.isRequired,
    times: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        character: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const TimesTable = () => {
  const times = useSelector((state) => state.times);
  const rows = [];

  if (times) {
    console.log(times)
    times.map(time => {
      rows.push(createData(time.name, time.times));
    })
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Course</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Character</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      );
  }
  else {
    return (
      <div></div>
    )
  }
  
}

export default TimesTable;