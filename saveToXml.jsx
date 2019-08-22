// get file by name
var fileName = "heft_19_20_script_test.indd";

var myDoc = app.documents.itemByName (fileName);
var TextFrames = myDoc.pages.item(1).textFrames;
var numFrames= TextFrames.length;

var frames;
for (frames = 0; frames < numFrames; frames++) {
    frame = TextFrames.item(frames);
    frame.contents = "";
    frame.contents = "nr" + frames.toString();
}
