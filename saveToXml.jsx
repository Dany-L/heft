// get file by name
var fileName = "heft_19_20_script_test.indd";
var pageNumberInD = 3;
var pageNumber = pageNumberInD -1;

// get document and textframes
var myDoc = app.documents.itemByName (fileName);
var TextFrames = myDoc.pages.item(pageNumber).textFrames;
var numFrames= TextFrames.length;

// add root node of Tour
var xmlTagName = "Ausfahrt";
var xmlTagTour = myDoc.xmlTags.itemByName(xmlTagName);
if (!(xmlTagTour.isValid) ){
    var xmlTagTour = myDoc.xmlTags.add(xmlTagName);
}
var xmlElementTour = myDoc.xmlElements.item(0).xmlElements.add(xmlTagTour);

// iterate over all text frames
var idxFrame;
for (idxFrame = 0; idxFrame < numFrames; idxFrame++) {
    frame = TextFrames.item(idxFrame);
    
    // get tag, if it does not exist create it
    var xmlTagTmp = myDoc.xmlTags.itemByName(frame.name)
    if (!(xmlTagTmp.isValid) ){
        var xmlTagTmp = myDoc.xmlTags.add(frame.name);
    }
    
    // write infos to XML
    var xmlElementTmp = xmlElementTour.xmlElements.add(xmlTagTmp);
    xmlElementTmp.contents = frame.contents;
}
