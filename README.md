# Social Security copy/paste parser

https://ssa.tools/ includes a tool which has been extracted here as a stand-alone module.
It takes a copy/paste capture social security wage information from the social security website and returns an array of wage data.

Usage: copy/paste data from the social security website into a file (or grab it from user-input in some other way):

        import { parsePaste } from 'ssa-parse';
        import { readFileSync } from 'fs';

        const pasteData = readFileSync('./earnings-record.txt', 'utf8');
        const earnings = parsePaste(pasteData);

