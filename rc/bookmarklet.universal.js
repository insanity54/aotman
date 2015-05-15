(function() {
    var link = "http://aotskins.com/mod/aog1.unity3d";
    if (!!navigator.userAgent.match(/Trident\/7\./)) {
        $('#unityPlayer').html('<object classid="clsid:444785F1-DE89-4295-863A-D46C3A781394" style="width: 960px; height: 600px; display: block;"><PARAM NAME="_cx" VALUE="25400"><PARAM NAME="_cy" VALUE="15875"><PARAM NAME="src" VALUE=link><param name="src" value=' + link + '><param name="firstFrameCallback" value="UnityObject2.instances[0].firstFrameCallback();"><param name="enableDebugging" value="0"><param name="disableContextMenu" value="true"></object>');
    }
    else {
        $('#unityPlayer').html('<embed src=' + link + ' type="application/vnd.unity" width="960" height="600" firstframecallback="UnityObject2.instances[0].firstFrameCallback();" enabledebugging="0" disablecontextmenu="true" style="display: block; width: 960px; height: 600px;">');
    }
})();