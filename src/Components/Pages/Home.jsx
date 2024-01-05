import image from './react2.png';
import './Home.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Link , Outlet } from 'react-router-dom';
function Home() {
    return (
        <div>
            <div className="container flex justify-center items-center py-16">

                <div className='text-justify py-20 p-10 w-3/4'>
                    <h1 className='heading text-6xl font-bold text-center'>
                        React , React Routing and Tailwind Css
                    </h1>
                   
                    <p className='p-10 '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                        <p className='my-3'>
                        <b>Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Est iusto quaerat dignissimos consequatur et obcaecati minima dolore placeat quibusdam nihil.</b>
                    </p></p>
                    <div className='flex justify-center'>
                        <button className='w-4/5 bg-blue-700 py-5 text-white text-2xl font-bold rounded-md'>Documentation</button>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center'>
                    <img className='rotate__image w-3/4' src={ image } alt=""/>
                </div>
            </div>


            <div className="bodycontainer top-3 w-full h-auto bg-white flex justify-center">
                <div className='bodyInner w-11/12 bg-zinc-100 shadow-inner rounded-md'>
                    <div className='mainInnerCotainer bg-blue-700 p-6 rounded-t-md'>
                        <ul className='flex justify-evenly text-white'>
                            <li className='cursor-pointer font-medium t' t><Link to={'/'}>React Js</Link></li>
                            <li className='cursor-pointer font-medium t'><Link to={'/ReactRouting'}>React Routing</Link></li>
                            <li className='cursor-pointer font-medium t'><Link to={'/ReactRedux'}>React Redux</Link></li>
                            <li className='cursor-pointer font-medium t'><Link to={'/ReactHooks'}>React Hooks</Link></li>
                            <li className='cursor-pointer font-medium t'><Link to={'/ReactNative'}>React Native</Link></li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>

           

        </div>
    )
}

export default Home;