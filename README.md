# TripPlanner

# Backend
## Installation instructions
The following instructions will install the web application on your machine.
By using Laravel's homestead, it's made sure that the application runs the same on all machines: Linux, Mac, Windows, and all necessary packages.
If it runs on one machine, it'll run everywhere.

1. Install Laravel's Homestead (essentially a virtual machine to run the application in) using https://laravel.com/docs/5.7/homestead#first-steps
2. Go to the folder of where you installed Homestead, and configure the Homestead.yaml file according to the documentation: https://laravel.com/docs/5.7/homestead#configuring-homestead. Note that the path to the server files should be the path to your laravel installation, (probably in your RepositoryFolder/TripPlanner/backend/

Guideline for folder mapping: this maps your own folder, to a folder on the Virtual Machine.

Guideline for website mapping: Use this to map a website domain like tripplanner.test to the public folder of the Laravel application on your virtual machine

3. Run `vagrant ssh`, browse to your Laravel installation, and run `composer install` to install all packages. Please run `composer update` each time you're having issues, to update your libraries.

## Configuration
1. Only once run `php artisan key:generate` in the ssh environment to generate a private key, which is used for encryption.
2. Modify the .env file, or copy the .env.example file to .env. Here, you'll need to configure all settings for your application. Most values can be left as default, but that'll be evident by looking at the settings.

## Boot the website
Open a command prompt or bash terminal, cd to the homestead directory, and run `vagrant up`.
Now, you can access the website by going to http://yourlocalwebsitename.test which you configured in Homestead.yaml. Note: You might need to add :8000 to it (port 8000), depending on your configuration.

## Endpoints
GET /venues/lookupbycoords with arguments: longitude, latitude, radius (in meters)
GET /venues/details with arguments: id

# Frontend
## Installation instructions
The following instructions will guide you on how to set up the front end for development
We will use node.js with npm to install everything

1. Download node.js + npm from here: https://www.npmjs.com/get-npm, make sure npm is in the `PATH` variable
2. To install angular do `npm install -g @angular/cli` this will install angular cli for the whole computer.
3. Go to the frontend project folder. This is the folder with `package.json` in it and do `npm install`. This can take a few minutes.
4. Do `ng serve [-o]` (`ng` is the angular cli program that handles a lot of the angular project) the `-o` is optional and will open your browser to the webpage when ready

You can now edit files in `src` and it will automatically be updated on the website.

## Building the website
With the `ng serve` only a development version is made that is very resource intensive. To create a minimal project do `ng build` and angular will build a website in the `dist` folder.

## Adding to the website
If you want to add components/services/classes to the angular project use the angular cli for that. You can do `ng generate --help` to see what you can generate.