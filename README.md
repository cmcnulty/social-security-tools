# Social Security copy/paste parser

https://ssa.tools/ includes a tool, which has been extracted for as a stand-alone module,
to capture social security wage information by copy & pasting from the social security website.

Usage, copy/paste data from the social security website into a file (or grab it from user-input in some other way):

        import { parsePaste } from 'ssa-parse';
        import { readFileSync } from 'fs';

        const pasteData = readFileSync('./earnings-record.txt', 'utf8');
        const earnings = parsePaste(pasteData);

