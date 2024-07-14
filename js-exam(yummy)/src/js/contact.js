export function contact(element) {
  let box = `

  <div class="container col-span-4 px-5 py-24 relative text-gray-400">
    
    <div class="mb-12 flex w-full flex-col text-center">
      <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
    </div>

    <div class="mx-auto md:w-2/3 lg:w-1/2">
      <div class="-m-2 flex flex-wrap">

        <!-- form -->
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="text" id="name" name="name" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
            <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="email" id="email" name="email" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
            <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="tel" id="phone" name="phone" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Phone" />
            <label for="phone" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Phone</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="number" id="age" name="age" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Age" />
            <label for="age" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Age</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="password" id="password" name="password" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Password" />
            <label for="password" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Password</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="password" id="re-password" name="re-password" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Re password" />
            <label for="re-password" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Re password</label>
          </div>
        </div>
        <div class="mt-4 w-full p-2">
        <div class="w-full p-2">
          <button id="submitBtn" class="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white">Submit</button>
        </div>
      </div>
    </div>
  </div>`;

  element.innerHTML = box;
  document.getElementById('submitBtn').disabled = true
  let nameRegex = /^[A-Za-z]{3,}$/
  let mailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
  let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

  let nameValue = document.getElementById('name').value
  let mailValue = document.getElementById('mail').value
  let phoneValue = document.getElementById('phone').value
  let passValue = document.getElementById('password').value
  let rePass = document.getElementById('re-password').value

  if (nameRegex.test(nameValue) &&
        mailRegex.test(mailValue) &&
        phoneRegex.test(phoneValue) &&
        passwordRegex.test(passValue) &&
        passwordRegex.test(rePass)){
            document.getElementById('submitBtn').disabled = false
        }
}
