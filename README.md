# TripPlanner

# Installation instructions
The following instructions will install the web application on your machine.
By using Laravel's homestead, it's made sure that the application runs the same on all machines: Linux, Mac, Windows, and all necessary packages.
If it runs on one machine, it'll run everywhere.

1. Install Laravel's Homestead (essentially a virtual machine to run the application in) using https://laravel.com/docs/5.7/homestead#first-steps
2. Go to the folder of where you installed Homestead, and configure the Homestead.yaml file according to the documentation: https://laravel.com/docs/5.7/homestead#configuring-homestead. Note that the path to the server files should be the path to your laravel installation, (probably in your RepositoryFolder/TripPlanner/backend/
3. Run "vagrant ssh", browse to your laravel installation, and run "composer install" to install all packages

# Boot the website
Open a command prompt or bash terminal, cd to the homestead directory, and run "vagrant up".
Now, you can access the website by going to http://yourlocalwebsitename.test which you configured in Homestead.yaml. Note: You might need to add :8000 to it (port 8000), depending on your configuration.
