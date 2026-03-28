var shell = new ActiveXObject("WScript.Shell");
var url = "https://github.com/lp-cmyk/Remember-OS-3.1";
var cmd = "msedge --app=\"" + url + "\"";
shell.Run(cmd, 0, false);