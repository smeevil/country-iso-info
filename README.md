# Country Iso Info

### What does it do ?

This library contains various ISO information for a given country.

By default you'll have access to :

* English name
* Currency
* Region and Subregion
* Spoken locales

You can enable the following data using the build script : 

* alpha3 ISO
* Internationalized Resource Identifier
* Country phone number 
* Geo location



### Why?

There are a lot of different libraries that each provide one of these values or a small set. But I always ended up needing to combine multiple libraries to get the information I wanted. So finally I made an effort to combine the data sets of those into one. If you have any suggestions on data to add, please do let me know or create a pull request :)

### Usage

**Installation:**

~~~js
meteor add smeevil:country-iso-info
~~~

**Basic usage:**

Get the name of a country:
~~~js
CountryIsoInfo.NameFor: ('AE')
# "United Arab Emirates"
~~~
    
Get the currency in a country:

~~~js
CountryIsoInfo.CurrencyFor('NL');
# "EUR"
~~~

Get the spoken languages for a country:
~~~js
CountryIsoInfo.LocalesFor('CH');

# [{"locale":"fr-CH","name":"French"},{"locale":"de-CH","name":"German"},{"locale":"it-CH","name":"Italian"}]
~~~

Get the name for a given locale
~~~js
CountryIsoInfo.NameForLocale('nl-NL')
# "Dutch"
~~~

Get the region of a country: 
~~~js
CountryIsoInfo.RegionFor('DE');
# "Europe"
~~~

Get the subregion of a country: 
~~~js
CountryIsoInfo.SubregionFor('DE');
# "Western Europe"
~~~

List known regions
~~~js
CountryIsoInfo.Regions()
#["Europe", "Asia", "Americas", "Africa", "Oceania"]
~~~

List Subregions of Region    
~~~js
CountryIsoInfo.SubRegionsIn('Europe')
#["Southern Europe", "Western Europe", "Northern Europe", "Eastern Europe"]
~~~

Get all countries in a region
~~~js
CountryIsoInfo.CountriesInRegion('Europe')
["AD", "AL", "AT", "AX", "BA", "BE",...]
~~~

Get all countries in a subregion
~~~js
CountryIsoInfo.CountriesInSubregion('Western Europe')
#["AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"]
~~~

**Country Select Options**

Get HTML options for a select dropdown (with an optional selected element)
~~~js
CountryIsoInfo.HtmlOptionsForCountrySelect('AL')
#"<option value='AF'>Afghanistan</option><option value='AL' SELECTED>Albania</option>..."
~~~

You can change the behaviour of the returned options by setting the following configuration options:

* countriesForSelectWhiteList
* countriesForSelectBlackList

These will make sure it only returns either the whitelisted countries, and non of the black listed countries. If your whitelist is empty(default) it will return all countries except the blacklisted one (none by default). Do use the Alpha2 ISO for the countries here, i.e.: NL for Netherlands

Example configuration : 
~~~js
CountryIsoInfo.options.countriesForSelectWhiteList: ['BE', 'NL','LU']
~~~


**Language Select Options**

Get spoken languages as HTML options for a select dropdown (with an optional selected element)

~~~js
CountryIsoInfo.HtmlOptionsForLanguageSelect: ('CH', 'DE')
#"<option value='fr-CH'>French</option><option value='de-CH' SELECTED>German</option><option value='it-CH'>Italian</option>"
~~~

You can change the behaviour of the returned options by setting the following configuration options:

* supportedLocales
* languageSelectAlwaysIncludes

These will limit the language select to only your supported languages , and make sure that your default languages are always present. By default they are undefined and allow all locales spoken in a country and will have no defaults. An example configuration would be :

~~~js
CountryIsoInfo.options = {
	supportedLocales: ['fr-FR', 'de-DE'], 
	languageSelectAlwaysIncludes: ['en-US', 'de-DE']
}
~~~

This will ensure that your dorpdown will only show supported languages and will always have the default languages. When using the above settings and calling HtmlOptionsForCountrySelect('CH') will result in : 

~~~js
CountryIsoInfo.HtmlOptionsForLanguageSelect('CH', 'de-CH')
# "<option value='fr-FR'>French</option><option value='de-DE' SELECTED>German</option><option value='en-US'>English</option>"
~~~


**To customize the data:**

You can edit and run the ```build_country_iso_info_data.coffee``` script which will generate a new json data string, you can then replace the data in ```smeevil_country_iso_info.coffee```

### Todo :

* Make customization easier.

Licensed under the WTFPL License. See the `LICENSE` file for details.
