import { Avatar, Badge } from "@material-ui/core";
import Skull from "../../../../assets/blckskull.jpg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  skull: {
    marginRight: "1rem",
  },
});

function LoginBadge() {
  const classes = useStyles();

  return (
    <Badge
      className={classes.skull}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      color="secondary"
      badgeContent=""
      variant="dot"
    >
      <Avatar alt="" src={Skull}></Avatar>
    </Badge>
  );
}

export default LoginBadge;
