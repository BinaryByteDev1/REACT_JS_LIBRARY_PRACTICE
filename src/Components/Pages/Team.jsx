import './Team.css';
function Team() {
    return (
        <div>
            <div className="containerTeam flex justify-center items-center py-16 bg-stone-800">
                <div className='text-justify py-20 p-10 w-3/4'>
                    <h1 className='headingGrad text-center heading text-6xl font-bold'>
                        React Js Library
                    </h1>
                
                    <p className='p-10 text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                        
                        <p className='my-3'>
                        <b>Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Est iusto quaerat dignissimos consequatur et obcaecati minima dolore placeat quibusdam nihil.</b>
                    </p></p>
                    <div className="flex justify-center text-black">
                        <button className="text-black bg-white w-80 p-4 font-medium text-xl rounded-md">Documentation</button>
                    </div>
                </div>


                <div className='text-justify py-20 p-10 w-3/4'>
                    <h1 className='headingGrad text-center heading text-6xl font-bold'>
                        React Native 
                    </h1>
                
                    <p className='p-10 text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eos dolorem labore sequi ipsa atque tenetur ex similique. Cumque assumenda voluptas ad dolorem, ex excepturi. Adipisci fugit praesentium labore maiores optio ipsum. Blanditiis molestiae natus harum qui accusamus quidem sunt quaerat, tempore quam ut voluptas ipsa! Quam ducimus velit quae.
                        <p className='my-3'>
                        <b>Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Est iusto quaerat dignissimos consequatur et obcaecati minima dolore placeat quibusdam nihil.</b>
                    </p></p>
                    <div className="flex justify-center text-black">
                        <button className="text-black bg-white w-80 p-4 font-medium text-xl rounded-md">Documentation</button>
                    </div>
                </div>
               
                </div>

        </div>
    )
}

export default Team;