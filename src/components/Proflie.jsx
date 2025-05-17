import React from 'react'
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";


const Proflie = () => {
  return (
    <section className='profile-section-container'>
    <section className='plateform-profile'>
        <a href="https://leetcode.com/u/dshivank630/">
            <div>
                <TbBrandLeetcode className='reactIcon leetcode'/>
                <h3>LeetCode</h3>
            </div>
        </a>
        <a href="https://www.codechef.com/users/dshivank">
            <div>
                <SiCodechef  className='reactIcon codechef'/>
                <h3>CodeChef</h3>
            </div>
        </a>
       
        <a href="https://codeforces.com/profile/shivank_dixit">
            <div>
                <SiCodeforces  className='reactIcon codeforces'/>
                <h3>Codeforces</h3>
            </div>
        </a>
        <a href="https://www.geeksforgeeks.org/user/dshivank/">
            <div>
                <SiGeeksforgeeks className='reactIcon gfg'/>
                <h3>GeeksforGeeks</h3>
            </div>
        </a>
    </section>

    <section className='profile-section-achievements'>
         <h1 className='main-heading'>Achievements</h1> 
           <div>
               <h2> <FaHandPointRight /> TCS CodeVita Season-12</h2>
                <span> <FaArrowRightFromBracket />   Global rank of <b>326</b> in Round1 among 4lakh participants</span> <br />
                <span> <FaArrowRightFromBracket />  Global rank of <b>191</b> in Round2 </span> 
            </div>
            <span> <FaHandPointRight />Achieved <b>Knight</b> title in LeetCode with the contest rating of <b>1940</b> (top 3 % in leetcode community accross the globe) </span>  <br />
            <span> <FaHandPointRight /> Achieved <b>Pupil</b> title with maximum rating of <b>1332</b> in Codeforces </span>  <br />
            <span> <FaHandPointRight /> 5 <MdOutlineStar style={{color:"yellow"}}/> with maximum rating of <b>2034</b> in GeeksForGeeks </span> <br />
            <span> <FaHandPointRight /> 3 <MdOutlineStar style={{color:"yellow"}}/> with maximum rating of <b>1705</b> in CodeChef </span> <br />
            <span> <FaHandPointRight /> Achieved a global rank of <b>543</b> out of 26,033 participants in LeetCode Weekly Contest 424.</span> <br /> 
            <span> <FaHandPointRight /> Achieved a global rank of <b>2</b> out of 5000+ participants in CodeChef Starter 162 (Div-3),</span> <br />
            <span> <FaHandPointRight /> Achieved a global rank of <b>77</b> out of 6,543 participants in CodeChef Starter 148 (Div-3)</span> <br />
    </section>
    </section>
  )
}

export default Proflie