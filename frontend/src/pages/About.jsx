import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newslater from "../components/Newslater";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            provident qui quis optio laboriosam velit aperiam maiores deleniti
            sit in nesciunt porro impedit sed, eveniet modi ipsa, eius aliquam
            omnis voluptatibus? Dignissimos quibusdam obcaecati aliquam iusto
            commodi molestiae expedita, reiciendis architecto quidem accusantium
            porro itaque placeat voluptatum! Quis, iure. Voluptatem architecto
            provident laudantium blanditiis expedita.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            eum quibusdam consequatur quasi eligendi illum pariatur. Dolor
            architecto totam vel harum nostrum a. Cupiditate tenetur laudantium
            expedita necessitatibus consequatur, animi aperiam quasi vel, qui
            eligendi, labore nulla excepturi mollitia officiis id maiores
            accusantium pariatur natus officia debitis iure facilis alias eos
            dignissimos? Reprehenderit aperiam veritatis rerum nostrum.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi
            delectus impedit illum autem repellat dicta, omnis quod harum ad
            voluptates consequuntur exercitationem consectetur iste voluptatem
            deserunt est laborum facilis. Vitae, perspiciatis?
          </p>
        </div>
      </div>
      <div className="text-xl  py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab
            explicabo distinctio placeat iste, tenetur illum quae at quis
            impedit minus vitae excepturi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab
            explicabo distinctio placeat iste, tenetur illum quae at quis
            impedit minus vitae excepturi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab
            explicabo distinctio placeat iste, tenetur illum quae at quis
            impedit minus vitae excepturi!
          </p>
        </div>
      </div>
      <Newslater />
    </div>
  );
};

export default About;
