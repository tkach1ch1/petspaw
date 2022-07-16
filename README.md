<style>
painted {
  background-color: #f8f8f7;
  padding: 4px 7px;
  border-radius: 5px;
  font-size: 18px;
  color: #5c5e5e;
  font-weight: 500;
}

text {
    font-size: 30px;
}

list {
    font-size: 22px;
    font-weight: 500;
}

tech {
    font-size: 18px;
    font-weight: 500
}

question {
    font-size: 20px;
}

answer {
    font-size: 18px;
}



</style>

# PetsPaw🐈 #catslover

## Table of Contents

- [<list>About</list>](#about)
- [<list>Technologies</list>](#technologies)
- [<list>Setup</list>](#setup)
- [<list>FAQ</list>](#faq)

## <text>About</text>

**PetsPaw** is a project for people, who loves cats and want to share his cat images with other people or want to get more interesting about all kinds of cat breeds.

The application includes three main pages:

### _Voting page_:

On the voting page user always randomly get one any cat image and has an ability to perform one of three actions: like👍, dislike👎 or add image to favourites🧡.

After that the image will be saved and user can later watch what he has liked, disliked or added to favourites.

### _Breeds page_:

The breeds page is useful for people who want to get more information about a certain cat breed he is interesting in.

There are a lot of different cat breeds on the page and to get more information about some breed, user just need to click on the breed image he is interesting in.

### _Gallery page_:

On the gallery page are collected all cat photos which were shared from another application users.

There are a lot of select categories on this page to filter an image search in order to get only such images the user want to get.

Moreover there is an opportunity to add images from gallery to favourites only in one click and to share users cat images with another people with upload button help.

---

## <text>Technologies</text>

Main technologies used for this project:

- <tech>ReactJS (Create-react-app) v18.2.0 </tech>
- <tech>Material UI v5.8.6 </tech>
- <tech>Redux Toolkit v1.8.3 </tech>
- <tech>Redux Persist v8.0.2 </tech>

---

## <text>Setup</text>

Inside the project, you can run some built-in commands:

- To start the project locally in **development** mode:

<painted>npm start</painted> or <painted>yarn start</painted>

When you run the project, a new browser tab will automatically open on your computer's default browser to view the app.

The development server will start up on _http://localhost:3000_.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

- To start the project in **production** mode:

<painted>npm run build</painted> or <painted>yarn build</painted>

This command builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The app is ready to be used.

HAVE FUN!🐱

---

## <text>FAQ</text>

- <question>_Why you have used exactly those technologies you have noted in Technologies?_</question>

  - <answer>For this project I have chosen <tech>ReactJS</tech> only because I like this framework and I want to improve myself in this way further.</answer>

  - <answer>For CSS I have used <tech>Material UI</tech>. At first MUI has multiple pre-built components and templates, that saves my time, because I don't need to develop my own and can spend more time on functionality. Furthermore, each component is fully customizable. This make MUI suitable for different design needs too.</answer>

  - <answer><tech>Redux Toolkit</tech> is a good to manage application state. He is much easier for me then an old Redux and has good features like createAsyncThunk. With his help it is easier to write async logic and data fetching, what I'm using in this project quite often.
    </answer>

  - <answer> With the <tech>Redux Persist</tech> library is easy to save the Redux store in persistent storage, for example, the local storage. Therefore, even after refreshing the browser, the site state will still be preserved. Also in Redux Persist we can choose what Reducers we want to preserve in local store and what not.</answer>

- <question>_Why you have used so many different breakpoints, when there are only three in the design project?_</question>

  - <answer>For this project I have chosen most popular breakpoint such as:</answer>

    - <answer>For mobile devices:</answer>

      from 375px to 480px

    - <answer>For tablets:</answer>

      from 480px to 768px

    - <answer>For laptops:</answer>

      1024x768

      1280x720

      1366x768

      1440x900

      1920x1080

  <answer>The reason is because it was easier for me with more breackpoints to create a responsive design, in order to make this project look good on different screen sizes.</answer>

- <question>_Why uploaded image design in upload modal window on gallery page looks different compared with design layout?_</question>

  - <answer> Uploaded image I have styled with object-fit: contain to make an image more clearer. Although this is contrary to the design layout, where image width should be 100% of upload box, but on this way the proportions of any picture will be saved and it will be easier then for API to analyse an image for upload.</answer>
