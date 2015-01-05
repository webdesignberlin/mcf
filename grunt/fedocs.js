module.exports = {
  docs: {
    files: {
      'api/': 'app/assets-dev/styles/**/*.{css,scss,sass,less,styl}'
    },
    options: {
      template: 'template/',
      parsers: {
        link: function(i, line){
          line = '<a href="' + line + '" target="_blank">' + line + '</a>';

          return line;
        },
        dependencies: function(i, line){
          return line.split(',');
        },
        decorator: function(i, line){
          var string = line.split(' - ');

          return { name: string[0], description: string[1] ? string[1] : '-' };
        },
        requires: function(i, line){
          var string = line.split(' ');

          string[0] = string[0].replace(/(\{|\})/g, '');

          return { type: string[0], name: string[1] };
        },
        param: function(i, line){
          var string = line.split(' - '),
              description = string[1] ? string[1] : '-';

          string = string[0].split(' ');
          string[0] = string[0].replace(/(\{|\})/g, '');

          return { type: string[0], name: string[1], description: description };
        },
        query: function(i, line) {
          var string = line.split(' - ');

          return { name: string[0], description: string[1] ? string[1] : '-' };
        },
        section: function(i, line) {
          var string = line.split(' - ');

          return { name: string[0], description: string[1] ? string[1] : '-' };
        },
        type: function(i, line) {
          return line.replace(/(\{|\})/g, '');
        }
      }
    }
  }

};