<h1 align="center">
  <a href="https://github.com/saRvaGnyA/ReachOut-SIH-Prototype">
    <img src="https://github.com/saRvaGnyA/ReachOut/raw/main/client/src/Logos/Logo2.png" alt="ReachOut" width="250" height="250">
  </a>
  <br>
  ReachOut
</h1>
 
<div align="center">
   <strong>ReachOut</strong> - An Accessible software for facilitation of various Govt. schemes for persons with disabilities <br>
  Smart India Hackathon '22 - Team TechnoSrats <br>
</div>

<hr>

<details>
<summary>Table of Contents</summary>

- [Description](#description)
- [Links](#links)
- [Tech Stack](#tech-stack)
- [Progress](#progress)
- [Future Scope](#future-scope)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [Team Members](#team-members)

</details>

## 📝Description

<table>
  <tr>
    <td>
Our idea “ReachOut” aims to build a progressive web app that makes access for the specially abled to government schemes expeditious and empowers them
<br><br>
      The <i>key features</i> of <strong>ReachOut</strong>:
      <ul>
<li> Ease of Accessibility and Navigation for all types of differently abled persons
<li> A single platform for all government schemes for the specially abled and their caregivers
      </ul>
    </td>
  </tr>
  </table>
  
The web-app has 3 access levels implemented
1. User
2. Admin (Government)
3. Company

### Flow for the User Access Level

![image](https://user-images.githubusercontent.com/24823649/186803986-c3aa1b7a-ad6f-40cb-94ab-266179721db6.png)
  
### Flow for the Admin Access Level (Government)

![image](https://user-images.githubusercontent.com/24823649/186803910-a7b239e6-4020-4f85-95aa-ef2e1f3ac9e3.png)

### Flow for the Company Access Level

![image](https://user-images.githubusercontent.com/24823649/186804039-12923f65-a3dc-4452-aaef-f982ed37d96d.png)
  
### Flowcharts for the Model

![WhatsApp Image 2022-08-26 at 6 13 10 AM](https://user-images.githubusercontent.com/24823649/186803619-8be1770a-c349-4c71-9740-38f78b5118f4.jpeg)  

![WhatsApp Image 2022-08-26 at 6 12 43 AM](https://user-images.githubusercontent.com/24823649/186803641-b8e025e7-4770-4f74-8aec-8279b967a9e5.jpeg)

  
## 🔗Links

### Frontend (Vercel)
- [**ReachOut**](https://reach-out-sih-prototype.vercel.app/) 🚀

### Assets
- [GitHub Repo](https://github.com/saRvaGnyA/ReachOut-SIH-Prototype)
- [GitHub Repo for the Model](https://github.com/devdev29/reachout_gesture_api)
- [Drive link for PPT]()

### Backend (Heroku)
- [ReachOut Server](https://reachout-sih.herokuapp.com/)
- [ReachOut Gesture Detection Model Deployment](https://reachout-gesture-api.herokuapp.com/)

## 🤖Tech-Stack

### Web Development

- NextJS
- Tailwind CSS

### Database

- PostgreSQL (using Supabase)

### APIs

- Hasura GraphQL API (over the Postgres DB)
- FastAPI (for the model)

### Machine Learning

- Tensorflow (for gesture detection)
- Gensen (for document parsing)

## 📈Progress

- [x] 

## 🔮Future Scope



## 🛠Project Setup

### For the web-app

1. Clone the GitHub repo
   ```
   $ git clone https://github.com/saRvaGnyA/ReachOut-SIH-Prototype.git
   ```
2. Enter the `client` directory. Install all the required dependencies. Ensure that remove any globally-installed packages like the React CLI, Tailwind CLI, PostCSS CLI or ESLint are uninstalled before proceeding ahead
   ```
   $ cd client
   $ yarn add
   ```
3. Setup the `.env.local` file for storing the environment variables. A demo file for this is as follows:
   ```
   HASURA_ADMIN_SECRET = your hasura admin key
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your supabase anon key
   NEXT_PUBLIC_SUPABASE_URL = your supabase public url
   ```
4. If you are working on Visual Studio Code or WebStorm, it'd be convenient to install the extensions for [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### For the model

1. Clone the GitHub repo
   ```
   $ git clone https://github.com/devdev29/reachout_gesture_api.git
   ```
2. Create a virtual environment on the anaconda command prompt (Install [conda](https://docs.conda.io/en/latest/) if not installed) and then switch to that virtual environment. Lets say the name of the env is test.
   ```
   $ conda create -n test python=3.8 anaconda
   $ conda activate test
   ```
3. Look for requirments.txt and install the packages.
   ```
   $ pip install -r requirements.txt
   ```

### For the FastAPI

1. Look for the `main.py` and `runtime.py` files and have them ready. (The packages for FastAPI would already be installed when you run command number 3 in the above section)

## 💻Usage

Once the required setup and installation is completed, you can start developing and running the project.

### For the web-app

1. Go to the `client` directory and run the `dev` script to activate the development server
   ```
   $ npm run dev
   ```
   Before pushing any commit, make sure to run the `lint` script and fix any linting errors
   ```
   $ npm run lint
   ```
   If you get an ESLint, Tailwind or PostCSS version conflict error, make a `.env` file in the `client` directory with the following contents:
   ```
   SKIP_PREFLIGHT_CHECK = true
   ```

### For the model and for the FastAPI

1. Locate to the `Model` directory. The models for the project are in `gesture_model.tflite` file.

2. Open the command prompt for anaconda and switch to the virtual environment that you created. (example: test)

   ```
   $ conda activate test
   ```

3. To initiate the server, type the following in the command prompt

   ```
   $ python main.py
   ```

## 👩‍💻Team Members

- [@Sarvagnya Purohit](https://github.com/saRvaGnyA)
- [@Smit Sekhadia](https://github.com/smitsekhadiaa)
- [@Harsh Nag](https://github.com/Jigsaw-23122002)
- [@Anuraag Jajoo](https://github.com/anurgj)
- [@Ketaki Deshmukh](https://github.com/KetakiMDeshmukh)
- [@Devansh Joshi](https://github.com/devdev29)
