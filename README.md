# script to add information from XML to InDesign page
skrip root folder is:
'''win10: \Users\<username>\AppData\Roaming\Adobe\InDesign\Version 8.0\<locale>\Scripts\Scripts Panel'''

after developing a script in that folder it can be executed over script panel (Window->Utilities->Scripts).
To make skript run faster turn off Enable Redraw from the Scripts panel menu.

language for developing scripts:
win: JavaScript, VBScript
macOS: JavaScript, AppleScript

in ExtendedScript Toolkit open object explorer to inspect the data structure of InDesign (Help -> Objectmodel F1)

Error messages over
'''alert("<message>")'''

## saveToXml
* set fileName (line: 2)
* set pageNumber (line: 3)
the textframes of the selected page will be written to an XML file, tag name refers to the layer name.
