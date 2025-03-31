# Instructions for setup #
 
 ## Run Locally ##
 - You'll need to have both Python and Node JS installed
 - In project directory create a python virtual environment and install dependancies.
  ```
 $ python3 -m venv venv
 $ source /venv/bin/activate
 $ pip install -r requirements.txt
 ```
 - Install npm packages. Go to `frontend/` directory.
  ```
 $ npm install
 ```
 - Once packages for django and vue js are installed, you can then run the project. Run the django app by running migration and then running the server.
  ```
 $ python manage.py migrate
 $ python manage.py runserver
 ```
- Django app should now be running. You should now compile the Vue JS app.
- Go to `frontend/` directory and run:
 ```
 $ npm run serve
 ```
 - The Vue JS app should now be rendered on the django template. The app can also run MPA style with multiple Vue JS apps being rendered on different DOM elements.
