
// Import Course JSON files
import ACCT from './ACCT.json';
import AERO from './AERO.json';
import AEST from './AEST.json';
import AMHE from './AMHE.json';
import AMST from './AMST.json';
import ARCH from './ARCH.json';
import ARHI from './ARHI.json';
import ARTS from './ARTS.json';
import ASAM from './ASAM.json';
import ATMO from './ATMO.json';
import BIOL from './BIOL.json';
import BMBT from './BMBT.json';
import BMEN from './BMEN.json';
import BMSC from './BMSC.json';
import BOST from './BOST.json';
import BUSI from './BUSI.json';
import CHEM from './CHEM.json';
import CHEN from './CHEN.json';
import CIVE from './CIVE.json';
import COMP from './COMP.json';
import CONT from './CONT.json';
import CORE from './CORE.json';
import CRIM from './CRIM.json';
import DART from './DART.json';
import DGMD from './DGMD.json';
import DPTH from './DPTH.json';
import ECON from './ECON.json';
import EDUC from './EDUC.json';
import EECE from './EECE.json';
import ENGL from './ENGL.json';
import ENGN from './ENGN.json';
import ENGY from './ENGY.json';
import ENTR from './ENTR.json';
import ENVE from './ENVE.json';
import ENVI from './ENVI.json';
import ENVS from './ENVS.json';
import ETEC from './ETEC.json';
import EXER from './EXER.json';
import FAHS from './FAHS.json';
import FINA from './FINA.json';
import GEOL from './GEOL.json';
import GLST from './GLST.json';
import GNDR from './GNDR.json';
import GRFX from './GRFX.json';
import HIST from './HIST.json';
import HONR from './HONR.json';
import HSCI from './HSCI.json';
import IENG from './IENG.json';
import IM from './IM.json';
import INFO from './INFO.json';
import LABR from './LABR.json';
import LGST from './LGST.json';
import LIFE from './LIFE.json';
import LMUCM from './LMUCM.json';
import MARI from './MARI.json';
import MATH from './MATH.json';
import MECH from './MECH.json';
import MGMT from './MGMT.json';
import MIST from './MIST.json';
import MKTG from './MKTG.json';
import MLSC from './MLSC.json';
import MPAD from './MPAD.json';
import MSIT from './MSIT.json';
import MTEC from './MTEC.json';
import MUAP from './MUAP.json';
import MUBU from './MUBU.json';
import MUCM from './MUCM.json';
import MUED from './MUED.json';
import MUEN from './MUEN.json';
import MUHI from './MUHI.json';
import MUPF from './MUPF.json';
import MUSR from './MUSR.json';
import MUTH from './MUTH.json';
import NONC from './NONC.json';
import NURS from './NURS.json';
import NUTR from './NUTR.json';
import PCST from './PCST.json';
import PHIL from './PHIL.json';
import PHRM from './PHRM.json';
import PHYS from './PHYS.json';
import PLAS from './PLAS.json';
import POLI from './POLI.json';
import POLY from './POLY.json';
import POMS from './POMS.json';
import PSMA from './PSMA.json';
import PSYC from './PSYC.json';
import PTEC from './PTEC.json';
import PUBH from './PUBH.json';
import RADI from './RADI.json';
import ROTC from './ROTC.json';
import SCIE from './SCIE.json';
import SOCI from './SOCI.json';
import THEA from './THEA.json';
import UGTC from './UGTC.json';
import UMLO from './UMLO.json';
import UNCR from './UNCR.json';
import UTCH from './UTCH.json';
import WLAN from './WLAN.json';
import WLAR from './WLAR.json';
import WLCH from './WLCH.json';
import WLFR from './WLFR.json';
import WLGE from './WLGE.json';
import WLIT from './WLIT.json';
import WLKH from './WLKH.json';
import WLLA from './WLLA.json';
import WLPO from './WLPO.json';
import WLSP from './WLSP.json';
import WORC from './WORC.json';

// Create a COURSE_LIST array of all the courses
const COURSE_LIST = [
    ACCT,
    AERO,
    AEST,
    AMHE,
    AMST,
    ARCH,
    ARHI,
    ARTS,
    ASAM,
    ATMO,
    BIOL,
    BMBT, 
    BMEN,
    BMSC,
    BOST,
    BUSI,
    CHEM,
    CHEN,
    CIVE,
    COMP,
    CONT,
    CORE,
    CRIM,
    DART,
    DGMD,
    DPTH,
    ECON,
    EDUC,
    EECE,
    ENGL,
    ENGN,
    ENGY,
    ENTR,
    ENVE,
    ENVI,
    ENVS,
    ETEC,
    EXER,
    FAHS,
    FINA,
    GEOL,
    GLST,
    GNDR,
    GRFX,
    HIST,
    HONR,
    HSCI,
    IENG,
    IM,
    INFO,
    LABR,
    LGST,
    LIFE,
    LMUCM,
    MARI,
    MATH,
    MECH,
    MGMT,
    MIST,
    MKTG,
    MLSC,
    MPAD,
    MSIT,
    MTEC,
    MUAP,
    MUBU,
    MUCM,
    MUED,
    MUEN,
    MUHI,
    MUPF,
    MUSR,
    MUTH,
    NONC,
    NURS,
    NUTR,
    PCST,
    PHIL,
    PHRM,
    PHYS,
    PLAS,
    POLI,
    POLY,
    POMS,
    PSMA,
    PSYC,
    PTEC,
    PUBH,
    RADI,
    ROTC,
    SCIE,
    SOCI,
    THEA,
    UGTC,
    UMLO,
    UNCR,
    UTCH,
    WLAN,
    WLAR,
    WLCH,
    WLFR,
    WLGE,
    WLIT,
    WLKH,
    WLLA,
    WLPO,
    WLSP,
    WORC,
];


// COURSES_DICT is a dictionary of all the courses
const COURSES_DICT = {
    "ACCT": ACCT,
    "AERO": AERO,
    "AEST": AEST,
    "AMHE": AMHE,
    "AMST": AMST,
    "ARCH": ARCH,
    "ARHI": ARHI,
    "ARTS": ARTS,
    "ASAM": ASAM,
    "ATMO": ATMO,
    "BIOL": BIOL,
    "BMBT": BMBT, 
    "BMEN": BMEN,
    "BMSC": BMSC,
    "BOST": BOST,
    "BUSI": BUSI,
    "CHEM": CHEM,
    "CHEN": CHEN,
    "CIVE": CIVE,
    "COMP": COMP,
    "CONT": CONT,
    "CORE": CORE,
    "CRIM": CRIM,
    "DART": DART,
    "DGMD": DGMD,
    "DPTH": DPTH,
    "ECON": ECON,
    "EDUC": EDUC,
    "EECE": EECE,
    "ENGL": ENGL,
    "ENGN": ENGN,
    "ENGY": ENGY,
    "ENTR": ENTR,
    "ENVE": ENVE,
    "ENVI": ENVI,
    "ENVS": ENVS,
    "ETEC": ETEC,
    "EXER": EXER,
    "FAHS": FAHS,
    "FINA": FINA,
    "GEOL": GEOL,
    "GLST": GLST,
    "GNDR": GNDR,
    "GRFX": GRFX,
    "HIST": HIST,
    "HONR": HONR,
    "HSCI": HSCI,
    "IENG": IENG,
    "IM": IM,
    "INFO": INFO,
    "LABR": LABR,
    "LGST": LGST,
    "LIFE": LIFE,
    "LMUCM": LMUCM,
    "MARI": MARI,
    "MATH": MATH,
    "MECH": MECH,
    "MGMT": MGMT,
    "MIST": MIST,
    "MKTG": MKTG,
    "MLSC": MLSC,
    "MPAD": MPAD,
    "MSIT": MSIT,
    "MTEC": MTEC,
    "MUAP": MUAP,
    "MUBU": MUBU,
    "MUCM": MUCM,
    "MUED": MUED,
    "MUEN": MUEN,
    "MUHI": MUHI,
    "MUPF": MUPF,
    "MUSR": MUSR,
    "MUTH": MUTH,
    "NONC": NONC,
    "NURS": NURS,
    "NUTR": NUTR,
    "PCST": PCST,
    "PHIL": PHIL,
    "PHRM": PHRM,
    "PHYS": PHYS,
    "PLAS": PLAS,
    "POLI": POLI,
    "POLY": POLY,
    "POMS": POMS,
    "PSMA": PSMA,
    "PSYC": PSYC,
    "PTEC": PTEC,
    "PUBH": PUBH,
    "RADI": RADI,
    "ROTC": ROTC,
    "SCIE": SCIE,
    "SOCI": SOCI,
    "THEA": THEA,
    "UGTC": UGTC,
    "UMLO": UMLO,
    "UNCR": UNCR,
    "UTCH": UTCH,
    "WLAN": WLAN,
    "WLAR": WLAR,
    "WLCH": WLCH,
    "WLFR": WLFR,
    "WLGE": WLGE,
    "WLIT": WLIT,
    "WLKH": WLKH,
    "WLLA": WLLA,
    "WLPO": WLPO,
    "WLSP": WLSP,
    "WORC": WORC,
};

// For course in COURSES_DICT, get the 'total' field and add it to the total. Return the total result. 
let total = 0;
Object.keys(COURSES_DICT).map((key) => {
    total += COURSES_DICT[key].total;
});

// For course in COURSES_DICT, get the 'time' field and add it to the total. Return the time result. 
let time = 0;
Object.keys(COURSES_DICT).map((key) => {
    time += COURSES_DICT[key].time;
});


// Create COURSES Object
const COURSES_MERGED_DICT = {
    ...ACCT,
    ...AERO,
    ...AEST,
    ...AMHE,
    ...AMST,
    ...ARCH,
    ...ARHI,
    ...ARTS,
    ...ASAM,
    ...ATMO,
    ...BIOL,
    ...BMBT, 
    ...BMEN,
    ...BMSC,
    ...BOST,
    ...BUSI,
    ...CHEM,
    ...CHEN,
    ...CIVE,
    ...COMP,
    ...CONT,
    ...CORE,
    ...CRIM,
    ...DART,
    ...DGMD,
    ...DPTH,
    ...ECON,
    ...EDUC,
    ...EECE,
    ...ENGL,
    ...ENGN,
    ...ENGY,
    ...ENTR,
    ...ENVE,
    ...ENVI,
    ...ENVS,
    ...ETEC,
    ...EXER,
    ...FAHS,
    ...FINA,
    ...GEOL,
    ...GLST,
    ...GNDR,
    ...GRFX,
    ...HIST,
    ...HONR,
    ...HSCI,
    ...IENG,
    ...IM,
    ...INFO,
    ...LABR,
    ...LGST,
    ...LIFE,
    ...LMUCM,
    ...MARI,
    ...MATH,
    ...MECH,
    ...MGMT,
    ...MIST,
    ...MKTG,
    ...MLSC,
    ...MPAD,
    ...MSIT,
    ...MTEC,
    ...MUAP,
    ...MUBU,
    ...MUCM,
    ...MUED,
    ...MUEN,
    ...MUHI,
    ...MUPF,
    ...MUSR,
    ...MUTH,
    ...NONC,
    ...NURS,
    ...NUTR,
    ...PCST,
    ...PHIL,
    ...PHRM,
    ...PHYS,
    ...PLAS,
    ...POLI,
    ...POLY,
    ...POMS,
    ...PSMA,
    ...PSYC,
    ...PTEC,
    ...PUBH,
    ...RADI,
    ...ROTC,
    ...SCIE,
    ...SOCI,
    ...THEA,
    ...UGTC,
    ...UMLO,
    ...UNCR,
    ...UTCH,
    ...WLAN,
    ...WLAR,
    ...WLCH,
    ...WLFR,
    ...WLGE,
    ...WLIT,
    ...WLKH,
    ...WLLA,
    ...WLPO,
    ...WLSP,
    ...WORC,
};

// Export default result
export default {
    ...COURSES_MERGED_DICT,
    'time': time,
    'total': total,
};