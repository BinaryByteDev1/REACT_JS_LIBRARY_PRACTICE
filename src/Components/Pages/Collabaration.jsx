import image1 from './react2.png';
import image2 from './nodejs.png';
function Collabaration() {
    return (
        <div>
             <div className="containerColl justify-center items-center py-16 bg-indigo-950">

                <div className='text-center py-20 p-10 w-full'>
                    <h1 className='headingGrad heading text-6xl font-bold'>
                        React , React Routing and Tailwind Css
                    </h1>
                
                    <p className='p-10 text-white'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, magnam nam? Delectus illo esse accusantium quos quod, sit numquam beatae amet, impedit dolorem assumenda facere doloremque? Et atque vitae eos, assumenda asperiores perferendis tempora, accusamus accusantium odit, modi dignissimos officiis enim ut! Fuga, deleniti sequi quis magni incidunt impedit voluptatem libero consequatur debitis vitae pariatur laborum modi corrupti! A incidunt nostrum quae praesentium, odio debitis enim omnis rerum sapiente perferendis beatae illo nam sed repudiandae ipsa quidem suscipit? Non facere vero perspiciatis, libero sapiente voluptates nobis rerum porro modi ea, id quo! Fuga praesentium modi expedita necessitatibus ex assumenda odit, sunt, tempora quod, maxime voluptate perspiciatis nisi ullam totam accusamus dolor dolorum ad natus temporibus itaque! Maxime corporis quo tempore quibusdam soluta ea perferendis dicta incidunt, saepe nulla sunt pariatur earum repellat dolore deserunt odio aut beatae quos distinctio facilis molestias ducimus? Molestiae eos ut quas, neque omnis totam illo animi? Tempore culpa sit iusto, distinctio asperiores quasi id error? Porro cum quasi, dolores expedita molestiae maiores deserunt, molestias omnis eaque repellendus accusamus fugiat nulla, at rem. Incidunt inventore cum fuga eum quas? Voluptatem ratione explicabo, velit praesentium neque inventore nihil! Magni, exercitationem corrupti porro vel est corporis non eum.</p>
                    </p>
                </div>
                <div className="flex justify-evenly w-full gap-20">
                    <img className="rotate__image w-96" src={image1} alt="" />
                    <img className="rotate__image w-96" src={image2} alt="" />

                </div>
               
                </div>
        </div>
    )
}

export default Collabaration;