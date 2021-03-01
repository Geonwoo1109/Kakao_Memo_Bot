const Fs = FileStream;
var bar = ("=").repeat (20);
var 전체보기 = ("\u200b".repeat(500) + "\n\n");

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.startsWith(".메모 ")) {
  
    var Y = new Date().getFullYear();
    var M = (new Date().getMonth () +1);
    var D = new Date ().getDate ();
    var h = new Date().getHours ();
    var min = new Date().getMinutes ();
    var sec = new Date().getSeconds();
    var time = (Y + "." +M + "." + D + " " + h+":"+min+":"+sec+"");
    
    replier.reply ("[메모에 내용을 추가합니다.]\n요청자: " + sender + "\n시간: " + time + "\n내용: " + msg.substr (4)
                    + "\n\n저장된 메모 보기 -> [.메모보기]"
                    + "\n메모 리셋하기 -> [.메모리셋]");
    Fs.append ("/sdcard/MemoList/" + sender, "\n시간: " + time + "\n내용: " + msg.substr(4) + "\n\n");
  }
  
  if (msg == ".메모보기") {
    replier.reply (sender + "님의 메모" + 전체보기 + "\n\n" + Fs.read("/sdcard/MemoList/" + sender));
  }

  if (msg == ".메모리셋") {
      Fs.write ("/sdcard/MemoList/" + sender, "");
      replier.reply (sender+"님의 저장된 메모가 리셋됨.");
  }
}
