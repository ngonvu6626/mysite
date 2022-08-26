// Chặn copy text và ảnh
function nocontext(e) {
  var clickedTag = e == null ? event.srcElement.tagName : e.target.tagName;
  if (clickedTag == "IMG") return false;
}
document.oncontextmenu = nocontext;

// Nút đóng site.             id="help_close"
$(document).ready(function () {
  $("#help_close").click(function () {
    mp.trigger("Destroy_Character_Menu");
  });
});
