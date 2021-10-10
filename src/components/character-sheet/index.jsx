import { Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { SERVER_URL_AUTH } from "../../utils";
import { useTranslation } from "react-i18next";

function CharacterSheet(props) {
  const [t, i18n] = useTranslation("global");
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

  const formatEquip = (equipment) => {
    return equipment.join(", ");
  };

  let txtWeapon = "";
  let txtClass = "";
  let txtRace = "";
  let txtArmour = "";
  let txtEquipment = [];

  switch (i18n.options.lng) {
    case "es":
      txtWeapon = props.character.weapons[0]?.type_es;
      txtClass = props.character.class_es;
      txtRace = props.character.race_es;
      txtArmour = props.character.armour[0]?.type_es;
      txtEquipment = props.character.equipment_es;
      break;
    default:
      txtWeapon = props.character.weapons[0]?.type;
      txtClass = props.character.class;
      txtRace = props.character.race;
      txtArmour = props.character.armour[0]?.type;
      txtEquipment = props.character.equipment;
      break;
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.portraitContainer}>
        {/**NAME / RACE / CLASS / PORTRAIT */}
        <table className={classes.tableContainer}>
          <tr className={classes.cellTitle}>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.name")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.race")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.class")}</Typography>
            </td>
          </tr>
          <tr className={classes.cellData}>
            <td className={classes.cell}>
              <Typography>{props.character.name}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{txtRace}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{txtClass}</Typography>
            </td>
          </tr>
        </table>
        <img alt="" src={portrait} className={classes.portrait}></img>
      </div>
      <div>
        {/**CHARACTERISTICS */}
        <table className={classes.tableContainer}>
          <tr className={classes.cellTitle}>
            <td rowSpan="3" className={classes.cell}>
              <Typography>{t("character-sheet.characteristics")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography></Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.wstitle")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.bstitle")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.s")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.t")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.sp")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.br")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.int")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.w")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.fp")}</Typography>
            </td>
          </tr>
          <tr className={classes.cellData}>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.start")}</Typography>
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
              <Typography>{t("character-sheet.current")}</Typography>
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
              <Typography>{t("character-sheet.hthc")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.targetws")}</Typography>
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
              <Typography>{t("character-sheet.hr")}</Typography>
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
              <Typography>{t("character-sheet.rangedc")}</Typography>
            </td>
            <td className={classes.cell}>
              <Typography>{t("character-sheet.range")}</Typography>
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
              <Typography>{t("character-sheet.hr")}</Typography>
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
              <Typography>{t("character-sheet.weapons")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography></Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.range")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.damdice")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.fumble")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.crit")}</Typography>
            </td>
          </tr>
          <tr className={classes.cellData}>
            <td className={classes.cellWpnArm}>
              <Typography>{txtWeapon}</Typography>
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
              <Typography>{t("character-sheet.armour")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography></Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.bstitle")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.t")}</Typography>
            </td>
            <td className={classes.cellWpnArm}>
              <Typography>{t("character-sheet.sp")}</Typography>
            </td>
          </tr>
          <tr className={classes.cellData}>
            <td className={classes.cellWpnArm}>
              <Typography>{txtArmour}</Typography>
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
              <Typography>{t("character-sheet.equip")}</Typography>
            </td>
            <td className={classes.cellEquip}>
              <Typography>{formatEquip(txtEquipment)}</Typography>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CharacterSheet;
