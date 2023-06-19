import coder_guy from "../images/coder2.png";
import p1 from "../images/1.png";
import p2 from "../images/2.png";
import p3 from "../images/ff.png";

export default function Home(props) {
  let isLightMode = props.mode;
  return (
    <span className={!isLightMode ? "dark" : ""}>
      <div class="bg-gray-50 min-h-screen flex items-center justify-center px-6">
        <div class="relative w-full max-w-4xl">
          <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-72 h-72 hidden bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="flex w-full space-x-24">
            <div class="m-8 relative space-y-4">
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-48 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-56 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
                </div>
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-44 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <img className="h-64" src={p1} alt="ddf" />
            </div>
          </div>
          <div className="flex w-full space-x-24">
            <div class="m-8 relative space-y-4">
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-48 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-56 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
                </div>
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-44 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <img className="h-64" src={p2} alt="ddf" />
            </div>
          </div>
          <div className="flex w-full space-x-24">
            <div class="m-8 relative space-y-4">
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-48 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-56 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
                </div>
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="h-4 w-44 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <img className="h-64" src={p3} alt="ddf" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* image */}
        <div className="bg-[#BCEAD5] dark:bg-[#245953] sm:fle sm:absolute sm:w-full -z-10">
          <img
            className="sm:w-5/6 mr-auto ml-auto"
            src={coder_guy}
            alt="coder_guy"
          />
          <div className="text-[#46ABFF] sm: w-full hidden sm:block sm:absolute sm:bottom-2 sm:text-2xl text-center font-semibold md:hidden">
            And, I love&nbsp;
            <span className="font-bold underline">COMPUTERS!</span>
            🖥️
          </div>
        </div>

        <div className=" pt-5 text-2xl space-y-6 sm:space-y-9 xl:space-y-5">
          {/* glad to see you here */}
          <span className="block text-center font-semibold sm:-mt-3 md:text-left md:mt-1 md:pl-16 md:pt-5 lg:pt-20 xl:mt-11 xl:pl-40 xl:pt-24 md:text-2xl 2xl:pl-52 2xl:text-3xl">
            Hey, Glad to see
            <span className="font-home text-[#46ABFF]">&nbsp;you</span> here!
          </span>

          {/* I'm PK */}
          <span className="font-home block text-center font-bold sm:text-left sm:pl-5 md:pl-8 lg:pl-11 sm:text-3xl lg:text-3xl 2xl:text-4xl 2xl:pl-32">
            <span className="font-sans text-[#46ABFF] not-italic text-7xl xl:text-8xl 2xl:text-10xl">
              I'm <br className="hidden sm:block lg:hidden" />
            </span>
            Priyankar Koley
          </span>

          {/* And, I 💖 Comp */}
          <span className="block text-center font-semibold md:pr-6 lg:pt-16 lg:pr-9 xl:pt-36 xl:pr-9 xl:text-3xl 2xl:text-4xl">
            <div className="sm:hidden md:block md:float-right md:w-fit">
              <span className="md:block w-fit font-home">And,</span>
              <span className="md:block lg:inline w-fit font-home">
                I love{" "}
              </span>
              <span className=" text-[#46ABFF] font-bold">COMPUTERS!</span>
              🖥️
            </div>
          </span>
        </div>
      </div>
    </span>
  );
}
