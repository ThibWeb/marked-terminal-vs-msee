var fs = require('fs');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
var msee = require('msee');

var testContent = fs.readFileSync('./test.md', 'utf8');

marked.setOptions({
    renderer: new TerminalRenderer(),
});

process.stdout.write(msee.parse(testContent));
process.stdout.write('\n-------\n\n');
process.stdout.write(marked(testContent));
