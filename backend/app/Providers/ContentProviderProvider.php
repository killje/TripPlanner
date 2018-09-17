<?php

namespace App\Providers;

use App\ContentProviders\ContentProvider;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

class ContentProviderProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @param ContentProvider $contentProvider
     * @return void
     */
    public function boot(ContentProvider $contentProvider)
    {
        // Check whether the API is functional and credentials are OK
        if(!$contentProvider->isAvailable()) {
            Log::error('Tried to initialize Content Provider, but is not available.');
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        switch(config('services.contentproviders.default'))
        {
            case 'foursquare':
                $this->app->bind('App\ContentProviders\ContentProvider', 'App\COntentProviders\FourSquare');
                break;
            default:
                Log::error("Unknown Content Provider specified in config");
        }
    }
}
