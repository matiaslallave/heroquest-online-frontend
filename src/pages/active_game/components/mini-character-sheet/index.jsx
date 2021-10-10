import { Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { SERVER_URL_AUTH } from "../../../../utils";


function MiniCharacterSheet(props) {
  const classes = useStyles();
  const portrait = SERVER_URL_AUTH + props.character.img;

  const calcArmourTotal = (armourA, armourB) => {
    armourA = parseInt(armourA);
    armourB = parseInt(armourB);
    let total = 0;

    !isNaN(armourA) ? (total += armourA) : (total += 0);

    !isNaN(armourB) ? (total += armourB) : (total += 0);

    return total;
  };

  const formatEquip = (equipemnt) => {
    return equipemnt.join(", ");
  };

  return (
    <div className={classes.mainContainer}>
      {/**NAME / RACE / CLASS / PORTRAIT */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td className={classes.cell}>
            <Typography>Name</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>Race</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>Class</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cell}>
            <Typography>{props.character.name}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.race}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.class}</Typography>
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
            <Typography>{props.character.characteristics.WS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.BS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.S}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.T}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.Sp}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.Br}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.Int}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.W}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.FP}</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cell}>
            <Typography>CURRENT</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.WS}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>
              {parseInt(props.character.characteristics.BS) +
                calcArmourTotal(
                  props.character.armour[0]?.bowSkillPenalty,
                  props.character.armour[1]?.bowSkillPenalty
                )}
            </Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.S}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>
              {parseInt(props.character.characteristics.T) +
                calcArmourTotal(
                  props.character.armour[0]?.toughnessPenalty,
                  props.character.armour[1]?.toughnessPenalty
                )}
            </Typography>
          </td>
          <td className={classes.cell}>
            <Typography>
              {parseInt(props.character.characteristics.Sp) +
                calcArmourTotal(
                  props.character.armour[0]?.speedPenalty,
                  props.character.armour[1]?.speedPenalty
                )}
            </Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.Br}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.Int}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.W}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.characteristics.FP}</Typography>
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
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellTitle}>
            <Typography>Hit Roll</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[0]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[1]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[2]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[3]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[4]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[5]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[6]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[7]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[8]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[9]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[10]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.hthCombat[11]}</Typography>
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
            <Typography>{props.character.rangedCombat[0]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.rangedCombat[1]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.rangedCombat[2]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.rangedCombat[3]}</Typography>
          </td>
          <td className={classes.cell}>
            <Typography>{props.character.rangedCombat[4]}</Typography>
          </td>
        </tr>
      </table>
      {/**WEAPONS */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td rowSpan="4" className={classes.cellWpnArm}>
            <Typography>WEAPONS</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography></Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>RANGE</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>DAM DICE</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>FUMBLE</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>CRITICAL</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[0]?.type}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[0]?.range}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[0]?.damDice}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[0]?.fumble}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[0]?.critical}</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[1]?.type}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[1]?.range}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[1]?.damDice}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[1]?.fumble}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[1]?.critical}</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[2]?.type}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[2]?.range}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[2]?.damDice}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[2]?.fumble}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.weapons[2]?.critical}</Typography>
          </td>
        </tr>
      </table>
      {/**ARMOUR */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td rowSpan="4" className={classes.cellWpnArm}>
            <Typography>ARMOUR</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography></Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>BOW SKILL</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>TOUGHNESS</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>SPEED</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.armour[0]?.type}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {props.character.armour[0]?.bowSkillPenalty}
            </Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {props.character.armour[0]?.toughnessPenalty}
            </Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.armour[0]?.speedPenalty}</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.armour[1]?.type}</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {props.character.armour[1]?.bowSkillPenalty}
            </Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {props.character.armour[1]?.toughnessPenalty}
            </Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>{props.character.armour[1]?.speedPenalty}</Typography>
          </td>
        </tr>
        <tr className={classes.cellData}>
          <td className={classes.cellTitle}>
            <Typography>TOTAL</Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {calcArmourTotal(
                props.character.armour[0]?.bowSkillPenalty,
                props.character.armour[1]?.bowSkillPenalty
              )}
            </Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {calcArmourTotal(
                props.character.armour[0]?.toughnessPenalty,
                props.character.armour[1]?.toughnessPenalty
              )}
            </Typography>
          </td>
          <td className={classes.cellWpnArm}>
            <Typography>
              {calcArmourTotal(
                props.character.armour[0]?.speedPenalty,
                props.character.armour[1]?.speedPenalty
              )}
            </Typography>
          </td>
        </tr>
      </table>
      {/**EQUIPMENT */}
      <table className={classes.tableContainer}>
        <tr className={classes.cellTitle}>
          <td className={classes.cell}>
            <Typography>EQUIPMENT</Typography>
          </td>
          <td className={classes.cellEquip}>
            <Typography>{formatEquip(props.character.equipment)}</Typography>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MiniCharacterSheet;
