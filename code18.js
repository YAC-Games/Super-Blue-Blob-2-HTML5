gdjs.New_32scene5Code = {};
gdjs.New_32scene5Code.GDPlayerminigameObjects1= [];
gdjs.New_32scene5Code.GDPlayerminigameObjects2= [];
gdjs.New_32scene5Code.GDPlayerObjects1= [];
gdjs.New_32scene5Code.GDPlayerObjects2= [];
gdjs.New_32scene5Code.GDNewObject24Objects1= [];
gdjs.New_32scene5Code.GDNewObject24Objects2= [];
gdjs.New_32scene5Code.GDNewObject44444Objects1= [];
gdjs.New_32scene5Code.GDNewObject44444Objects2= [];
gdjs.New_32scene5Code.GDNewObjectObjects1= [];
gdjs.New_32scene5Code.GDNewObjectObjects2= [];
gdjs.New_32scene5Code.GDNewObject2Objects1= [];
gdjs.New_32scene5Code.GDNewObject2Objects2= [];

gdjs.New_32scene5Code.conditionTrue_0 = {val:false};
gdjs.New_32scene5Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene5Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene5Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene5Code.GDNewObject2Objects1});
gdjs.New_32scene5Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene5Code.GDNewObject2Objects1);

gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
gdjs.New_32scene5Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject2Objects1Objects, runtimeScene, false, false);
}if ( gdjs.New_32scene5Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", true);
}}

}


{


gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "My Song 11.mp3", true, 100, 1);
}}

}


};

gdjs.New_32scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene5Code.GDPlayerminigameObjects1.length = 0;
gdjs.New_32scene5Code.GDPlayerminigameObjects2.length = 0;
gdjs.New_32scene5Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene5Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene5Code.GDNewObject24Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject24Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject44444Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject44444Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene5Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene5Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject2Objects2.length = 0;

gdjs.New_32scene5Code.eventsList0(runtimeScene);

return;

}

gdjs['New_32scene5Code'] = gdjs.New_32scene5Code;
