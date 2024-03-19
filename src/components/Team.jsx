import React from 'react'
import avatar from '../images/avatar.png'

const Team = () => {
  return (
    <div classname='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our team</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Meet our team of dedicated professionals who strive to provide you with the best quality service</p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Jese Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">John Mc Glinchey</a>
              </h3>
              <p>CEO</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Joseph Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Darren Mc Glinchey</a>
              </h3>
              <p>Job Title</p>

          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Sofia Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Person 3</a>
              </h3>
              <p>Job Title</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Leslie Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Person 4</a>
              </h3>
              <p>Job Title</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Michael Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Person 5</a>
              </h3>
              <p>Job Title</p>

          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Neil Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Person 6</a>
              </h3>
              <p>Job Title</p>

          </div>
      </div>  
  </div>
    </div>
  )
}

export default Team