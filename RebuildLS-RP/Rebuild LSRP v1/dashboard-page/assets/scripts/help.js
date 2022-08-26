$(document).ready(function () {
  $("#help_close").click(function () {
    mp.trigger("Destroy_Character_Menu");
  });
});

LoadDataToHelp(0, 1, 3, 0);

function LoadDataToHelp(jobid, leaderid, grouptype, rankid) {
  if (jobid == 1) {
    //
  } else if (jobid == 2) {
    // Mecânico
  } else if (jobid == 3) {
    // Taxista
  } else if (jobid == 4) {
    // Lixeiro
  } else if (jobid == 5) {
    //
  } else if (jobid == 6) {
    //
  } else if (jobid == 7) {
    // Caminhoneiro
  }

  if (grouptype == 1) {
    $("#faction_table").empty();

    if (leaderid > 0) {
      $("#faction_table").append(
        '<div class="content__body bb"><span class="content__body--keyword">/invite</span><span class="content__body--decs">Được sử dụng bởi người lãnh đạo để mời ai đó vào phe.</span></div>'
      );
    }

    $("#faction_table").append(
      '<div class="content__body bb"><span class="content__body--keyword">F7</span><span class="content__body--decs">Được sử dụng bên trong xe cảnh sát hoặc DP để mở máytính.</span></div><div class="content__body bb"><span class="content__body--keyword">m</span><span class="content__body--decs">Được sử dụng gần một người chơi cho các hành động cảnh sát bổsung.</span></div><div class="content__body bb"><span class="content__body--keyword">l</span><span class="content__body--decs">Được sử dụng trên các cổng DP để khóa hoặc mở khóacửa..</span></div><div class="content__body bb"><span class="content__body--keyword">/f</span><span class="content__body--decs">Được sử dụng để nói chuyện trong trò chuyện phe phái(OOC).</span></div><div class="content__body bb"><span class="content__body--keyword">/r</span><span class="content__body--decs">Được sử dụng để nói trên đài phát thanh phe phái (IC).</span></div><div class="content__body bb"><span class="content__body--keyword">/d</span><span class="content__body--decs">Được sử dụng để nói chuyện với đài phát thanh của bộ phận(IC).</span></div><div class="content__body bb"><span class="content__body--keyword">/m</span><span class="content__body--decs">Được sử dụng để nói vào loa với đài phát thanh lên đến 50mét.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để xem các thành viên trực tuyến của phebạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để bắt một nghi phạm.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để khiến người chơi nghi ngờ.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để phạt người chơi.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để phạt một chiếc xe.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để còng tay người chơi.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để đánh bật người chơi.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để kéo trình phát.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để đặt người chơi vào trong xe.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để tìm kiếm trình phát.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để tìm kiếm người chơi.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để tịch thu một vật phẩm từ người chơi.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Được sử dụng để tịch thu vũ khí của người chơi.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Trong Sở cảnh sát có một biểu tượng để nhận ca làm việc</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Trong Sở cảnh sát có một biểu tượng để lấy một chú chó cảnhsát.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Trong Sở cảnh sát có một biểu tượng để thay đổi đồng phục củabạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Trong Sở cảnh sát bạn có thể sử dụng L để khóa hoặc mở khóacửa.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Trong Sở cảnh sát bạn có thể sử dụng F7 để truy cập vào máytính của cảnh sát.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Trong Bộ Cảnh sát có một biểu tượng để bạn lấy xe.</span></div>'
    );
  } else if (grouptype == 2) {
    $("#faction_table").empty();

    if (leaderid > 0) {
      $("#faction_table").append(
        '<div class="content__body bb"><span class="content__body--keyword">/invite</span><span class="content__body--decs">Được sử dụng bởi người lãnh đạo để mời ai đó vào phe.</span></div>'
      );
    }
    $("#faction_table").append(
      '<div class="content__body bb"><span class="content__body--keyword">/f</span><span  class="content__body--decs">Được sử dụng để nói chuyện trong trò chuyện phe phái(OOC).</span></div><div class="content__body bb"><span class="content__body--keyword">/r</span><span class="content__body--decs">Được sử dụng để nói trên đài phát thanh phe phái (IC).</span></div><div class="content__body bb"><span class="content__body--keyword">...</span><span class="content__body--decs">Được sử dụng để xem các thành viên trực tuyến của phebạn.</span></div><div class="content__body bb"><span class="content__body--keyword">/cuop</span><span class="content__body--decs">Được sử dụng để đánh cắp một người chơi đầu hàng.</span></div><div class="content__body bb"><span class="content__body--keyword">/robbank</span><span class="content__body--decs">Được sử dụng để cướp ngân hàng với băng nhóm của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">/turfinfo</span><span class="content__body--decs">Được sử dụng để xem thông tin lãnh thổ hiện tại.</span></div><div class="content__body bb"><span class="content__body--keyword">/nbu</span><span class="content__body--decs">Được sử dụng để gửi vị trí backup.</span></div><div class="content__body bb"><span class="content__body--keyword">...</span><span class="content__body--decs">Được sử dụng để mua kho cho băng đảng của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Nhớ cướp ngân hàng bạn cần 1x Khoan và 4x C4, chúng có thểđược mua tại Chợ Đen.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Bạn có thể truy cập máy tính xách tay từ kho bằng cách nhấn Yđể mua vũ khí cho băng nhóm của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Để bắt đầu một cuộc chiến lãnh thổ bạn cần ở lại trên cùngcủa lãnh thổ với 2 thành viên trong băng nhóm của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Khi bạn chinh phục lãnh thổ,bạn nhận được tiền từ nó cứ sau15 phút.</span></div>'
    );
  } else if (grouptype == 3) {
    $("#faction_table").empty();

    if (leaderid > 0) {
      $("#faction_table").append(
        '<div class="content__body bb"><span class="content__body--keyword">/invite</span><span class="content__body--decs">Được sử dụng bởi người lãnh đạo để mời ai đó vào phe.</span></div>'
      );
    }
    $("#faction_table").append(
      '<div class="content__body bb"><span class="content__body--keyword">/f</span><span class="content__body--decs">Được sử dụng để nói chuyện trong trò chuyện phe phái(OOC).</span></div><div class="content__body bb"><span class="content__body--keyword">/r</span><span class="content__body--decs">Được sử dụng để nói trên đài phát thanh phe phái (IC).</span></div><div class="content__body bb"><span class="content__body--keyword">...</span><span class="content__body--decs">Được sử dụng để xem các thành viên trực tuyến của phebạn.</span></div><div class="content__body bb"><span class="content__body--keyword">/cuop</span><span class="content__body--decs">Được sử dụng để đánh cắp một người chơi đầu hàng.</span></div><div class="content__body bb"><span class="content__body--keyword">/robbank</span><span class="content__body--decs">Được sử dụng để cướp ngân hàng với băng nhóm của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">/turfinfo</span><span class="content__body--decs">Được sử dụng để xem thông tin lãnh thổ hiện tại.</span></div><div class="content__body bb"><span class="content__body--keyword">/nbu</span><span class="content__body--decs">Được sử dụng để gửi vị trí backup.</span></div><div class="content__body bb"><span class="content__body--keyword">...</span><span class="content__body--decs">Được sử dụng để mua kho cho băng đảng của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Nhớ cướp ngân hàng bạn cần 1x Khoan và 4x C4, chúng có thểđược mua tại Chợ Đen.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Bạn có thể truy cập máy tính xách tay từ kho bằng cách nhấn Yđể mua vũ khí cho băng nhóm của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Để bắt đầu một cuộc chiến lãnh thổ bạn cần ở lại trên cùngcủa lãnh thổ với 2 thành viên trong băng nhóm của bạn.</span></div><div class="content__body bb"><span class="content__body--keyword">*</span><span class="content__body--decs">Khi bạn chinh phục lãnh thổ, bạn nhận được tiền từ nó cứ sau15 phút.</span></div>'
    );
  }
}
