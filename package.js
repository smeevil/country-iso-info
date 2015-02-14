Package.describe({
  name: 'smeevil:country-iso-info',
  summary: 'Small lib that contains various information of a country',
  version: '1.0.1',
  git: 'https://github.com/smeevil/country-iso-info.git'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(
      [
        'underscore@1.0.0',
        'coffeescript@1.0.0',
      ]
  );

  api.add_files([
          'smeevil_country_iso_info.coffee'
      ], 'client'
  );
});