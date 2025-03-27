# Project Info

## Contributing

**Backend**

The Django project has been set up following HackSoftware's Django style guide available [here.](https://github.com/HackSoftware/Django-Styleguide)

There are 3 different environments set up for Django to run: local, production and test. Local is for running locally on your machine during development, production is for running the production version and test is for running tests. The differences between the 3 can be found in their config files under `./backend/CHIL/config/django`. The defaults are found in the `base.py` file in the same directory. To switch between them follow step 2 under backend on [Run The Project.](Project-Info/Run-the-project)

Any 3rd party configuration files should be put under `./backend/CHIL/config/settings`

**Frontend**

The react project has been set up using Vite and is following the BulletProofReact Style guide available [here.](https://github.com/alan2207/bulletproof-react)

**Git**

When you commit or merge to this project, please prefix by the following:

For commits:
feat|test|fix|chore|wiki|design

For branches:
feat|test|fix|prod|chore|wiki|design

**PlantUML**

To create new PlantUML diagrams, download and follow the instructions here: [https://plantuml.com/download](https://plantuml.com/download)

There is also a VSCode extension available here: [https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)

# Project Onboarding

## Setup

**Downloads**

1. Install [Python v3.12.3.](https://www.python.org/downloads/release/python-3123/)
   1. To ensure that Python has been installed correctly, run `python -V` and ensure that the command prompt outputs `Python 3.12.3`
2. Install [Poetry. ](https://python-poetry.org/)using `pip install Poetry`
   1. To ensure that Poetry has been installed correctly, run `poetry -V` and ensure that the command prompt outputs `Poetry (version 1.8.4)`
3. Install [Node.js v20.12.2](https://nodejs.org/dist/v20.12.2/)
   1. To ensure that Node has been installed correctly, run `node -v` and ensure that the command prompt outputs `v20.12.2`
4. Install [MariaDB v10.11.7](https://mariadb.org/download/?t=mariadb&o=true&p=mariadb&r=10.11.7&os=windows&cpu=x86_64&pkg=msi&mirror=archive)
   1. To ensure that MariaDB has been installed correctly, run `mariadb -V` and ensure that the output includes `Ver 15.1 Distrib 10.11.7-MariaDB`

      NB. You may need to manually add MariaDB to your computer's environment variables.

**Repo**

1. Clone the Repository using either:\
   i. SSH: `git clone git@git.cardiff.ac.uk:c22050719/ltp-chil-data-processing.git`\
   ii. HTTPS: `git clone https://git.cardiff.ac.uk/c22050719/ltp-chil-data-processing.git`

   \-
2. Open a CLI in `./backend/` and run `poetry install` to install all of the python dependencies.

**.env**

1. Create a new `.env` file in `./backend/CHIL` and fill it out according to `.env.dist` in the same directory, changing `DB_USER` and `DB_PASSWORD` to your MariaDB user name and password
2. Create a new `.env.local` file in `./frontend/CHIL` and paste in `VITE_REACT_APP_BASE_URL=http://127.0.0.1:8000`

Now that everything is setup, move onto [Run the project](/c22050719/ltp-chil-data-processing/-/wikis/Project-Info/Run-the-project).

## Run The Project

**Backend**

1. Open a command prompt in `./backend`
   * Run `poetry run python CHIL/manage.py migrate`
   * Run `poetry run python CHIL/manage.py runserver`
   * Open [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/) in a web browser
2. To change the environment that Django runs, run the following command in `./backend`
   * Run `$Env:DJANGO_SETTINGS_MODULE="config.django.{ENVIRONMENT_NAME}"` replacing `{ENVIRONMENT_NAME}` with one of the following:
     * `local` (Default)
     * `production`
     * `test`

**Frontend**

1. Open a command prompt in `./frontend/CHIL` 
   * Run `npm install`
   * Run `npm run dev`
   * Open [`http://localhost:5173/`](http://localhost:5173/) in a web browser

## Tech Stack

| Type | Name | Version |
|------|------|---------|
| Language | [Python](https://www.python.org) | v3.12.3 |  
| Language | [Node.js](https://nodejs.org/en/) | v20.12.2 |  
| Database | [MariaDB](https://mariadb.org/download/?t=mariadb&o=true&p=mariadb&r=10.11.7&os=windows&cpu=x86_64&pkg=msi&mirror=archive) | v10.11.7 |  
| VCS | [Git](https://git-scm.com/) | 2.x |  
| CI/CD | [GitLab CI](https://docs.gitlab.com/ee/ci/) |  |  
| Package Manager | [Poetry](https://python-poetry.org/) | v1.8.4 |  

## Python Dependencies

| Dev Dependency? | Type | Name | Version |
|-----------------|------|------|---------|
| False | Server | [Django](https://www.djangoproject.com/) | 5.1.3 |  
| True | Automated Tests | [PyTest](https://docs.pytest.org/en/stable/) | 8.3.3 |  
| True | Test Coverage | [Coverage](https://coverage.readthedocs.io/en/7.6.4/) | 7.6.7 |  
| True | Linter | [PyLint](https://pypi.org/project/pylint/) | 3.3.1 | 

## JS Dependencies

| Dev Dependency? | Type | Name | Version | 
|-----------------|------|------|---------|
| False | Frontend | [React](https://react.dev/) | v18.3.1 | 
| True | Tests | [Jest](https://jestjs.io/) | v29.7 |


## Test The Project

**Backend**

_Lint:_

1. Open a command prompt in `./backend/CHIL`
   * Run `poetry run pylint ./chil`

_Automated Tests:_

1. Open a command prompt in `./backend/CHIL`
   * Run `poetry run python manage.py test chil/tests --settings=config.django.test`

**Frontend**

_Lint:_

1. Open a command prompt in `./frontend/CHIL`
   * Run `npm run lint`

_Automated Tests:_

1. Open a command prompt in `./frontend/CHIL`
   * Run `npm run test`

_Storybook:_

1. Open a command prompt in `./frontend/CHIL`
   * Run `npm run storybook`
   * [`http://localhost:6006`](http://localhost:6006) should open automatically
