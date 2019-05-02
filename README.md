# Middle Egyptian Dictionary
A dictionary database for Middle Egyptian hieroglyphics, this combines the Paul Dickson dictionary (2006), the Mark Vygus dictionary (2012) and a third lexicon originally from OpenGlyp (that I found through the Morris Franken dataset for "Automatic Egyptian Hieroglyph Recognition by Retrieving Images as Texts") into a searchable database for Ancient Egyptian hieroglyphics from the Middle Kingdom.

This is primarily achieved using C#, ASP.NET and MongoDb.

I am currently in the process of extending this project as a result of the recent Unicode 12.0 updates allowing for the formatting of Ancient Egyptian Hieroglyphics. (See https://www.unicode.org/versions/Unicode12.0.0/ch11.pdf, pages 9 - 14). However due to the lack of a dictionary mapping gardiner codes to Manuel de Codage (http://www.catchpenny.org/codage/), this requires a trigram analysis of existing texts (sourced from jseshdoc.qenherkhopeshef.org/) in order to determine the layout of common words. After this I will map these formatted trigrams to words, and then convert the Manuel de Codage to the new Unicode 12.0 standard. An example of these formats is provided below: 

English: Sky, heaven

Transliteration: pt

Gardiner Sign Codes: Q3 X1 N1

Manuel de Codage: Q3\*X1:N1 , alternatively p\*t:pt

New Unicode: Q3 (\U13431) X1 (\U13430) N1

I plan to add the dictionary parser project to this solution as well.
