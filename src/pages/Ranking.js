import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import styled from "styled-components";
import readRankingData from "../services/readRankingData";
import { Grommet, DataTable, Box, Meter, Text } from "grommet";

const StyledTable = styled(DataTable)`
  color: white;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.mainLight,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(10),
    padding: "25px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  greenBold: {
    color: theme.palette.secondary.light,
    fontSize: "36px",
    fontWeight: "bolder",
    marginBottom: "20px",
  },
}));

const tableTheme = {
  button: {
    color: "white",
  },
  dataTable: {
    color: "white",
    header: {
      color: "white",
      extend: {
        color: "white",
      },
    },
    body: {
      color: "white",
      extend: {
        color: "white",
      },
    },
    icons: {
      color: "white",
    },
  },
};

const columns = [
  {
    property: "city",
    header: <Text>City</Text>,
    primary: true,
  },
  {
    property: "userCount",
    header: "Number of Users",
    align: "center",
  },
  {
    property: "score",
    header: "Green Level",
    render: (datum) => (
      <Box pad={{ vertical: "xsmall" }}>
        <Meter
          key={datum.city}
          values={[{ value: datum.score }]}
          thickness="medium"
          size="small"
          round={true}
        />
      </Box>
    ),
  },
];

const Ranking = () => {
  const classes = useStyles();

  const [rankingData, setRankingData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function check() {
      try {
        setLoading(true);
        let response = await readRankingData();
        setRankingData(response);
        setLoading(false);
      } catch (error) {
        // TODO: handle error
        setLoading(false);
        console.log(error);
      }
    }
    check();
  }, []);

  if (loading) return <span>Loading</span>;

  return (
    <Grid container direction="row">
      <Grid item xs={false} sm={2} lg={3} />
      <Grid item xs={12} sm={8} lg={6}>
        <Paper className={classes.paper} elevation={10}>
          <Typography className={classes.greenBold} variant="h5" component="h1">
            City Ranking
          </Typography>
          <Grommet theme={tableTheme} plain>
            <StyledTable
              sort={{ direction: "desc", property: "score" }}
              sortable={true}
              columns={columns.map((c) => ({
                ...c,
                search: c.property === "city",
              }))}
              data={rankingData}
              step={100}
            />
          </Grommet>
        </Paper>
      </Grid>
      <Grid item xs={false} sm={2} lg={3} />
    </Grid>
  );
};

export default Ranking;
