import imageNode from './nodejs.png';
import './Services.css';
function Services() {

    return (
        <div>
            <div className="container2 flex justify-center items-center py-16">
                <div className='innerGrad text-justify py-20 p-10 w-3/4'>
                    <h1 className='headingGrad text-6xl font-bold text-center z-10'>
                            Node-js , Npm , Yarn , Git ans GitHub
                    </h1>

                    <p className='p-10 text-white z-10'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                    </p>
                   
                </div>
                <div className='w-1/2 flex justify-center'>
                    <img className='rotate__image w-3/4' src={ imageNode } alt=""/>
                </div>

                </div>
                <div className='w-full h-60 bg-indigo-700 flex justify-center items-start p-16'>
                        <input className="h-20 w-4/5 rounded-xl" type="text" placeholder='Search any Quary :- '/>
                </div>
        </div>
    )
}

export default Services;