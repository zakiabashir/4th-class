import Image from "next/image";
import React from "react";
export default function country() {
    return (
        <div id="about" className="bg-gradient-to-br from-red-800 via-gray-400 to-teal-600">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-2xl mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={"/image/country.jpeg"}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Countries
            </h1>
            <p className="mb-5 leading-relaxed text-gray-800">
            There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine.  There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine.        </p>
            <p className="mb-5 leading-relaxed text-gray-800">
            There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine.There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine.         </p>
            
          </div>
        </div>
      </section>
    </div>
  );
   
}