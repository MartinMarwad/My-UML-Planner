
// React
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

// Local Components
import RootLayout from './components/Layout';
import DegreePathway from './pages/DegreePathway';
import Settings from './pages/Settings';
import * as DATA from './data';


const USER_DATA = new DATA.UserData();

// Load EECS Pathway:
USER_DATA.profiles['default'].addSemester("Fall", 2019, ["EECE.1070", "MATH.1310", "PHYS.1410", "PHYS.1410L", "HONR.1100"]);
USER_DATA.profiles['default'].addSemester("Spring", 2020, ["MATH.1320", "PHYS.1440", "PHYS.1440L", "ENGL.1020", "CHEM.1210", "CHEM.1230L"]);
USER_DATA.profiles['default'].addSemester("Fall", 2020, ["EECE.2010", "EECE.2070", "EECE.2160", "MATH.2310", "EECE.2460"]);
USER_DATA.profiles['default'].addSemester("Spring", 2021, ["EECE.2020", "EECE.2080", "EECE.2650", "ECON.2020", "MATH.2340"]);
USER_DATA.profiles['default'].addSemester("Fall", 2021, ["EECE.3110", "EECE.3620", "EECE.3640", "EECE.3650", "PHIL.3340"]);
USER_DATA.profiles['default'].addSemester("Spring", 2022, ["EECE.3120", "EECE.3170", "EECE.3600", "EECE.3630", "EECE.3660"]);
USER_DATA.profiles['default'].addSemester("Fall", 2022, ["EECE.3991", "EECE.4610", "EECE.3550", ]);
USER_DATA.profiles['default'].addSemester("Spring", 2023, ["EECE.4130", "EECE.4991"]);

console.log("Function: ", USER_DATA);

const App = () => {
    const [userData, setUserData, removeUserData] = useLocalStorage('user-data', USER_DATA);

    // var newData;
    // newData = DATA.AddSemester({ data: userData, year: 2020, term: "Fall", });
    // newData = DATA.AddClass({ data: newData, semesterIndex: 0, number: "COMP.1010", name: "Computing 1", credits: 3, grade: "A", status: "completed", });
    // const semesterGPA = DATA.CalculateSemesterGPA({ semester: newData['profiles']['default']['semesters'][0] });
    // console.log("Semester: ", newData);
    // console.log("Semester GPA: ", semesterGPA);
    // console.log("update: ", DATA.UpdateData({ data: newData }));

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<RootLayout />} >
                    <Route index element={<DegreePathway data={USER_DATA}/>} />
                    <Route path="/settings" element={<Settings/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App;