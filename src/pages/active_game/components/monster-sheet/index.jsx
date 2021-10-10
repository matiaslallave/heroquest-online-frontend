import { Typography } from "@material-ui/core";
import { useStyles } from "./style";

function MonsterSheet(props) {
  const classes = useStyles();

  const formatEquip = (equipemnt) => {
    return equipemnt.join(", ");
  };

  return (
    <div className={classes.mainContainer}>
      {/**NAME / RACE / CLASS / PORTRAIT */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td className={classes.cell}>
            <Typography>Monster Type</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cell}>
            <Typography>{props.monster.name}</Typography>
          </td>
        </tr>
      </table>
      {/**CHARACTERISTICS */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td rowSpan="3" className={classes.cell}>
            <Typography>CHARACTERISTICS</Typography>
          </td>
          <td className={classes.cell}>
            <Typography></Typography>
          </td>
          <td className={classes.cell}>
            <Typography>WEAPON SKILL</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>BOW SKILL</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>Strength</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>TOUGHNESS</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>SPEED</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>BRAVERY</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>INTELLIGENCE</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>WOUNDS</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>FATE POINTS</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cell}>
            <Typography>START</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.WS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.BS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.S}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.T}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.Sp}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.Br}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.Int}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.W}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.FP}</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cell}>
            <Typography>CURRENT</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.WS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.BS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.S}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.T}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.Sp}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.Br}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.Int}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.W}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.characteristics.FP}</Typography>
          </td>
        </tr>
      </table>
      {/**H-t-H COMBAT */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td rowSpan="2" className={classes.cell}>
            <Typography>Hand to Hand Combat</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>Target WS</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>1</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>2</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>3</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>4</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>5</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>6</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>7</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>8</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>9</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>10</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>11</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>12</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>DAM DICE</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellTitle}>
            <Typography>Hit Roll</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[0]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[1]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[2]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[3]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[4]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[5]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[6]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[7]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[8]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[9]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[10]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.hthCombat[11]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.damDice}</Typography>
          </td>
        </tr>
      </table>
      {/**RANGED COMBAT */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td rowSpan="2" className={classes.cell}>
            <Typography>RANGED COMBAT</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>RANGE</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>1-3</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>4-12</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>13-24</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>25-36</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>37+</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellTitle}>
            <Typography>Hit Roll</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.rangedCombat[0]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.rangedCombat[1]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.rangedCombat[2]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.rangedCombat[3]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.monster.rangedCombat[4]}</Typography>
          </td>
        </tr>
      </table>
      {/**EQUIPMENT */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td className={classes.cell}>
            <Typography>NOTES</Typography>
          </td>
          <td className={classes.cellEquip}>
            <Typography>{formatEquip(props.monster.notes)}</Typography>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MonsterSheet;
