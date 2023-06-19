import p1 from "../images/grp_ 600.jpg";
import p2 from "../images/Arduino_512x384.jpeg";
import p3 from "../images/Binary_512x683.jpeg";
import p4 from "../images/photography.webp";
import p5 from "../images/me_512x398.jpeg";

export default function About(props) {
  let isLightMode = props.mode;
  return (
    <div className={!isLightMode ? "dark" : ""}>
      <div className="bg-[#BCEAD5] dark:bg-[#245953] dark:text-white text-xl lg:text-2xl 2xl:text-3xl px-6 py-8 sm:p-12 md:py-14 md:px-10 lg:px-24 xl:px-40 2xl:px-48 text-justify space-y-14">
        <div className="flex flex-col md:flex-row">
          <img
            className="object-cover mx-auto md:items-stretch md:w-1/3 mb-3 sm:mb-6 md:mb-0 md:mr-10 lg:mr-16 xl:mr-22 2xl:mr-28 drop-shadow-xl rounded-2xl border-2 dark:border-yellow-400 border-[#6a1e2c]"
            src={p1}
            alt="coder"
          />
          <div className="flex items-center">
            <span>
              &emsp;&emsp;<span className="hidden md:inline">&emsp;</span>Hi, I'm Priyankar Koley, a computer science
              engineering student and a tech enthusiast. I'm from Burdwan, a
              town in West Bengal, India, where I grew up with a passion for
              technology and innovation. Ever since I was a kid, I loved to
              explore how things work and how to make them better.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <img
            className="object-cover mx-auto md:items-stretch md:w-1/3 mb-3 sm:mb-6 md:mb-0 md:ml-10 lg:ml-16 xl:ml-22 2xl:ml-28 drop-shadow-xl rounded-2xl border-2 dark:border-yellow-400 border-[#6a1e2c]"
            src={p2}
            alt="coder"
          />
          <div className="  flex items-center">
            <span>
              &emsp;&emsp;<span className="hidden md:inline">&emsp;</span>I'm currently pursuing my engineering degree
              from Techno Main Salt Lake, where I'm learning the fundamentals of
              computer science and developing my skills in various domains. I
              have experience in Android development, Web development, and
              Arduino coding. I have also participated in several hackathons and
              competitions where I showcased my projects and ideas.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <img
            className="object-cover mx-auto md:items-stretch md:w-1/3 mb-3 sm:mb-6 md:mb-0 md:mr-10 lg:mr-16 xl:mr-22 2xl:mr-28 drop-shadow-xl rounded-2xl border-2 dark:border-yellow-400 border-[#6a1e2c]"
            src={p3}
            alt="coder"
          />
          <div className="  flex items-center">
            <span>
              &emsp;&emsp;<span className="hidden md:inline">&emsp;</span>Some of the values that guide my work are
              determination, creativity, and collaboration. I always strive to
              do my best in whatever I do and to overcome any challenges that
              come my way. I enjoy working with others who share my vision and
              enthusiasm for technology. I believe that engineering is not only
              about solving problems, but also about creating solutions that can
              improve people's lives.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <img
            className="object-cover mx-auto md:items-stretch md:w-1/3 mb-3 sm:mb-6 md:mb-0 md:ml-10 lg:ml-16 xl:ml-22 2xl:ml-28 drop-shadow-xl rounded-2xl border-2 dark:border-yellow-400 border-[#6a1e2c]"
            src={p4}
            alt="coder"
          />
          <div className="  flex items-center">
            <span>
              &emsp;&emsp;<span className="hidden md:inline">&emsp;</span>Apart from technology, I have many other
              interests and hobbies that keep me balanced and happy. I love
              football, going to the gym, and swimming. I also love photography
              and capturing the beauty of nature and life. These activities help
              me relax and recharge my energy. Also, I've been into Animes Lately! 😉
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <img
            className="object-cover mx-auto md:items-stretch md:w-1/3 mb-3 sm:mb-6 md:mb-0 md:mr-10 lg:mr-16 xl:mr-22 2xl:mr-28 drop-shadow-xl rounded-2xl border-2 dark:border-yellow-400 border-[#6a1e2c]"
            src={p5}
            alt="coder"
          />
          <div className="  flex items-center">
            <span>
              &emsp;&emsp;<span className="hidden md:inline">&emsp;</span>My goal is to learn as much as I can about
              technology and to become a proficient and versatile engineer. I'm
              always eager to learn new things and to expand my horizons. I'm
              especially interested in artificial intelligence and machine
              learning, which I think are the future of technology and humanity.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          
          <div className="  flex items-center">
            <span>
              &emsp;&emsp;<span className="hidden md:inline">&emsp;</span>If you want to know more about me or my work, feel free to contact me or check out my portfolio. I'm always open to new opportunities and challenges. Thank you for reading!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
