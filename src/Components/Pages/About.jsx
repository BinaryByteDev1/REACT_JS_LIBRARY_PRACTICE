import image from './react2.png';
function About() {
    return (
        <div>
          <div className="container flex justify-center items-center bg-gray-900 py-16">

            <div className='text-justify py-20 p-10 w-3/4'>
                <h1 className='heading text-6xl font-bold text-center'>
                        ReacT, React Redux, Next-Js , React Routing
                </h1>
            
                <p className='p-10 text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                    <p className='my-3'>
                    <b>Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Est iusto quaerat dignissimos consequatur et obcaecati minima dolore placeat quibusdam nihil.</b>
                </p></p>

                <div className='button flex justify-center gap-20'>
                <button className='btn text-white bg-blue-400 w-60 p-3 rounded-lg'>Read More</button>
                <button className='btn text-white bg-blue-400 w-60 p-3 rounded-lg'>Explore More</button>
            </div>
            </div>
            <div className='w-1/2 flex justify-center'>
                <img className='rotate__image w-3/4' src={ image } alt=""/>
            </div>
           
            </div>
        </div>
    )
}

export default About;