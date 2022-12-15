gdjs.New_32scene4Code = {};
gdjs.New_32scene4Code.GDPlayerminigameObjects1= [];
gdjs.New_32scene4Code.GDPlayerminigameObjects2= [];
gdjs.New_32scene4Code.GDPlayerObjects1= [];
gdjs.New_32scene4Code.GDPlayerObjects2= [];
gdjs.New_32scene4Code.GDNewObject24Objects1= [];
gdjs.New_32scene4Code.GDNewObject24Objects2= [];
gdjs.New_32scene4Code.GDNewObject44444Objects1= [];
gdjs.New_32scene4Code.GDNewObject44444Objects2= [];
gdjs.New_32scene4Code.GDNewObjectObjects1= [];
gdjs.New_32scene4Code.GDNewObjectObjects2= [];
gdjs.New_32scene4Code.GDplayObjects1= [];
gdjs.New_32scene4Code.GDplayObjects2= [];
gdjs.New_32scene4Code.GDNewObject2Objects1= [];
gdjs.New_32scene4Code.GDNewObject2Objects2= [];
gdjs.New_32scene4Code.GDNewObject3Objects1= [];
gdjs.New_32scene4Code.GDNewObject3Objects2= [];
gdjs.New_32scene4Code.GDNewSpriteObjects1= [];
gdjs.New_32scene4Code.GDNewSpriteObjects2= [];

gdjs.New_32scene4Code.conditionTrue_0 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.New_32scene4Code.GDplayObjects1});
gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene4Code.GDNewObject3Objects1});
gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject44444Objects1Objects = Hashtable.newFrom({"NewObject44444": gdjs.New_32scene4Code.GDNewObject44444Objects1});
gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.New_32scene4Code.GDNewSpriteObjects1});
gdjs.New_32scene4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.New_32scene4Code.GDplayObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene4Code.GDNewObject3Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "My Song 13.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject44444"), gdjs.New_32scene4Code.GDNewObject44444Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject44444Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene52", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.New_32scene4Code.GDNewSpriteObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
}

}


};

gdjs.New_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene4Code.GDPlayerminigameObjects1.length = 0;
gdjs.New_32scene4Code.GDPlayerminigameObjects2.length = 0;
gdjs.New_32scene4Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene4Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObject24Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject24Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject44444Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject44444Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene4Code.GDplayObjects1.length = 0;
gdjs.New_32scene4Code.GDplayObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.New_32scene4Code.GDNewSpriteObjects2.length = 0;

gdjs.New_32scene4Code.eventsList0(runtimeScene);

return;

}

gdjs['New_32scene4Code'] = gdjs.New_32scene4Code;
