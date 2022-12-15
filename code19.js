gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDPlayerminigameObjects1= [];
gdjs.New_32scene2Code.GDPlayerminigameObjects2= [];
gdjs.New_32scene2Code.GDPlayerObjects1= [];
gdjs.New_32scene2Code.GDPlayerObjects2= [];
gdjs.New_32scene2Code.GDNewObject24Objects1= [];
gdjs.New_32scene2Code.GDNewObject24Objects2= [];
gdjs.New_32scene2Code.GDNewObject44444Objects1= [];
gdjs.New_32scene2Code.GDNewObject44444Objects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});
gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});
gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject24Objects1Objects = Hashtable.newFrom({"NewObject24": gdjs.New_32scene2Code.GDNewObject24Objects1});
gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene8", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject24"), gdjs.New_32scene2Code.GDNewObject24Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject24Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "My Song 12.mp3", true, 100, 1);
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDPlayerminigameObjects1.length = 0;
gdjs.New_32scene2Code.GDPlayerminigameObjects2.length = 0;
gdjs.New_32scene2Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene2Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject24Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject24Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject44444Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject44444Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);

return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
