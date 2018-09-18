# TripPlanner

# Installation instructions
The following instructions will install the web application on your machine.
By using Laravel's homestead, it's made sure that the application runs the same on all machines: Linux, Mac, Windows, and all necessary packages.
If it runs on one machine, it'll run everywhere.

1. Install Laravel's Homestead (essentially a virtual machine to run the application in) using https://laravel.com/docs/5.7/homestead#first-steps
2. Go to the folder of where you installed Homestead, and configure the Homestead.yaml file according to the documentation: https://laravel.com/docs/5.7/homestead#configuring-homestead. Note that the path to the server files should be the path to your laravel installation, (probably in your RepositoryFolder/TripPlanner/backend/

Guideline for folder mapping: this maps your own folder, to a folder on the Virtual Machine.

Guideline for website mapping: Use this to map a website domain like tripplanner.test to the public folder of the laravel application on your virtual machine

3. Run _vagrant ssh_, browse to your laravel installation, and run _composer install_ to install all packages. Please run _composer update_ each time you're having issues, to update your libraries.

# Configuration
1. Only once run _php artisan key:generate_ to generate a private key, which is used for encryption.
2. Modify the .env file, or copy the .env.example file to .env. Here, you'll need to configure all settings for your application. Most values can be left as default, but that'll be evident by looking at the settings.

# Boot the website
Open a command prompt or bash terminal, cd to the homestead directory, and run "vagrant up".
Now, you can access the website by going to http://yourlocalwebsitename.test which you configured in Homestead.yaml. Note: You might need to add :8000 to it (port 8000), depending on your configuration.
