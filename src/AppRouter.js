import Footer from './components/Footer';
import { useEffect, useState,useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
import VisionandMission from './pages/VisionandMission';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure'
import AcadCordinator from './pages/AcadCordinator';
import NewNavbar from './components/NewNavbar';
import Menu from './components/Menu';
import ContactUs from './pages/ContactUs';
import Achievements from './pages/Achievements';
import { useRef } from 'react';
import Programme from './pages/Programme';
import Faculty from './pages/Faculty';
import Staff from './pages/Staff';
import Students from './pages/Students';
import Alumni from './pages/Alumni';
import PhdScholar from './pages/PhdScholar';
import Profile from './components/Profile';
import FacultyLogin from './pages/FacultyLogin';
import Otherprofilelink from './forms/facultyprofile/Otherprofilelink'
const AppRouter = () => {
  const footref = useRef();
  const isInViewport1 = useIsInViewport(footref);
  // console.log('isInViewport1: ', isInViewport1);
  const [fixedmenu, setFixedmenu] = useState(isInViewport1);
  useEffect(() => {
    setFixedmenu(isInViewport1);
  }, [isInViewport1]);
  const [scrollupmenu, setScrollupmenu] = useState(false);
  const SetScrollupmenu = (val)=>{
    setScrollupmenu(val);
  }
  const departments={

    "it":"Information Technology",
    "cse":"Computer Science and Engineering",
    "bt":"Bio Technology",
    "ce":"Civil Engineering",
    "ch":"Chemical Engineering",
    "ec":"Electronics And Communication Engineering",
    "ee":"Electrical And Electronics Engineering",
    "ice":"Instrumentation And Control Engineering",
    "me":"Mechanical Engineering",
    "ipe":"Industrial And Production Enginnering",
    "ma":"Mathematics",
    "ph":"Physics",
    "tt":"Textile Technology",
    "hm":"Humanities",
    "cy":"chemistry"
  }
  // const ProtectorRoute=({children})=>{
  //   const dept=useLocation().pathname.split('/')[2];
   
  //     if(dept in departments){
  //       return children;
  //     }else{
  //       return <Navigate to={"/dept/errorpage"}/>
  //     }
  //   }
  return (
    <>
      <div className='top-0 p-0 my-0 mx-auto max-w-[1600px] h-full shadow-lg'>
        <Router>
          <div className='md:mb-2'>
            <NewNavbar SetScrollupmenu={SetScrollupmenu} />
          </div>

          <div className="flex flex-col lg:flex-row w-full mt-[6.5rem] lg:min-h-screen overflow-y-auto overflow-x-hidden">
            <div className=" w-full lg:w-[270px] absolute lg:relative bg-white z-10 py-2 px-0">
              <div className='w-full my-auto lg:shadow-lg lg:block lg:pt-8 h-full'>
                <Menu fixedmenu={fixedmenu} scrollupmenu={scrollupmenu}/>
              </div>
            </div>
            <div className="w-full flex items-center justify-center lg:w-[calc(100%-270px)] mt-8 md:mt-2 h-full">
              <Routes>
                <Route path='/dept/:dept/Home' element={ <Homepage/> } />
                <Route path='/dept/:dept/Placement' element={ <AllPlacement /> } />
                <Route path='/*' element={<Error />} />
                {/* About us */}
                <Route path='/dept/:dept/MessageofHOD' element={ <HodMessage /> } />
                <Route path='/dept/:dept/MissionandVision' element={ <VisionandMission /> } />
                <Route path='/dept/:dept/Infrastructure' element={ <Infrastructure /> } />
                {/* Academic */}
                <Route path='/dept/:dept/Syllabus' element={ <Syllabus heading='Syallbus' syllabus={true} /> } />
                <Route path='/dept/:dept/Timetable' element={ <Syllabus heading='Time Table' syllabus={false} /> } />
                <Route path='/dept/:dept/Acadcord' element={ <AcadCordinator /> } />
                <Route path='/dept/:dept/Programme' element={ <Programme /> } />
                <Route path='/dept/:dept/contactus' element={ <ContactUs /> } />
                <Route path='/dept/:dept/Achievement' element={ <Achievements /> } />
                {/* Faculty */}
                <Route path='/dept/:dept/Faculty' element={ <Faculty/> } />
                <Route path='/dept/:dept/Profile/:id' element={ <Profile/> } />
                <Route path='/dept/:dept/Staff' element={ <Staff/> } />
                <Route path='/dept/:dept/Student' element={ <Students/> } />
                <Route path='/dept/:dept/Alumni' element={ <Alumni/> } />
                <Route path='/dept/:dept/PhdScholar' element={ <PhdScholar/> } />
                <Route path='/dept/:dept/login' element={ <FacultyLogin/> } />

              </Routes>
            </div>
          </div>
          <div ref={footref} className='w-full h-full pt-2'>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  )
};


export default AppRouter;

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}