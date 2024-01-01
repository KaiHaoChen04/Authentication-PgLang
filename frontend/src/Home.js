import React, {useRef} from "react";
import './Home.css';
import ReactPlayer from 'react-player';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=4fBlDmqXJao';

const Home = () => {
  return (
    <div className="container">
      <div className="headline">
        <h1>PgL</h1>
        <h1 className="slanted">a </h1>
        <h1> ng&copy;</h1>
      </div>
      <button type="submit">
        <img className="emails" src="https://i.ibb.co/CW5Wvry/buttonpng.png" alt="Error" />
      </button>
      <button type="submit">
        <img className="dL" src="https://cdn-icons-png.flaticon.com/512/189/189249.png" alt="Error" />
      </button>
      <button type="submit">
        <img className="qA" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lol_question_mark.png/640px-Lol_question_mark.png" alt="Error" />
      </button>
      <img className="pg" src="https://i.pinimg.com/originals/fa/7f/6c/fa7f6cfe06e9179c02732068431fce7c.jpg" alt="Error" />
      <p className="name"> <em>Created by Kendrick Lamar & Dave Free </em></p>
      <p>
        <i>Creativity </i> and <i>Innovation.</i>
      </p>
      <h2>Ide&alpha;</h2>
      <div>
         <ReactPlayer url={VIDEO_PATH} controls={false} />
      </div>
      <h2 className="idea">Okl&alpha;m&alpha;</h2>
      <p className="words">
        Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ipsum, alias sequi explicabo fugit at dolores maiores? Nihil cumque iste, deserunt itaque, nobis quibusdam nisi sequi accusamus magni dolorum fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque corrupti et non iure odio id dignissimos dolor aut adipisci. Illum architecto tempore eligendi perspiciatis eius sit dignissimos id veniam!Loremlore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nesciunt deserunt eaque fugit placeat aperiam repudiandae vero minus voluptatum quam debitis commodi, doloremque, quae animi veniam. Inventore neque blanditii Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quam dolorem dolorum eaque atque libero adipisci? Eaque dolor quisquam, obcaecati repellendus, libero reprehenderit, exercitationem ipsam commodi eveniet beatae quia!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ipsum, alias sequi explicabo fugit at dolores maiores? Nihil cumque iste, deserunt itaque, nobis quibusdam nisi sequi accusamus magni dolorum fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque corrupti et non iure odio id dignissimos dolor aut adipisci. Illum architecto tempore eligendi perspiciatis eius sit dignissimos id veniam!Loremlore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nesciunt deserunt eaque fugit placeat aperiam repudiandae vero minus voluptatum quam debitis commodi, doloremque, quae animi veniam. Inventore neque blanditii Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quam dolorem dolorum eaque atque libero adipisci? Eaque dolor quisquam, obcaecati repellendus, libero reprehenderit, exercitationem ipsam commodi eveniet beatae quia!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ipsum, alias sequi explicabo fugit at dolores maiores? Nihil cumque iste, deserunt itaque, nobis quibusdam nisi sequi accusamus magni dolorum fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque corrupti et non iure odio id dignissimos dolor aut adipisci. Illum architecto tempore eligendi perspiciatis eius sit dignissimos id veniam!Loremlore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nesciunt deserunt eaque fugit placeat aperiam repudiandae vero minus voluptatum quam debitis commodi, doloremque, quae animi veniam. Inventore neque blanditii Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quam dolorem dolorum eaque atque libero adipisci? Eaque dolor quisquam, obcaecati repellendus, libero reprehenderit, exercitationem ipsam commodi eveniet beatae quia!amet consectetur adipisicing elit. Voluptatem atque temporibus quae sapiente a tempore aperiam doloribus vitae laudantium magnam dolores, possimus soluta tenetur optio. Non eum perferendis quibusdam commodi.
      </p>
      <a href="#">
        <p>Back to Top</p>
      </a>
    </div>
  );
};

export default Home;
