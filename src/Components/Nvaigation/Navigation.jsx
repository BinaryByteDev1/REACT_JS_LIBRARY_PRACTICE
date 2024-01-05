import './Navigation.css';
import image from './react.png';
import { Link } from 'react-router-dom';
function Navigation(){
    return (
        <div className=''>
            <div className="navigation w-full h-auto flex justify-between items-center py-5 pr-5 
            backdrop-brightness-125 backdrop-blur-sm bg-indigo-500/90 fixed z-10">
                <div className="item-pages ">
                    <ul class="flex justify-center gap-10 font-medium cursor-pointer text-white text-xl font-sarif pl-10">
                        
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/About'}>About</Link></li>
                        <li><Link to={'/Services'}>Services</Link></li>
                        <li><Link to={'/Team'}>Team</Link></li>
                        <li><Link to={'/Collabaration'}>Collabaration</Link></li>
                    </ul>
                </div>
                <div className="search_box flex gap-4">
                    <input class="w-40*2 p-2 pl-5 pr-12 rounded-md" type="text" placeholder="Search"/>
                    <button className='btn cursor-pointer p-2 pl-3 pr-3 text-black font-medium bg-fuchsia-50 rounded-md'>Search</button>
                </div>
            </div>

            


        </div>
    )
}
export default Navigation;