# Middle Egyptian Dictionary
A dictionary database for Middle Egyptian hieroglyphics, this combines the Paul Dickson dictionary (2006), the Mark Vygus dictionary (2012) and a third lexicon originally from OpenGlyp (that I found through the Morris Franken dataset for "Automatic Egyptian Hieroglyph Recognition by Retrieving Images as Texts") into a searchable database for Ancient Egyptian hieroglyphics from the Middle Kingdom.

This is primarily achieved using C#, ASP.NET and MongoDb.

I extended this project to allow for Unicode 12.0 updates allowing for the formatting of Ancient Egyptian Hieroglyphics. (See https://www.unicode.org/versions/Unicode12.0.0/ch11.pdf, pages 9 - 14). However due to the lack of a dictionary mapping gardiner codes to Manuel de Codage (http://www.catchpenny.org/codage/), this requires a trigram analysis of existing texts (sourced from jseshdoc.qenherkhopeshef.org/) in order to determine the layout of common words. After this I will map these formatted trigrams to words, and then convert the Manuel de Codage to the new Unicode 12.0 standard. An example of these formats is provided below: 

English: Sky, heaven

Transliteration: pt

Gardiner Sign Codes: Q3 X1 N1

Manuel de Codage: Q3\*X1:N1 , alternatively p\*t:pt

New Unicode: Q3 (\U13431) X1 (\U13430) N1

--UPDATE-- 

After implementing the Trigram model, I discovered nearly no fonts actually encode Unicode 12.0. As a result, I have moved to an RES model that can be described here: https://mjn.host.cs.st-andrews.ac.uk/egyptian/res/js/. This takes slightly longer to render due to the Javascript formatting library. I have maintained both the ManuelDeCodage and RES fields on the DictionaryEntry model in order to work while allowing me to move back to Unicode 12.0 once the spec has been implemented.

## My experience with Middle Egyptian
I am a student at the University of Toronto studying computer science. After two years of taking Middle Egyptian as an elective, I thought I should try to expand accessibility to the language by providing an easy way to view a dictionary database online. I had been quite frustrated as the only online resources were searchable pdfs. Often when searching for transliterations, I would wind up with 200 results, many of which were translation matches. In parsing and combining three dictionaries, I aimed to allow more specific searches while remove redundancy between dictionaries. 
If given the time, I would love to expand the project in order to encompass larger natural language processing problems, as it is an area of great interest. The main barriers to entry as of now are word and sentence resolution, as Middle Egyptian has neither spaces nor punctuation. Once the tri-glyph analysis is complete and I am more comfortable with the language, I will begin working on a transliteration to English translator based upon IBM Model 1. This may be limited by the small amounts of data for which I have aligned translations.
