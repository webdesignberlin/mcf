/**
 * + Task config: Update json
 * https://github.com/andreaspizsa/grunt-update-json
 * =====================================================================
 *
 * @Description Merge parts from one or more JSON files together. I use `grunt-update-json` to keep my `Bower.json` in sync with `package.json`
 */
module.exports = {

    // package.json data into bower.json
    bower: {
        src: 'package.json',
        dest: 'bower.json',
        options: {
          indent: '\t'
        },
        fields: [
            'name',
            'description',
            'version',
            'homepage',
            'repository',
            'license',
            'private'
        ]
    }

};
/* = Task config: Update json */
